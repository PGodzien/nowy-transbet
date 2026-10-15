'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

/*
 * Curtain transition for internal navigation.
 * The clicked element grows from its own position to cover the screen, the action
 * (scroll to a section, or a route change) runs underneath, then the curtain
 * lifts away. It lives in the root layout so it survives route changes.
 *
 * Every same-site link gets it automatically. A link can opt out with
 * data-curtain="off", run its own curtain with data-curtain="self" (hero tiles),
 * or set the text shown on the curtain with data-curtain-label.
 */

type CurtainOptions = {
  rect: DOMRect;
  color: string;
  textColor: string;
  number: string;
  label: string;
  action: () => void | Promise<void>;
};

/** Text for the curtain: an explicit label, the link's heading, or its own short text. */
function curtainLabel(link: HTMLAnchorElement) {
  const explicit = link.dataset.curtainLabel;
  if (explicit) return explicit;
  const heading = link.querySelector('h1, h2, h3')?.textContent;
  const text = (heading ?? link.textContent ?? '')
    .replace(/\/\s*\d+/g, '')
    .replace(/[↗→]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.!]$/, '');
  // A heading is a clean title even when long; loose link text is used only when short.
  if (heading && text.length <= 120) return text;
  return text && text.length <= 40 ? text : 'Transbet';
}

function curtainNumber(link: HTMLAnchorElement) {
  return link.textContent?.match(/\/\s*(\d{2})/)?.[1] ?? '';
}

function scrollToHash(hash: string) {
  if (!hash) return;
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  target?.scrollIntoView({ behavior: 'instant' });
}

let play: ((options: CurtainOptions) => void) | null = null;

/** Starts the curtain. Returns false when it cannot run, so the caller falls back to plain navigation. */
export function playCurtain(options: CurtainOptions) {
  if (!play || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  play(options);
  return true;
}

/** Resolves once the URL shows the target path and the new page has had a frame to paint. */
export function waitForPath(path: string, timeout = 4000) {
  return new Promise<void>((resolve) => {
    const started = performance.now();
    const check = () => {
      if (window.location.pathname === path || performance.now() - started > timeout) {
        // Two frames let the new page paint; the timer covers browsers that are not producing frames.
        requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(resolve, 120)));
        setTimeout(resolve, 600);
        return;
      }
      setTimeout(check, 40);
    };
    check();
  });
}

const easeInOut = 'cubic-bezier(0.76, 0, 0.24, 1)';

/* If the browser stops producing frames (background tab, throttled renderer), an animation
   never finishes. Each step therefore waits at most a little longer than its own duration. */
const settle = (animation: Animation, limit: number) =>
  Promise.race([animation.finished.catch(() => undefined), new Promise((resolve) => setTimeout(resolve, limit))]);
const easeOut = 'cubic-bezier(0.22, 1, 0.36, 1)';

export default function PageCurtain() {
  const [current, setCurrent] = useState<CurtainOptions | null>(null);
  const panel = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  const router = useRouter();

  /* Same-site link clicks anywhere on the page play the curtain. Capture phase,
     so it runs before next/link and the menu's own click handlers. */
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest('a');
      if (!link || !link.href) return;
      if (link.dataset.curtain === 'off' || link.dataset.curtain === 'self') return;
      if (link.target && link.target !== '_self') return;
      if (link.hasAttribute('download')) return;
      // A closed submenu on touch: the first tap only opens it.
      if (link.getAttribute('aria-expanded') === 'false') return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      // Files (PDF declarations, images, videos) open normally, never as a page transition.
      if (/\.[a-z0-9]{2,5}$/i.test(url.pathname)) return;
      const samePage = url.pathname === window.location.pathname;
      if (samePage && !url.hash) return;

      const played = playCurtain({
        rect: link.getBoundingClientRect(),
        color: '#111111',
        textColor: '#ffffff',
        number: curtainNumber(link),
        label: curtainLabel(link),
        action: samePage
          ? () => {
              scrollToHash(url.hash);
              history.replaceState(null, '', url.hash);
            }
          : async () => {
              router.push(url.pathname + url.search + url.hash);
              await waitForPath(url.pathname);
              scrollToHash(url.hash);
            },
      });
      if (played) event.preventDefault();
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [router]);

  useEffect(() => {
    play = (options) => {
      if (busy.current) return;
      busy.current = true;
      setCurrent(options);
    };
    return () => {
      play = null;
    };
  }, []);

  useEffect(() => {
    if (!current || !panel.current || !text.current) return;
    const el = panel.current;
    const label = text.current;
    const { rect } = current;
    const from = `inset(${rect.top}px ${window.innerWidth - rect.right}px ${window.innerHeight - rect.bottom}px ${rect.left}px)`;
    let cancelled = false;

    (async () => {
      // 1. The tile grows to fill the screen.
      label.animate(
        [
          { opacity: 0, transform: 'translate3d(0, 40px, 0)' },
          { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        ],
        { duration: 520, delay: 260, easing: easeOut, fill: 'both' },
      );
      await settle(
        el.animate([{ clipPath: from }, { clipPath: 'inset(0px 0px 0px 0px)' }], {
          duration: 720,
          easing: easeInOut,
          fill: 'forwards',
        }),
        1500,
      );
      if (cancelled) return;

      // 2. Under cover: scroll or navigate.
      await Promise.all([current.action(), new Promise((r) => setTimeout(r, 260))]);
      if (cancelled) return;

      // 3. The curtain lifts; the label travels a little slower for depth.
      label.animate([{ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(0, -30vh, 0)', opacity: 0 }], {
        duration: 760,
        easing: easeInOut,
        fill: 'forwards',
      });
      await settle(
        el.animate([{ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(0, -100%, 0)' }], {
          duration: 760,
          easing: easeInOut,
          fill: 'forwards',
        }),
        1500,
      );
      if (cancelled) return;

      busy.current = false;
      setCurrent(null);
    })();

    return () => {
      cancelled = true;
    };
  }, [current]);

  if (!current) return null;

  return (
    <div
      ref={panel}
      aria-hidden="true"
      className="fixed inset-0 z-[100] cursor-wait"
      style={{ backgroundColor: current.color, color: current.textColor, clipPath: 'inset(50%)' }}
    >
      <div ref={text} className="absolute inset-x-[calc(4vw+1.5rem)] bottom-[12vh] opacity-0 md:inset-x-[calc(4vw+1.75rem)]">
        {current.number ? <span className="font-mono text-[11px] tracking-[0.2em] opacity-60">/ {current.number}</span> : null}
        <span
          className={[
            'mt-4 block font-medium leading-[0.92] tracking-[-0.05em]',
            // Short labels are set huge; long post titles step down so they still fit on the screen.
            current.label.length <= 24
              ? 'max-w-[12ch] text-[clamp(3rem,9vw,10rem)]'
              : current.label.length <= 60
                ? 'max-w-[18ch] text-[clamp(2.4rem,6vw,6.5rem)]'
                : 'max-w-[24ch] text-[clamp(2rem,4.4vw,4.75rem)]',
          ].join(' ')}
        >
          {current.label}
          {/[.!?]$/.test(current.label) ? null : (
            <span className={current.textColor === '#ffffff' ? 'text-brand' : 'text-white'}>.</span>
          )}
        </span>
      </div>
    </div>
  );
}
