import Image from 'next/image';
import Reveal from '@/components/Reveal';

const concretePlants = [
  {
    city: 'Przemyśl',
    address: 'Topolowa 5, 37-700 Przemyśl',
    phone: '+48 888 839 617',
    phoneHref: 'tel:+48888839617',
  },
  {
    city: 'Jarosław',
    address: 'Budowlanych 8, 37-500 Jarosław',
    phone: '+48 660 788 125',
    phoneHref: 'tel:+48660788125',
  },
  {
    city: 'Radymno',
    address: 'Kościuszki 2a, 37-550 Radymno',
    phone: '+48 660 788 125',
    phoneHref: 'tel:+48660788125',
  },
] as const;

const directions = [
  {
    eyebrow: 'Transbet',
    title: 'Prefabrykacja betonowa',
    text: 'Prefabrykaty dla infrastruktury, przemysłu i inwestycji realizowanych według indywidualnej dokumentacji.',
    href: 'https://transbet.com.pl/prefabrykacja-betonowa',
    image: '/prefabrykaty.jpg',
    external: false,
    meta: 'Oferta Transbet',
  },
  {
    eyebrow: 'Steeltrans',
    title: 'Prefabrykacja zbrojeniowa',
    text: 'Cięcie, gięcie i spawanie stali. Prefabrykaty zbrojeniowe gotowe do montażu na budowie.',
    href: 'https://zbrojeniebudowlane.pl/',
    image: '/background.jpg',
    external: true,
    meta: 'Osobny serwis',
  },
  {
    eyebrow: 'Transbet TCS',
    title: 'Budownictwo tunelowe',
    text: 'Prefabrykacja segmentów, klatki zbrojeniowe oraz wyspecjalizowane zespoły wspierające obsługę maszyn TBM.',
    href: 'https://transbettcs.com/',
    image: '/tunele.jpg',
    external: true,
    meta: 'Osobny serwis',
  },
] as const;

function Arrow({ external = false }: { external?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      {external ? (
        <path d="M8 16L16 8M9 8h7v7" stroke="currentColor" strokeWidth="1.4" />
      ) : (
        <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
      )}
    </svg>
  );
}

