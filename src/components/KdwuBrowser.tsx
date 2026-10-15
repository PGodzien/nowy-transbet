'use client';

import { useMemo, useState } from 'react';
import { kdwuPlants } from '@/data/documents';

/* Declarations of performance per plant: tabs for the plants, a search by number, a grid of PDF downloads. */
export default function KdwuBrowser() {
  const [plantId, setPlantId] = useState<string>(kdwuPlants[0].id);
  const [query, setQuery] = useState('');

  const plant = kdwuPlants.find((item) => item.id === plantId) ?? kdwuPlants[0];
  const normalized = query.toLowerCase().replace(/\s+/g, '');
  const docs = useMemo(
    () => plant.docs.filter((doc) => doc.name.toLowerCase().replace(/\s+/g, '').includes(normalized)),
    [plant, normalized],
  );

  return (
    <div>
      {/* Same four columns as the list below on wide screens: three plants and the search. */}
      <div className="grid grid-cols-3 gap-px border-t border-black/10 bg-black/10 lg:grid-cols-4">
        <div role="tablist" aria-label="Zakład" className="col-span-3 grid grid-cols-3 gap-px">
          {kdwuPlants.map((item) => {
            const active = item.id === plant.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setPlantId(item.id)}
                className={[
                  'flex min-h-20 cursor-pointer flex-col items-start justify-center gap-1 px-4 text-left transition-colors sm:px-8',
                  active ? 'bg-black text-white' : 'bg-white text-black hover:bg-[#f6f6f6]',
                ].join(' ')}
              >
                <span className="text-lg font-medium tracking-[-0.02em] sm:text-2xl">{item.city}</span>
                <span className={`font-mono text-[9px] tracking-[0.16em] uppercase ${active ? 'text-brand' : 'text-black/40'}`}>
                  {item.docs.length} deklaracji
                </span>
              </button>
            );
          })}
        </div>
        <label className="col-span-3 flex min-h-20 items-center gap-4 bg-white px-6 sm:px-8 lg:col-span-1">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-black/40">
            <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="sr-only">Szukaj deklaracji</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Szukaj numeru, np. P567C"
            className="w-full bg-transparent text-base outline-none placeholder:text-black/35"
          />
        </label>
      </div>

      <div role="tabpanel" aria-label={`Deklaracje — ${plant.city}`} className="border-t border-black/10">
        {docs.length ? (
          <ul className="grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {docs.map((doc) => (
              <li key={doc.file} className="bg-white">
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-20 items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-black hover:text-white sm:px-8"
                >
                  <span>
                    <span className="block text-base font-medium tracking-[-0.01em]">{doc.name}</span>
                    <span className="mt-1 block font-mono text-[9px] tracking-[0.14em] text-black/40 uppercase group-hover:text-white/50">
                      PDF · {doc.kb} KB
                    </span>
                  </span>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-brand transition-transform group-hover:translate-y-0.5">
                    <path d="M12 4v12M6 11l6 6 6-6M5 20h14" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-6 py-12 text-black/60 sm:px-9 md:px-12">Brak deklaracji pasujących do „{query}”.</p>
        )}
      </div>
    </div>
  );
}
