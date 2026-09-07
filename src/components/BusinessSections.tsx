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

const reinforcementAdvantages = [
  ['06–40 mm', 'Zakres średnic prętów'],
  ['Automatyzacja', 'Nowoczesne giętarki i automaty'],
  ['PL + Europa', 'Dostawy na wielu rynkach'],
  ['Doradztwo', 'Wsparcie na każdym etapie'],
] as const;

const concreteProducts = [
  ['Infrastruktura drogowa', 'Elementy dla dróg, placów, odwodnień i inwestycji liniowych.'],
  ['Budownictwo przemysłowe', 'Prefabrykaty dla hal, obiektów produkcyjnych i infrastruktury technicznej.'],
  ['Hydrotechnika', 'Elementy do odwodnień, przepustów i zabezpieczeń infrastruktury wodnej.'],
  ['Na zamówienie', 'Produkcja według dokumentacji i parametrów konkretnej inwestycji.'],
] as const;

const tunnelServices = [
  {
    title: 'Prefabrykacja tubingów',
    text: 'Kompleksowa obsługa zakładów prefabrykacji obudowy tunelowej.',
  },
  {
    title: 'Klatki zbrojeniowe',
    text: 'Spawanie zbrojeń segmentów tunelowych i ścian szczelinowych.',
  },
  {
    title: 'Obsługa TBM',
    text: 'Doświadczone zespoły operatorów i wsparcie budowy tuneli 24/7.',
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
      className={`pointer-events-none absolute inset-0 ${dark ? 'opacity-[0.13] mix-blend-screen' : 'opacity-[0.08] mix-blend-multiply'}`}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitchTiles'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")",
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
        className="viewport-section relative overflow-hidden border-t border-black/10 bg-[#f1efe9] text-black"
      >
        <span id="about1" className="pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" />
        <Image
          src="/beton.jpg"
          alt=""
          fill
          aria-hidden="true"
          sizes="100vw"
          className="pointer-events-none object-cover object-center opacity-[0.22] grayscale"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(241,239,233,0.99)_0%,rgba(241,239,233,0.96)_38%,rgba(241,239,233,0.72)_68%,rgba(241,239,233,0.84)_100%)]" />
        <Grain dark={false} />

        <div className="relative grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%] lg:h-[100svh]">
          <div className="flex items-center justify-center">
            <Reveal direction="left">
              <span className="font-mono text-[9px] tracking-[0.2em] text-black/35 [writing-mode:vertical-rl]">02 / BETONIARNIE</span>
            </Reveal>
          </div>

          <div className="col-span-3 flex min-w-0 flex-col border-x border-black/10">
            <div className="flex min-h-[70svh] flex-1 flex-col justify-between px-6 py-9 sm:px-9 md:px-12 lg:min-h-0 lg:py-12">
              <Reveal>
                <div className="flex items-center justify-between gap-6">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-black/45 uppercase">/ Beton towarowy</span>
                  <span className="font-mono text-[8px] tracking-[0.16em] text-black/35 uppercase">Podkarpacie / od 1993</span>
                </div>
              </Reveal>

              <div className="py-16 lg:py-8">
                <Reveal delay={80}>
                  <h2 id="betoniarnie-title" className="max-w-[10ch] text-[clamp(3.2rem,8vw,9.8rem)] font-medium leading-[0.82] tracking-[-0.06em]">
                    Beton blisko Twojej budowy<span className="text-brand">.</span>
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <div className="mt-9 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <p className="max-w-xl text-base leading-relaxed text-black/58 sm:text-lg">
                      Produkujemy mieszanki dopasowane do parametrów inwestycji i dostarczamy je z trzech lokalnych węzłów — sprawnie, terminowo i w każdych warunkach.
                    </p>
                    <a
                      href="https://transbet.com.pl/beton"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex w-full max-w-sm items-center justify-between border-t border-black/25 pt-5 text-sm font-semibold"
                    >
                      Poznaj ofertę betonu
                      <span className="text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><Arrow external /></span>
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={220}>
                <p className="font-mono text-[8px] tracking-[0.18em] text-black/35 uppercase">
                  Produkcja / transport / kontrola jakości — jeden proces, jedna odpowiedzialność
                </p>
              </Reveal>
            </div>

            <div className="grid border-t border-black/15 md:grid-cols-3">
              {concretePlants.map((plant, index) => (
                <Reveal key={plant.city} direction="none" delay={60 + index * 60} className="h-full">
                  <article className={`group flex min-h-44 flex-col justify-between border-b border-black/12 bg-white/15 px-6 py-6 backdrop-blur-[2px] transition-colors hover:bg-white/60 sm:px-8 md:border-b-0 ${index < 2 ? 'md:border-r md:border-black/15' : ''}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] tracking-[0.18em] text-black/35">/ 0{index + 1}</span>
                      <span className="text-brand transition-transform duration-300 group-hover:translate-x-1"><Arrow /></span>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-[clamp(1.55rem,2.35vw,2.7rem)] font-medium leading-none tracking-[-0.04em]">{plant.city}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-black/45">{plant.address}</p>
                      <a href={plant.phoneHref} className="mt-3 inline-block text-sm font-semibold transition-colors hover:text-brand">{plant.phone}</a>
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
        id="prefabrykaty-zbrojeniowe"
        aria-labelledby="zbrojenia-title"
        className="viewport-section relative overflow-hidden border-t border-white/10 bg-black text-white"
      >
        <span id="about2" className="pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" />
        <Image
          src="/tunele.jpg"
          alt=""
          fill
          aria-hidden="true"
          sizes="100vw"
          className="pointer-events-none object-cover object-center opacity-35 grayscale"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,transparent_0,rgba(0,0,0,0.32)_38%,rgba(0,0,0,0.9)_82%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/60" />
        <Grain />

        <div className="relative grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%] lg:h-[100svh]">
          <div className="flex items-center justify-center">
            <Reveal direction="left">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/35 [writing-mode:vertical-rl]">03 / ZBROJENIA</span>
            </Reveal>
          </div>

          <div className="col-span-3 flex min-w-0 flex-col border-x border-white/12">
            <div className="flex min-h-[70svh] flex-1 flex-col justify-between px-6 py-9 sm:px-9 md:px-12 lg:min-h-0 lg:py-12">
              <Reveal>
                <div className="flex items-center justify-between gap-6">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/45 uppercase">/ Prefabrykaty zbrojeniowe</span>
                  <span className="font-mono text-[8px] tracking-[0.16em] text-white/35 uppercase">Steeltrans / Polska + Europa</span>
                </div>
              </Reveal>

              <div className="py-16 lg:py-8">
                <Reveal delay={80}>
                  <h2 id="zbrojenia-title" className="max-w-[10ch] text-[clamp(3.2rem,8vw,9.8rem)] font-medium leading-[0.82] tracking-[-0.06em]">
                    Stal gotowa do montażu<span className="text-brand">.</span>
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <div className="mt-9 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                      Prefabrykujemy zbrojenia, tniemy, gniemy i spawamy stal dla wymagających inwestycji w Polsce i Europie.
                    </p>
                    <a
                      href="https://zbrojeniebudowlane.pl/"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex w-full max-w-sm items-center justify-between border-t border-white/25 pt-5 text-sm font-semibold"
                    >
                      Poznaj Steeltrans
                      <span className="text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><Arrow external /></span>
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={220}>
                <p className="font-mono text-[8px] tracking-[0.18em] text-white/35 uppercase">
                  Cięcie / gięcie / spawanie — przygotowanie stali gotowej do montażu na budowie
                </p>
              </Reveal>
            </div>

            <div className="grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {reinforcementAdvantages.map(([value, label], index) => (
                <Reveal key={value} direction="none" delay={50 + index * 55} className="h-full">
                  <article className={`group flex min-h-40 flex-col justify-between border-b border-white/12 bg-black/25 px-6 py-6 backdrop-blur-sm transition-colors hover:bg-brand hover:text-black sm:border-b-0 sm:px-8 ${index < 3 ? 'lg:border-r lg:border-white/15' : ''} ${index % 2 === 0 ? 'sm:border-r sm:border-white/15 lg:border-r' : ''}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] tracking-[0.18em] text-white/35 transition-colors group-hover:text-black/45">/ 0{index + 1}</span>
                      <span className="text-brand transition-colors group-hover:text-black"><Arrow /></span>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-xl font-medium tracking-[-0.03em] text-brand transition-colors group-hover:text-black">{value}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-white/45 transition-colors group-hover:text-black/65">{label}</p>
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
        id="prefabrykaty-betonowe"
        aria-labelledby="prefabrykaty-title"
        className="viewport-section relative overflow-hidden border-t border-black/10 bg-[#f4f2ed] text-black"
      >
        <span id="about3" className="pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" />
        <span id="prefabrykaty" className="pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" />
        <Image
          src="/prefabrykaty.jpg"
          alt=""
          fill
          aria-hidden="true"
          sizes="100vw"
          className="pointer-events-none object-cover object-center opacity-[0.2] grayscale"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,242,237,0.99)_0%,rgba(244,242,237,0.96)_42%,rgba(244,242,237,0.68)_72%,rgba(244,242,237,0.82)_100%)]" />
        <Grain dark={false} />

        <div className="relative grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%] lg:h-[100svh]">
          <div className="flex items-center justify-center">
            <Reveal direction="left">
              <span className="font-mono text-[9px] tracking-[0.2em] text-black/35 [writing-mode:vertical-rl]">04 / PREFABRYKATY</span>
            </Reveal>
          </div>

          <div className="col-span-3 flex min-w-0 flex-col border-x border-black/10">
            <div className="flex min-h-[70svh] flex-1 flex-col justify-between px-6 py-9 sm:px-9 md:px-12 lg:min-h-0 lg:py-12">
              <Reveal>
                <div className="flex items-center justify-between gap-6">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-black/45 uppercase">/ Prefabrykacja betonowa</span>
                  <span className="font-mono text-[8px] tracking-[0.16em] text-black/35 uppercase">Dostawy / cała Polska</span>
                </div>
              </Reveal>

              <div className="py-16 lg:py-8">
                <Reveal delay={80}>
                  <h2 id="prefabrykaty-title" className="max-w-[12ch] text-[clamp(3.2rem,7.5vw,9.2rem)] font-medium leading-[0.82] tracking-[-0.06em]">
                    Powtarzalność, która przyspiesza budowę<span className="text-brand">.</span>
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <div className="mt-9 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <p className="max-w-xl text-base leading-relaxed text-black/58 sm:text-lg">
                      Produkujemy prefabrykaty dla budownictwa drogowego, przemysłowego i hydrotechnicznego — również według indywidualnej dokumentacji.
                    </p>
                    <a
                      href="https://transbet.com.pl/prefabrykacja-betonowa"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex w-full max-w-sm items-center justify-between border-t border-black/25 pt-5 text-sm font-semibold"
                    >
                      Zobacz pełną ofertę
                      <span className="text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><Arrow external /></span>
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={220}>
                <p className="font-mono text-[8px] tracking-[0.18em] text-black/35 uppercase">
                  Serie standardowe / rozwiązania indywidualne — produkcja pod wymagania inwestycji
                </p>
              </Reveal>
            </div>

            <div className="grid border-t border-black/15 sm:grid-cols-2 lg:grid-cols-4">
              {concreteProducts.map(([title, text], index) => (
                <Reveal key={title} direction="none" delay={50 + index * 55} className="h-full">
                  <article className={`group flex min-h-40 flex-col justify-between border-b border-black/12 bg-white/15 px-6 py-6 backdrop-blur-[2px] transition-colors hover:bg-black hover:text-white sm:border-b-0 sm:px-8 ${index < 3 ? 'lg:border-r lg:border-black/15' : ''} ${index % 2 === 0 ? 'sm:border-r sm:border-black/15 lg:border-r' : ''}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] tracking-[0.18em] text-black/35 transition-colors group-hover:text-white/40">/ 0{index + 1}</span>
                      <span className="text-brand"><Arrow /></span>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-lg font-medium leading-tight tracking-[-0.025em]">{title}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-black/45 transition-colors group-hover:text-white/50">{text}</p>
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
        id="budowa-tuneli"
        aria-labelledby="tunele-title"
        className="viewport-section relative overflow-hidden border-t border-white/10 bg-black text-white"
      >
        <span id="about4" className="pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" />
        <span id="tunele" className="pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" />
        <video aria-hidden="true" autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-40">
          <source src="/transbet_background_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,transparent_0,rgba(0,0,0,0.28)_38%,rgba(0,0,0,0.88)_82%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/55" />
        <Grain />

        <div className="relative grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%] lg:h-[100svh]">
          <div className="flex items-center justify-center">
            <Reveal direction="left">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/35 [writing-mode:vertical-rl]">05 / TUNELE</span>
            </Reveal>
          </div>

          <div className="col-span-3 flex min-w-0 flex-col border-x border-white/12">
            <div className="flex min-h-[70svh] flex-1 flex-col justify-between px-6 py-9 sm:px-9 md:px-12 lg:min-h-0 lg:py-12">
              <Reveal>
                <div className="flex items-center justify-between gap-6">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/45 uppercase">/ Tunnel Construction Support</span>
                  <span className="font-mono text-[8px] tracking-[0.16em] text-white/35 uppercase">Polska + Europa</span>
                </div>
              </Reveal>

              <div className="py-16 lg:py-8">
                <Reveal delay={80}>
                  <h2 id="tunele-title" className="max-w-[10ch] text-[clamp(3.2rem,8vw,9.8rem)] font-medium leading-[0.82] tracking-[-0.06em]">
                    Sięgamy głębiej<span className="text-brand">.</span>
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <div className="mt-9 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                      Kompleksowe wsparcie budowy tuneli: prefabrykacja segmentów, spawanie klatek zbrojeniowych oraz obsługa maszyn TBM.
                    </p>
                    <a
                      href="https://transbettcs.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex w-full max-w-sm items-center justify-between border-t border-white/25 pt-5 text-sm font-semibold"
                    >
                      Poznaj Transbet TCS
                      <span className="text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><Arrow external /></span>
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={220}>
                <p className="font-mono text-[8px] tracking-[0.18em] text-white/35 uppercase">
                  Karpatka / Jadwiga / Kinga — doświadczenie przy największych projektach infrastrukturalnych
                </p>
              </Reveal>
            </div>

            <div className="grid border-t border-white/15 md:grid-cols-3">
              {tunnelServices.map((service, index) => (
                <Reveal key={service.title} direction="none" delay={60 + index * 60} className="h-full">
                  <article className={`group flex min-h-44 flex-col justify-between border-b border-white/12 bg-black/25 px-6 py-6 backdrop-blur-sm transition-colors hover:bg-brand hover:text-black sm:px-8 md:border-b-0 ${index < 2 ? 'md:border-r md:border-white/15' : ''}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] tracking-[0.18em] text-white/35 transition-colors group-hover:text-black/45">/ 0{index + 1}</span>
                      <span className="text-brand transition-colors group-hover:text-black"><Arrow /></span>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-xl font-medium tracking-[-0.03em]">{service.title}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-white/45 transition-colors group-hover:text-black/65">{service.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div />
        </div>
      </section>
    </>
  );
}
