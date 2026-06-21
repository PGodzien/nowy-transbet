'use client';

import { useState } from 'react';

const panels = [
  {
    id: 'produkcja',
    label: 'Produkcja',
    subtitle: 'Zaawansowane linie produkcyjne',
    number: '01',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&fit=crop',
    href: '#produkcja',
  },
  {
    id: 'logistyka',
    label: 'Logistyka',
    subtitle: 'Kompleksowe łańcuchy dostaw',
    number: '02',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80&fit=crop',
    href: '#logistyka',
  },
  {
    id: 'technologia',
    label: 'Technologia',
    subtitle: 'Innowacje przemysłowe 4.0',
    number: '03',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&fit=crop',
    href: '#technologia',
  },
] as const;

export default function Hero() {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex h-screen w-full overflow-hidden pt-16">
      {/* 5-column grid layout */}
      <div className="flex h-full w-full grid-cols-5 md:grid">

        {/* col 1 – left gutter */}
        <div className="hidden md:flex md:flex-col md:justify-end md:border-r md:border-zinc-800/50 md:pb-6 md:pl-4">
          <span className="font-mono text-[10px] tracking-widest text-zinc-700 [writing-mode:vertical-rl]">
            TRANSBET © 2026
          </span>
        </div>

        {/* cols 2-4 – the three interactive panels */}
        <div className="col-span-3 flex h-full w-full overflow-hidden">
          {panels.map((panel, idx) => {
            const isHovered = hovered === panel.id;
            const anyHovered = hovered !== null;

            return (
              <div
                key={panel.id}
                onMouseEnter={() => setHovered(panel.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleClick(panel.href)}
                className={[
                  'relative flex cursor-pointer flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out',
                  idx !== 0 ? 'border-l border-zinc-700/50' : '',
                  isHovered ? 'flex-[3]' : anyHovered ? 'flex-[0.6]' : 'flex-1',
                ].join(' ')}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
                  style={{
                    backgroundImage: `url(${panel.image})`,
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                  }}
                />

                {/* Dark overlay */}
                <div
                  className={[
                    'absolute inset-0 transition-opacity duration-700',
                    isHovered
                      ? 'bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-zinc-950/30'
                      : 'bg-zinc-950/70',
                  ].join(' ')}
                />

                {/* Vertical line accent on hover */}
                {isHovered && (
                  <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-amber-500 to-transparent opacity-60" />
                )}

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10">
                  <div
                    className={[
                      'transition-all duration-500',
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                    ].join(' ')}
                  >
                    <p className="mb-3 text-xs font-medium tracking-[0.3em] text-amber-500 uppercase">
                      {panel.subtitle}
                    </p>
                  </div>

                  <h2
                    className={[
                      'font-bold text-white transition-all duration-500',
                      isHovered
                        ? 'text-4xl md:text-6xl'
                        : 'text-lg md:text-xl [writing-mode:vertical-rl] rotate-180',
                    ].join(' ')}
                  >
                    {panel.label}
                  </h2>

                  <div
                    className={[
                      'mt-6 flex items-center gap-3 transition-all duration-500',
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                    ].join(' ')}
                  >
                    <span className="text-xs tracking-widest text-zinc-300 uppercase">
                      Dowiedz się więcej
                    </span>
                    <span className="h-px w-8 bg-amber-500" />
                  </div>
                </div>

                {/* Panel number */}
                <div className="absolute right-4 top-6 font-mono text-xs font-bold tracking-widest text-zinc-600">
                  {panel.number}
                </div>
              </div>
            );
          })}
        </div>

        {/* col 5 – right gutter */}
        <div className="hidden md:flex md:flex-col md:items-end md:justify-end md:border-l md:border-zinc-800/50 md:pb-6 md:pr-4">
          <span className="font-mono text-[10px] tracking-widest text-zinc-700 [writing-mode:vertical-rl] rotate-180">
            INDUSTRIAL GROUP
          </span>
        </div>
      </div>

      {/* Bottom hint bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-5 border-t border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
        <div />
        <div className="col-span-3 flex items-center justify-between py-3">
          <p className="text-xs tracking-widest text-zinc-500 uppercase">
            Najedź kursorem, aby eksplorować obszary
          </p>
          <p className="hidden text-xs tracking-widest text-zinc-600 uppercase md:block">
            Scroll ↓
          </p>
        </div>
        <div />
      </div>
    </section>
  );
}
