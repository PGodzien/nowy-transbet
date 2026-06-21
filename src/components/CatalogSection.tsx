import Image from 'next/image';
import Reveal from '@/components/Reveal';

function CatalogCover({ className = '', back = false }: { className?: string; back?: boolean }) {
  return (
    <div
      className={`absolute aspect-[0.72] w-[clamp(13rem,22vw,22rem)] overflow-hidden bg-[#e9e9e7] text-black shadow-[0_35px_80px_rgba(0,0,0,0.5)] transition-transform duration-700 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 left-0 w-[7%] bg-gradient-to-r from-black/20 to-transparent" />
      <div className="absolute top-0 right-0 h-[24%] w-[42%] bg-brand" />
      <div className="absolute top-[24%] left-[14%] h-[45%] w-[58%] overflow-hidden">
        <Image
          src="/beton.jpg"
          alt=""
          fill
          sizes="22vw"
          className="object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-brand/55 mix-blend-multiply" />
      </div>
      <div className="absolute top-[6%] left-[13%]">
        <span className="block text-[clamp(1.15rem,2vw,2rem)] font-bold tracking-[-0.055em] text-brand uppercase">
          Transbet
        </span>
        <span className="mt-1 block font-mono text-[7px] tracking-[0.2em] text-black/45 uppercase">
          Industrial Group
        </span>
      </div>
      <div className="absolute right-[8%] bottom-[7%] left-[13%]">
        <span className="mb-3 block h-1 w-10 bg-brand" />
        <p className="text-[clamp(1.05rem,2vw,1.9rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
          Katalog
          <br />
          produktów
        </p>
        {!back && (
          <p className="mt-3 font-mono text-[6px] tracking-[0.14em] text-black/40 uppercase">
            Beton · Prefabrykaty · Stal
          </p>
        )}
      </div>
    </div>
  );
}

export default function CatalogSection() {
  return (
    <section id="katalog" className="viewport-section relative border-t border-black/10 bg-white">
      <div className="grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%]">
        <div className="flex items-center justify-center border-r border-black/10">
          <Reveal direction="left">
            <span className="font-mono text-[9px] tracking-[0.2em] text-black/35 [writing-mode:vertical-rl]">
              03 / KATALOG
            </span>
          </Reveal>
        </div>

        <div className="relative col-span-3 min-h-[100svh] overflow-hidden bg-black text-white">
          <Image
            src="/beton.jpg"
            alt="Produkcja betonu Transbet"
            fill
            sizes="92vw"
            className="object-cover opacity-25 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/35" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.13] mix-blend-screen"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative z-10 grid min-h-[100svh] lg:grid-cols-3">
            <div className="flex min-h-[52svh] flex-col justify-between border-b border-white/15 px-5 py-8 sm:px-8 md:px-10 lg:min-h-0 lg:border-r lg:border-b-0 lg:py-12">
              <Reveal>
                <div>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/45 uppercase">
                    Transbet / Oferta 2026
                  </span>
                  <span className="mt-5 block h-1 w-12 bg-brand" />
                </div>
              </Reveal>

              <div>
                <Reveal delay={80}>
                  <h2 className="max-w-[8ch] text-[clamp(2.4rem,4.75vw,5.7rem)] font-medium leading-[0.84] tracking-[-0.065em]">
                    Katalog produktów<span className="text-brand">.</span>
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/55 sm:text-base">
                    Beton towarowy, prefabrykaty oraz rozwiązania dla najbardziej wymagających inwestycji — zebrane w jednym miejscu.
                  </p>
                </Reveal>
                <Reveal delay={240}>
                  <a
                    href="#kontakt"
                    className="group mt-8 flex min-h-20 items-center justify-between bg-brand px-6 text-black transition-colors hover:bg-brand-hover"
                  >
                    <span>
                      <span className="block font-mono text-[8px] tracking-[0.18em] text-black/45 uppercase">
                        Pełna oferta
                      </span>
                      <span className="mt-1 block text-xl font-semibold tracking-[-0.04em]">
                        Pobierz katalog
                      </span>
                    </span>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-1.5">
                      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </a>
                </Reveal>
              </div>
            </div>

            <div className="relative min-h-[64svh] overflow-hidden lg:col-span-2 lg:min-h-0">
              <Reveal direction="none" delay={180} className="absolute inset-0">
                <div className="absolute inset-0">
                  <CatalogCover back className="top-[23%] left-[12%] -rotate-[9deg] lg:top-[25%] lg:left-[16%]" />
                  <CatalogCover className="top-[8%] right-[5%] rotate-[7deg] lg:top-[7%] lg:right-[9%]" />
                </div>
              </Reveal>

              <div className="absolute top-7 right-6 text-right font-mono text-[8px] leading-relaxed tracking-[0.18em] text-white/45 uppercase sm:right-8 lg:top-12 lg:right-10">
                <span className="block">Od 1993</span>
                <span className="block">Jakość w każdym detalu</span>
              </div>

              <div className="absolute right-0 bottom-0 left-0 grid grid-cols-2 border-t border-white/15 bg-black/25 backdrop-blur-sm">
                <div className="border-r border-white/15 px-5 py-5 sm:px-8">
                  <span className="font-mono text-[8px] tracking-[0.16em] text-white/35 uppercase">Format</span>
                  <p className="mt-2 text-sm text-white/75">PDF / wersja cyfrowa</p>
                </div>
                <div className="px-5 py-5 sm:px-8">
                  <span className="font-mono text-[8px] tracking-[0.16em] text-white/35 uppercase">Zakres</span>
                  <p className="mt-2 text-sm text-white/75">Produkty i specyfikacje</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l border-black/10" />
      </div>
    </section>
  );
}
