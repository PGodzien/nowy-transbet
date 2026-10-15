import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Ogólne warunki sprzedaży | Transbet Industrial Group',
  description: 'Ogólne Warunki Sprzedaży produktów i usług Transbet Betoniarnie, obowiązujące od 01.10.2018 r.',
};

type Item = string | { text: string; sub: string[] };

// 1:1 from transbet.com.pl/ogolne-warunki-sprzedazy.
const sections: { title: string; items: Item[] }[] = [
  {
    title: 'Postanowienia ogólne',
    items: [
      'Niniejsze Ogólne Warunki Sprzedaży OWS mają zastosowanie do umów sprzedaży produktów i usług zwanych dalej Zleceniami, zawieranych przez Transbet Betoniarnie Sp. z o. o. Sp. k. z siedzibą przy ul. Topolowej 5 w Przemyślu zwaną dalej Dostawcą.',
      'OWS stanowią integralną część Umowy Sprzedaży zawartej pomiędzy Dostawcą a jego klientem, zwanym w dalszej części OWS Odbiorcą.',
      'Przedmiotem niniejszych OWS jest określenie szczegółowych zasad sprzedaży produktów będących w ofercie handlowej Dostawcy.',
    ],
  },
  {
    title: 'Zamówienie',
    items: [
      'Sprzedaż produktu następuje na podstawie zamówienia złożonego Dostawcy przez Odbiorcę.',
      'Odbiorca składa zamówienie w formie telefonicznej, elektronicznej lub pisemnej na adres Dostawcy lub inny adres wskazany przez Dostawcę.',
      {
        text: 'Zamówienie składane przez Odbiorcę winno zawierać następujące informacje:',
        sub: [
          'dokładny opis zamawianego produktu - nazwę, klasę wytrzymałości betonu, klasę ekspozycji, klasę konsystencji mieszanki betonowej, rodzaj dostawy i rozładunku, asortyment i zamawianą ilość produktu, dokumenty odniesienia (normy, specyfikacje itp.). W przypadku konieczności spełnienia dodatkowych wymagań dotyczących produktu, Odbiorca zobowiązany jest skontaktować się z Dostawcą w celu zapoznania się i zatwierdzenia receptury wraz z zastosowanymi surowcami, nie później niż 48 godzin przed planowaną dostawą. Odbiorca akceptując przedstawioną recepturę mieszanki betonowej potwierdza, że jest ona nadrzędna w stosunku do Specyfikacji Technicznej i innych dokumentów obowiązujących na danym kontrakcie.',
          'termin dostawy i miejsce dostawy',
          'sposób odbioru produktu - w przypadku nieokreślenia przez Odbiorcę sposobu odbioru produktu Dostawca zobowiązuje się zrealizować dostawę na zasadach określonych w § 3 OWS,',
          'imię i nazwisko osoby upoważnionej do odebrania i pokwitowania odbioru produktu.',
        ],
      },
      'Za konsekwencje wynikające z dostarczenia Dostawcy niewłaściwych lub niepełnych danych objętych zamówieniem a opisanych w § 2 ust. 3 OWS odpowiedzialny jest Odbiorca.',
      {
        text: 'Odbiorca dokona zamówienia dostawy produktu na miejsce dostawy:',
        sub: [
          'do 50 m3 - najpóźniej do godz. 13:00 dnia poprzedniego,',
          'powyżej 50 m3 z co najmniej 24 godzinnym wyprzedzeniem,',
          'dla usług pompowania z wyprzedzeniem min. 48 godzin.',
        ],
      },
    ],
  },
  {
    title: 'Dostawa',
    items: [
      'Produkty będące w ofercie handlowej Dostawcy są dostępne do odbioru przez Odbiorcę w punktach odbioru, otwartych w dniach i godzinach odpowiednich dla poszczególnych zakładów Dostawcy.',
      'Ryzyko pogorszenia jakości produktu przechodzi na Odbiorcę po odbiorze produktu tj. z chwilą załadunku produktu na jego środek transportu. Podczas dostawy produktu do miejsca przeznaczenia transportem Dostawcy, ryzyko to przechodzi na Odbiorcę w momencie odbioru produktu w miejscu dostawy określonym w zamówieniu.',
      'Odbiorca zobowiązuje się do potwierdzenia otrzymanej dostawy produktu czytelnym podpisem na dowodzie dostawy oraz dokumencie WZ.',
      'Odmowa odebrania przedmiotu zamówienia z przyczyn leżących po stronie Odbiorcy nie zwalnia Odbiorcy z obowiązku zapłaty na rzecz Dostawcy kwoty równej poniesionym przez Dostawcę kosztom.',
      'Odbiorca zobowiązuje się do zapewnienia utwardzonej drogi dojazdowej, zdatnej do przejazdu pojazdów ciężarowych. Konieczne oznakowania, ewentualne zamknięcia ulic i chodników a także usunięcie zanieczyszczeń powstałych w wyniku dostaw należą do Odbiorcy. W przypadku niespełnienia powyższych warunków, Dostawca może odmówić dostawy lub obciążyć finansowo Odbiorcę za skutki dostaw w pogorszonych warunkach.',
      'Rozładunek pojazdu musi odbywać się niezwłocznie po jego przyjeździe w sposób bezpieczny, w umówione miejsce. Jeżeli Odbiorca prowadzi działalność gospodarczą, to osoby podpisujące dowód dostawy uznane są jako upoważnione do odbioru produktu i do potwierdzenia zgodności dostawy z zamówieniem pod względem jakości i ilości.',
      'Jeżeli niezawinione przez Dostawcę okoliczności utrudniają lub/i opóźniają wykonanie przyjętych zamówień, wówczas Dostawca jest uprawniony do poinformowania o tym fakcie Odbiorcę i zaproponowania mu nowego terminu dostawy.',
    ],
  },
  {
    title: 'Gwarancja jakości sprzedawanych produktów i zakres odpowiedzialności Dostawcy',
    items: [
      'Dostawca zapewnia, że produkty oferowane według wykazu gatunków, są wytwarzane zgodnie z normami wyspecyfikowanymi w zamówieniu i dostarczane do miejsca odbioru przez Odbiorcę w stanie kompletnym i nienaruszonym.',
      {
        text: 'Produkcja mieszanek betonowych oparta jest na materiałach zgodnych z aktualnymi normami:',
        sub: [
          'Cementy - PN-EN 197-1, PN-B-19707',
          'Popiół lotny do betonu - PN-EN 450-1',
          'Kruszywa - PN-EN 12620 (w przypadku produkcji betonów posadzkowych, stosowane jest kruszywo zgodnie z wymaganiami zawartymi w załączniku G.4)',
          'Domieszki chemiczne - PN-EN 934-2',
          'Woda - PN-EN 1008',
        ],
      },
      'Gwarancja obejmuje tylko te cechy produktu, które są deklarowane przez Dostawcę i wymienione na dokumencie dostawy WZ.',
      'Gwarancji nie podlegają żadne dodatkowe parametry i wymogi, które nie zostały przedstawione pisemnie Dostawcy przed dokonaniem dostawy.',
      'Odbiorca traci prawo gwarancji, jeśli Odbiorca lub osoby działające w jego imieniu dokonają zmieszania dostarczonego przez Dostawcę produktu z produktem pochodzącym od innego producenta lub z innym produktem pochodzącym z placu budowy (np. dodaje dodatkową ilość wody do dostarczonego produktu).',
      'Odbiorca traci prawo do gwarancji w przypadku niewłaściwej pielęgnacji betonu lub użytkowania betonu niezgodnie z jego przeznaczeniem.',
      'Dostawca zobowiązuje się do wytworzenia i dostarczenia produktu zgodnego z Polską Normą lub inną wymienioną na dokumencie dostawy WZ. Dostawca gwarantuje Odbiorcy, że produkt wydany Odbiorcy jest w stanie wolnym od jakichkolwiek wad fizycznych oraz że będzie spełniać wszelkie kryteria, o których istnieniu Dostawca zapewniał Odbiorcę w dniu sprzedaży',
      'Dostawca udziela gwarancji jakości na dostarczony produkt, a jego odpowiedzialność z tytułu tej gwarancji rozpoczyna się z dniem odbioru produktu przez Odbiorcę i kończy po upływie okresu 12 miesięcy.',
      'Odbiorca zobowiązuje się do ułożenia, zagęszczenia i pielęgnowania betonu zgodnie z normą powołaną, SST oraz PN-EN 13670 „Wykonywanie konstrukcji z betonu”.',
      'Dostawca jest zwolniony całkowicie od odpowiedzialności z tytułu gwarancji i jakości za dostarczony produkt, jeśli Odbiorca wiedząc o wadzie w chwili przyjęcia produktu, zgodził się na sprzedaż po cenie odpowiednio obniżonej.',
    ],
  },
  {
    title: 'Postanowienia końcowe',
    items: [
      'W braku innych uzgodnień poczytuje się, że umowa zostaje zawarta na czas nieokreślony.',
      'Strony mogą rozwiązać umowę, z zachowaniem jednomiesięcznego okresu wypowiedzenia. Umowa może także zostać rozwiązana bez zachowania terminu wypowiedzenia za obopólną zgodą.',
      'Odbiorca wyraża zgodę na gromadzenie i przetwarzanie Jego danych osobowych przez Dostawcę. Zgoda obejmuje również przetwarzanie danych w przyszłości.',
      'Dostawca nie wyraża zgody na używanie przez Odbiorcę słownych i/lub słowno-graficznych znaków produktowych Dostawcy, chyba że Dostawca wyrazi na to zgodę na piśmie.',
      'Strony zgodnie oświadczają, iż w sytuacjach spornych bądź roszczeń wnikających z umowy będą w pierwszej kolejności dążyły do zawarcia porozumienia w trybie polubownym.',
      'Wszelkie spory wynikające z umów w oparciu o OWS, rozstrzygane będą przez Sąd Powszechny właściwy miejscowo dla siedziby zakładu lub oddziału Dostawcy, z którego wydano produkt lub Sąd Powszechny właściwy miejscowo wg miejsca spełnienia płatności z tytułu sprzedaży produktu, do którego Odbiorca zostanie przez Dostawcę wezwany.',
      'W sprawach nieuregulowanych postanowieniami OWS i/lub Umowy Sprzedaży będą mieć zastosowanie przepisy Kodeksu Cywilnego.',
    ],
  },
];

