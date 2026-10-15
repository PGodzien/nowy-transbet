import Image from 'next/image';
import Reveal from '@/components/Reveal';
import YouTubeFacade from '@/components/YouTubeFacade';

/* Content 1:1 from the "Stawiamy na rozwój" section of transbet.com.pl/o-nas. */

const history = [
  'Historia firmy Transbet jest pełna pasji, determinacji i nieustannego rozwoju. Już od 1993 roku stawialiśmy solidne fundamenty pod naszą działalność, a dziś dumnie prezentujemy efekty naszych inwestycji, które nadały niepowtarzalny kształt naszej firmie.',
  'W ciągu wielu lat skrupulatnej pracy i niezachwianej stabilności osiągnęliśmy wiele sukcesów, które uczyniły nas liderem w branży. Jesteśmy dumnymi posiadaczami trzech nowoczesnych linii produkcyjnych betonu towarowego, które znajdują się w strategicznych lokalizacjach: Przemyślu, Radymnie i Jarosławiu. Nasza inwestycja w te nowoczesne zakłady umożliwiła nam nie tylko zaspokojenie rosnącego zapotrzebowania na wysokiej jakości produkty, ale również zapewnienie efektywnego procesu produkcji.',
  'Jednak to nie wszystko, co oferujemy. Nasze możliwości są wspierane przez własny park maszynowy i transportowy, który gwarantuje szybkie i niezawodne dostawy. Dysponujemy także zaawansowanym zapleczem mechanicznym, które sprawia, że nasze operacje są jeszcze bardziej skuteczne. Ale to nie maszyny i urządzenia tworzą prawdziwą siłę Transbet - to nasz zgrany zespół wyjątkowo kompetentnych i wykwalifikowanych pracowników, którzy są sercem i duszą naszej firmy.',
  'Zawsze kładziemy ogromny nacisk na zrozumienie i spełnienie potrzeb naszych klientów. Dlatego w 2013 roku rozszerzyliśmy nasz asortyment, aby sprostać ich oczekiwaniom. Teraz oferujemy nie tylko beton, ale również wysokiej jakości stal zbrojeniową i wyroby hutnicze, które są niezbędne w procesie budowlanym. Ponadto, wprowadziliśmy sprzedaż naturalnych kamieni ozdobnych oraz kostki granitowej, która pozwala nadać każdemu projektowi niepowtarzalny charakter. Nasza oferta obejmuje również sprzedaż szamb betonowych oraz kruszyw budowlanych, co daje naszym klientom kompleksową gamę rozwiązań.',
  'Wzmacniając naszą pozycję na rynku, w 2015 roku otworzyliśmy nową, nowoczesną wytwórnię betonu w Radymnie. Był to dla nas ważny krok, który pozwolił nam jeszcze bardziej zwiększyć naszą zdolność produkcyjną i elastyczność w realizacji zamówień. A w 2018 roku przyszła kolej na kolejne osiągnięcie - uruchomienie zakładu w Jarosławiu. Dzięki temu mogliśmy jeszcze lepiej obsługiwać naszych klientów w tej strategicznej lokalizacji.',
  'Transbet to nie tylko firma, to historia sukcesu i pasji. Każdego dnia dążymy do doskonałości i podążamy ścieżką innowacji, aby sprostać rosnącym wymaganiom naszych klientów. Jesteśmy dumni z naszej przeszłości, ale patrzymy z optymizmem w przyszłość, gotowi na kolejne wyzwania i nowe możliwości, które przyjdą nam naprzeciw.',
] as const;

const memberships = [
  {
    name: 'ITA-AITES',
    image: '/o-nas/czlonkostwo-ita.jpg',
    width: 1397,
    height: 174,
    fit: 'contain',
    text: [
      'Z wielką radością informujemy, że Transbet Tunnel Construction Support stał się częścią prestiżowej organizacji ITA-AITES (International Tunnelling and Underground Space Association) jako Affiliate Member!',
      'Jest to dla nas ogromny zaszczyt, a jednocześnie ważny krok w kierunku dalszego rozwoju w branży budownictwa tunelowego.',
    ],
  },
  {
    name: 'SPBT',
    image: '/o-nas/czlonkostwo-spbt.png',
    width: 129,
    height: 88,
    // Small source file: shown at its own size instead of being stretched.
    fit: 'native',
    text: [
      'Firma Transbet jest dumnym członkiem Stowarzyszenia Producentów Betonu Towarowego (SPBT), organizacji, która zrzesza wiodących producentów betonu w Polsce. Przynależność do SPBT umożliwia nam nie tylko wymianę doświadczeń i najlepszych praktyk z innymi liderami branży, ale także stałe doskonalenie naszych procesów produkcyjnych. Dzięki współpracy z SPBT mamy dostęp do najnowszych standardów jakości i innowacyjnych technologii, co pozwala nam zapewniać naszym klientom najwyższej klasy produkty betonowe, spełniające wszelkie normy i wymagania.',
    ],
  },
  {
    name: 'Polski Klaster Budowlany',
    image: '/o-nas/czlonkostwo-pkb.jpg',
    width: 1280,
    height: 720,
    fit: 'cover',
    text: [
      'Z przyjemnością informujemy, że Transbet dołączył do Polskiego Klastra Budowlanego – Krajowego Klastra Kluczowego zrzeszającego blisko 500 podmiotów z branży budowlanej i sektorów pokrewnych z terenu całego kraju. Klaster posiada europejski certyfikat zarządzania SILVER LABEL wydany przez European Secretariat for Cluster Analysis (ESCA). Członkostwo otwiera przed nami nowe możliwości współpracy, wymiany wiedzy i promocji naszych produktów na rynku krajowym i europejskim.',
    ],
  },
] as const;

