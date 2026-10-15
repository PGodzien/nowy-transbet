import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CookieSettingsButton from '@/components/CookieSettingsButton';

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description: 'Zasady przetwarzania danych osobowych i wykorzystywania plików cookies na stronie transbet.com.pl.',
  alternates: { canonical: '/polityka-prywatnosci' },
};

const UPDATED = '15.10.2026';

type Item = string | { text: string; sub: string[] };

// The previous site had no privacy policy; this text describes what the new site actually does.
const sections: { title: string; items: Item[] }[] = [
  {
    title: 'Administrator danych',
    items: [
      'Administratorem danych osobowych jest TRANSBET BETONIARNIE GROCHOWICZ Sp. K. z siedzibą przy ul. Topolowej 5, 37-700 Przemyśl, NIP 795-10-07-169, KRS 0000573370 (dalej: „Administrator”).',
      'W sprawach dotyczących danych osobowych można kontaktować się z Administratorem pod adresem e-mail biuro@transbet.com.pl, telefonicznie pod numerem +48 888 839 617 lub listownie na adres siedziby.',
      'Polityka dotyczy strony internetowej transbet.com.pl wraz z jej podstronami (dalej: „Strona”).',
    ],
  },
  {
    title: 'Jakie dane przetwarzamy i w jakim celu',
    items: [
      'Formularz kontaktowy na Stronie nie wysyła danych na nasz serwer. Po kliknięciu „Wyślij wiadomość” otwiera się program pocztowy użytkownika z przygotowaną wiadomością do wybranego działu. Dane (imię i nazwisko, adres e-mail, numer telefonu, treść wiadomości) trafiają do nas dopiero wtedy, gdy użytkownik wyśle tę wiadomość.',
      'Dane przekazane w wiadomości e-mail lub w rozmowie telefonicznej przetwarzamy w celu odpowiedzi na zapytanie, przygotowania oferty, zawarcia i wykonania umowy (np. dostawy betonu lub prefabrykatów) oraz prowadzenia dalszej korespondencji.',
      'Aplikowanie na oferty pracy odbywa się przez zewnętrzny system rekrutacyjny eRecruiter, do którego prowadzą przyciski „Aplikuj”. Zasady przetwarzania danych kandydatów określa klauzula informacyjna dołączona do danego ogłoszenia w tym systemie.',
      'Podczas korzystania ze Strony serwer automatycznie zapisuje dane techniczne (m.in. adres IP, datę i godzinę wizyty, typ przeglądarki, adres odwiedzanej podstrony). Służą one zapewnieniu bezpieczeństwa i prawidłowego działania Strony.',
      'Za zgodą użytkownika zbieramy statystyki odwiedzin oraz dane służące do mierzenia skuteczności reklam (szczegóły w punkcie „Pliki cookies”).',
    ],
  },
  {
    title: 'Podstawy prawne przetwarzania',
    items: [
      {
        text: 'Dane przetwarzamy na podstawie art. 6 ust. 1 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO):',
        sub: [
          'lit. a – zgoda, w zakresie analitycznych i reklamowych plików cookies,',
          'lit. b – działania przed zawarciem umowy i wykonanie umowy, gdy zapytanie dotyczy zamówienia lub współpracy,',
          'lit. c – obowiązki prawne, w szczególności podatkowe i rachunkowe,',
          'lit. f – prawnie uzasadniony interes Administratora: odpowiadanie na korespondencję, kontakt z klientami i kontrahentami, zapewnienie bezpieczeństwa Strony oraz ustalenie, dochodzenie i obrona roszczeń.',
        ],
      },
    ],
  },
  {
    title: 'Pliki cookies i podobne technologie',
    items: [
      'Pliki cookies to niewielkie pliki zapisywane w urządzeniu użytkownika. Strona korzysta też z pamięci przeglądarki (localStorage), która działa podobnie.',
      {
        text: 'Bez zgody użytkownika zapisujemy wyłącznie dane niezbędne do działania Strony:',
        sub: [
          'cookie_consent i cookie_consent_date – zapamiętanie wyboru dokonanego w banerze cookies,',
          'ustawienia kalkulatora betonu – ostatnio wpisane wymiary i cena, aby nie trzeba było podawać ich ponownie.',
        ],
      },
      {
        text: 'Po wyrażeniu zgody w banerze, za pośrednictwem Google Tag Manager, mogą zostać uruchomione:',
        sub: [
          'narzędzia analityczne Google Analytics (m.in. pliki _ga, _ga_*) – statystyki odwiedzin i sposobu korzystania ze Strony,',
          'narzędzia reklamowe Google Ads (np. pliki _gcl_*) – mierzenie skuteczności reklam i remarketing.',
        ],
      },
      'Do obsługi zgód stosujemy tryb uzyskiwania zgody Google (Consent Mode). Dopóki użytkownik nie wyrazi zgody, narzędzia Google nie zapisują analitycznych ani reklamowych plików cookies.',
      'Zgodę można w każdej chwili zmienić lub wycofać, klikając „Ustawienia cookies” w stopce Strony. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem.',
      'Ustawienia plików cookies można też zmienić w przeglądarce internetowej, w tym zablokować lub usunąć zapisane pliki. Ograniczenie plików niezbędnych może utrudnić korzystanie ze Strony.',
    ],
  },
  {
    title: 'Treści zewnętrznych dostawców',
    items: [
      'Na Stronie osadzamy filmy z serwisu YouTube w trybie rozszerzonej ochrony prywatności (youtube-nocookie.com). Film łączy się z serwerami Google dopiero po jego uruchomieniu przez użytkownika.',
      'Na stronach betoniarni w poszczególnych miejscowościach wyświetlamy mapy Google Maps. Podczas wyświetlania mapy przeglądarka łączy się z serwerami Google, które mogą zapisać własne pliki cookies.',
      'Strona zawiera odnośniki do naszych profili w mediach społecznościowych oraz do innych stron (m.in. steel-trans.pl, transbettcs.com). Nie osadzamy wtyczek tych serwisów – dane trafiają do nich dopiero po przejściu na ich stronę, na zasadach określonych przez ich operatorów.',
    ],
  },
  {
    title: 'Odbiorcy danych',
    items: [
      {
        text: 'Dane mogą być przekazywane podmiotom, które świadczą na rzecz Administratora usługi niezbędne do prowadzenia Strony i działalności, w szczególności:',
        sub: [
          'Vercel Inc. – hosting Strony,',
          'Google Ireland Ltd. / Google LLC – Google Tag Manager, Google Analytics, Google Ads, YouTube, Mapy Google,',
          'dostawcy poczty elektronicznej i usług IT,',
          'dostawca systemu rekrutacyjnego eRecruiter – w zakresie aplikacji na oferty pracy,',
          'podmioty świadczące usługi księgowe, prawne i transportowe – w zakresie realizacji zamówień.',
        ],
      },
      'Dane mogą być również udostępniane organom publicznym, jeżeli wymagają tego przepisy prawa.',
    ],
  },
  {
    title: 'Przekazywanie danych poza EOG',
    items: [
      'Korzystanie z usług Google i Vercel może wiązać się z przekazaniem danych do Stanów Zjednoczonych. Odbywa się to na podstawie decyzji Komisji Europejskiej stwierdzającej odpowiedni stopień ochrony (EU-US Data Privacy Framework) lub standardowych klauzul umownych zatwierdzonych przez Komisję Europejską.',
    ],
  },
  {
    title: 'Okres przechowywania danych',
    items: [
      'Korespondencję przechowujemy przez czas potrzebny do udzielenia odpowiedzi i prowadzenia rozmów, a następnie do upływu terminów przedawnienia ewentualnych roszczeń.',
      'Dane związane z umowami przechowujemy przez czas jej wykonywania, a następnie przez okres wymagany przepisami podatkowymi i rachunkowymi.',
      'Dane przetwarzane na podstawie zgody przechowujemy do czasu jej wycofania. Pliki cookies wygasają po upływie okresu określonego przez ich dostawcę lub po usunięciu ich w przeglądarce.',
      'Dane techniczne serwera przechowywane są przez krótki okres określony przez dostawcę hostingu.',
    ],
  },
  {
    title: 'Prawa osób, których dane dotyczą',
    items: [
      {
        text: 'Każdej osobie, której dane przetwarzamy, przysługuje prawo do:',
        sub: [
          'dostępu do swoich danych i otrzymania ich kopii,',
          'sprostowania danych,',
          'usunięcia danych,',
          'ograniczenia przetwarzania,',
          'przenoszenia danych,',
          'wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,',
          'wycofania zgody w dowolnym momencie.',
        ],
      },
      'Aby skorzystać z tych praw, wystarczy napisać na adres biuro@transbet.com.pl.',
      'Przysługuje również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).',
    ],
  },
  {
    title: 'Postanowienia końcowe',
    items: [
      'Podanie danych jest dobrowolne, ale bez nich nie będziemy mogli odpowiedzieć na zapytanie ani zrealizować zamówienia.',
      'Nie podejmujemy decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu, które wywoływałyby skutki prawne wobec użytkownika.',
      `Polityka może być aktualizowana, np. w związku ze zmianą przepisów lub funkcji Strony. Aktualna wersja jest zawsze dostępna na tej podstronie. Ostatnia aktualizacja: ${UPDATED}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        number="07"
        eyebrow="Polityka prywatności"
        title="Polityka prywatności"
        description="Zasady przetwarzania danych osobowych i wykorzystywania plików cookies na stronie transbet.com.pl."
        image="/background.jpg"
        facts={[
          { value: UPDATED, label: 'ostatnia aktualizacja' },
          { value: String(sections.length), label: 'paragrafów' },
        ]}
      />

      <section className="bg-white">
        <div className="mx-[4vw] grid border-x border-black/10 lg:grid-cols-3">
          <nav aria-label="Paragrafy" className="hidden border-r border-black/10 px-9 py-16 lg:block">
            <div className="sticky top-12">
              <ol className="space-y-3">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a href={`#par-${index + 1}`} data-curtain="off" className="group flex gap-4 text-sm leading-snug text-black/60 transition-colors hover:text-black">
                      <span className="w-6 shrink-0 font-mono text-[10px] text-brand">§ {index + 1}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
              <CookieSettingsButton className="mt-10 flex h-12 w-full items-center justify-between border border-black px-5 text-sm font-semibold transition-colors hover:bg-black hover:text-white">
                Ustawienia cookies
                <span aria-hidden="true" className="h-2.5 w-2.5 bg-brand" />
              </CookieSettingsButton>
            </div>
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
                {index === 3 ? (
                  <CookieSettingsButton className="mt-8 ml-8 inline-flex h-12 items-center gap-4 border border-black px-5 text-sm font-semibold transition-colors hover:bg-black hover:text-white lg:hidden">
                    Ustawienia cookies
                    <span aria-hidden="true" className="h-2.5 w-2.5 bg-brand" />
                  </CookieSettingsButton>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
