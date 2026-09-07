import Reveal from '@/components/Reveal';

const offers = [
  {
    title: 'Beton towarowy',
    description: 'Mieszanki projektowane pod parametry inwestycji, warunki realizacji i wymagany harmonogram.',
    icon: 'concrete',
    tag: 'Produkcja',
  },
  {
    title: 'Prefabrykacja betonowa',
    description: 'Powtarzalne elementy o wysokiej precyzji, produkowane z pełną kontrolą jakości.',
    icon: 'prefab',
    tag: 'Prefabrykacja',
  },
  {
    title: 'Laboratorium betonu',
    description: 'Badania mieszanek i składników prowadzone w naszym laboratorium przyzakładowym.',
    icon: 'lab',
    tag: 'Kontrola jakości',
  },
  {
    title: 'Sprzęt i wynajem',
    description: 'Nowoczesne zaplecze sprzętowe gotowe do pracy przy najbardziej wymagających realizacjach.',
    icon: 'equipment',
    tag: 'Zaplecze',
  },
  {
    title: 'Wyroby hutnicze',
    description: 'Stal i wyroby hutnicze dostarczane bezpośrednio we wskazane miejsce inwestycji.',
    icon: 'steel',
    tag: 'Dostawy',
  },
  {
    title: 'Kruszywa budowlane',
    description: 'Sprawdzone kruszywa wraz z logistyką dopasowaną do rytmu prowadzonej budowy.',
    icon: 'aggregate',
    tag: 'Logistyka',
  },
] as const;

function OfferIcon({ type }: { type: (typeof offers)[number]['icon'] }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-11 w-11" {...common}>
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

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function OfferSection() {
  return (
    <section id="oferta" className="viewport-section relative border-t border-black/10 bg-[#f6f5f2]">
      <div className="grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%]">
        <div className="flex items-center justify-center">
          <Reveal direction="left">
            <span className="font-mono text-[9px] tracking-[0.2em] text-black/35 [writing-mode:vertical-rl]">
              08 / OFERTA
            </span>
          </Reveal>
        </div>

        <div className="col-span-3 flex min-w-0 flex-col border-x border-black/10">
          <div className="grid min-h-[32svh] border-b border-black/10 lg:grid-cols-3">
            <div className="flex items-end px-6 py-9 sm:px-9 md:px-12 lg:col-span-2 lg:border-r lg:border-black/10 lg:py-11">
              <div>
                <Reveal>
                  <p className="mb-5 font-mono text-[9px] tracking-[0.2em] text-black/40 uppercase">
                    / Kompleksowa oferta produktów betonowych
                  </p>
                </Reveal>
                <Reveal delay={90}>
                  <h2 className="max-w-[13ch] text-[clamp(2.2rem,4.05vw,4.85rem)] font-medium leading-[0.94] tracking-[-0.042em]">
                    Od mieszanki po gotowy element<span className="text-brand">.</span>
                  </h2>
                </Reveal>
              </div>
            </div>

            <Reveal direction="none" delay={120} className="h-full">
              <div className="flex h-full min-h-44 flex-col justify-between px-6 py-7 sm:px-9 lg:min-h-0 lg:py-9">
                <div className="flex items-start justify-between gap-5">
                  <span className="font-mono text-[9px] tracking-[0.18em] text-black/35 uppercase">
                    Jeden partner / wiele możliwości
                  </span>
                  <span className="grid h-9 w-9 place-items-center border border-black/10 text-brand">
                    <span className="h-2 w-2 bg-brand" />
                  </span>
                </div>
                <div>
                  <p className="max-w-sm text-sm leading-relaxed text-black/55 sm:text-base">
                    Łączymy produkcję, badania, sprzęt i logistykę, aby skrócić drogę od projektu do realizacji.
                  </p>
                  <div className="mt-6 flex gap-7 border-t border-black/10 pt-5">
                    <span>
                      <span className="block text-2xl font-medium tracking-[-0.04em]">06</span>
                      <span className="mt-1 block font-mono text-[8px] tracking-[0.15em] text-black/35 uppercase">kompetencji</span>
                    </span>
                    <span>
                      <span className="block text-2xl font-medium tracking-[-0.04em]">01</span>
                      <span className="mt-1 block font-mono text-[8px] tracking-[0.15em] text-black/35 uppercase">partner</span>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid flex-1 md:grid-cols-3 md:grid-rows-2">
            {offers.map((offer, index) => (
              <Reveal key={offer.title} direction="none" delay={70 + index * 55} className="h-full">
                <a
                  href="#kontakt"
                  className={`group relative flex h-full min-h-64 flex-col justify-between overflow-hidden border-b border-black/10 bg-[#f6f5f2] px-6 py-6 transition-[background-color,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#111] hover:text-white sm:px-8 lg:min-h-[17rem] ${index % 3 !== 2 ? 'md:border-r md:border-black/10' : ''}`}
                >
                  <span className="pointer-events-none absolute -right-2 -bottom-10 select-none font-mono text-[clamp(6rem,10vw,10rem)] font-medium leading-none tracking-[-0.08em] text-black/[0.025] transition-[color,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:text-white/[0.035]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

                  <div className="relative z-10 flex items-start justify-between gap-6">
                    <div>
                      <span className="font-mono text-[8px] tracking-[0.18em] text-black/30 transition-colors duration-500 group-hover:text-white/35">
                        / {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="mt-2 block font-mono text-[8px] tracking-[0.17em] text-black/35 uppercase transition-colors duration-500 group-hover:text-white/40">
                        {offer.tag}
                      </span>
                    </div>

                    <span className="grid h-16 w-16 shrink-0 place-items-center border border-black/10 text-brand transition-[transform,border-color,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:border-brand/60 group-hover:bg-brand/5">
                      <OfferIcon type={offer.icon} />
                    </span>
                  </div>

                  <div className="relative z-10 mt-14 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5">
                    <h3 className="max-w-[13ch] text-[clamp(1.55rem,2.15vw,2.35rem)] font-medium leading-[0.95] tracking-[-0.04em]">
                      {offer.title}
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/50 transition-colors duration-500 group-hover:text-white/55">
                      {offer.description}
                    </p>

                    <span className="mt-7 flex items-center justify-between border-t border-black/10 pt-4 transition-colors duration-500 group-hover:border-white/14">
                      <span className="font-mono text-[8px] tracking-[0.17em] text-brand uppercase">Dowiedz się więcej</span>
                      <span className="text-brand transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5">
                        <Arrow />
                      </span>
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
