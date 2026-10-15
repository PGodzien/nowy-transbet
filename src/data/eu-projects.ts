// EU-funded projects, 1:1 from transbet.com.pl/srodki-ue. The logo strip is required by the funding rules.
export type EuBlock = { type: 'p'; text: string } | { type: 'h'; text: string } | { type: 'list'; items: string[] };

export type EuProject = {
  slug: string;
  title: string;
  logo: { src: string; width: number; height: number };
  blocks: EuBlock[];
  value: string;
  contribution: string;
  link?: { label: string; href: string };
};

const flags = { src: '/srodki-ue/flagi-ue-projekt.jpg', width: 2600, height: 214 };

export const euProjects: EuProject[] = [
  {
    slug: 'wdrozenie-innowacyjnej-technologii-produkcji-modulowych-betonowych-elementow-prefabrykowanych-z-wykorzystaniem-procesu-wibrowania-wieloczestotliwosciowego',
    title:
      'Wdrożenie innowacyjnej technologii produkcji modułowych, betonowych elementów prefabrykowanych z wykorzystaniem procesu wibrowania wieloczęstotliwościowego',
    logo: flags,
    blocks: [
      {
        type: 'p',
        text: 'Transbet Betoniarnie Grochowicz Spółka Komandytowa uzyskała dotację z Unii Europejskiej na projekt „Wdrożenie innowacyjnej technologii produkcji modułowych, betonowych elementów prefabrykowanych z wykorzystaniem procesu wibrowania wieloczęstotliwościowego”.',
      },
      {
        type: 'p',
        text: 'Celem projektu jest wdrożenie w działalności gospodarczej wnioskodawcy nowej technologii produkcji modułowych, betonowych elementów prefabrykowanych przy wykorzystaniu procesu wibrowania wieloczęstotliwościowego. Projekt kierowany jest do wszystkich obecnych i potencjalnych odbiorców produktów przedsiębiorstwa, a więc wszystkich podmiotów zaangażowanych w budowę licznych obiektów i infrastruktury: dróg, mostów, tuneli, lotnisk, stref ekonomicznych, portów, elektrowni, tam, zbiorników retencyjnych, komór technicznych, obiektów przemysłowych i mieszkaniowych itp.',
      },
      { type: 'h', text: 'W celu realizacji projektu i wdrożenia innowacji planowane jest nabycie następujących środków trwałych:' },
      { type: 'list', items: ['Kompletna linia technologiczna do formowania prefabrykatów betonowych', 'Suwnica bramowa dwudźwigarowa'] },
      { type: 'h', text: 'W wyniku wdrożenia założeń projektu spodziewane jest uzyskanie następujących efektów i rezultatów:' },
      {
        type: 'list',
        items: [
          'zmniejszenie zużycia wody w procesach czyszczenia formy oraz naprawy prefabrykatu wielkogabarytowego o ok. 305,5 l na jeden wyrób',
          'zmniejszenie ilości dodatkowych substancji czyszczących',
          'zmniejszenie zużycia energii w procesie produkcji o 26,9%, co przekłada się na korzyści środowiskowe w postaci ograniczenia emisji CO2',
          'skrócenie cyklu produkcyjnego o ok. 36,5%',
          'eliminacja generujących znaczny hałas etapów produkcyjnych związanych z pracą myjek i opukiwaniem ścian formy',
          'wyrównanie wewnętrznej struktury materiałowej prefabrykatów, co można interpretować za pomocą uzyskanych wartości wytrzymałości',
          'możliwość zastosowania w produkcji materiałów pochodzenia odpadowego bez negatywnego wpływu na jakość końcową wyrobu w porównaniu do standardowej technologii',
        ],
      },
    ],
    value: '3 395 762,76 zł',
    contribution: '1 800 000,00 zł',
    link: { label: 'Zobacz prefabrykację betonową', href: '/prefabrykacja-betonowa' },
  },
  {
    slug: 'wdrozenie-nowej-technologii-wytwarzania-betonow-przy-pomocy-mobilnego-i-modulowego-wezla-betoniarskiego',
    title: 'Wdrożenie nowej technologii wytwarzania betonów przy pomocy mobilnego i modułowego węzła betoniarskiego',
    logo: flags,
    blocks: [
      {
        type: 'p',
        text: 'Firma TRANSBET BETONIARNIE GROCHOWICZ SPÓŁKA KOMANDYTOWA jest w trakcie realizacji projektu współfinansowanego z Europejskiego Funduszu Rozwoju Regionalnego w ramach Priorytetu nr FEPK.01 „Konkurencyjna i Cyfrowa Gospodarka” programu regionalnego Fundusze Europejskie dla Podkarpacia 2021-2027 „Wdrożenie nowej technologii wytwarzania betonów przy pomocy mobilnego i modułowego węzła betoniarskiego.” nr FEPK.01.03-IZ.00-0184/23',
      },
      { type: 'h', text: 'Cele i planowane efekty projektu:' },
      { type: 'p', text: 'Projekt realizujemy, aby wdrożyć nową technologię produkcji betonu za pomocą mobilnego i modułowego węzła betoniarskiego.' },
      {
        type: 'p',
        text: 'Na podstawie własnych doświadczeń produkcyjnych oraz stanu wiedzy literaturowej, postanowiono przeprowadzić prace rozwojowe zmierzające do udoskonalenia konstrukcji mobilnych węzłów betoniarskich w zakresie sposobu ich przygotowania oraz sposobu sterowania procesem mieszania.',
      },
      {
        type: 'p',
        text: 'Innowacja procesowa jest autorskim pomysłem i powstała w wyniku prowadzonych prac B+R. Genezą projektu są zidentyfikowane problemy technologiczne, występujące w trakcie produkcji mieszanek betonowych. W tym miejscu należy podkreślić wagę procesu kształtowania struktury betonów podczas przygotowania składników i ich mieszania tak, aby zapewnić niski stosunek wodno-spoiwowy oraz dobrą homogenizację w celu otrzymania kompozytu o założonej wytrzymałości.',
      },
      { type: 'p', text: 'Efektem projektu będzie opracowanie nowej metody produkcji, której innowacyjne cechy to przede wszystkim:' },
      {
        type: 'list',
        items: [
          'wibrowanie ze zmienną prędkością obrotową',
          'wibrowanie za pomocą płyty',
          'określanie składu mieszanki na podstawie oczekiwanych wytrzymałości na ściskanie za pomocą sieci neuronowej',
          'wielodyszowe (natryskiwanie) wtryskiwanie wody do przestrzeni mieszania',
          'ciągłe doskonalenie procesu poprzez zastosowanie sieci neuronowych',
        ],
      },
      {
        type: 'p',
        text: 'Projekt obejmuje inwestycję w nowoczesne urządzenia tworzące modułowy, mobilny węzeł betoniarski, umożliwiający wdrożenie autorskiej technologii produkcji betonu. W ramach projektu zakupione zostaną:',
      },
      {
        type: 'list',
        items: [
          'Wytwórnia mieszanek betonowych z precyzyjnymi systemami wagowymi i mieszalnikiem o wydajności 120 m³/h,',
          'Kontenerowy system podgrzewania surowców, stabilizujący temperaturę kruszyw i wody,',
          'Urządzenie recyklingowe do odzysku kruszywa i ochrony środowiska.',
        ],
      },
      {
        type: 'p',
        text: 'Zastosowanie m.in. wibratorów o zmiennej częstotliwości, precyzyjnych dysz natryskowych i sieci neuronowej umożliwi efektywną produkcję nowoczesnych betonów, poprawiając jakość i konkurencyjność firmy.',
      },
      { type: 'h', text: 'Projekt jest skierowany do:' },
      {
        type: 'list',
        items: [
          'Firm budowlanych i wykonawczych realizujących inwestycje w infrastrukturę drogową, mostową, lotniskową, przemysłową i mieszkaniową, które potrzebują wysokiej jakości mieszanki betonowej.',
          'Sektora publicznego i prywatnego, w tym inwestorów odpowiedzialnych za budowę obiektów infrastrukturalnych, takich jak drogi, mosty czy elektrownie.',
        ],
      },
      { type: 'h', text: 'Beneficjenci projektu:' },
      {
        type: 'list',
        items: [
          'Klienci biznesowi - skorzystają z nowoczesnych, precyzyjnie dopasowanych mieszanek betonowych, zapewniających trwałość i wytrzymałość konstrukcji.',
          'Firma realizująca projekt - dzięki wdrożeniu innowacyjnej technologii zwiększy swoją konkurencyjność na rynku i rozszerzy ofertę.',
          'Środowisko naturalne - dzięki zastosowaniu urządzenia recyklingowego zmniejszy się ilość odpadów betonowych i zużycia surowców.',
        ],
      },
    ],
    value: '4 421 973,00 PLN',
    contribution: '1 800 000,00 PLN',
  },
  {
    slug: 'wprowadzenie-na-rynek-innowacyjnego-systemu-plyt-drogowych-bedacego-wynikiem-prac-badawczo-rozwojowych',
    title: 'Wprowadzenie na rynek innowacyjnego systemu płyt drogowych będącego wynikiem prac badawczo-rozwojowych',
    logo: { src: '/srodki-ue/fe-poir.svg', width: 5496, height: 756 },
    blocks: [
      {
        type: 'p',
        text: 'TRANSBET BETONIARNIE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ SPÓŁKA KOMANDYTOWA realizuje projekt pod nazwą: Wprowadzenie na rynek innowacyjnego systemu płyt drogowych będącego wynikiem prac badawczo - rozwojowych.',
      },
      { type: 'h', text: 'Cele i planowane efekty projektu:' },
      {
        type: 'p',
        text: 'Celem realizacji projektu jest wdrożenie wyników własnych prac B+R, skutkujące wprowadzeniem na rynek nowego systemu płyt drogowych, wykazującego się poprawionymi parametrami użytkowymi oraz zastosowaniem proekologicznych rozwiązań. Efektem realizacji projektu będzie umożliwienie Spółce podniesienia poziomu innowacyjności oraz konkurencyjności na rynku. Ponadto zostaną osiągnięte inne korzyści:',
      },
      {
        type: 'list',
        items: [
          'uzyskanie przewagi rynkowej poprzez wprowadzenie na rynek przełomowego produktu,',
          'zaspokojenie zidentyfikowanych potrzeb obecnych i potencjalnych klientów,',
          'osiągnięcie dużej wydajności produkcji przy zachowaniu niskich kosztów,',
          'możliwość stałego poszerzania oferty dzięki nowoczesnemu parkowi maszynowemu,',
          'pozyskanie nowych klientów i zwiększenie przychodów przedsiębiorstwa,',
          'rozpoczęcie działalności eksportowej,',
          'stworzenie nowych miejsc pracy.',
        ],
      },
    ],
    value: '5 920 605,00 PLN',
    contribution: '3 369 450,00 PLN',
  },
  {
    slug: 'transformacja-przedsiebiorstwa-transbet-w-obszarze-gospodarki-o-obiegu-zamknietym',
    title: 'Opracowanie modelu biznesowego dotyczącego transformacji przedsiębiorstwa Transbet w obszarze Gospodarki o Obiegu Zamkniętym',
    logo: { src: '/srodki-ue/ue-03.png', width: 1280, height: 222 },
    blocks: [
      {
        type: 'p',
        text: 'Firma TRANSBET BETONIARNIE GROCHOWICZ SPÓŁKA KOMANDYTOWA uzyskała dotację z Unii Europejskiej na projekt „Opracowanie modelu biznesowego dotyczącego transformacji przedsiębiorstwa Transbet w obszarze Gospodarki o Obiegu Zamkniętym”.',
      },
      {
        type: 'p',
        text: 'Przedmiotem projektu jest nabycie usługi doradczej w zakresie opracowania Modelu biznesowego w zakresie gospodarki o obiegu zamkniętym (GOZ) - transformacji. Opracowany model biznesowy w zakresie gospodarki o obiegu zamkniętym (GOZ) - transformacji zawierać będzie szczegółowe analizy, wskazania i rekomendacje. Głównym celem projektu jest zmniejszenie oddziaływania działalności gospodarczej przedsiębiorstwa na środowisko, poprawa efektywności wykorzystania zasobów oraz tworzenie bardziej zrównoważonego i trwałego modelu gospodarczego.',
      },
      {
        type: 'p',
        text: 'W wyniku wdrożenia założeń opracowanego modelu GOZ-transformacji spodziewana jest minimalizacja marnotrawstwa i efektywne wykorzystanie zasobów m.in. poprzez ponowne wykorzystywanie, recykling i minimalizację ilości odpadów, które pozwolą przedsiębiorstwu na usprawnienie procesów biznesowych z poszanowaniem środowiska naturalnego. Dzięki zmniejszeniu oddziaływania na środowisko, każda osoba, która korzysta ze środowiska naturalnego, skorzysta również na realizacji projektu.',
      },
    ],
    value: '82 781,00 PLN',
    contribution: '82 781,00 PLN',
  },
];
