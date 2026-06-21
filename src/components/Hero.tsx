'use client';

import { useState } from 'react';

type Panel = {
  id: string;
  label: string;
  subtitle: string;
  number: string;
  image: string;
  href: string;
};

const panels: Panel[] = [
  {
    id: 'betoniarnie',
    label: 'Betoniarnie',
    subtitle: 'Produkcja betonu towarowego',
    number: '01',
    image: 'https://images.unsplash.com/photo-1767890131766-9fa1b608365d?w=1800&q=85&fit=crop',
    href: '#betoniarnie',
  },
  {
    id: 'tunele',
    label: 'Budowa tuneli',
    subtitle: 'Specjalistyczna infrastruktura podziemna',
    number: '02',
    image: 'https://images.unsplash.com/photo-1761069234641-3a68266c4740?w=1800&q=85&fit=crop',
    href: '#tunele',
  },
  {
    id: 'prefabrykaty',
    label: 'Prefabrykaty',
    subtitle: 'Systemowe rozwiązania prefabrykowane',
    number: '03',
    image: 'https://images.unsplash.com/photo-1742112125761-1f4cbfaa3cfa?w=1800&q=85&fit=crop',
    href: '#prefabrykaty',
  },
];

export default function Hero() {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f3f2ed] pt-20">
      <div className="flex min-h-[calc(100vh-5rem)] flex-col px-[4vw]">
        <div className="grid shrink-0 grid-cols-1 items-end gap-6 border-b border-black/15 py-8 md:grid-cols-12 md:py-10">
          <div className="md:col-span-9">
            <p className="mb-4 text-xs font-bold tracking-[0.22em] text-brand uppercase">
              Transbet Industrial Group
            </p>
            <h1 className="max-w-6xl text-[2.45rem] font-bold leading-[0.86] tracking-[-0.06em] text-black uppercase sm:text-5xl md:text-[clamp(3.5rem,5.2vw,6.2rem)]">
              Budujemy trwałość,
              <br />
              kształtujemy przyszłość.
            </h1>
          </div>
          <div className="flex items-end md:col-span-3 md:pb-1">
            <p className="max-w-sm text-sm font-medium leading-relaxed text-zinc-600 md:ml-auto">
              Kompleksowa realizacja inwestycji — od betonu i prefabrykacji po specjalistyczne
              budownictwo tunelowe.
            </p>
          </div>
        </div>

        <div className="relative flex min-h-[64rem] flex-1 flex-col gap-2 py-2 md:min-h-[26rem] md:flex-row md:gap-3 md:py-3">
          {panels.map((panel, idx) => {
            const isHovered = hovered === panel.id;
            const anyHovered = hovered !== null;
            const idleMotion = !anyHovered
              ? idx % 2 === 0
                ? 'hero-idle-drift-left'
                : 'hero-idle-drift-right'
              : '';

            return (
              <div
                key={panel.id}
                onMouseEnter={() => setHovered(panel.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleClick(panel.href)}
                className={[
                  'group relative flex min-h-[20rem] cursor-pointer flex-col justify-end overflow-hidden bg-zinc-900 transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-h-0',
                  isHovered ? 'flex-[1.45]' : anyHovered ? 'flex-[0.78]' : 'flex-1',
                ].join(' ')}
              >
                {/* Background media */}
                <div
                  className={[
                    'absolute inset-0 bg-cover bg-center transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    idleMotion,
                  ].join(' ')}
                  style={{
                    backgroundImage: `url(${panel.image})`,
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    filter: isHovered
                      ? 'brightness(1.06) saturate(1.08) contrast(1.05)'
                      : anyHovered
                        ? 'brightness(0.94) saturate(0.55) contrast(1.12)'
                        : 'brightness(1.02) saturate(0.78) contrast(1.1)',
                  }}
                />

                {/* Editorial color treatment */}
                <div
                  className={[
                    'absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,77,0,0.26),transparent_46%)] mix-blend-soft-light transition-opacity duration-700',
                    isHovered ? 'opacity-80' : 'opacity-35',
                  ].join(' ')}
                />
                <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_3px,rgba(255,255,255,0.018)_3px,rgba(255,255,255,0.018)_4px)] mix-blend-overlay" />

                {/* Soft scrim keeps the cards cinematic and the copy readable */}
                <div
                  className={[
                    'absolute inset-0 bg-black transition-opacity duration-700',
                    isHovered ? 'opacity-[0.06]' : 'opacity-[0.18]',
                  ].join(' ')}
                />

                {/* Contrast mask */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.82) 25%, rgba(0, 0, 0, 0.38) 48%, transparent 74%)',
                  }}
                />

                <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 md:p-7">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-white/70">
                    / {panel.number}
                  </span>
                  <span className="h-2.5 w-2.5 bg-brand transition-transform duration-500 group-hover:rotate-45 group-hover:scale-125" />
                </div>

                <div className="relative z-10 p-5 md:p-7 lg:p-9">
                  <p className="mb-3 max-w-xs text-[11px] font-bold tracking-[0.18em] text-brand uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] md:text-xs">
                    {panel.subtitle}
                  </p>
                  <div className="flex items-end justify-between gap-5">
                    <h2 className="text-[clamp(1.7rem,3.1vw,4.2rem)] font-bold leading-[0.9] tracking-[-0.045em] text-white uppercase drop-shadow-[0_3px_18px_rgba(0,0,0,0.65)]">
                      {panel.label}
                    </h2>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/40 text-white transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-black">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                        <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {!hovered && (
            <div
              aria-hidden="true"
              className="hero-idle-scan pointer-events-none absolute inset-y-0 left-0 z-20 w-1/5"
            />
          )}
        </div>
      </div>
    </section>
  );
}
