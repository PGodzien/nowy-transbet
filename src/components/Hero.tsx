'use client';

import { useState } from 'react';

const panels = [
  {
    id: 'nr-1',
    number: '01',
    label: 'Betoniarnie',
    description: 'Produkcja i transport betonu',
    color: '#ff4d00',
    href: '#betoniarnie',
    external: false,
  },
  {
    id: 'nr-2',
    number: '02',
    label: 'Zbrojenia',
    description: 'Prefabrykaty zbrojeniowe',
    color: '#111111',
    href: 'https://zbrojeniebudowlane.pl/',
    external: true,
  },
  {
    id: 'nr-3',
    number: '03',
    label: 'Prefabrykacja betonowa',
    description: 'Prefabrykaty dla infrastruktury i przemysłu',
    color: '#6b6b6b',
    href: '#prefabrykaty-betonowe',
    external: false,
  },
  {
    id: 'nr-4',
    number: '04',
    label: 'Budowa tuneli',
    description: 'Tunnel Construction Support',
    color: '#f2f2f2',
    href: 'https://transbettcs.com/',
    external: true,
  },
] as const;

const overviewImage = '/background.jpg';
type PanelId = (typeof panels)[number]['id'];

export default function Hero() {
  const [activeId, setActiveId] = useState<PanelId | null>(null);

  return (
    <section className="viewport-section relative overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="hero-enter-media absolute inset-0 bg-cover bg-center transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            backgroundImage: `url(${overviewImage})`,
            transform: activeId ? 'scale(1.025)' : 'scale(1.015)',
            filter: 'saturate(0.82) contrast(1.08) brightness(0.92)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 62% 66% at 0% 44%, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.24) 44%, transparent 72%), radial-gradient(ellipse 68% 58% at 0% 100%, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 42%, transparent 72%), linear-gradient(to top, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.2) 30%, transparent 48%), linear-gradient(to bottom, rgba(0,0,0,0.48) 0%, transparent 28%)',
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_3px,rgba(255,255,255,0.022)_3px,rgba(255,255,255,0.022)_4px)] mix-blend-overlay" />
        <div
          className="pointer-events-none absolute -inset-12 opacity-[0.28] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='4' seed='7' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.72'/%3E%3C/svg%3E\")",
            backgroundSize: '180px 180px',
          }}
        />
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
          className="hero-enter-grid pointer-events-none absolute inset-0 flex border-l border-white/18"
        >
          {panels.map((panel) => {
            const isActive = panel.id === activeId;
            return (
              <div
                key={panel.id}
                className={[
                  'relative overflow-hidden border-r border-white/18 transition-[flex] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  isActive ? 'flex-[1.3]' : activeId ? 'flex-[0.9]' : 'flex-1',
                ].join(' ')}
              >
                <span
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    backgroundColor: panel.color,
                    opacity: isActive ? 0.34 : activeId ? 0.12 : 0.2,
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

        <div className="absolute inset-x-0 bottom-0 flex border-t border-white/20" onMouseLeave={() => setActiveId(null)}>
          {panels.map((panel, index) => {
            const isActive = panel.id === activeId;
            return (
              <a
                key={panel.id}
                href={panel.href}
                target={panel.external ? '_blank' : undefined}
                rel={panel.external ? 'noreferrer' : undefined}
                onMouseEnter={() => setActiveId(panel.id)}
                onFocus={() => setActiveId(panel.id)}
                onBlur={() => setActiveId(null)}
                className={[
                  'hero-enter-control group relative flex min-h-32 cursor-pointer flex-col justify-between overflow-hidden px-3 py-5 text-left text-white transition-[flex,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-36 sm:px-6 md:min-h-44 md:px-7 md:py-7',
                  isActive ? 'flex-[1.3] bg-black/12' : activeId ? 'flex-[0.9]' : 'flex-1',
                ].join(' ')}
                style={{ animationDelay: `${620 + index * 110}ms` }}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className={['font-mono text-[9px] font-medium tracking-[0.2em] transition-colors duration-300', isActive ? 'text-brand' : 'text-white/55'].join(' ')}>
                    / {panel.number}
                  </span>
                  <span className={['grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/45 transition-[opacity,transform] duration-300 md:h-10 md:w-10', isActive ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'].join(' ')}>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      {panel.external ? (
                        <path d="M8 16L16 8M9 8h7v7" stroke="currentColor" strokeWidth="1.5" />
                      ) : (
                        <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
                      )}
                    </svg>
                  </span>
                </span>

                <span className="mt-7 block">
                  <span className="block max-w-[13ch] text-[clamp(0.95rem,1.65vw,1.9rem)] font-[550] leading-[0.98] tracking-[-0.03em] sm:max-w-[15ch]">
                    {panel.label}
                  </span>
                  <span className={['mt-3 block max-w-[24ch] text-[10px] leading-relaxed text-white/48 transition-[opacity,transform] duration-300 sm:text-xs', isActive ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-70'].join(' ')}>
                    {panel.description}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