const videos = [
  { id: 'i14c5MSiSls', title: 'TRANSBET BETONIARNIE - BETONIARNIA PODKARPACKIE | PRZEMYŚL | JAROSŁAW | RADYMNO' },
  { id: 'mOnhxbOze4k', title: 'TRANSBET BETONIARNIE - 30-LECIE FIRMY' },
  { id: 'EtQ8sad15s8', title: 'TRANSBET ZBROJARNIA - PREFABRYKATY ZBROJENIOWE I WYROBY HUTNICZE' },
] as const;

const clients = [
  'Texom',
  'Warbud',
  'Sarinż',
  'Mostostal',
  'Mota Engil Central Europe',
  'BUDIMEX S.A.',
  'SKANSKA S.A',
  'ERBUD S.A',
  'SINEVIA (Zakłady Remontowo Budowlane WAM)',
  'Inżynieria Rzeszów',
  'SERSO Sp. z o.o.',
  'BESTA Przedsiębiorstwo Budowlane Sp. z o.o.',
] as const;

const values = [
  {
    title: 'Dbamy o jakość',
    text: 'Posiadamy przyzakładowe laboratorium betonu oraz współpracujemy z Centrum Technologii Budownictwa przy Politechnice Rzeszowskiej, aby zapewnić najwyższej jakości towar. Dzięki odpowiedniemu doborowi składników potrzebnych do produkcji masy betonowej zapewniamy niebywałą trwałość betonu, potwierdzoną długim okresem użytkowania w konstrukcjach budowlanych.',
  },
  {
    title: 'Dbamy o środowisko',
    text: 'Nasza Firma dba o ochronę środowiska i dlatego zakłady wyposażone są w stanowiska do mycia sprzętu oraz urządzenia do recyklingu betonu. Gwarantujemy trwałość i jakość, fachowe doradztwo, konkurencyjne ceny oraz produkt najwyższej klasy!',
  },
  {
    title: 'Gwarantujemy jakość',
    text: 'Gwarantujemy trwałość i jakość, fachowe doradztwo, konkurencyjne ceny oraz produkt najwyższej klasy!',
  },
] as const;

const location =
  'Główna siedziba spółki mieści się w Przemyślu przy ul. Topolowej 5 (w bezpośrednim sąsiedztwie Wojewódzkiego Ośrodka Egzaminacyjnego Dla Kierowców). W 2015 roku spółka otworzyła nowy zakład betoniarski w Radymnie przy ulicy Kościuszki (w bezpośrednim sąsiedztwie ZEK Kruszgeo). W 2018 roku otworzyliśmy kolejny zakład w Jarosławiu przy ul. Budowlanych 8 (baza po JPB BUDEXIM w bezpośrednim sąsiedztwie z hutą szkła w Jarosławiu).';

const eyebrow = 'font-mono text-[9px] tracking-[0.2em] uppercase';
const index = (n: number) => `/ ${String(n).padStart(2, '0')}`;