function Grain({ dark = true }: { dark?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${dark ? 'opacity-[0.13] mix-blend-screen' : 'opacity-[0.07] mix-blend-multiply'}`}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

export default function BusinessSections() {
  return (
    <>
      <section
        id="betoniarnie"
        aria-labelledby="betoniarnie-title"
        className="viewport-section relative overflow-hidden border-t border-white/10 bg-black text-white"
      >
        <span id="about1" className="pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" />

        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          poster="/beton.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        >
          <source src="/transbet_background_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,transparent_0,rgba(0,0,0,0.18)_38%,rgba(0,0,0,0.78)_82%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
        <Grain />

        <div className="relative grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%] lg:h-[100svh]">
          <div className="flex items-center justify-center">
            <Reveal direction="left">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/35 [writing-mode:vertical-rl]">
                02 / BETONIARNIE
              </span>
            </Reveal>
          </div>

          <div className="col-span-3 flex min-w-0 flex-col border-x border-white/12">
            <div className="flex min-h-[70svh] flex-1 flex-col justify-between px-6 py-9 sm:px-9 md:px-12 lg:min-h-0 lg:py-12">
              <Reveal>
                <div className="flex items-center justify-between gap-6">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/45 uppercase">/ Beton towarowy</span>
                  <span className="font-mono text-[8px] tracking-[0.16em] text-white/35 uppercase">Podkarpacie / od 1993</span>
                </div>
              </Reveal>

              <div className="py-16 lg:py-8">
                <Reveal delay={80}>
                  <h2 id="betoniarnie-title" className="max-w-[14ch] text-[clamp(2.5rem,4.8vw,5.7rem)] font-medium leading-[0.98] tracking-[-0.048em]">
                    Beton blisko Twojej budowy<span className="text-brand">.</span>
                  </h2>
                </Reveal>

                <Reveal delay={160}>
                  <div className="mt-9 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                      Produkujemy mieszanki dopasowane do parametrów inwestycji i dostarczamy je z trzech lokalnych węzłów — sprawnie, terminowo i w każdych warunkach.
                    </p>
                    <a
                      href="https://transbet.com.pl/beton"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex w-full max-w-sm items-center justify-between border-t border-white/25 pt-5 text-sm font-semibold"
                    >
                      Poznaj ofertę betonu
                      <span className="text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <Arrow external />
                      </span>
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={220}>
                <p className="font-mono text-[8px] tracking-[0.18em] text-white/35 uppercase">
                  Produkcja / transport / kontrola jakości — jeden proces, jedna odpowiedzialność
                </p>
              </Reveal>
            </div>

            <div className="grid border-t border-white/15 md:grid-cols-3">
              {concretePlants.map((plant, index) => (
                <Reveal key={plant.city} direction="none" delay={60 + index * 60} className="h-full">
                  <article className={`group flex min-h-44 flex-col justify-between border-b border-white/12 bg-black/25 px-6 py-6 backdrop-blur-sm transition-colors hover:bg-brand hover:text-black sm:px-8 md:border-b-0 ${index < 2 ? 'md:border-r md:border-white/15' : ''}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] tracking-[0.18em] text-white/35 transition-colors group-hover:text-black/45">/ 0{index + 1}</span>
                      <span className="text-brand transition-colors group-hover:text-black"><Arrow /></span>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-[clamp(1.55rem,2.35vw,2.7rem)] font-medium leading-none tracking-[-0.04em]">{plant.city}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-white/45 transition-colors group-hover:text-black/65">{plant.address}</p>
                      <a href={plant.phoneHref} className="mt-3 inline-block text-sm font-semibold transition-colors hover:text-white group-hover:hover:text-black/70">
                        {plant.phone}
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div />
        </div>
      </section>

      <section
        id="obszary-dzialalnosci"
        aria-labelledby="obszary-title"
        className="relative overflow-hidden border-t border-black/10 bg-[#f3f1ec] text-black"
      >
        <Grain dark={false} />

        <div className="relative mx-[4vw] border-x border-black/10">
          <div className="grid border-b border-black/10 px-6 py-10 sm:px-9 md:px-12 lg:grid-cols-3 lg:py-12">
            <div className="lg:col-span-2">
              <Reveal>
                <p className="font-mono text-[9px] tracking-[0.2em] text-black/40 uppercase">
                  / Pozostałe obszary działalności
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2
                  id="obszary-title"
                  className="mt-5 max-w-[13ch] text-[clamp(2.5rem,5vw,6rem)] font-medium leading-[0.9] tracking-[-0.05em]"
                >
                  Znajdź właściwy kierunek<span className="text-brand">.</span>
                </h2>
              </Reveal>
            </div>

            <Reveal delay={140} className="mt-7 flex items-end lg:mt-0">
              <p className="max-w-sm text-sm leading-relaxed text-black/55 sm:text-base">
                Beton rozwijamy tutaj. Pozostałe specjalizacje mają własne podstrony lub dedykowane serwisy, żebyś od razu trafił do właściwej oferty.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-px bg-white/14 lg:grid-cols-3">
            {directions.map((direction, index) => (
              <Reveal key={direction.title} direction="none" delay={70 + index * 70} className="h-full">
                <a
                  id={index === 0 ? 'prefabrykaty-betonowe' : index === 1 ? 'prefabrykaty-zbrojeniowe' : 'budowa-tuneli'}
                  href={direction.href}
                  target={direction.external ? '_blank' : undefined}
                  rel={direction.external ? 'noreferrer' : undefined}
                  className="group relative flex h-full min-h-[27rem] overflow-hidden bg-black p-7 text-white sm:p-9 lg:min-h-[31rem] lg:p-10"
                >
                  <Image
                    src={direction.image}
                    alt=""
                    fill
                    aria-hidden="true"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover grayscale transition-[transform,filter] duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 ease-out group-hover:opacity-0" />

                  <div className="relative z-10 flex w-full flex-col justify-between transition-transform duration-500 ease-out group-hover:-translate-y-1">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="font-mono text-[9px] tracking-[0.2em] text-brand uppercase">{direction.eyebrow}</p>
                        <p className="mt-3 font-mono text-[8px] tracking-[0.16em] text-white/40 uppercase transition-colors duration-500 group-hover:text-white/55">{direction.meta}</p>
                      </div>
                      <span className="text-brand transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
                        <Arrow external={direction.external} />
                      </span>
                    </div>

                    <div className="mt-20">
                      <h3 className="max-w-[12ch] text-[clamp(2rem,3vw,3.6rem)] font-medium leading-[0.9] tracking-[-0.045em]">
                        {direction.title}
                      </h3>
                      <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55 transition-colors duration-500 group-hover:text-white/70 sm:text-base">{direction.text}</p>
                      <span className="mt-8 flex items-center justify-between border-t border-white/20 pt-5 text-sm font-semibold">
                        {direction.external ? 'Przejdź do serwisu' : 'Zobacz prefabrykację'}
                        <span className="text-brand transition-transform duration-500 ease-out group-hover:translate-x-1">
                          <Arrow external={direction.external} />
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
