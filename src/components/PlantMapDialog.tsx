'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Plant = { city: string; address: string; phone: string; phoneHref: string };

/*
 * Makes a whole plant tile clickable (an invisible button over it) and opens a dialog with the plant's Google business
 * profile ("Transbet Betoniarnie" at its address) on a map, its phone number and a "Sprawdź dojazd" link to Google Maps
 * directions. The map only loads once the dialog opens.
 * Rendered into <body>, like the "Zamów beton" panel.
 */
export default function PlantMapDialog({ plant }: { plant: Plant }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const query = encodeURIComponent(`Transbet Betoniarnie, ${plant.address}`);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Betoniarnia ${plant.city}: mapa i dojazd`}
        className="absolute inset-0 z-0 cursor-pointer"
      />
      {mounted && open
        ? createPortal(
            <div data-curtain="off" className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
              <div aria-hidden="true" onClick={() => setOpen(false)} className="absolute inset-0 bg-black/70" />
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="plant-map-title"
                className="relative flex max-h-[100svh] w-full max-w-4xl flex-col overflow-y-auto bg-white text-black shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              >
                <div className="flex min-h-20 shrink-0 items-stretch justify-between border-b border-black/10 pl-6 sm:pl-9">
                  <div className="self-center py-4">
                    <h2 id="plant-map-title" className="text-[clamp(1.4rem,2.4vw,2rem)] leading-none font-medium tracking-[-0.035em]">
                      Betoniarnia {plant.city}
                      <span className="text-brand">.</span>
                    </h2>
                    <p className="mt-2 text-sm text-black/55">{plant.address}</p>
                  </div>
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Zamknij"
                    className="grid min-h-20 w-20 shrink-0 cursor-pointer place-items-center self-stretch bg-black text-white transition-colors hover:bg-brand hover:text-black"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </button>
                </div>

                <iframe
                  title={`Mapa: Betoniarnia ${plant.city}, ${plant.address}`}
                  src={`https://www.google.com/maps?q=${query}&z=15&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-[4/3] w-full shrink-0 border-0 bg-[#f5f5f3] sm:aspect-[16/9]"
                />

                <div className="grid shrink-0 border-t border-black/10 sm:grid-cols-2">
                  <a
                    href={plant.phoneHref}
                    className="group flex min-h-20 items-center justify-between gap-6 border-b border-black/10 px-6 py-5 text-[clamp(1.35rem,2vw,1.75rem)] leading-none font-medium tracking-[-0.03em] transition-colors hover:bg-black hover:text-white sm:border-r sm:border-b-0 sm:px-9"
                  >
                    {plant.phone}
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0">
                      <path
                        d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-20 items-center justify-between gap-6 bg-brand px-6 py-5 text-lg font-semibold transition-colors hover:bg-brand-hover sm:px-9"
                  >
                    Sprawdź dojazd
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
