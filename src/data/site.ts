// E-mails as in the previous site's "Zamów beton" panel.
export const concretePlants = [
  {
    city: 'Przemyśl',
    address: 'ul. Topolowa 5, 37-700 Przemyśl',
    phone: '+48 888 839 617',
    phoneHref: 'tel:+48888839617',
    email: 'biuro@transbet.com.pl',
  },
  {
    city: 'Jarosław',
    address: 'ul. Budowlanych 8, 37-500 Jarosław',
    phone: '+48 660 788 125',
    phoneHref: 'tel:+48660788125',
    email: 'maciej@transbet.com.pl',
  },
  {
    city: 'Radymno',
    address: 'ul. Kościuszki 2a, 37-550 Radymno',
    phone: '+48 660 788 125',
    phoneHref: 'tel:+48660788125',
    email: 'maciej@transbet.com.pl',
  },
] as const;

export const offerAreas = [
  {
    number: '01',
    title: 'Beton',
    description: 'Tworzymy mieszanki betonowe według indywidualnych potrzeb Klienta lub inwestycji.',
    href: '/beton',
    linkLabel: 'zobacz więcej',
    external: false,
  },
  {
    number: '02',
    title: 'Prefabrykacja betonowa',
    description: 'Prowadzimy produkcję oraz sprzedaż wyrobów betonowych.',
    href: '/prefabrykacja-betonowa',
    linkLabel: 'zobacz więcej',
    external: false,
  },
  {
    number: '03',
    title: 'Laboratorium betonowe',
    description: 'Posiadamy przyzakładowe laboratorium badawcze betonu i jego składników.',
    href: '/laboratorium-betonowe',
    linkLabel: 'zobacz więcej',
    external: false,
  },
  {
    number: '04',
    title: 'Sprzęt i wynajem',
    description: 'Nasza wytwórnia posiada duże oraz młode zaplecze sprzętowe.',
    href: '/sprzet-i-wynajem',
    linkLabel: 'zobacz więcej',
    external: false,
  },
  {
    number: '05',
    title: 'Wyroby hutnicze',
    description: 'Prowadzimy handel wyrobami hutniczymi. Dostarczamy stal pod wskazane miejsce autem z przyczepą (dłużycą).',
    href: 'https://steel-trans.pl/',
    linkLabel: 'zobacz więcej',
    external: true,
  },
  {
    number: '06',
    title: 'Kruszywa budowlane',
    description: 'Prowadzimy sprzedaż wraz z dostawą kruszyw, potrzebnych przy każdej budowie.',
    href: '/kruszywa-budowlane',
    linkLabel: 'zobacz więcej',
    external: false,
  },
] as const;

export const concreteTypes = [
  ['Betony towarowe', 'C8/10–C30/37 (B10–B37).'],
  ['Betony posadzkowe', 'C20/25–C30/37 (B25–B37). Według potrzeb Klienta dostarczamy włókna stalowe lub polipropylenowe.'],
  ['Betony półsuche', 'Betony B10–B20 wykorzystywane między innymi przy obstawianiu krawężników.'],
  ['Betony drogowo-mostowe', 'C25/30–C40/50 (B30–B50) o wskaźniku mrozoodporności F200.'],
  ['Betony hydrotechniczne', 'Betony przeznaczone do zastosowań hydrotechnicznych.'],
  ['Betony architektoniczne', 'Betony przeznaczone do widocznych elementów architektonicznych.'],
  ['Betony SCC', 'Betony samozagęszczalne.'],
  ['Mieszanki piaskowo-cementowe', 'Mieszanki piaskowo-cementowe pod kostkę.'],
  ['Zaprawy budowlane', 'Zaprawy przeznaczone do prac budowlanych.'],
  ['Stabilizacje gruntu', 'Mieszanki przeznaczone do stabilizacji gruntu.'],
] as const;

export const companyTimeline = [
  {
    year: '1993',
    title: 'Początek działalności',
    text: 'Od początku istnienia zakładu główną dziedziną działalności jest produkcja betonu towarowego.',
  },
  {
    year: '2013',
    title: 'Rozszerzenie asortymentu',
    text: 'Do oferty dołączają stal zbrojeniowa, wyroby hutnicze, kamienie ozdobne, kostka granitowa, szamba betonowe i kruszywa budowlane.',
  },
  {
    year: '2015',
    title: 'Wytwórnia w Radymnie',
    text: 'Otwarcie nowej wytwórni zwiększa zdolność produkcyjną i elastyczność realizacji zamówień.',
  },
  {
    year: '2018',
    title: 'Zakład w Jarosławiu',
    text: 'Uruchomienie kolejnego zakładu pozwala lepiej obsługiwać Klientów w tej strategicznej lokalizacji.',
  },
] as const;

