import Image from 'next/image';
import Reveal from '@/components/Reveal';

const stories = [
  {
    category: 'Infrastruktura',
    title: 'Tunele kolejowe LK622 Szczyrzyc–Tymbark',
    description: 'Produkcja klatek zbrojeniowych dla jednej z najważniejszych inwestycji kolejowych w regionie.',
    image: '/tunele.jpg',
  },
  {
    category: 'Firma',
    title: 'Transbet dołącza do Polskiego Klastra Budowlanego',
    description: 'Współpraca, wymiana wiedzy i nowe możliwości dla całej grupy.',
    image: '/background.jpg',
  },
  {
    category: 'Technologia',
    title: 'Nowe możliwości produkcji prefabrykatów',
    description: 'Rozwijamy zaplecze dla bardziej wymagających realizacji.',
    image: '/prefabrykaty.jpg',
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
              05 / AKTUALNOŚCI
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
                  <h2 className="max-w-[12ch] text-[clamp(2.4rem,4.75vw,5.7rem)] font-medium leading-[0.88] tracking-[-0.065em]">
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
                <span className="flex items-center justify-between text-lg font-medium tracking-[-0.035em]">
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
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/5" />
                <div className="absolute inset-x-0 bottom-0 px-6 py-8 text-white sm:px-9 md:px-12 lg:py-10">
                  <span className="font-mono text-[8px] tracking-[0.18em] text-white/55 uppercase">
                    / 01 {featured.category}
                  </span>
                  <div className="mt-5 flex items-end justify-between gap-8">
                    <div>
                      <h3 className="max-w-[17ch] text-[clamp(1.8rem,3.2vw,3.8rem)] font-medium leading-[0.93] tracking-[-0.055em]">
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

            <div className="grid lg:grid-rows-2">
              {secondary.map((story, index) => (
                <Reveal key={story.title} direction="none" delay={110 + index * 80} className="h-full">
                  <a
                    href="#"
                    className={`group grid h-full min-h-60 grid-cols-[38%_1fr] overflow-hidden border-b border-black/[0.08] transition-colors hover:bg-zinc-50 lg:min-h-0 ${index === secondary.length - 1 ? 'lg:border-b-0' : ''}`}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        sizes="(max-width: 1024px) 38vw, 13vw"
                        className="object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.05] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                    </div>
                    <div className="flex min-w-0 flex-col justify-between px-5 py-6 sm:px-7">
                      <span className="font-mono text-[8px] tracking-[0.17em] text-black/35 uppercase">
                        / 0{index + 2} {story.category}
                      </span>
                      <div>
                        <h3 className="text-[clamp(1.1rem,1.65vw,1.75rem)] font-medium leading-[0.98] tracking-[-0.045em]">
                          {story.title}
                        </h3>
                        <p className="mt-3 line-clamp-2 text-xs leading-snug text-black/45">
                          {story.description}
                        </p>
                        <span className="mt-4 flex items-center gap-3 font-mono text-[8px] tracking-[0.16em] text-brand uppercase">
                          Czytaj więcej <Arrow />
                        </span>
                      </div>
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
