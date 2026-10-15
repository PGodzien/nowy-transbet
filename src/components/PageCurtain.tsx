'use client';

import { useEffect, useRef, useState } from 'react';

/*
 * Curtain transition for the hero tiles.
 * The clicked tile grows from its own position to cover the screen, the action
 * (scroll to a section, or a route change) runs underneath, then the curtain
 * lifts away. It lives in the root layout so it survives route changes.
 */

type CurtainOptions = {
  rect: DOMRect;
  color: string;
  textColor: string;
  number: string;
  label: string;
  action: () => void | Promise<void>;
};

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
        requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(resolve, 120)));
        return;
      }
      setTimeout(check, 40);
    };
    check();
  });
}

const easeInOut = 'cubic-bezier(0.76, 0, 0.24, 1)';
const easeOut = 'cubic-bezier(0.22, 1, 0.36, 1)';

export default function PageCurtain() {
  const [current, setCurrent] = useState<CurtainOptions | null>(null);
  const panel = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);
  const busy = useRef(false);

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
      await el.animate([{ clipPath: from }, { clipPath: 'inset(0px 0px 0px 0px)' }], {
        duration: 720,
        easing: easeInOut,
        fill: 'forwards',
      }).finished;
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
      await el.animate([{ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(0, -100%, 0)' }], {
        duration: 760,
        easing: easeInOut,
        fill: 'forwards',
      }).finished;
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
        <span className="font-mono text-[11px] tracking-[0.2em] opacity-60">/ {current.number}</span>
        <span className="mt-4 block max-w-[12ch] text-[clamp(3rem,9vw,10rem)] font-medium leading-[0.9] tracking-[-0.055em]">
          {current.label}
          <span className={current.textColor === '#ffffff' ? 'text-brand' : 'text-white'}>.</span>
        </span>
      </div>
    </div>
  );
}