export const team = [
  {
    name: 'inż. Mariusz Grochowicz',
    role: 'Współwłaściciel, ZAŁOŻYCIEL FIRMY',
    image: '/team/mariusz-grochowicz.png',
  },
  {
    name: 'tech. Marcin Grochowicz',
    role: 'Współwłaściciel',
    image: '/team/marcin-grochowicz.png',
  },
  {
    name: 'mgr inż. Maciej Grochowicz',
    role: 'Współwłaściciel',
    image: '/team/maciej-grochowicz.png',
  },
  {
    name: 'Kamil Grochowicz',
    role: 'Kierownik zakładu w Przemyślu',
    image: '/team/kamil-grochowicz.png',
  },
  {
    name: 'Mateusz Śnieżek',
    role: 'Kierownik zakładu w Jarosławiu i Radymnie',
    image: '/team/mateusz-sniezek.png',
  },
  {
    name: 'mgr inż. Kuba Kramarz',
    role: 'Zastępca kierownika zakładu w Przemyślu',
    image: '/team/kuba-kramarz.png',
  },
  {
    name: 'mgr inż. Michał Joszko',
    role: 'Kierownik prefabrykacji stali',
    image: '/team/michal-joszko.png',
  },
  {
    name: 'mgr inż. Mateusz Maciaszek',
    role: 'Kierownik prefabrykacji betonu',
    image: '/team/mateusz-maciaszek.png',
  },
  {
    name: 'mgr inż. Marzena Wardęga',
    role: 'Kierownik do spraw jakości, technolog betonu',
    image: '/team/marzena-wardega.png',
  },
  {
    name: 'inż. Jakub Dudek',
    role: 'Specjalista do spraw kontroli prefabrykacji stali',
    image: '/team/jakub-dudek.png',
  },
  {
    name: 'mgr inż. Aleksandra Koba',
    role: 'Technolog betonu',
    image: '/team/aleksandra-koba.png',
  },
  {
    name: 'mgr Lidia Śnieżek',
    role: 'Specjalista do spraw kadr i płac',
    image: '/team/lidia-sniezek.png',
  },
  {
    name: 'Jolanta Cap',
    role: 'Specjalista ds. rekrutacji',
    image: '/team/jolanta-cap.png',
  },
  {
    name: 'mgr Gabriela Jaroch',
    role: 'Stażysta ds. wynagrodzeń i administracji personalnej',
    image: '/team/gabriela-jaroch.png',
  },
  {
    name: 'mgr Jacek Łuc',
    role: 'Specjalista ds. wynagrodzeń i administracji personalnej',
    image: '/team/jacek-luc.png',
  },
  {
    name: 'mgr Sabina Sitnik',
    role: 'Specjalistka do spraw obsługi klienta w Przemyślu',
    image: '/team/sabina-sitnik.png',
  },
  {
    name: 'mgr Justyna Skrzypek',
    role: 'Specjalista ds. obsługi klienta i rozliczeń',
    image: '/team/justyna-skrzypek.png',
  },
  {
    name: 'Aleksandra Pawliszak',
    role: 'Specjalista ds. obsługi klienta i rozliczeń',
    image: '/team/aleksandra-pawliszak.png',
  },
  {
    name: 'mgr Anna Grochowicz-Kiełt',
    role: 'Specjalista do spraw marketingu',
    image: '/team/anna-grochowicz.png',
  },
  {
    name: 'Gracjan Grochowicz',
    role: 'Kierownik Produkcji - Projekty Tunelowe',
    image: '/team/gracjan-grochowicz.png',
  },
  {
    name: 'Wojciech Lubos',
    role: 'Specjalista ds. logistyki betonu',
    image: '/team/wojciech-lubos.png',
  },
  {
    name: 'mgr Andżelika Kruk',
    role: 'Pracownik biurowy',
    image: '/team/andzelika-kruk.png',
  },
  {
    name: 'mgr inż. Dorota Superson',
    role: 'Logistyk do spraw transportu',
    image: '/team/dorota-superson.png',
  },
  {
    name: 'mgr Bartosz Świątek',
    role: 'Doradca ds. klientów kluczowych',
    image: '/team/bartosz-swiatek.png',
  },
  {
    name: 'lic. Damian Bury',
    role: 'Specjalista ds. gospodarki magazynowej',
    image: '/team/damian-bury.png',
  },
  {
    name: 'mgr Grzegorz Ślimak',
    role: 'Specjalista ds. bezpieczeństwa i higieny pracy',
    image: '/team/grzegorz-slimak.png',
  },
  {
    name: 'mgr Dorota Sumka-Szczerba',
    role: 'Specjalista ds. księgowości',
    image: '/team/dorota-sumka-szczerba.png',
  },
  {
    name: 'mgr Paweł Zając',
    role: 'Główny księgowy',
    image: '/team/pawel-zajac.png',
  },
  {
    name: 'Greta Kowalczyk',
    role: 'Pracownik biurowy',
    image: '/team/greta-kowalczyk.png',
  },
  {
    name: 'Lidia Suchy',
    role: 'Pracownik biurowy',
    image: '/team/lidia-suchy.png',
  },
] as const;
