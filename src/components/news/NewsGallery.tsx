'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import type { GalleryPhoto } from '@/lib/news';

/* Photo grid for <Galeria /> in a news post: photos in columns at their own proportions (never cropped).
   Click opens a full-screen viewer (arrows, Esc). */
export default function NewsGallery({ images, alt }: { images: GalleryPhoto[]; alt: string }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) => setOpen((current) => (current === null ? null : (current + delta + images.length) % images.length)),
    [images.length],
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

  if (images.length === 0) return null;

  return (
    <>
      <div className={`not-prose my-10 gap-2 ${images.length === 1 ? '' : 'columns-2 md:columns-3'}`}>
        {images.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpen(index)}
            aria-label={`Powiększ zdjęcie ${index + 1} z ${images.length}`}
            className="group mb-2 block w-full cursor-zoom-in overflow-hidden bg-[#f6f6f6] break-inside-avoid"
          >
            <Image
              src={photo.src}
              alt={`${alt} — zdjęcie ${index + 1}`}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 768px) 50vw, 300px"
              className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {open !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria: ${alt}`}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95"
          onClick={close}
        >
          <div className="relative h-[80vh] w-[92vw] max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image src={images[open].src} alt={`${alt} — zdjęcie ${open + 1}`} fill sizes="92vw" className="object-contain" />
          </div>

          <span className="absolute top-6 left-[4vw] font-mono text-[11px] tracking-[0.2em] text-white/70">
            {String(open + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Zamknij galerię"
            className="absolute top-0 right-[4vw] grid h-16 w-16 cursor-pointer place-items-center bg-brand text-black"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                aria-label="Poprzednie zdjęcie"
                className="absolute top-1/2 left-[2vw] grid h-14 w-14 -translate-y-1/2 cursor-pointer place-items-center border border-white/30 text-white transition-colors hover:bg-white hover:text-black"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path d="M20 12H4M10 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                aria-label="Następne zdjęcie"
                className="absolute top-1/2 right-[2vw] grid h-14 w-14 -translate-y-1/2 cursor-pointer place-items-center border border-white/30 text-white transition-colors hover:bg-white hover:text-black"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </button>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
