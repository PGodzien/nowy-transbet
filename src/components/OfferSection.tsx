import Reveal from '@/components/Reveal';

const offers = [
  {
    title: 'Beton towarowy',
    description: 'Mieszanki projektowane pod parametry inwestycji, warunki realizacji i wymagany harmonogram.',
    icon: 'concrete',
  },
  {
    title: 'Prefabrykacja betonowa',
    description: 'Powtarzalne elementy o wysokiej precyzji, produkowane z pełną kontrolą jakości.',
    icon: 'prefab',
  },
  {
    title: 'Laboratorium betonu',
    description: 'Badania mieszanek i składników prowadzone w naszym laboratorium przyzakładowym.',
    icon: 'lab',
  },
  {
    title: 'Sprzęt i wynajem',
    description: 'Nowoczesne zaplecze sprzętowe gotowe do pracy przy najbardziej wymagających realizacjach.',
    icon: 'equipment',
  },
  {
    title: 'Wyroby hutnicze',
    description: 'Stal i wyroby hutnicze dostarczane bezpośrednio we wskazane miejsce inwestycji.',
    icon: 'steel',
  },
  {
    title: 'Kruszywa budowlane',
    description: 'Sprawdzone kruszywa wraz z logistyką dopasowaną do rytmu prowadzonej budowy.',
    icon: 'aggregate',
  },
] as const;

function OfferIcon({ type }: { type: (typeof offers)[number]['icon'] }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.35,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-14 w-14" {...common}>
      {type === 'concrete' && (
        <>
          <path d="M9 38h32l8 7h6v7H9zM15 38V25h15l11 13M30 25l8-7 12 7-9 13" />
          <circle cx="20" cy="52" r="5" /><circle cx="45" cy="52" r="5" />
          <path d="M49 25h6v20" />
        </>
      )}
      {type === 'prefab' && (
        <>
          <path d="M10 19l22-9 22 9-22 9zM10 19v26l22 9 22-9V19M32 28v26" />
          <path d="M17 29l9 3v10l-9-3zM38 31l9-3v11l-9 3z" />
        </>
      )}
      {type === 'lab' && (
        <>
          <path d="M20 9h24M26 9v15L13 48a5 5 0 004 7h30a5 5 0 004-7L38 24V9" />
          <path d="M19 42h26M24 34c5 3 11 3 16 0" />
          <circle cx="32" cy="47" r="2" /><circle cx="39" cy="39" r="1.5" />
        </>
      )}
      {type === 'equipment' && (
        <>
          <path d="M9 45h35l8 7H17zM20 45V21h20v24M24 21l10-10 14 7-8 12" />
          <circle cx="23" cy="52" r="5" /><circle cx="42" cy="52" r="5" />
          <path d="M48 18l6 19-8 3" />
        </>
      )}
      {type === 'steel' && (
        <>
          <path d="M13 13h38v9H38v20h13v9H13v-9h13V22H13z" />
          <path d="M20 18h24M20 46h24M32 23v18" />
        </>
      )}
      {type === 'aggregate' && (
        <>
          <path d="M7 49h50M12 49c5-12 11-17 18-17 6 0 9 4 12 8 6 0 10 3 12 9" />
          <path d="M23 37l4 5M37 37l-3 6M45 43l3 3" />
          <circle cx="17" cy="44" r="1.5" /><circle cx="31" cy="47" r="1.5" />
        </>
      )}
    </svg>
  );
}

export default function OfferSection() {
  return (
    <section id="betoniarnie" className="viewport-section relative border-t border-black/[0.08] bg-white">
      <div className="grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%] lg:h-[100svh]">
        <div className="flex items-center justify-center">
          <Reveal direction="left">
            <span className="font-mono text-[9px] tracking-[0.2em] text-black/35 [writing-mode:vertical-rl]">
              04 / OFERTA
            </span>
          </Reveal>
        </div>

        <div className="col-span-3 flex min-w-0 flex-col">
          <div className="grid min-h-[38svh] border-b border-black/[0.08] lg:min-h-[34svh] lg:grid-cols-3">
            <div className="flex items-end px-6 py-9 sm:px-9 md:px-12 lg:col-span-2 lg:border-r lg:border-black/[0.08] lg:py-12">
              <div>
                <Reveal>
                  <p className="mb-6 font-mono text-[9px] tracking-[0.2em] text-black/40 uppercase">
                    / Kompleksowa oferta produktów betonowych
                  </p>
                </Reveal>
                <Reveal delay={90}>
                  <h2 className="max-w-[13ch] text-[clamp(2.4rem,4.75vw,5.7rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                    Od mieszanki po gotowy element<span className="text-brand">.</span>
                  </h2>
                </Reveal>
              </div>
            </div>

            <Reveal direction="none" delay={120} className="h-full">
              <div className="flex h-full min-h-40 flex-col justify-between px-6 py-7 sm:px-9 lg:min-h-0 lg:py-10">
                <span className="font-mono text-[9px] tracking-[0.18em] text-black/35 uppercase">
                  Jeden partner / wiele możliwości
                </span>
                <p className="max-w-sm text-sm leading-snug text-black/55 sm:text-base">
                  Łączymy produkcję, badania, sprzęt i logistykę, aby skrócić drogę od projektu do realizacji.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid flex-1 md:grid-cols-3 md:grid-rows-2">
            {offers.map((offer, index) => (
              <Reveal key={offer.title} direction="none" delay={70 + index * 55} className="h-full">
                <a
                  href="#kontakt"
                  className={`group relative flex h-full min-h-56 flex-col justify-between overflow-hidden border-b border-black/[0.08] bg-white px-6 py-6 transition-colors duration-500 hover:bg-black hover:text-white sm:px-8 lg:min-h-0 lg:py-5 ${
                    index % 3 !== 2 ? 'md:border-r md:border-black/[0.08]' : ''
                  }`}
                >
                  <span className="absolute top-0 left-0 h-0.5 w-0 bg-brand transition-[width] duration-500 group-hover:w-full" />
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-[8px] tracking-[0.18em] text-black/30 transition-colors group-hover:text-white/35">
                      / {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="scale-90 text-brand transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-100">
                      <OfferIcon type={offer.icon} />
                    </span>
                  </div>

                  <div>
                    <h3 className="max-w-[13ch] text-[clamp(1.45rem,2.2vw,2.35rem)] font-medium leading-[0.94] tracking-[-0.055em]">
                      {offer.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-snug text-black/50 transition-colors group-hover:text-white/55">
                      {offer.description}
                    </p>
                    <span className="mt-4 flex items-center gap-4 font-mono text-[8px] tracking-[0.17em] text-brand uppercase">
                      Dowiedz się więcej
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5">
                        <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div />
      </div>
    </section>
  );
}
