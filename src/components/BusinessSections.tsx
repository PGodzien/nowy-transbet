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
  'Infrastruktura drogowa',
  'Budownictwo przemysłowe',
  'Hydrotechnika',
  'Elementy na zamówienie',
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

function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.13] mix-blend-screen"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
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
        className="viewport-section relative border-t border-black/[0.08] bg-[#f3f1ed]"
      >
        <span id="about1" className="pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" />
        <div className="grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%] lg:h-[100svh]">
          <div className="flex items-center justify-center">
            <Reveal direction="left">
              <span className="font-mono text-[9px] tracking-[0.2em] text-black/35 [writing-mode:vertical-rl]">
                02 / BETONIARNIE
              </span>
            </Reveal>
          </div>

          <div className="col-span-3 flex min-w-0 flex-col">
            <div className="grid flex-1 lg:min-h-0 lg:grid-cols-3">
              <div className="flex min-h-[56svh] flex-col justify-between border-b border-black/[0.1] px-6 py-9 sm:px-9 md:px-12 lg:col-span-2 lg:min-h-0 lg:border-r lg:border-b-0 lg:py-12">
                <Reveal>
                  <div className="flex items-center justify-between gap-6">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-black/40 uppercase">
                      / Beton towarowy
                    </span>
                    <span className="font-mono text-[8px] tracking-[0.16em] text-black/30 uppercase">
                      Podkarpacie
                    </span>
                  </div>
                </Reveal>

                <div className="py-12 lg:py-6">
                  <Reveal delay={80}>
                    <h2
                      id="betoniarnie-title"
                      className="max-w-[10ch] text-[clamp(3rem,6.7vw,8.2rem)] font-medium leading-[0.85] tracking-[-0.055em]"
                    >
                      Beton blisko Twojej budowy<span className="text-brand">.</span>
                    </h2>
                  </Reveal>
                  <Reveal delay={160}>
                    <p className="mt-8 max-w-xl text-base leading-relaxed text-black/55 sm:text-lg">
                      Produkujemy mieszanki dopasowane do parametrów inwestycji i dostarczamy je z trzech lokalnych węzłów — sprawnie, terminowo i w każdych warunkach.
                    </p>
                  </Reveal>
                </div>

                <Reveal delay={220}>
                  <a
                    href="https://transbet.com.pl/beton"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex w-full max-w-sm items-center justify-between border-t border-black/20 pt-5 text-sm font-semibold"
                  >
                    Poznaj ofertę betonu
                    <span className="text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <Arrow external />
                    </span>
                  </a>
                </Reveal>
              </div>

              <Reveal direction="none" delay={110} className="h-full min-h-[56svh] lg:min-h-0">
                <div className="relative h-full min-h-[56svh] overflow-hidden lg:min-h-0">
                  <Image
                    src="/beton.jpg"
                    alt="Betonomieszarka Transbet na placu budowy"
                    fill
                    sizes="(max-width: 1024px) 92vw, 31vw"
                    className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15" />
                  <div className="absolute right-6 bottom-7 left-6 flex items-end justify-between gap-5 text-white sm:right-9 sm:left-9">
                    <p className="max-w-[16ch] text-2xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-3xl">
                      Produkcja i transport w jednym rytmie.
                    </p>
                    <span className="font-mono text-[8px] tracking-[0.18em] text-white/55 uppercase">Od 1993</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="grid border-t border-black/[0.1] md:grid-cols-3">
              {concretePlants.map((plant, index) => (
                <Reveal key={plant.city} direction="none" delay={60 + index * 60} className="h-full">
                  <article className={`group flex min-h-44 flex-col justify-between border-b border-black/[0.1] bg-white/40 px-6 py-6 transition-colors hover:bg-white sm:px-8 md:border-b-0 ${index < 2 ? 'md:border-r' : ''}`}>
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[8px] tracking-[0.18em] text-black/35">/ 0{index + 1}</span>
                      <span className="h-2 w-2 rounded-full bg-brand" />
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
        <Grain />
        <div className="relative grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%] lg:h-[100svh]">
          <div className="flex items-center justify-center">
            <Reveal direction="left">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 [writing-mode:vertical-rl]">
                03 / ZBROJENIA
              </span>
            </Reveal>
          </div>

          <div className="col-span-3 flex min-w-0 flex-col">
            <div className="grid flex-1 lg:min-h-0 lg:grid-cols-3">
              <Reveal direction="none" className="h-full min-h-[55svh] lg:col-span-2 lg:min-h-0">
                <div className="relative h-full min-h-[55svh] overflow-hidden border-b border-white/12 lg:min-h-0 lg:border-r lg:border-b-0">
                  <Image
                    src="/tunele.jpg"
                    alt="Spawanie prefabrykowanej klatki zbrojeniowej"
                    fill
                    sizes="(max-width: 1024px) 92vw, 61vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/15 to-black/70" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />
                  <div className="absolute right-6 bottom-7 left-6 flex items-end justify-between gap-8 sm:right-10 sm:left-10">
                    <p className="max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
                      Precyzyjne cięcie, gięcie i spawanie stali zbrojeniowej w zautomatyzowanym parku maszynowym.
                    </p>
                    <span className="hidden font-mono text-[8px] tracking-[0.17em] text-white/35 uppercase sm:block">Steeltrans / Przemyśl</span>
                  </div>
                </div>
              </Reveal>

              <div className="flex min-h-[68svh] flex-col justify-between px-6 py-9 sm:px-9 md:px-12 lg:min-h-0 lg:py-12">
                <Reveal>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">/ Prefabrykaty zbrojeniowe</span>
                </Reveal>

                <div className="py-12 lg:py-6">
                  <Reveal delay={80}>
                    <h2 id="zbrojenia-title" className="max-w-[8ch] text-[clamp(2.9rem,5vw,6.2rem)] font-medium leading-[0.87] tracking-[-0.055em]">
                      Stal gotowa do montażu<span className="text-brand">.</span>
                    </h2>
                  </Reveal>
                  <Reveal delay={160}>
                    <p className="mt-7 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
                      Produkujemy prefabrykaty zbrojeniowe i dostarczamy wyroby hutnicze dla wymagających inwestycji w Polsce i Europie.
                    </p>
                  </Reveal>
                </div>

                <Reveal delay={220}>
                  <a
                    href="https://zbrojeniebudowlane.pl/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between border-t border-white/20 pt-5 text-sm font-semibold"
                  >
                    Zobacz możliwości zbrojarni
                    <span className="text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><Arrow external /></span>
                  </a>
                </Reveal>
              </div>
            </div>

            <div className="grid border-t border-white/12 sm:grid-cols-2 lg:grid-cols-4">
              {reinforcementAdvantages.map(([value, label], index) => (
                <Reveal key={value} direction="none" delay={50 + index * 55} className="h-full">
                  <div className={`min-h-32 border-b border-white/12 px-6 py-6 sm:border-b-0 ${index < 3 ? 'lg:border-r' : ''} ${index % 2 === 0 ? 'sm:border-r lg:border-r' : ''}`}>
                    <span className="block text-xl font-medium tracking-[-0.03em] text-brand">{value}</span>
                    <span className="mt-3 block text-xs leading-relaxed text-white/40">{label}</span>
                  </div>
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
        className="viewport-section relative border-t border-black/[0.08] bg-white"
      >
        <span id="about3" className="pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" />
        <span id="prefabrykaty" className="pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" />
        <div className="grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%] lg:h-[100svh]">
          <div className="flex items-center justify-center">
            <Reveal direction="left">
              <span className="font-mono text-[9px] tracking-[0.2em] text-black/35 [writing-mode:vertical-rl]">
                04 / PREFABRYKATY
              </span>
            </Reveal>
          </div>

          <div className="col-span-3 flex min-w-0 flex-col">
            <div className="grid min-h-[42svh] border-b border-black/[0.09] lg:min-h-[38svh] lg:grid-cols-3">
              <div className="flex items-end px-6 py-9 sm:px-9 md:px-12 lg:col-span-2 lg:border-r lg:py-12">
                <div>
                  <Reveal>
                    <p className="mb-6 font-mono text-[9px] tracking-[0.2em] text-black/40 uppercase">/ Prefabrykacja betonowa</p>
                  </Reveal>
                  <Reveal delay={80}>
                    <h2 id="prefabrykaty-title" className="max-w-[14ch] text-[clamp(2.7rem,5.5vw,6.7rem)] font-medium leading-[0.88] tracking-[-0.052em]">
                      Powtarzalność, która przyspiesza budowę<span className="text-brand">.</span>
                    </h2>
                  </Reveal>
                </div>
              </div>

              <Reveal direction="none" delay={130} className="h-full">
                <a
                  href="https://transbet.com.pl/prefabrykacja-betonowa"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full min-h-48 flex-col justify-between bg-brand px-6 py-8 text-black transition-colors hover:bg-brand-hover sm:px-9 lg:min-h-0 lg:py-10"
                >
                  <span className="font-mono text-[9px] tracking-[0.18em] text-black/45 uppercase">Dostawy / cała Polska</span>
                  <span className="flex items-end justify-between gap-5 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                    Pełna oferta produktów
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><Arrow external /></span>
                  </span>
                </a>
              </Reveal>
            </div>

            <div className="grid flex-1 lg:min-h-0 lg:grid-cols-3">
              <Reveal direction="none" delay={90} className="h-full min-h-[58svh] lg:col-span-2 lg:min-h-0">
                <div className="relative h-full min-h-[58svh] overflow-hidden border-b border-black/[0.09] lg:min-h-0 lg:border-r lg:border-b-0">
                  <Image
                    src="/prefabrykaty.jpg"
                    alt="Prefabrykowane elementy betonowe w zakładzie Transbet"
                    fill
                    sizes="(max-width: 1024px) 92vw, 61vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <p className="absolute right-6 bottom-7 left-6 max-w-lg text-base leading-relaxed text-white/75 sm:right-10 sm:left-10 sm:text-lg">
                    Elementy dla budownictwa drogowego, hydrotechnicznego i przemysłowego — także według indywidualnej dokumentacji.
                  </p>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-4">
                {concreteProducts.map((product, index) => (
                  <Reveal key={product} direction="none" delay={80 + index * 55} className="h-full">
                    <div className={`group flex h-full min-h-28 items-center justify-between gap-6 border-b border-black/[0.09] px-6 py-5 transition-colors hover:bg-black hover:text-white sm:px-8 ${index % 2 === 0 ? 'sm:border-r lg:border-r-0' : ''}`}>
                      <span className="font-mono text-[8px] tracking-[0.18em] text-black/30 transition-colors group-hover:text-white/35">/ 0{index + 1}</span>
                      <h3 className="ml-auto max-w-[16ch] text-right text-lg font-medium leading-tight tracking-[-0.025em]">{product}</h3>
                    </div>
                  </Reveal>
                ))}
              </div>
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
                      <h3 className="text-xl font-medium leading-none tracking-[-0.03em] sm:text-2xl">{service.title}</h3>
                      <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/45 transition-colors group-hover:text-black/60">{service.text}</p>
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
