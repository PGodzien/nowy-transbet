'use client';

import { type MouseEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { playCurtain, waitForPath } from '@/components/PageCurtain';

const panels = [
  {
    id: 'nr-1',
    number: '01',
    label: 'Betoniarnie',
    description: 'Produkcja i transport betonu',
    color: '#ff4d00',
    href: '#betoniarnie',
    external: false,
    domain: null,
    media: { kind: 'video', src: '/hero-betoniarnie.mp4', poster: '/hero-betoniarnie-poster.jpg' },
  },
  {
    id: 'nr-2',
    number: '02',
    label: 'Prefabrykacja betonowa',
    description: 'Prefabrykaty dla infrastruktury i przemysłu',
    color: '#6b6b6b',
    href: '/prefabrykacja-betonowa',
    external: false,
    domain: null,
    media: { kind: 'image', src: '/prefabrykaty.jpg', poster: null },
  },
  {
    id: 'nr-3',
    number: '03',
    label: 'Zbrojenia',
    description: 'Prefabrykaty zbrojeniowe',
    color: '#111111',
    href: 'https://zbrojeniebudowlane.pl/',
    external: true,
    domain: 'zbrojeniebudowlane.pl',
    media: { kind: 'video', src: '/hero-zbrojenia.mp4', poster: '/hero-zbrojenia-poster.jpg' },
  },
  {
    id: 'nr-4',
    number: '04',
    label: 'Budowa tuneli',
    description: 'Tunnel Construction Support',
    color: '#f2f2f2',
    href: 'https://transbettcs.com/',
    external: true,
    domain: 'transbettcs.com',
    media: { kind: 'image', src: '/tunele.jpg', poster: null },
  },
] as const;

// 23 s loop cut from transbet_background_video.mp4 (letterbox cropped, no audio, ~2.9 MB).
const heroVideo = '/hero-loop.mp4';
const heroPoster = '/hero-loop-poster.jpg';
type PanelId = (typeof panels)[number]['id'];

const grainImage =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='4' seed='7' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.72'/%3E%3C/svg%3E\")";

export default function Hero() {
  const [activeId, setActiveId] = useState<PanelId | null>(null);
  // ready: the background video can play, so the dark grainy veil lifts.
  // settled: the load-in is over, hover transitions go back to their normal speed.
  const [ready, setReady] = useState(false);
  const [settled, setSettled] = useState(false);
  const router = useRouter();
  const backgroundVideo = useRef<HTMLVideoElement>(null);
  const columnVideos = useRef<Partial<Record<PanelId, HTMLVideoElement | null>>>({});

  useEffect(() => {
    // Lift the veil even if the video is slow or blocked.
    const fallback = window.setTimeout(() => setReady(true), 2500);
    if ((backgroundVideo.current?.readyState ?? 0) >= 3) setReady(true);
    return () => window.clearTimeout(fallback);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const timer = window.setTimeout(() => setSettled(true), 1900);
    return () => window.clearTimeout(timer);
  }, [ready]);

  /* Only the hovered column plays its clip; the background waits underneath. */
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    for (const panel of panels) {
      const video = columnVideos.current[panel.id];
      if (!video) continue;
      if (panel.id === activeId && !reduced) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
    const background = backgroundVideo.current;
    if (!background) return;
    if (activeId) background.pause();
    else if (!reduced) background.play().catch(() => {});
  }, [activeId]);

  /* Internal tiles play the curtain; external ones open their site as before. */
  function handleTileClick(event: MouseEvent<HTMLAnchorElement>, panel: (typeof panels)[number]) {
    if (panel.external) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

    const isAnchor = panel.href.startsWith('#');
    const played = playCurtain({
      rect: event.currentTarget.getBoundingClientRect(),
      color: panel.color,
      textColor: panel.id === 'nr-1' ? '#000000' : '#ffffff',
      number: panel.number,
      label: panel.label,
      action: isAnchor
        ? () => {
            document.querySelector(panel.href)?.scrollIntoView({ behavior: 'instant' });
            history.replaceState(null, '', panel.href);
          }
        : () => {
            router.push(panel.href);
            return waitForPath(panel.href);
          },
    });
    if (played) event.preventDefault();
  }

  return (
    <section className="viewport-section relative overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={backgroundVideo}
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          onCanPlay={() => setReady(true)}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: !ready ? 'scale(1.08)' : activeId ? 'scale(1.025)' : 'scale(1.015)',
            filter: ready
              ? 'saturate(0.82) contrast(1.08) brightness(0.8)'
              : 'saturate(0.5) contrast(1.15) brightness(0.55)',
            transition: settled
              ? 'transform 700ms cubic-bezier(0.22,1,0.36,1), filter 700ms ease'
              : 'transform 2200ms cubic-bezier(0.22,1,0.36,1), filter 1800ms ease',
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 62% 66% at 0% 44%, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.24) 44%, transparent 72%), radial-gradient(ellipse 68% 58% at 0% 100%, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 42%, transparent 72%), linear-gradient(to top, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.2) 30%, transparent 48%), linear-gradient(to bottom, rgba(0,0,0,0.48) 0%, transparent 28%)',
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_3px,rgba(255,255,255,0.022)_3px,rgba(255,255,255,0.022)_4px)] mix-blend-overlay" />
        <div
          className="pointer-events-none absolute -inset-12 mix-blend-soft-light transition-opacity duration-[1800ms]"
          style={{ backgroundImage: grainImage, backgroundSize: '180px 180px', opacity: ready ? 0.28 : 0.5 }}
        />
        {/* Darkens the background while a column shows its own clip. */}
        <div
          className="pointer-events-none absolute inset-0 bg-black transition-opacity duration-500"
          style={{ opacity: activeId ? 0.45 : 0 }}
        />
        {/* Load-in veil: dark, with visible grain, lifting once the video is ready. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black transition-opacity duration-[1800ms] ease-out"
          style={{ opacity: ready ? 0 : 0.88 }}
        >
          <div className="absolute -inset-12 opacity-40 mix-blend-screen" style={{ backgroundImage: grainImage, backgroundSize: '180px 180px' }} />
        </div>
      </div>

      <div className="absolute inset-y-0 inset-x-[4vw] z-10">
        <div className="hero-enter-title pointer-events-none absolute top-[36%] left-4 z-20 -translate-y-1/2 sm:top-[39%] sm:left-6 md:top-[41%] md:left-7">
          <p className="max-w-[14ch] text-[clamp(2.5rem,4.8vw,5.7rem)] font-medium leading-[0.98] tracking-[-0.048em] text-white [text-shadow:0_3px_32px_rgba(0,0,0,0.38)]">
            Cztery specjalizacje.<br />Jeden standard<span className="text-brand">.</span>
          </p>
          <p className="mt-6 max-w-2xl text-[11px] font-medium leading-relaxed tracking-[0.08em] text-white/55 uppercase sm:text-xs">
            Produkcja betonu · Prefabrykacja betonowa · Prefabrykacja zbrojeniowa · Budownictwo tunelowe
          </p>
        </div>

        <div
          aria-hidden="true"
          className="hero-enter-grid pointer-events-none absolute inset-0 hidden border-l border-white/18 md:flex"
        >
          {panels.map((panel) => {
            const isActive = panel.id === activeId;
            return (
              <div
                key={panel.id}
                className={[
                  'relative overflow-hidden border-r border-white/18 px-3 sm:px-6 md:px-7 transition-[flex] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  isActive ? 'flex-[1.3]' : activeId ? 'flex-[0.9]' : 'flex-1',
                ].join(' ')}
              >
                <span
                  className="absolute inset-0 overflow-hidden transition-opacity duration-500"
                  style={{ opacity: isActive ? 1 : 0 }}
                >
                  {panel.media.kind === 'video' ? (
                    <video
                      ref={(node) => {
                        columnVideos.current[panel.id] = node;
                      }}
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster={panel.media.poster ?? undefined}
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ filter: 'saturate(0.85) contrast(1.05) brightness(0.75)' }}
                    >
                      <source src={panel.media.src} type="video/mp4" />
                    </video>
                  ) : (
                    <span
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${panel.media.src})`,
                        filter: 'saturate(0.85) contrast(1.05) brightness(0.75)',
                        // Slow push-in while the column is open.
                        transform: isActive ? 'scale(1.1)' : 'scale(1)',
                        transition: isActive ? 'transform 7s linear' : 'transform 600ms ease',
                      }}
                    />
                  )}
                </span>
                <span
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    backgroundColor: panel.color,
                    opacity: isActive ? 0.16 : activeId ? 0.12 : 0.2,
                  }}
                />
                <span
                  className={[
                    'absolute inset-0 bg-black transition-opacity duration-500',
                    panel.id === 'nr-4' ? 'opacity-30' : 'opacity-10',
                  ].join(' ')}
                />
              </div>
            );
          })}
        </div>

        <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-l border-white/20 md:flex md:border-l-transparent" onMouseLeave={() => setActiveId(null)}>
          {panels.map((panel, index) => {
            const isActive = panel.id === activeId;
            return (
              <a
                key={panel.id}
                href={panel.href}
                target={panel.external ? '_blank' : undefined}
                rel={panel.external ? 'noreferrer' : undefined}
                onClick={(event) => handleTileClick(event, panel)}
                onMouseEnter={() => setActiveId(panel.id)}
                onFocus={() => setActiveId(panel.id)}
                onBlur={() => setActiveId(null)}
                className={[
                  'hero-enter-control group relative flex min-h-36 min-w-0 cursor-pointer flex-col justify-between overflow-hidden border-r border-b border-white/20 px-4 py-4 text-left text-white transition-[flex,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 sm:py-5 md:min-h-44 md:border-b-0 md:border-r-transparent md:px-7 md:py-7',
                  isActive ? 'md:flex-[1.3] bg-black/12' : activeId ? 'md:flex-[0.9]' : 'md:flex-1',
                ].join(' ')}
                style={{ animationDelay: `${620 + index * 110}ms` }}
              >
                <span aria-hidden="true" className="absolute inset-0 md:hidden" style={{ backgroundColor: panel.color, opacity: panel.id === 'nr-4' ? 0.14 : 0.22 }} />
                <span aria-hidden="true" className={['absolute inset-0 bg-black md:hidden', panel.id === 'nr-4' ? 'opacity-40' : 'opacity-25'].join(' ')} />
                <span className="relative flex items-center justify-between gap-3">
                  <span className={['font-mono text-[9px] font-medium tracking-[0.2em] transition-colors duration-300', isActive ? 'text-brand' : 'text-white/55'].join(' ')}>
                    / {panel.number}
                  </span>
                  <span className={['grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/45 transition-[opacity,transform] duration-300 md:h-10 md:w-10', isActive || panel.external ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'].join(' ')}>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      {panel.external ? (
                        <path d="M8 16L16 8M9 8h7v7" stroke="currentColor" strokeWidth="1.5" />
                      ) : (
                        <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
                      )}
                    </svg>
                  </span>
                </span>

                <span className="relative mt-5 block md:mt-7">
                  <span className="block max-w-[13ch] text-[clamp(1.15rem,1.65vw,1.9rem)] font-[550] leading-[0.98] tracking-[-0.03em] sm:max-w-[15ch]">
                    {panel.label}
                  </span>
                  <span className={['mt-2 block max-w-[24ch] text-xs leading-relaxed text-white/48 transition-[opacity,transform] duration-300 sm:text-xs', isActive ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-70'].join(' ')}>
                    {panel.description}
                  </span>
                  {panel.domain ? (
                    <span className="mt-2 block truncate font-mono text-[10px] tracking-normal text-white/70 sm:text-[11px] sm:tracking-[0.04em]">
                      {panel.domain} ↗
                    </span>
                  ) : null}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