export default function AboutGrowth() {
  return (
    <>
      <section id="rozwoj" className="relative bg-[#f6f6f6]">
        <div className="mx-[4vw] border-x border-black/10">
          {/* History */}
          <div className="grid border-b border-black/10 lg:grid-cols-3">
            <div className="border-b border-black/10 px-6 py-12 sm:px-9 md:px-12 lg:border-r lg:border-b-0 lg:py-16">
              <div className="lg:sticky lg:top-12">
                <Reveal>
                  <p className={`${eyebrow} text-black/40`}>/ Historia firmy</p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-6 max-w-[10ch] text-[clamp(2.5rem,5vw,6rem)] font-medium leading-[0.92] tracking-[-0.05em]">
                    Stawiamy na rozwój<span className="text-brand">.</span>
                  </h2>
                </Reveal>
              </div>
            </div>
            <div className="px-6 py-12 sm:px-9 md:px-12 lg:col-span-2 lg:py-16">
              {history.map((paragraph, i) => (
                <Reveal key={i} delay={i === 0 ? 120 : 0}>
                  <p
                    className={
                      i === 0
                        ? 'max-w-3xl text-[clamp(1.25rem,1.7vw,1.75rem)] font-medium leading-[1.3] tracking-[-0.02em] text-black'
                        : 'mt-6 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg'
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Memberships */}
          <div className="border-b border-black/10 px-6 py-8 sm:px-9 md:px-12">
            <p className={`${eyebrow} text-black/40`}>/ Członkostwa</p>
          </div>
          <div className="grid gap-px border-b border-black/10 bg-black/10 lg:grid-cols-3">
            {memberships.map((membership, i) => (
              <Reveal key={membership.name} direction="none" delay={i * 70} className="h-full">
                <article className="flex h-full flex-col bg-white">
                  <div className="relative aspect-[16/9] overflow-hidden bg-white">
                    {membership.fit === 'native' ? (
                      <div className="absolute inset-0 grid place-items-center">
                        <Image src={membership.image} alt={membership.name} width={membership.width} height={membership.height} unoptimized />
                      </div>
                    ) : (
                      <Image
                        src={membership.image}
                        alt={membership.name}
                        fill
                        sizes="(max-width: 1024px) 92vw, 31vw"
                        className={membership.fit === 'cover' ? 'object-cover' : 'object-contain p-10'}
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col border-t border-black/10 p-6 sm:p-8">
                    <span className={`${eyebrow} text-black/35`}>{index(i + 1)}</span>
                    <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em]">{membership.name}</h3>
                    {membership.text.map((paragraph) => (
                      <p key={paragraph.slice(0, 20)} className="mt-4 text-base leading-relaxed text-black/65">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Videos */}
          <div className="border-b border-black/10 px-6 py-8 sm:px-9 md:px-12">
            <p className={`${eyebrow} text-black/40`}>/ Wideo</p>
          </div>
          <div className="grid gap-px bg-black/10 lg:grid-cols-3">
            {videos.map((video, i) => (
              <Reveal key={video.id} direction="none" delay={i * 70} className="h-full">
                <article className="flex h-full flex-col bg-black text-white">
                  <div className="relative aspect-video overflow-hidden">
                    <YouTubeFacade id={video.id} title={video.title} />
                  </div>
                  <div className="flex flex-1 items-start gap-4 border-t border-white/10 p-6 sm:p-8">
                    <span className={`${eyebrow} pt-1 text-brand`}>{index(i + 1)}</span>
                    <h3 className="text-base font-medium leading-snug tracking-[-0.01em]">{video.title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-[4vw] border-x border-black/10">
          <div className="grid gap-px bg-black/10 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} direction="none" delay={i * 70} className="h-full">
                <article className="flex h-full flex-col bg-white p-7 sm:p-9">
                  <span className={`${eyebrow} text-black/35`}>{index(i + 1)}</span>
                  <h3 className="mt-10 text-[clamp(1.6rem,2.2vw,2.4rem)] font-medium leading-none tracking-[-0.04em]">
                    {value.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-black/65">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-px border-t border-black/10 bg-black/10 lg:grid-cols-3">
            <Reveal direction="none" className="h-full lg:col-span-2">
              <article className="h-full bg-white p-7 sm:p-9">
                <span className={`${eyebrow} text-black/35`}>{index(4)}</span>
                <h3 className="mt-10 max-w-[22ch] text-[clamp(1.6rem,2.2vw,2.4rem)] font-medium leading-[1.05] tracking-[-0.04em]">
                  Zaufały nam największe firmy z branży budowlanej
                </h3>
                <p className="mt-5 text-base leading-relaxed text-black/65">
                  Współpracujemy/współpracowaliśmy z takimi firmami z sektora budowlanego jak:
                </p>
                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 xl:grid-cols-3">
                  {clients.map((client) => (
                    <li key={client} className="flex gap-3 text-base leading-snug">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
                      {client}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal direction="none" delay={80} className="h-full">
              <article className="h-full bg-black p-7 text-white sm:p-9">
                <span className={`${eyebrow} text-brand`}>{index(5)}</span>
                <h3 className="mt-10 text-[clamp(1.6rem,2.2vw,2.4rem)] font-medium leading-none tracking-[-0.04em]">Gdzie jesteśmy?</h3>
                <p className="mt-5 text-base leading-relaxed text-white/70">{location}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
