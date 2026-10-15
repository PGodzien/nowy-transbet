import Image from 'next/image';
import Reveal from '@/components/Reveal';
import ThirtyYearsTile from '@/components/ThirtyYearsTile';

// Same set and order as the partner strip on transbet.com.pl.
const partners = [
  { name: 'Budimex', logo: '/budimex-logo.webp' },
  { name: 'POL-AQUA', logo: '/polaqua-logo.webp' },
  { name: 'ERBUD', logo: '/erbud-logo.webp' },
  { name: 'Skanska', logo: '/skanska-logo.webp' },
  { name: 'Inżynieria', logo: '/inzynieria-logo.webp' },
  { name: 'BESTA', logo: '/besta-logo.webp' },
  { name: 'Mostostal Warszawa', logo: '/mostostal-logo.jpg' },
];

export default function TrustedBy() {
  return (
    <section id="partnerzy" className="viewport-section relative border-t border-black/[0.08] bg-[#f6f6f6]">
      <div className="grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%]">
        <div className="flex items-center justify-center">
          <Reveal direction="left">
            <span className="font-mono text-[9px] tracking-[0.2em] text-black/35 [writing-mode:vertical-rl]">
              06 / PARTNERZY
            </span>
          </Reveal>
        </div>

        <div className="col-span-3 flex min-w-0 flex-col">
          <div className="grid flex-1 border-b border-black/[0.08] lg:grid-cols-3">
            <div className="flex min-h-[44svh] items-end px-6 py-10 sm:px-9 md:px-12 lg:col-span-2 lg:min-h-0 lg:border-r lg:border-black/[0.08] lg:py-14">
              <div>
                <Reveal>
                  <p className="mb-6 font-mono text-[9px] tracking-[0.2em] text-black/40 uppercase">
                    / Relacje budowane na lata
                  </p>
                </Reveal>
                <Reveal delay={90}>
                  <h2 className="max-w-[13ch] text-[clamp(2.2rem,4.05vw,4.85rem)] font-medium leading-[0.94] tracking-[-0.042em] text-black">
                    Zaufanie ma konkretny wymiar<span className="text-brand">.</span>
                  </h2>
                </Reveal>
              </div>
            </div>

            <Reveal direction="none" delay={100} className="h-full">
              <div className="flex h-full min-h-48 flex-col justify-between px-6 py-7 sm:px-9 lg:min-h-0 lg:py-10">
                <span className="font-mono text-[9px] tracking-[0.18em] text-black/35 uppercase">
                  Pracujemy z najlepszymi
                </span>
                <p className="max-w-sm text-sm leading-snug text-black/55 sm:text-base">
                  Największe firmy budowlane powierzają nam zadania, w których liczy się jakość, termin i odpowiedzialność.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid min-h-[46svh] grid-cols-2 gap-px bg-black/[0.08] md:grid-cols-3 md:grid-rows-3 lg:min-h-[42svh]">
            {partners.map((partner, index) => (
              <Reveal key={partner.name} direction="none" delay={80 + index * 55} className="h-full">
                <div className="group relative flex h-full min-h-32 items-center justify-center overflow-hidden bg-[#f6f6f6] px-5 transition-colors duration-500 hover:bg-white">
                  <span className="absolute top-4 left-4 font-mono text-[8px] tracking-[0.16em] text-black/25">
                    / {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="relative aspect-[16/9] w-full max-w-64">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-contain mix-blend-multiply grayscale transition-[filter,transform] duration-300 group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal direction="none" delay={500} className="h-full md:col-span-2">
              <ThirtyYearsTile />
            </Reveal>
          </div>
        </div>

        <div />
      </div>
    </section>
  );
}
