'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Reveal from '@/components/Reveal';

export type NewsCard = {
  slug: string;
  title: string;
  description: string;
  category: string;
  dateLabel: string;
  coverSrc: string;
};

const ALL = 'Wszystkie';

/* News archive: category filter (kept in ?kategoria= so a filtered list can be shared) and one even grid of posts, newest first. */
export default function NewsList({ posts, categories }: { posts: NewsCard[]; categories: readonly string[] }) {
  const [category, setCategory] = useState<string>(ALL);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('kategoria');
    if (fromUrl && categories.includes(fromUrl)) setCategory(fromUrl);
  }, [categories]);

  function choose(next: string) {
    setCategory(next);
    const url = new URL(window.location.href);
    if (next === ALL) url.searchParams.delete('kategoria');
    else url.searchParams.set('kategoria', next);
    history.replaceState(null, '', url);
  }

  const visible = category === ALL ? posts : posts.filter((post) => post.category === category);
  const counts = Object.fromEntries(categories.map((c) => [c, posts.filter((post) => post.category === c).length]));

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 border-b border-black/10 px-6 py-6 sm:px-9 md:px-12">
        <span className="mr-3 font-mono text-[9px] tracking-[0.2em] text-black/40 uppercase">/ Kategoria</span>
        {[ALL, ...categories].map((item) => {
          const active = item === category;
          return (
            <button
              key={item}
              type="button"
              onClick={() => choose(item)}
              aria-pressed={active}
              className={[
                'cursor-pointer border px-3.5 py-2 text-sm transition-colors',
                active ? 'border-black bg-black text-white' : 'border-black/15 text-black hover:border-black/40',
              ].join(' ')}
            >
              {item}
              <span className={`ml-2 font-mono text-[10px] ${active ? 'text-white/60' : 'text-black/40'}`}>
                {item === ALL ? posts.length : counts[item]}
              </span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? <p className="px-6 py-16 text-black/60 sm:px-9 md:px-12">Brak wpisów w tej kategorii.</p> : null}

      {visible.length > 0 ? (
        <div className="grid gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((post, index) => (
            <Reveal key={post.slug} direction="none" delay={(index % 3) * 60} className="h-full">
              <a href={`/aktualnosci/${post.slug}`} data-curtain-label={post.title} className="group flex h-full flex-col bg-white transition-colors hover:bg-[#f6f6f6]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#f6f6f6]">
                  <Image
                    src={post.coverSrc}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 31vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 border-t border-black/10 px-6 py-6 sm:px-8">
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.18em] text-black/45 uppercase">
                      / {post.category} · {post.dateLabel}
                    </span>
                    <h3 className="mt-4 text-[clamp(1.25rem,1.6vw,1.6rem)] font-medium leading-[1.08] tracking-[-0.03em]">{post.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-black/55">{post.description}</p>
                  </div>
                  <span className="flex items-center gap-3 font-mono text-[9px] tracking-[0.16em] text-brand uppercase">
                    Czytaj wpis
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5">
                      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      ) : null}
    </>
  );
}
