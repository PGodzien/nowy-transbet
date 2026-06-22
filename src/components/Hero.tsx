'use client';

import { useState } from 'react';

const panels = [
  {
    id: 'betoniarnie',
    number: '01',
    label: 'Betoniarnie',
    image: '/beton.jpg',
    href: '#betoniarnie',
  },
  {
    id: 'tunele',
    number: '02',
    label: 'Budowa tuneli',
    image: '/tunele.jpg',
    href: '#tunele',
  },
  {
    id: 'prefabrykaty',
    number: '03',
    label: 'Prefabrykaty',
    image: '/prefabrykaty.jpg',
    href: '#prefabrykaty',
  },
] as const;

const overviewImage = '/background.jpg';

type PanelId = (typeof panels)[number]['id'];

const slogans: {
  id: PanelId | null;
  text: string;
}[] = [
  {
    id: null,
    text: 'Budujemy trwałość, kształtujemy przyszłość',
  },
  {
    id: 'betoniarnie',
    text: 'Produkujemy trwałość od podstaw',
  },
  {
    id: 'tunele',
    text: 'Tworzymy połączenia na lata',
  },
  {
    id: 'prefabrykaty',
    text: 'Precyzja gotowa na przyszłość',
  },
];

export default function Hero() {
  const [activeId, setActiveId] = useState<PanelId | null>(null);

  const resetPanel = () => setActiveId(null);

  return (
    <section className="viewport-section relative overflow-hidden bg-black">
      {/* One full-screen image, controlled by the service selectors */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="hero-enter-media absolute inset-0 bg-cover bg-center transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            backgroundImage: `url(${overviewImage})`,
            opacity: activeId === null ? 1 : 0,
            transform: activeId === null ? 'scale(1.015)' : 'scale(1.07)',
            filter: 'saturate(0.82) contrast(1.08) brightness(0.96)',
          }}
        />
        {panels.map((panel) => {
          const isActive = panel.id === activeId;

          return (
            <div
              key={panel.id}
              className="absolute inset-0 bg-cover bg-center transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                backgroundImage: `url(${panel.image})`,
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'scale(1.015)' : 'scale(1.07)',
                filter: isActive
                  ? 'saturate(0.9) contrast(1.08) brightness(0.98)'
                  : 'saturate(0.6) contrast(1.12) brightness(0.86)',
              }}
            />
          );
        })}

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 62% 66% at 0% 44%, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.24) 44%, transparent 72%), radial-gradient(ellipse 68% 58% at 0% 100%, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 42%, transparent 72%), linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 24%, transparent 42%), linear-gradient(to bottom, rgba(0,0,0,0.48) 0%, transparent 28%)',
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
        <div className="hero-enter-title pointer-events-none absolute top-[39%] left-4 z-20 h-56 w-[min(50rem,84vw)] -translate-y-1/2 sm:top-[41%] sm:left-6 md:top-[43%] md:left-7 md:h-72">
          {slogans.map((slogan) => {
            const isVisible = slogan.id === activeId;

            return (
              <div
                key={slogan.id ?? 'overview'}
                className={[
                  'absolute inset-x-0 bottom-0 transition-[opacity,transform] duration-500 ease-out',
                  isVisible
                    ? 'translate-y-0 opacity-100 delay-100'
                    : 'pointer-events-none translate-y-3 opacity-0',
                ].join(' ')}
              >
                <p className="max-w-[15ch] text-[clamp(2.3rem,4.55vw,5.35rem)] font-medium leading-[1.02] tracking-[-0.044em] text-white [text-shadow:0_3px_32px_rgba(0,0,0,0.38)]">
                  {slogan.text}
                  <span className="text-brand">.</span>
                </p>
              </div>
            );
          })}
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
                  'relative overflow-hidden border-r border-white/18 transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  isActive ? 'flex-[1.45]' : activeId ? 'flex-[0.78]' : 'flex-1',
                ].join(' ')}
              >
                <span
                  className={[
                    'absolute inset-0 bg-brand mix-blend-color transition-opacity duration-700',
                    activeId && !isActive ? 'opacity-[0.16]' : 'opacity-0',
                  ].join(' ')}
                />
              </div>
            );
          })}
        </div>

        <div
          className="absolute inset-x-0 bottom-0 flex border-t border-white/20"
          onMouseLeave={resetPanel}
        >
          {panels.map((panel, index) => {
            const isActive = panel.id === activeId;

            return (
              <button
                key={panel.id}
                type="button"
                onMouseEnter={() => setActiveId(panel.id)}
                onFocus={() => setActiveId(panel.id)}
                onBlur={resetPanel}
                onClick={() => {
                  if (activeId !== panel.id) {
                    setActiveId(panel.id);
                    return;
                  }

                  document.querySelector(panel.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={[
                  'hero-enter-control group relative flex min-h-24 cursor-pointer items-center justify-between gap-3 overflow-hidden px-4 py-5 text-left text-white transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-28 sm:px-6 md:min-h-32 md:px-7 md:py-6',
                  isActive
                    ? 'flex-[1.45]'
                    : activeId
                      ? 'flex-[0.78]'
                      : 'flex-1',
                ].join(' ')}
                style={{ animationDelay: `${620 + index * 110}ms` }}
              >
                <span className="flex flex-col gap-3">
                  <span
                    className={[
                      'font-mono text-[9px] font-medium tracking-[0.2em] transition-colors duration-500',
                      isActive ? 'text-brand' : 'text-white/55',
                    ].join(' ')}
                  >
                    / {panel.number}
                  </span>
                  <span
                    className={[
                      'text-[clamp(1rem,2.1vw,2.1rem)] font-[550] leading-[0.96] tracking-[-0.03em] transition-transform duration-700',
                      isActive ? 'translate-x-0' : 'translate-x-0 md:translate-x-1',
                    ].join(' ')}
                  >
                    {panel.label}
                  </span>
                </span>
                <span
                  className={[
                    'grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/55 transition-[opacity,transform] duration-500 md:h-12 md:w-12',
                    isActive ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0',
                  ].join(' ')}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
