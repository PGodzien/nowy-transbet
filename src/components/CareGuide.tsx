'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

export type CareSheet = { title: string; src: string; width: number; height: number };

/* Concrete care sheets as titled cards; click opens the sheet at full height (arrows, Esc). */
export default function CareGuide({ sheets }: { sheets: CareSheet[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) => setOpen((current) => (current === null ? null : (current + delta + sheets.length) % sheets.length)),
    [sheets.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close, step]);

  const sheet = open === null ? null : sheets[open];

  return (
    <>
      <div className="grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
        {sheets.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpen(index)}
            className="group flex cursor-zoom-in flex-col bg-white p-6 text-left transition-colors duration-300 hover:bg-[#f6f6f6] sm:p-8"
          >
            <span className="flex items-start justify-between gap-6">
              <span>
                <span className="block font-mono text-[9px] tracking-[0.18em] text-brand">/ {String(index + 1).padStart(2, '0')}</span>
                <span className="mt-3 block text-[clamp(1.25rem,1.7vw,1.75rem)] font-medium leading-[1.08] tracking-[-0.03em]">{item.title}</span>
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="mt-1 h-5 w-5 shrink-0 text-black/40 transition-colors group-hover:text-brand">
                <path d="M10 4H4v6M14 20h6v-6M4 4l6.5 6.5M20 20l-6.5-6.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <span className="mt-6 block overflow-hidden bg-[#f6f6f6]">
              <Image
                src={item.src}
                alt={`Plansza: ${item.title}`}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </span>
          </button>
        ))}
      </div>

      {sheet && open !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Plansza: ${sheet.title}`}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95"
          onClick={close}
        >
          <div className="relative h-[92svh] w-[86vw] max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <Image src={sheet.src} alt={`Plansza: ${sheet.title}`} fill sizes="86vw" className="object-contain" />
          </div>

          <span className="absolute top-6 left-[4vw] max-w-[60vw] font-mono text-[11px] tracking-[0.2em] text-white/70 uppercase">
            {String(open + 1).padStart(2, '0')} / {String(sheets.length).padStart(2, '0')} · {sheet.title}
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Zamknij planszę"
            className="absolute top-0 right-[4vw] grid h-16 w-16 cursor-pointer place-items-center bg-brand text-black"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          {[
            { delta: -1, label: 'Poprzednia plansza', d: 'M20 12H4M10 6l-6 6 6 6', side: 'left-[2vw]' },
            { delta: 1, label: 'Następna plansza', d: 'M4 12h16M14 6l6 6-6 6', side: 'right-[2vw]' },
          ].map((arrow) => (
            <button
              key={arrow.label}
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(arrow.delta);
              }}
              aria-label={arrow.label}
              className={`absolute top-1/2 ${arrow.side} grid h-14 w-14 -translate-y-1/2 cursor-pointer place-items-center border border-white/30 bg-black/40 text-white transition-colors hover:bg-white hover:text-black`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d={arrow.d} stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
}
