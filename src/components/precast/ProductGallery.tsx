'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { scenePhotos, type ProductImage } from '@/data/precast-products';

type Item = { type: 'image'; src: string; alt: string } | { type: 'model'; src: string; label: string };

// Same viewer as the previous site, loaded only on products that have a 3D model.
const MODEL_VIEWER = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js';

export default function ProductGallery({ images, model3d, name }: { images: ProductImage[]; model3d?: string | string[]; name: string }) {
  const models = model3d ? (Array.isArray(model3d) ? model3d : [model3d]) : [];
  // The 3D model is the default view and leads the media rail when available.
  const items: Item[] = [
    ...models.map((src, index) => ({ type: 'model' as const, src, label: models.length > 1 ? `Model 3D ${index + 1}` : 'Model 3D' })),
    ...images.map((image) => ({ type: 'image' as const, ...image })),
  ];
  const photos = items.filter((item) => item.type === 'image');

  const [selected, setSelected] = useState(0);
  const [zoom, setZoom] = useState<number | null>(null);
  const current = items[selected];
  const currentPhotoIndex = current.type === 'image' ? photos.indexOf(current) + 1 : null;

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
    <div aria-label={`Galeria produktu: ${name}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f3] lg:aspect-[16/11]">
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
              preload={selected === 0}
              sizes="(max-width: 1024px) 92vw, 58vw"
              className={`${scenePhotos.has(current.src) ? 'object-cover' : 'object-contain p-[7%] mix-blend-multiply'} transition-transform duration-700 group-hover:scale-[1.02]`}
            />
            <span className="absolute right-4 bottom-4 bg-white px-3 py-2 text-sm font-medium text-black transition-colors group-hover:bg-brand">
              Powiększ
            </span>
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
              style={{ width: '100%', height: '100%', background: '#f5f5f3' }}
            />
            <p className="pointer-events-none absolute bottom-4 left-4 bg-white px-3 py-2 text-sm text-black/65">
              Przeciągnij, aby obrócić. Przewiń, aby przybliżyć.
            </p>
          </>
        )}
        <span className="pointer-events-none absolute top-4 left-4 bg-black px-3 py-2 font-mono text-[9px] tracking-[0.14em] text-white uppercase">
          {current.type === 'image' ? `Zdjęcie ${String(currentPhotoIndex).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}` : current.label}
        </span>
      </div>

      {items.length > 1 ? (
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {items.map((item, index) => {
            const photoIndex = item.type === 'image' ? photos.indexOf(item) + 1 : null;

            return (
              <button
                key={`${item.type}-${item.src}-${index}`}
                type="button"
                onClick={() => setSelected(index)}
                aria-label={item.type === 'image' ? `Zdjęcie ${photoIndex}` : item.label}
                aria-pressed={index === selected}
                className={[
                  'group relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-[#f5f5f3] transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                  index === selected ? 'opacity-100' : 'opacity-65 hover:opacity-100',
                ].join(' ')}
              >
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 23vw, 15vw"
                    className={`${scenePhotos.has(item.src) ? 'object-cover' : 'object-contain p-[7%] mix-blend-multiply'} transition-transform duration-500 group-hover:scale-[1.025]`}
                  />
                ) : (
                  <span className="absolute inset-0 flex items-end justify-between bg-black p-4 text-left text-white">
                    <span className="text-sm font-medium">{item.label}</span>
                    <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" className="h-7 w-7 text-brand">
                      <path d="m16 3 11 6.25v13.5L16 29 5 22.75V9.25L16 3Z" stroke="currentColor" strokeWidth="1.4" />
                      <path d="m5.5 9.5 10.5 6 10.5-6M16 15.5V29" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                )}
                <span className="absolute top-3 left-3 bg-white px-2 py-1 font-mono text-[8px] tracking-[0.14em] text-black uppercase">
                  {photoIndex ? String(photoIndex).padStart(2, '0') : '3D'}
                </span>
                {index === selected ? <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-brand" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}

      {zoom !== null ? (
        <div role="dialog" aria-modal="true" aria-label={`Zdjęcia: ${name}`} className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95" onClick={close}>
          <div className="relative h-[86svh] w-[92vw] max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image src={photos[zoom].src} alt={photos[zoom].type === 'image' ? photos[zoom].alt : ''} fill sizes="92vw" className="object-contain" />
          </div>
          <span className="absolute top-6 left-[4vw] text-sm text-white/70">
            Zdjęcie {zoom + 1} z {photos.length}
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
