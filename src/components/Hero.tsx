'use client';

import { useEffect, useRef, useState } from 'react';

const panels = [
  {
    id: 'nr-1',
    number: '01',
    label: 'To jest nr 1',
    color: '#ff4d00',
    href: '#',
  },
  {
    id: 'nr-2',
    number: '02',
    label: 'To jest nr 2',
    color: '#111111',
    href: '#',
  },
  {
    id: 'nr-3',
    number: '03',
    label: 'To jest nr 3',
    color: '#6b6b6b',
    href: '#',
  },
  {
    id: 'nr-4',
    number: '04',
    label: 'To jest nr 4',
    color: '#f2f2f2',
    href: '#',
  },
] as const;

const overviewImage = '/background.jpg';

type PanelId = (typeof panels)[number]['id'];
type Panel = (typeof panels)[number];
type WorldRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};
type WorldState = {
  panel: Panel;
  rect: WorldRect;
  expanded: boolean;
};

const slogans: {
  id: PanelId | null;
  text: string;
}[] = [
  {
    id: null,
    text: 'Cztery części hero do dalszego dopracowania',
  },
  {
    id: 'nr-1',
    text: 'To jest nr 1',
  },
  {
    id: 'nr-2',
    text: 'To jest nr 2',
  },
  {
    id: 'nr-3',
    text: 'To jest nr 3',
  },
  {
    id: 'nr-4',
    text: 'To jest nr 4',
  },
];

export default function Hero() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<PanelId | null>(null);
  const [world, setWorld] = useState<WorldState | null>(null);

  const resetPanel = () => setActiveId(null);

  useEffect(() => {
    if (!world?.expanded) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [world?.expanded]);

  const openWorld = (panel: Panel, index: number) => {
    const stage = stageRef.current;
    const bounds = stage?.getBoundingClientRect();
    const columnWidth = bounds ? bounds.width / panels.length : window.innerWidth / panels.length;
    const rect = bounds
      ? {
          top: bounds.top,
          left: bounds.left + index * columnWidth,
          width: columnWidth,
          height: bounds.height,
        }
      : {
          top: 0,
          left: index * columnWidth,
          width: columnWidth,
          height: window.innerHeight,
        };

    setActiveId(panel.id);
    setWorld({ panel, rect, expanded: false });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setWorld((current) =>
          current?.panel.id === panel.id ? { ...current, expanded: true } : current,
        );
      });
    });
  };

  const closeWorld = () => {
    setWorld((current) => (current ? { ...current, expanded: false } : current));

    window.setTimeout(() => {
      setWorld(null);
      setActiveId(null);
    }, 720);
  };

  return (
    <section className="viewport-section relative overflow-hidden bg-black">
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
              className="absolute inset-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                background:
                  `radial-gradient(ellipse 64% 62% at 12% 45%, ${panel.color} 0%, rgba(0,0,0,0) 72%), ${panel.color}`,
                opacity: isActive ? 0.72 : 0,
                transform: isActive ? 'scale(1.015)' : 'scale(1.06)',
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

      <div ref={stageRef} className="absolute inset-y-0 inset-x-[4vw] z-10">
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
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    backgroundColor: panel.color,
                    opacity: isActive ? 0.62 : activeId ? 0.22 : 0.34,
                  }}
                />
                <span
                  className={[
                    'absolute inset-0 bg-black transition-opacity duration-700',
                    panel.id === 'nr-4' ? 'opacity-35' : 'opacity-10',
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
                onClick={() => openWorld(panel, index)}
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

      {world && (
        <div
          className={[
            'fixed z-[90] overflow-hidden transition-[top,left,width,height,border-radius,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
            world.panel.id === 'nr-4' ? 'text-black' : 'text-white',
          ].join(' ')}
          style={{
            top: world.expanded ? 0 : world.rect.top,
            left: world.expanded ? 0 : world.rect.left,
            width: world.expanded ? '100vw' : world.rect.width,
            height: world.expanded ? '100svh' : world.rect.height,
            borderRadius: world.expanded ? 0 : 2,
            background:
              `radial-gradient(ellipse 70% 70% at 18% 42%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 70%), ${world.panel.color}`,
            boxShadow: world.expanded
              ? '0 0 0 rgba(0,0,0,0)'
              : '0 26px 80px rgba(0,0,0,0.48)',
          }}
        >
          <div
            className={[
              'absolute inset-0 bg-black transition-opacity duration-700',
              world.panel.id === 'nr-4' ? 'opacity-10' : 'opacity-18',
            ].join(' ')}
          />
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_3px,rgba(255,255,255,0.035)_3px,rgba(255,255,255,0.035)_4px)] mix-blend-overlay" />
          <div
            className="pointer-events-none absolute -inset-12 opacity-[0.22] mix-blend-soft-light"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='4' seed='11' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.72'/%3E%3C/svg%3E\")",
              backgroundSize: '180px 180px',
            }}
          />

          <div
            className={[
              'relative z-10 flex h-full flex-col justify-between p-6 transition-[opacity,transform] duration-500 sm:p-9 md:p-12',
              world.expanded ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-6 opacity-0',
            ].join(' ')}
          >
            <div className="flex items-start justify-between gap-6">
              <span className="font-mono text-[9px] font-medium tracking-[0.2em] opacity-60">
                / {world.panel.number}
              </span>
              <button
                type="button"
                onClick={closeWorld}
                className="cursor-pointer font-mono text-[9px] tracking-[0.18em] opacity-60 transition-opacity hover:opacity-100"
              >
                WRÓĆ DO HERO
              </button>
            </div>

            <div>
              <p className="mb-5 font-mono text-[9px] tracking-[0.18em] opacity-55 uppercase">
                Wybrany obszar / wejście w świat
              </p>
              <h1 className="max-w-[12ch] text-[clamp(3rem,8vw,9.5rem)] font-medium leading-[0.92] tracking-[-0.055em]">
                {world.panel.label}
                <span className={world.panel.id === 'nr-1' ? 'text-black' : 'text-brand'}>.</span>
              </h1>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
