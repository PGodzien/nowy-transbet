import Image from 'next/image';
import Reveal from '@/components/Reveal';

const stories = [
  {
    category: 'Infrastruktura',
    title: 'Tunele kolejowe LK622 Szczyrzyc–Tymbark',
    description: 'Transbet TCS odpowiada za kompleksową produkcję klatek zbrojeniowych do obudowy tuneli drążonych.',
    image: '/news-02.jpg',
  },
  {
    category: 'Firma',
    title: 'Transbet dołącza do Polskiego Klastra Budowlanego',
    description: 'Transbet Betoniarnie Grochowicz został członkiem Polskiego Klastra Budowlanego.',
    image: '/news-01.jpg',
  },
  {
    category: 'Wydarzenia',
    title: 'Transbet na WTC 2026 w Montrealu',
    description: 'Bierzemy udział w jednym z najważniejszych wydarzeń dla branży tunelowej.',
    image: '/news-03.jpg',
  },
] as const;

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5">
      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function NewsSection() {
  const [featured, ...secondary] = stories;

  return (
    <section id="aktualnosci" className="viewport-section relative border-t border-black/[0.08] bg-white">
      <div className="grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%] lg:h-[100svh]">
        <div className="flex items-center justify-center">
          <Reveal direction="left">
            <span className="font-mono text-[9px] tracking-[0.2em] text-black/35 [writing-mode:vertical-rl]">
              09 / AKTUALNOŚCI
            </span>
          </Reveal>
        </div>

        <div className="col-span-3 flex min-w-0 flex-col">
          <div className="grid min-h-[30svh] border-b border-black/[0.08] lg:grid-cols-3">
            <div className="flex items-end px-6 py-9 sm:px-9 md:px-12 lg:col-span-2 lg:border-r lg:border-black/[0.08] lg:py-11">
              <div>
                <Reveal>
                  <p className="mb-6 font-mono text-[9px] tracking-[0.2em] text-black/40 uppercase">
                    / Z życia grupy
                  </p>
                </Reveal>
                <Reveal delay={90}>
                  <h2 className="max-w-[12ch] text-[clamp(2.2rem,4.05vw,4.85rem)] font-medium leading-[0.94] tracking-[-0.042em]">
                    To, nad czym pracujemy teraz<span className="text-brand">.</span>
                  </h2>
                </Reveal>
              </div>
            </div>

            <Reveal direction="none" delay={120} className="h-full">
              <a
                href="#"
                className="group flex h-full min-h-36 flex-col justify-between px-6 py-7 transition-colors hover:bg-zinc-50 sm:px-9 lg:min-h-0 lg:py-10"
              >
                <span className="font-mono text-[9px] tracking-[0.18em] text-black/35 uppercase">
                  Archiwum
                </span>
                <span className="flex items-center justify-between text-lg font-medium tracking-[-0.02em]">
                  Wszystkie aktualności
                  <Arrow />
                </span>
              </a>
            </Reveal>
          </div>

          <div className="grid flex-1 lg:min-h-0 lg:grid-cols-3">
            <Reveal direction="none" className="h-full lg:col-span-2">
              <a href="#" className="group relative block h-full min-h-[62svh] overflow-hidden border-b border-black/[0.08] lg:min-h-0 lg:border-r lg:border-b-0 lg:border-black/[0.08]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 92vw, 61vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/5" />
                <div className="absolute inset-x-0 bottom-0 px-6 py-8 text-white sm:px-9 md:px-12 lg:py-10">
                  <span className="font-mono text-[8px] tracking-[0.18em] text-white/55 uppercase">
                    / 01 {featured.category}
                  </span>
                  <div className="mt-5 flex items-end justify-between gap-8">
                    <div>
                      <h3 className="max-w-[18ch] text-[clamp(1.7rem,2.75vw,3.25rem)] font-medium leading-[0.98] tracking-[-0.034em]">
                        {featured.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-snug text-white/60">
                        {featured.description}
                      </p>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center border border-white/40 transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-black">
                      <Arrow />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>

            <div className="grid min-h-[60svh] grid-rows-2 lg:h-full lg:min-h-0 lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
              {secondary.map((story, index) => (
                <Reveal key={story.title} direction="none" delay={110 + index * 80} className="min-h-0 h-full overflow-hidden">
                  <a
                    href="#"
                    className={`group flex h-full min-h-0 flex-col justify-between overflow-hidden border-b border-black/[0.08] px-6 py-7 transition-colors hover:bg-zinc-50 sm:px-8 lg:px-9 lg:py-7 ${index === secondary.length - 1 ? 'lg:border-b-0' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <span className="font-mono text-[8px] tracking-[0.17em] text-black/35 uppercase">
                        / 0{index + 2} {story.category}
                      </span>
                      <span className="text-brand">
                        <Arrow />
                      </span>
                    </div>

                    <div className="mt-6 min-w-0">
                      <h3 className="max-w-[15ch] text-[clamp(1.45rem,2vw,2.35rem)] font-medium leading-[0.96] tracking-[-0.038em]">
                        {story.title}
                      </h3>
                      <p className="mt-4 line-clamp-2 max-w-md text-sm leading-relaxed text-black/45">
                        {story.description}
                      </p>
                      <span className="mt-5 flex items-center gap-3 font-mono text-[8px] tracking-[0.16em] text-brand uppercase">
                        Czytaj więcej <Arrow />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div />
      </div>
    </section>
  );
}
