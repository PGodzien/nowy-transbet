'use client';

import { useEffect, useRef, useState } from 'react';

const panels = [
  {
    id: 'nr-1',
    number: '01',
    label: 'Betoniarnie',
    color: '#ff4d00',
    targetId: 'about1',
  },
  {
    id: 'nr-2',
    number: '02',
    label: 'Prefabrykaty zbrojeniowe',
    color: '#111111',
    targetId: 'about2',
  },
  {
    id: 'nr-3',
    number: '03',
    label: 'Prefabrykaty betonowe',
    color: '#6b6b6b',
    targetId: 'about3',
  },
  {
    id: 'nr-4',
    number: '04',
    label: 'Budowa tuneli',
    color: '#f2f2f2',
    targetId: 'about4',
  },
] as const;

const overviewImage = '/background.jpg';

type PanelId = (typeof panels)[number]['id'];
type Panel = (typeof panels)[number];
type WorldState = {
  panel: Panel;
  expanded: boolean;
  revealingTarget: boolean;
};

const slogans: {
  id: PanelId | null;
  text: string;
}[] = [
  {
    id: null,
    text: 'Cztery specjalizacje. Jeden standard',
  },
  {
    id: 'nr-1',
    text: 'Beton blisko Twojej budowy',
  },
  {
    id: 'nr-2',
    text: 'Prefabrykaty zbrojeniowe',
  },
  {
    id: 'nr-3',
    text: 'Prefabrykaty betonowe',
  },
  {
    id: 'nr-4',
    text: 'Budowa tuneli',
  },
];

export default function Hero() {
  const transitionTimersRef = useRef<number[]>([]);
  const transitionFrameRef = useRef<number | null>(null);
  const [activeId, setActiveId] = useState<PanelId | null>(null);
  const [world, setWorld] = useState<WorldState | null>(null);

  const resetPanel = () => setActiveId(null);
  const isTransitioning = world !== null;

  const clearTransitionSchedule = () => {
    transitionTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    transitionTimersRef.current = [];

    if (transitionFrameRef.current !== null) {
      window.cancelAnimationFrame(transitionFrameRef.current);
      transitionFrameRef.current = null;
    }
  };

  useEffect(() => clearTransitionSchedule, []);

  useEffect(() => {
    if (!isTransitioning) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isTransitioning]);

  const scrollToPanelTarget = (panel: Panel) => {
    const target = document.getElementById(panel.targetId);
    if (!target) return;

    const root = document.documentElement;
    const body = document.body;
    const previousRootScrollBehavior = root.style.scrollBehavior;
    const previousBodyScrollBehavior = body.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    body.style.scrollBehavior = 'auto';

    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, targetTop);

    window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousRootScrollBehavior;
      body.style.scrollBehavior = previousBodyScrollBehavior;
    });
  };

  const openWorld = (panel: Panel) => {
    if (world) return;

    clearTransitionSchedule();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const expansionDuration = reduceMotion ? 0 : 1250;
    const revealDuration = reduceMotion ? 0 : 520;

    setActiveId(panel.id);
    setWorld({
      panel,
      expanded: false,
      revealingTarget: false,
    });

    transitionFrameRef.current = window.requestAnimationFrame(() => {
      setWorld((current) =>
        current?.panel.id === panel.id ? { ...current, expanded: true } : current,
      );
      transitionFrameRef.current = null;
    });

    const scrollTimer = window.setTimeout(() => {
      scrollToPanelTarget(panel);
      setWorld((current) =>
        current?.panel.id === panel.id
          ? { ...current, revealingTarget: true }
          : current,
      );

      const cleanupTimer = window.setTimeout(() => {
        setWorld(null);
        setActiveId(null);
        transitionTimersRef.current = [];
      }, revealDuration);

      transitionTimersRef.current.push(cleanupTimer);
    }, expansionDuration);

    transitionTimersRef.current.push(scrollTimer);
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
                onClick={() => openWorld(panel)}
                className={[
                  'hero-enter-control group relative flex min-h-24 cursor-pointer items-center justify-between gap-1 overflow-hidden px-2 py-5 text-left text-white transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-28 sm:gap-3 sm:px-6 md:min-h-32 md:px-7 md:py-6',
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
                      'text-[0.72rem] font-[550] leading-[0.98] tracking-[-0.03em] transition-transform duration-700 sm:text-[clamp(1rem,2.1vw,2.1rem)] sm:leading-[0.96]',
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
            'fixed inset-0 z-[90] overflow-hidden bg-black transition-opacity duration-500 ease-out',
            world.revealingTarget ? 'pointer-events-none opacity-0' : 'opacity-100',
          ].join(' ')}
          aria-hidden="true"
        >
          <div
            className={[
              'absolute inset-0 bg-cover bg-center transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]',
              world.expanded ? 'scale-110 opacity-0' : 'scale-[1.015] opacity-100',
            ].join(' ')}
            style={{ backgroundImage: `url(${overviewImage})` }}
          />
          <div
            className="absolute top-1/2 left-1/2 overflow-hidden bg-black bg-cover bg-center transition-[width,height,border-radius,box-shadow] duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{
              width: world.expanded ? '100vw' : 'min(300px, 72vw)',
              height: world.expanded ? '100svh' : 'min(400px, 62svh)',
              borderRadius: world.expanded ? 0 : 16,
              boxShadow: world.expanded ? '0 0 0 rgba(0,0,0,0)' : '0 0 50px rgba(0,0,0,0.38)',
              backgroundImage: `url(${overviewImage})`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="absolute inset-0 bg-black/35" />
            <div
              className="absolute inset-0 opacity-45 mix-blend-multiply transition-opacity duration-[1200ms]"
              style={{ backgroundColor: world.panel.color }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_3px,rgba(255,255,255,0.035)_3px,rgba(255,255,255,0.035)_4px)] mix-blend-overlay" />
          </div>

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-1 overflow-hidden px-6 text-center text-white mix-blend-difference">
            <span
              className={[
                'text-[clamp(2.6rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.05em] transition-[translate,opacity] duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]',
                world.expanded ? '-translate-x-[72vw] opacity-0' : 'translate-x-0 opacity-100',
              ].join(' ')}
            >
              {world.panel.label.split(' ')[0]}
            </span>
            <span
              className={[
                'text-[clamp(2.6rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.05em] transition-[translate,opacity] duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]',
                world.expanded ? 'translate-x-[72vw] opacity-0' : 'translate-x-0 opacity-100',
              ].join(' ')}
            >
              {world.panel.label.split(' ').slice(1).join(' ')}<span className="text-brand">.</span>
            </span>
          </div>

          <div className="absolute inset-y-0 inset-x-[4vw] z-20 border-x border-white/15">
            <span className="absolute top-6 left-6 z-20 font-mono text-[9px] tracking-[0.2em] text-white/55 sm:top-9 sm:left-9">
              / {world.panel.number}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
