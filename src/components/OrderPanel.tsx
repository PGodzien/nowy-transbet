'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { concretePlants } from '@/data/site';

/*
 * "Zamów beton": the previous site's panel with the three concrete plants (texts 1:1),
 * sliding in from the right — half the screen on a computer, the whole screen on a phone.
 * Rendered into <body>, because the navbar's backdrop blur would trap a fixed panel inside it.
 */
export default function OrderPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div data-curtain="off" className={`fixed inset-0 z-[70] ${open ? '' : 'pointer-events-none'}`} {...(open ? {} : { inert: true })}>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500 motion-reduce:transition-none ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-panel-title"
        className={`absolute inset-y-0 right-0 flex w-full flex-col bg-white text-black shadow-[-30px_0_80px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none md:w-1/2 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-black/10 pl-6 sm:pl-9 md:pl-12">
          <span className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.2em] uppercase">
            <span aria-hidden="true" className="h-2.5 w-2.5 bg-brand" />
            Zamów beton
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Zamknij panel"
            className="grid h-20 w-20 shrink-0 cursor-pointer place-items-center bg-black text-white transition-colors hover:bg-brand hover:text-black"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="border-b border-black/10 px-6 pt-10 pb-8 sm:px-9 md:px-12 md:pt-14">
            <h2 id="order-panel-title" className="max-w-[14ch] text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.95] font-medium tracking-[-0.045em]">
              Skontaktuj się z betoniarniami<span className="text-brand">.</span>
            </h2>
          </div>

          <ul>
            {concretePlants.map((plant, index) => (
              <li key={plant.city} className="border-b border-black/10">
                <div className="grid gap-x-10 gap-y-5 px-6 py-8 sm:px-9 md:px-12 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.18em] text-black/40">/ {String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-3 text-[clamp(1.4rem,2vw,1.8rem)] leading-none font-medium tracking-[-0.035em]">Betoniarnia {plant.city}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-black/55">{plant.address}</p>
                    <a href={`mailto:${plant.email}`} className="mt-0.5 inline-block text-sm text-black/55 transition-colors hover:text-black">
                      {plant.email}
                    </a>
                  </div>
                  <a
                    href={plant.phoneHref}
                    className="group flex items-center justify-between gap-6 border-b border-black pb-2 text-[clamp(1.5rem,2.2vw,2rem)] leading-none font-medium tracking-[-0.035em] transition-colors hover:border-brand hover:text-brand xl:min-w-64"
                  >
                    {plant.phone}
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body,
  );
}
