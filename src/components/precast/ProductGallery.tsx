'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import type { ProductImage } from '@/data/precast-products';

type Item = { type: 'image'; src: string; alt: string } | { type: 'model'; src: string; label: string };

// Same viewer as the previous site, loaded only on products that have a 3D model.
const MODEL_VIEWER = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js';

export default function ProductGallery({ images, model3d, name }: { images: ProductImage[]; model3d?: string | string[]; name: string }) {
  const models = model3d ? (Array.isArray(model3d) ? model3d : [model3d]) : [];
  // The 3D model comes first when the product has one.
  const items: Item[] = [
    ...models.map((src, index) => ({ type: 'model' as const, src, label: models.length > 1 ? `3D ${index + 1}` : '3D' })),
    ...images.map((image) => ({ type: 'image' as const, ...image })),
  ];
  const photos = items.filter((item) => item.type === 'image');

  const [selected, setSelected] = useState(0);
  const [zoom, setZoom] = useState<number | null>(null);
  const current = items[selected];

  useEffect(() => {
    if (!models.length || document.querySelector(`script[src="${MODEL_VIEWER}"]`)) return;
    const script = document.createElement('script');
    script.type = 'module';
    script.src = MODEL_VIEWER;
    document.head.appendChild(script);
  }, [models.length]);

  const close = useCallback(() => setZoom(null), []);
  const step = useCallback(
    (delta: number) => setZoom((value) => (value === null ? null : (value + delta + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (zoom === null) return;
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
  }, [zoom, close, step]);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden bg-[#e9e9e9]">
        {current.type === 'image' ? (
          <button
            type="button"
            onClick={() => setZoom(photos.indexOf(current))}
            aria-label="Powiększ zdjęcie"
            className="group absolute inset-0 cursor-zoom-in"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              preload={selected === 0 && !models.length}
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </button>
        ) : (
          <>
            <model-viewer
              key={current.src}
              src={current.src}
              alt={`Model 3D: ${name}`}
              camera-controls=""
              auto-rotate=""
              shadow-intensity="1"
              style={{ width: '100%', height: '100%', background: '#e9e9e9' }}
            />
            <p className="pointer-events-none absolute bottom-4 left-4 font-mono text-[9px] tracking-[0.16em] text-black/45 uppercase">
              Przeciągnij aby obrócić · Scrolla aby przybliżyć
            </p>
          </>
        )}
      </div>

      {items.length > 1 ? (
        <div className="mt-px flex flex-wrap gap-px">
          {items.map((item, index) => (
            <button
              key={`${item.type}-${item.src}-${index}`}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={item.type === 'image' ? `Zdjęcie ${index + 1}` : `Model ${item.label}`}
              aria-pressed={index === selected}
              className={[
                'relative aspect-square w-[calc((100%-3px)/4)] cursor-pointer overflow-hidden bg-[#e9e9e9] transition-opacity sm:w-[calc((100%-4px)/5)]',
                index === selected ? 'outline-2 -outline-offset-2 outline-brand' : 'opacity-70 hover:opacity-100',
              ].join(' ')}
            >
              {item.type === 'image' ? (
                <Image src={item.src} alt="" fill sizes="120px" className="object-cover" />
              ) : (
                <span className="absolute inset-0 grid place-items-center bg-black font-mono text-[11px] tracking-[0.16em] text-white">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>
      ) : null}

      {zoom !== null ? (
        <div role="dialog" aria-modal="true" aria-label={`Zdjęcia: ${name}`} className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95" onClick={close}>
          <div className="relative h-[86svh] w-[92vw] max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image src={photos[zoom].src} alt={photos[zoom].type === 'image' ? photos[zoom].alt : ''} fill sizes="92vw" className="object-contain" />
          </div>
          <span className="absolute top-6 left-[4vw] font-mono text-[11px] tracking-[0.2em] text-white/70">
            {String(zoom + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
          </span>
          <button type="button" onClick={close} aria-label="Zamknij" className="absolute top-0 right-[4vw] grid h-16 w-16 cursor-pointer place-items-center bg-brand text-black">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          {photos.length > 1
            ? [
                { delta: -1, label: 'Poprzednie zdjęcie', d: 'M20 12H4M10 6l-6 6 6 6', side: 'left-[2vw]' },
                { delta: 1, label: 'Następne zdjęcie', d: 'M4 12h16M14 6l6 6-6 6', side: 'right-[2vw]' },
              ].map((arrow) => (
                <button
                  key={arrow.label}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    step(arrow.delta);
                  }}
                  aria-label={arrow.label}
                  className={`absolute top-1/2 ${arrow.side} grid h-14 w-14 -translate-y-1/2 cursor-pointer place-items-center border border-white/30 text-white transition-colors hover:bg-white hover:text-black`}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path d={arrow.d} stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </button>
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
}
