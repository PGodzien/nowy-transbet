import Image from 'next/image';
import Reveal from '@/components/Reveal';

type Highlight = {
  value: string;
  label: string;
};

type BusinessSectionProps = {
  id: string;
  anchorId: string;
  number: string;
  railLabel: string;
  eyebrow: string;
  meta: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  external?: boolean;
  theme: 'light' | 'dark';
  media: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    caption: string;
    kicker?: string;
  };
  highlights: Highlight[];
};

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
      className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-screen"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

function BusinessSection({
  id,
  anchorId,
  number,
  railLabel,
  eyebrow,
  meta,
  title,
  description,
  ctaLabel,
  ctaHref,
  external = false,
  theme,
  media,
  highlights,
}: BusinessSectionProps) {
  const dark = theme === 'dark';
  const border = dark ? 'border-white/12' : 'border-black/[0.09]';
  const muted = dark ? 'text-white/45' : 'text-black/40';
  const bodyMuted = dark ? 'text-white/60' : 'text-black/55';

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={[
        'viewport-section relative overflow-hidden border-t',
        border,
        dark ? 'bg-black text-white' : 'bg-[#f5f3ef] text-black',
      ].join(' ')}
    >
      <span id={anchorId} className="pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" />
      {dark && <Grain />}

      <div className="relative grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%]">
        <div className="flex items-center justify-center">
          <Reveal direction="left">
            <span className={`font-mono text-[9px] tracking-[0.2em] [writing-mode:vertical-rl] ${dark ? 'text-white/30' : 'text-black/35'}`}>
              {number} / {railLabel}
            </span>
          </Reveal>
        </div>

        <div className={`col-span-3 flex min-w-0 flex-col border-x ${border}`}>
          <div className={`grid min-h-[44svh] border-b lg:grid-cols-3 ${border}`}>
            <div className={`flex items-end px-6 py-10 sm:px-9 md:px-12 lg:col-span-2 lg:border-r lg:py-12 ${border}`}>
              <div className="w-full">
                <Reveal>
                  <div className="mb-7 flex items-center justify-between gap-6">
                    <span className={`font-mono text-[9px] tracking-[0.2em] uppercase ${muted}`}>
                      / {eyebrow}
                    </span>
                    <span className={`font-mono text-[8px] tracking-[0.16em] uppercase ${dark ? 'text-white/30' : 'text-black/30'}`}>
                      {meta}
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={80}>
                  <h2
                    id={`${id}-title`}
                    className="max-w-[13ch] text-[clamp(2.8rem,5.6vw,6.8rem)] font-medium leading-[0.88] tracking-[-0.055em]"
                  >
                    {title}<span className="text-brand">.</span>
                  </h2>
                </Reveal>

                <Reveal delay={150}>
                  <p className={`mt-7 max-w-2xl text-sm leading-relaxed sm:text-base lg:text-lg ${bodyMuted}`}>
                    {description}
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal direction="none" delay={120} className="h-full">
              <a
                href={ctaHref}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="group flex h-full min-h-52 flex-col justify-between bg-brand px-6 py-8 text-black transition-colors hover:bg-brand-hover sm:px-9 lg:min-h-0 lg:py-10"
              >
                <span className="font-mono text-[9px] tracking-[0.18em] text-black/45 uppercase">
                  {external ? 'Serwis specjalistyczny ↗' : 'Oferta Transbet'}
                </span>
                <span className="flex items-end justify-between gap-5 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                  {ctaLabel}
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <Arrow external={external} />
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          <div className="grid flex-1 lg:min-h-[56svh] lg:grid-cols-3">
            <Reveal direction="none" delay={90} className="h-full min-h-[52svh] lg:col-span-2 lg:min-h-0">
              <div className={`relative h-full min-h-[52svh] overflow-hidden border-b lg:min-h-0 lg:border-r lg:border-b-0 ${border}`}>
                {media.type === 'image' ? (
                  <Image
                    src={media.src}
                    alt={media.alt ?? ''}
                    fill
                    sizes="(max-width: 1024px) 92vw, 61vw"
                    className="object-cover transition-transform duration-1000 hover:scale-[1.02]"
                  />
                ) : (
                  <video aria-hidden="true" autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
                    <source src={media.src} type="video/mp4" />
                  </video>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/15" />
                <div className="absolute right-6 bottom-7 left-6 flex items-end justify-between gap-8 text-white sm:right-10 sm:left-10">
                  <p className="max-w-xl text-lg font-medium leading-tight tracking-[-0.025em] sm:text-2xl">
                    {media.caption}
                  </p>
                  {media.kicker && (
                    <span className="hidden font-mono text-[8px] tracking-[0.17em] text-white/45 uppercase sm:block">
                      {media.kicker}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>

            <div className={`grid ${highlights.length === 3 ? 'lg:grid-rows-3' : 'sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-4'}`}>
              {highlights.map((item, index) => (
                <Reveal key={`${item.value}-${item.label}`} direction="none" delay={70 + index * 50} className="h-full">
                  <article
                    className={[
                      'group flex h-full min-h-32 flex-col justify-between border-b px-6 py-6 transition-colors sm:px-8',
                      border,
                      dark ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white',
                      highlights.length === 4 && index % 2 === 0 ? `sm:border-r lg:border-r-0 ${border}` : '',
                    ].join(' ')}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className={`font-mono text-[8px] tracking-[0.18em] ${dark ? 'text-white/30 group-hover:text-black/35' : 'text-black/30 group-hover:text-white/35'}`}>
                        / {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-brand" />
                    </div>
                    <div className="mt-7">
                      <h3 className="text-[clamp(1.3rem,1.9vw,2.15rem)] font-medium leading-none tracking-[-0.035em]">
                        {item.value}
                      </h3>
                      <p className={`mt-3 text-xs leading-relaxed transition-colors ${dark ? 'text-white/40 group-hover:text-black/50' : 'text-black/45 group-hover:text-white/50'}`}>
                        {item.label}
                      </p>
                    </div>
                  </article>
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

export default function BusinessSectionsV2() {
  return (
    <>
      <BusinessSection
        id="betoniarnie"
        anchorId="about1"
        number="02"
        railLabel="BETONIARNIE"
        eyebrow="Beton towarowy"
        meta="Podkarpacie"
        title="Beton blisko Twojej budowy"
        description="Produkujemy mieszanki dopasowane do parametrów inwestycji i dostarczamy je z trzech lokalnych węzłów — sprawnie, terminowo i z własnym zapleczem transportowym."
        ctaLabel="Poznaj ofertę betonu"
        ctaHref="https://transbet.com.pl/beton"
        theme="light"
        media={{ type: 'image', src: '/beton.jpg', alt: 'Betonomieszarka Transbet na placu budowy', caption: 'Produkcja, kontrola jakości i transport w jednym rytmie.', kicker: 'Od 1993' }}
        highlights={[
          { value: 'Przemyśl', label: 'Topolowa 5 · +48 888 839 617' },
          { value: 'Jarosław', label: 'Budowlanych 8 · +48 660 788 125' },
          { value: 'Radymno', label: 'Kościuszki 2a · +48 660 788 125' },
        ]}
      />

      <BusinessSection
        id="prefabrykaty-zbrojeniowe"
        anchorId="about2"
        number="03"
        railLabel="ZBROJENIA"
        eyebrow="Prefabrykaty zbrojeniowe"
        meta="Polska + Europa"
        title="Stal gotowa do montażu"
        description="Produkujemy prefabrykaty zbrojeniowe, tniemy, gniemy i spawamy stal w zautomatyzowanym parku maszynowym oraz dostarczamy wyroby hutnicze na wymagające inwestycje."
        ctaLabel="Zobacz możliwości zbrojarni"
        ctaHref="https://zbrojeniebudowlane.pl/"
        external
        theme="dark"
        media={{ type: 'image', src: '/tunele.jpg', alt: 'Prefabrykacja klatki zbrojeniowej', caption: 'Precyzja produkcji, która skraca pracę na budowie.', kicker: 'Steeltrans / Przemyśl' }}
        highlights={[
          { value: '06–40 mm', label: 'Zakres średnic obrabianych prętów' },
          { value: 'Automatyzacja', label: 'Nowoczesne giętarki i automaty produkcyjne' },
          { value: 'PL + Europa', label: 'Dostawy dla inwestycji na wielu rynkach' },
          { value: 'Doradztwo', label: 'Wsparcie techniczne na każdym etapie' },
        ]}
      />

      <BusinessSection
        id="prefabrykaty-betonowe"
        anchorId="about3"
        number="04"
        railLabel="PREFABRYKATY"
        eyebrow="Prefabrykacja betonowa"
        meta="Dostawy / cała Polska"
        title="Powtarzalność, która przyspiesza budowę"
        description="Produkujemy prefabrykowane elementy betonowe dla budownictwa drogowego, hydrotechnicznego i przemysłowego, także według indywidualnej dokumentacji projektowej."
        ctaLabel="Pełna oferta prefabrykatów"
        ctaHref="https://transbet.com.pl/prefabrykacja-betonowa"
        theme="light"
        media={{ type: 'image', src: '/prefabrykaty.jpg', alt: 'Prefabrykowane elementy betonowe w zakładzie Transbet', caption: 'Gotowe elementy, kontrolowana jakość, krótszy czas realizacji.', kicker: 'Prefabrykacja betonowa' }}
        highlights={[
          { value: 'Drogi', label: 'Płyty, korytka i elementy infrastruktury drogowej' },
          { value: 'Przemysł', label: 'Elementy dla obiektów i infrastruktury przemysłowej' },
          { value: 'Hydrotechnika', label: 'Rozwiązania dla odwodnień i gospodarki wodnej' },
          { value: 'Na zamówienie', label: 'Prefabrykaty wykonywane według dokumentacji klienta' },
        ]}
      />

      <BusinessSection
        id="budowa-tuneli"
        anchorId="about4"
        number="05"
        railLabel="TUNELE"
        eyebrow="Tunnel Construction Support"
        meta="Polska + Europa"
        title="Sięgamy głębiej"
        description="Wspieramy budowę tuneli od zaplecza prefabrykacji po pracę pod ziemią: produkujemy segmenty, spawamy klatki zbrojeniowe i zapewniamy doświadczone zespoły do obsługi TBM."
        ctaLabel="Poznaj Transbet TCS"
        ctaHref="https://transbettcs.com/"
        external
        theme="dark"
        media={{ type: 'video', src: '/transbet_background_video.mp4', caption: 'Doświadczenie przy największych projektach infrastrukturalnych.', kicker: 'Karpatka / Jadwiga / Kinga' }}
        highlights={[
          { value: 'Tubingi', label: 'Obsługa zakładów prefabrykacji obudowy tunelowej' },
          { value: 'Klatki', label: 'Spawanie zbrojeń segmentów i ścian szczelinowych' },
          { value: 'TBM', label: 'Operatorzy i wsparcie prowadzenia prac tunelowych 24/7' },
        ]}
      />
    </>
  );
}