export default function SalesTermsPage() {
  return (
    <>
      <PageHero
        number="06"
        eyebrow="Ogólne warunki sprzedaży"
        parent={{ label: 'Dokumenty', href: '/dokumenty' }}
        title="Warunki sprzedaży"
        description="Ogólne Warunki Sprzedaży produktów i usług Transbet Betoniarnie."
        image="/background.jpg"
        facts={[
          { value: '01.10.2018', label: 'obowiązują od' },
          { value: '5', label: 'paragrafów' },
          { value: '12 mies.', label: 'gwarancji jakości' },
        ]}
      />

      <section className="bg-white">
        <div className="mx-[4vw] grid border-x border-black/10 lg:grid-cols-3">
          <nav aria-label="Paragrafy" className="hidden border-r border-black/10 px-9 py-16 lg:block">
            <ol className="sticky top-12 space-y-3">
              {sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#par-${index + 1}`} data-curtain="off" className="group flex gap-4 text-sm leading-snug text-black/60 transition-colors hover:text-black">
                    <span className="w-6 shrink-0 font-mono text-[10px] text-brand">§ {index + 1}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="lg:col-span-2">
            {sections.map((section, index) => (
              <section
                key={section.title}
                id={`par-${index + 1}`}
                className="scroll-mt-6 border-b border-black/10 px-6 py-12 last:border-b-0 sm:px-9 md:px-12 lg:py-14"
              >
                <p className="font-mono text-[10px] tracking-[0.18em] text-brand">§ {index + 1}</p>
                <h2 className="mt-4 max-w-[30ch] text-[clamp(1.6rem,2.6vw,2.6rem)] font-medium leading-[1.02] tracking-[-0.035em]">
                  {section.title}
                </h2>
                <ol className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-black/75">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="grid grid-cols-[2rem_1fr]">
                      <span className="font-mono text-[11px] leading-[1.7rem] text-black/35">{itemIndex + 1}.</span>
                      {typeof item === 'string' ? (
                        <span>{item}</span>
                      ) : (
                        <span>
                          {item.text}
                          <ol className="mt-3 space-y-2">
                            {item.sub.map((sub, subIndex) => (
                              <li key={subIndex} className="grid grid-cols-[1.75rem_1fr]">
                                <span className="text-black/40">{String.fromCharCode(97 + subIndex)})</span>
                                <span>{sub}</span>
                              </li>
                            ))}
                          </ol>
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
