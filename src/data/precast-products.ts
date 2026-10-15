// Precast products, 1:1 from the previous site (transbet-nextjs/app/prefabrykacja-betonowa/products.ts).
// Photos in public/products (resized to 1600 px), 3D models in public/3d-modele.
export type Spec = { label: string; value: string };
export type TableData = { headers: string[]; rows: string[][] };
export type ContentSection = { title: string; items: string[] };
export type ProductImage = { src: string; alt: string };

export type Product = {
    id: number;
    slug: string;
    name: string;
    imageSrc: string;
    imageAlt: string;
    images?: ProductImage[];
    model3d?: string | string[];
    description?: string;
    specs?: Spec[];
    table?: TableData;
    sections?: ContentSection[];
    paragraphs?: string[];
    euLogo?: boolean;
    // Photo gallery shown under the product (e.g. realisations of custom orders).
    gallery?: ProductImage[];
};

export const products: Product[] = [
    {
        id: 1,
        slug: "korytko-krakowskie",
        name: "Korytko krakowskie",
        imageSrc: "/products/korytko-krakowskie-01.jpg",
        imageAlt: "Korytko krakowskie",
        model3d: "/3d-modele/Korytko%20Krakowskie.glb",
        images: [
            { src: "/products/korytko-krakowskie-01.jpg", alt: "Korytko krakowskie" },
            { src: "/products/korytko-krakowskie-02.jpg", alt: "Korytko krakowskie" },
            { src: "/products/korytko-krakowskie-03.jpg", alt: "Korytko krakowskie" },
        ],
        description:
            "Solidne i trwałe rozwiązanie do odprowadzania wody deszczowej i ściekowej. Dzięki wysokiej jakości zbrojonego betonu i precyzyjnemu wykonaniu zapewnia skuteczne odwodnienie oraz odporność na obciążenia i warunki atmosferyczne.",
        specs: [
            { label: "Wymiary", value: "680 × 560 × 590 × 80 × 440 × 740" },
            { label: "Waga", value: "200 kg / szt." },
            { label: "Pakowanie", value: "luzem" },
        ],
    },
    {
        id: 2,
        slug: "korytko-naskarpowe",
        name: "Korytko naskarpowe",
        imageSrc: "/products/korytko-naskarpowe-01.jpg",
        imageAlt: "Korytko naskarpowe",
        model3d: "/3d-modele/Korytko%20Naskarpowe.glb",
        images: [
            { src: "/products/korytko-naskarpowe-01.jpg", alt: "Korytko naskarpowe" },
            { src: "/products/korytko-naskarpowe-02.jpg", alt: "Korytko naskarpowe" },
            { src: "/products/korytko-naskarpowe-03.jpg", alt: "Korytko naskarpowe" },
            { src: "/products/korytko-naskarpowe-04.jpg", alt: "Korytko naskarpowe" },
        ],
        description:
            "Przeznaczone do odwodnienia skarp i terenów pochyłych. Wykonane z betonu wysokiej klasy, zapewniają trwałość i odporność na warunki atmosferyczne.",
        specs: [
            { label: "Wymiary", value: "150 × 200 × 502 × 50 × 500 × 280 × 380" },
            { label: "Waga", value: "45 kg / szt." },
            { label: "Pakowanie", value: "32 szt. / paleta" },
        ],
    },
    {
        id: 3,
        slug: "korytko-ciekowe",
        name: "Korytko ciekowe",
        imageSrc: "/products/korytko-ciekowe-01.jpg",
        imageAlt: "Korytko ciekowe",
        model3d: "/3d-modele/Korytko%20Ciekowe.glb",
        images: [
            { src: "/products/korytko-ciekowe-01.jpg", alt: "Korytko ciekowe" },
            { src: "/products/korytko-ciekowe-02.jpg", alt: "Korytko ciekowe" },
            { src: "/products/korytko-ciekowe-03.jpg", alt: "Korytko ciekowe" },
        ],
        description:
            "Stosowane do odprowadzania wód powierzchniowych wzdłuż dróg i placów. Wytrzymała konstrukcja betonowa gwarantuje długoletnią eksploatację.",
        specs: [
            { label: "Wymiary", value: "400 × 708 × 470 × 600 × 65 × 350" },
            { label: "Waga", value: "70 kg / szt." },
            { label: "Pakowanie", value: "12 szt. / paleta" },
        ],
    },
    {
        id: 4,
        slug: "korytko-trojkatne",
        name: "Korytko trójkątne",
        imageSrc: "/products/korytko-trojkatne-01.jpg",
        imageAlt: "Korytko trójkątne",
        model3d: "/3d-modele/Korytko%20Trojkatne.glb",
        images: [
            { src: "/products/korytko-trojkatne-01.jpg", alt: "Korytko trójkątne" },
            { src: "/products/korytko-trojkatne-02.jpg", alt: "Korytko trójkątne" },
            { src: "/products/korytko-trojkatne-03.jpg", alt: "Korytko trójkątne" },
        ],
        description:
            "Korytko o przekroju trójkątnym, stosowane przy odprowadzaniu wód opadowych w szczególnych warunkach terenowych.",
        specs: [
            { label: "Wymiary", value: "200 × 99 × 180" },
            { label: "Waga", value: "62 kg / szt." },
            { label: "Pakowanie", value: "24 szt. / paleta" },
        ],
    },
    {
        id: 5,
        slug: "korytko-sciekowe-kped",
        name: "Korytko ściekowe KPED 01.03 (mulda)",
        imageSrc: "/products/korytko-sciekowe-01.jpg",
        imageAlt: "Korytko ściekowe KPED 01.03 (mulda)",
        model3d: "/3d-modele/Korytko%20Sciekowe%20KPED.glb",
        images: [
            { src: "/products/korytko-sciekowe-01.jpg", alt: "Korytko ściekowe KPED 01.03 (mulda)" },
            { src: "/products/korytko-sciekowe-02.jpg", alt: "Korytko ściekowe KPED 01.03 (mulda)" },
            { src: "/products/korytko-sciekowe-03.jpg", alt: "Korytko ściekowe KPED 01.03 (mulda)" },
        ],
        description:
            "Specjalistyczne korytko ściekowe typu mulda, stosowane przy krawężnikach drogowych do zbierania i odprowadzania wód opadowych.",
        specs: [
            { label: "Wymiary", value: "400 × 80 × 30 × 30 × 120 × 150" },
            { label: "Waga", value: "56 kg / szt." },
            { label: "Pakowanie", value: "36 szt. / paleta" },
        ],
    },
    {
        id: 6,
        slug: "plyty-yomb",
        name: "Płyty YOMB",
        imageSrc: "/products/plyty-yomb-01.jpg",
        imageAlt: "Płyty YOMB",
        model3d: "/3d-modele/Plyta%20YOMB.glb",
        images: [
            { src: "/products/plyty-yomb-01.jpg", alt: "Płyty YOMB" },
            { src: "/products/plyty-yomb-02.jpg", alt: "Płyty YOMB" },
            { src: "/products/plyty-yomb-03.jpg", alt: "Płyty YOMB" },
        ],
        description:
            "Żelbetowe płyty wielootworowe typu Yomb stosowane w drogownictwie oraz do zabezpieczania skarp. Produkowane z pojedynczym lub podwójnym zbrojeniem. Cechują się wysoką trwałością oraz odpornością na duże obciążenia.",
        specs: [
            { label: "Wymiary", value: "100 × 75 × 12,5/2, 12,5/1, 12,5/0" },
            { label: "Waga", value: "166-170 kg" },
        ],
    },
    {
        id: 7,
        slug: "plyty-drogowe",
        name: "Płyty drogowe",
        imageSrc: "/products/plyty-drogowe-01.jpg",
        imageAlt: "Płyty drogowe",
        model3d: "/3d-modele/Plyty%20Drogowe.glb",
        images: [
            { src: "/products/plyty-drogowe-01.jpg", alt: "Płyty drogowe" },
            { src: "/products/plyty-drogowe-02.jpg", alt: "Płyty drogowe" },
            { src: "/products/plyty-drogowe-03.jpg", alt: "Płyty drogowe" },
        ],
        description:
            "Wytrzymałe płyty betonowe na drogi, place i parkingi. Przeznaczone do tymczasowych i stałych nawierzchni pod ciężki ruch.",
        table: {
            headers: ["Wymiary", "Waga"],
            rows: [
                ["300 × 100 × 15", "~ 1075 kg"],
                ["300 × 150 × 15", "~ 1580 kg"],
                ["300 × 200 × 15", "~ 2150 kg"],
                ["300 × 150 × 18", "~ 1900 kg"],
                ["300 × 200 × 18", "~ 2550 kg"],
                ["300 × 150 × 20", "~ 2150 kg"],
            ],
        },
    },
    {
        id: 8,
        slug: "podwaliny-pod-ekrany-akustyczne",
        name: "Podwaliny pod ekrany akustyczne",
        imageSrc: "/products/podwaliny-pod-ekrany-akustyczne-01.jpg",
        imageAlt: "Podwaliny pod ekrany akustyczne",
        model3d: "/3d-modele/Ekran%20Akustyczny.glb",
        images: [
            { src: "/products/podwaliny-pod-ekrany-akustyczne-01.jpg", alt: "Podwaliny pod ekrany akustyczne" },
            { src: "/products/podwaliny-pod-ekrany-akustyczne-02.jpg", alt: "Podwaliny pod ekrany akustyczne" },
            { src: "/products/podwaliny-pod-ekrany-akustyczne-03.jpg", alt: "Podwaliny pod ekrany akustyczne" },
        ],
        description:
            "Prefabrykowane podwaliny do montażu ekranów dźwiękochłonnych wzdłuż dróg, autostrad i linii kolejowych.",
        specs: [
            { label: "Grubość", value: "12 cm" },
            { label: "Długość", value: "do 600 cm" },
            { label: "Waga", value: "na zapytanie" },
        ],
    },
    {
        id: 9,
        slug: "bloki-oporowe",
        name: "Bloki oporowe",
        imageSrc: "/products/bloki-oporowe-01.jpg",
        imageAlt: "Bloki oporowe",
        images: [
            { src: "/products/bloki-oporowe-01.jpg", alt: "Bloki oporowe" },
        ],
        description:
            "Modułowe bloki betonowe do szybkiego montażu murów oporowych, ogrodzeń i innych konstrukcji. Umożliwiają elastyczne kształtowanie przestrzeni bez potrzeby użycia zaprawy.",
        specs: [
            { label: "Wymiary", value: "60×60×60 / 120×60×60 / 180×60×60 / 240×60×60" },
            { label: "Waga", value: "~500 / ~1000 / ~1500 / ~2000 kg" },
        ],
    },
    {
        id: 10,
        slug: "mury-oporowe",
        name: "Mury oporowe",
        imageSrc: "/products/mury-oporowe-01.jpg",
        imageAlt: "Mury oporowe",
        model3d: [
            "/3d-modele/Mur%20Oporowy.glb",
            "/3d-modele/Mur%20Oporowy%2002.glb",
            "/3d-modele/Mur%20Oporowy%2003.glb",
        ],
        images: [
            { src: "/products/mury-oporowe-01.jpg", alt: "Mury oporowe" },
            { src: "/products/mury-oporowe-02.jpg", alt: "Mury oporowe" },
            { src: "/products/mury-oporowe-03.jpg", alt: "Mury oporowe" },
            { src: "/products/mury-oporowe-04.jpg", alt: "Mury oporowe" },
            { src: "/products/mury-oporowe-05.jpg", alt: "Mury oporowe" },
            { src: "/products/mury-oporowe-06.jpg", alt: "Mury oporowe" },
            { src: "/products/mury-oporowe-07.jpg", alt: "Mury oporowe" },
            { src: "/products/mury-oporowe-08.jpg", alt: "Mury oporowe" },
            { src: "/products/mury-oporowe-09.jpg", alt: "Mury oporowe" },
        ],
        description:
            "Ściany oporowe L, wysokość 60-400 cm, obustronnie gładkie z formy. Projektowane na obciążenia: 5 kN/m², 16,67 kN/m², 33 kN/m².",
        table: {
            headers: ["Wysokość ściany (cm)", "Grubość stopy (S1 / S2)", "Długość stopy (cm)", "Masa przybliżona"],
            rows: [
                ["60", "12 / 12", "45", "260 kg"],
                ["70", "12 / 12", "50", "302 kg"],
                ["80", "12 / 12", "55", "343 kg"],
                ["90", "12 / 12", "60", "385 kg"],
                ["100", "12 / 12", "65", "427 kg"],
                ["110", "12 / 12", "70", "469 kg"],
                ["120", "12 / 12", "75", "511 kg"],
                ["120", "12 / 15", "85", "590 kg"],
                ["130", "12 / 15", "85", "618 kg"],
                ["140", "12 / 15", "95", "681 kg"],
                ["150", "12 / 15", "95", "708 kg"],
                ["160", "12 / 15", "100", "754 kg"],
                ["170", "12 / 15", "100", "782 kg"],
                ["180", "12 / 15", "105", "827 kg"],
                ["180", "12/20 / 15/20", "100", "979 kg"],
                ["190", "12/20 / 15/20", "100", "1006 kg"],
                ["200", "12/20 / 15/20", "120", "1113 kg"],
                ["210", "12/20 / 15/20", "120", "1140 kg"],
                ["220", "12/20 / 15/20", "140", "1243 kg"],
                ["230", "12/20 / 15/20", "140", "1271 kg"],
                ["250", "12/30 / 15/30", "160", "1956 kg"],
                ["275", "12/30 / 15/30", "180", "2107 kg"],
                ["300", "12/30 / 15/30", "200", "2251 kg"],
                ["325", "12/30 / 15/30", "200", "2321 kg"],
                ["350", "12/30 / 15/30", "200", "2391 kg"],
                ["375", "12/30 / 15/30", "225", "3130 kg"],
                ["400", "12/30 / 15/30", "250", "3290 kg"],
            ],
        },
    },
    {
        id: 11,
        slug: "balkony-prefabrykowane",
        name: "Balkony prefabrykowane",
        imageSrc: "/products/balkony-01.jpg",
        imageAlt: "Balkony prefabrykowane",
        images: [
            { src: "/products/balkony-01.jpg", alt: "Balkony prefabrykowane" },
            { src: "/products/balkony-02.jpg", alt: "Balkony prefabrykowane" },
            { src: "/products/balkony-03.jpg", alt: "Balkony prefabrykowane" },
        ],
        description:
            "Prefabrykowany balkon z łącznikami termoizolacyjnymi wykonywany na podstawie indywidualnego projektu. Nasze rozwiązania gwarantują szybki i sprawny montaż na budowie, co znacząco skraca czas realizacji inwestycji. Dzięki wysokiej jakości prefabrykacji balkony charakteryzują się trwałością, precyzją wykonania oraz estetycznym wyglądem. Zastosowanie łączników termoizolacyjnych ogranicza powstawanie mostków cieplnych, poprawiając efektywność energetyczną budynku i komfort użytkowania.",
        specs: [
            { label: "Wymiary", value: "według projektu" },
            { label: "Waga", value: "zależna od konstrukcji" },
        ],
    },
    {
        id: 12,
        slug: "schody-prefabrykowane",
        name: "Schody prefabrykowane",
        imageSrc: "/products/schody-01.jpg",
        imageAlt: "Schody prefabrykowane",
        model3d: "/3d-modele/Schody_Prefabrykowane.glb",
        images: [
            { src: "/products/schody-01.jpg", alt: "Schody prefabrykowane" },
            { src: "/products/schody-02.jpg", alt: "Schody prefabrykowane" },
            { src: "/products/schody-03.jpg", alt: "Schody prefabrykowane" },
        ],
        description:
            "Prefabrykowane schody wykonywane na podstawie indywidualnego projektu, z możliwością wykonania prefabrykowanych spoczników. Oferowane rozwiązania zapewniają szybki i bezproblemowy montaż na budowie, co pozwala znacząco przyspieszyć realizację inwestycji. Dzięki technologii prefabrykacji schody wyróżniają się wysoką trwałością, dokładnością wykonania oraz estetycznym wykończeniem. Gotowe elementy ograniczają zakres prac mokrych na budowie i gwarantują powtarzalną jakość wykonania.",
        specs: [
            { label: "Ilość stopni", value: "do 16 szt." },
            { label: "Wysokość stopnia", value: "od 140 do 190 mm" },
            { label: "Długość stopnia", value: "od 260 do 320 mm" },
            { label: "Szerokość biegu", value: "od 800 do 1500 mm" },
            { label: "Zakończenia schodów", value: "Wspornik, spocznik, ława." },
            { label: "", value: "Spód schodów zatarty na gładko, pozostałe boki z formy." },
        ],
    },
    {
        id: 13,
        slug: "stropy-filigran",
        name: "Stropy filigran",
        imageSrc: "/products/stropy-filigran-01.jpg",
        imageAlt: "Stropy filigran",
        images: [
            { src: "/products/stropy-filigran-01.jpg", alt: "Stropy filigran" },
        ],
        description:
            "Prefabrykowane stropy typu filigran projektowane indywidualnie pod każdą inwestycję. Rozwiązanie to pozwala na szybki montaż oraz znaczące przyspieszenie prac budowlanych przy zachowaniu wysokiej jakości wykonania. Oferujemy możliwość wykonywania przejść technologicznych oraz otworów zgodnie z dokumentacją projektową, co ułatwia prowadzenie instalacji i dalszych prac na budowie. Stropy filigran cechują się szybkim montażem na budowie oraz ograniczeniem ilości podpór po betonowaniu stropu, co umożliwia swobodne prowadzenie prac pod stropem i usprawnia organizację robót budowlanych.",
    },
    {
        id: 14,
        slug: "przepust-skrzynkowy",
        name: "Przepust skrzynkowy",
        imageSrc: "/products/przepust-skrzynkowy-01.jpg",
        imageAlt: "Przepust skrzynkowy",
        model3d: [
            "/3d-modele/Przepust%20Skrzynkowy%20Otwarty.glb",
            "/3d-modele/Przepust%20skrzynkowy%20-%20zamkniety.glb",
            "/3d-modele/Przepust%20skrzynkowy%20-%20zamkniety%2002.glb",
        ],
        images: [
            { src: "/products/przepust-skrzynkowy-02.jpg", alt: "Przepust skrzynkowy" },
            { src: "/products/przepust-skrzynkowy-03.jpg", alt: "Przepust skrzynkowy" },
            { src: "/products/przepust-skrzynkowy-04.jpg", alt: "Przepust skrzynkowy" },
            { src: "/products/przepust-skrzynkowy-05.jpg", alt: "Przepust skrzynkowy" },
            { src: "/products/przepust-skrzynkowy-06.jpg", alt: "Przepust skrzynkowy" },
            { src: "/products/przepust-skrzynkowy-07.jpg", alt: "Przepust skrzynkowy" },
            { src: "/products/przepust-skrzynkowy-08.jpg", alt: "Przepust skrzynkowy" },
            { src: "/products/przepust-skrzynkowy-09.jpg", alt: "Przepust skrzynkowy" },
        ],
        description:
            "Prefabrykowane elementy żelbetowe przeznaczone do realizacji obiektów inżynierskich w infrastrukturze drogowej.",
        paragraphs: [
            "Zastosowanie - Wykorzystywane są do przeprowadzenia pod korpusem drogi cieków wodnych, ciągów komunikacyjnych, a także przejść dla zwierząt.",
            "Materiał - Elementy wykonywane są z wysokiej klasy betonu C40/50 oraz zbrojone stalą A-IIIN, co zapewnia im odpowiednią nośność, trwałość i odporność na warunki eksploatacyjne.",
            'Standardy - Produkcja odbywa się zgodnie z wytycznymi zawartymi w opracowaniu „Przepusty drogowe z elementów prefabrykowanych według eurokodów” - katalog Transprojekt Warszawa 2022.',
        ],
        table: {
            headers: ["Typ przepustu", "Rodzaj", "Szerokość otwarcia", "Wysokość otwarcia", "Grubość ścianki", "Głębokość", "Szerokość zewnętrzna", "Wysokość zewnętrzna", "Ciężar [T]"],
            rows: [
                ["100x100", "zamknięty", "100", "100", "16", "99", "132", "132", "2,00"],
                ["120x120", "zamknięty", "120", "120", "18", "99", "156", "156", "2,70"],
                ["150x100", "zamknięty", "150", "100", "18", "99", "186", "136", "2,75"],
                ["150x150", "zamknięty", "150", "150", "18", "99", "186", "186", "3,20"],
                ["200x100", "zamknięty", "200", "100", "20", "99", "240", "140", "3,70"],
                ["200x150", "zamknięty", "200", "150", "20", "99", "240", "190", "4,20"],
                ["200x200", "zamknięty", "200", "200", "20", "99", "240", "240", "4,75"],
                ["250x150", "zamknięty", "250", "150", "22", "99", "294", "194", "5,25"],
                ["250x200", "zamknięty", "250", "200", "22", "99", "294", "244", "5,85"],
                ["250x250", "zamknięty", "250", "250", "22", "99", "294", "294", "6,50"],
                ["300x200", "zamknięty", "300", "200", "25", "99", "350", "250", "7,35"],
                ["300x300", "zamknięty (gabaryt)", "300", "300", "25", "99", "350", "350", "8,85"],
                ["300x100", "otwarty dolny", "300", "100", "26", "99", "352", "126", "3,95"],
                ["300x150", "otwarty dolny", "300", "150", "26", "99", "352", "176", "4,60"],
                ["300x100", "otwarty górny", "300", "100", "26", "99", "352", "126", "3,80"],
                ["300x150", "otwarty górny", "300", "150", "26", "99", "352", "176", "4,50"],
                ["350x100", "otwarty dolny", "350", "100", "30", "99", "410", "130", "4,90"],
                ["350x150", "otwarty dolny", "350", "150", "30", "99", "410", "180", "5,75"],
                ["350x100", "otwarty górny", "350", "100", "30", "99", "410", "130", "4,85"],
                ["350x150", "otwarty górny", "350", "150", "30", "99", "410", "180", "5,60"],
                ["400x100", "otwarty dolny", "400", "100", "34", "99", "468", "134", "5,95"],
                ["400x150", "otwarty dolny", "400", "150", "34", "99", "468", "184", "6,95"],
                ["400x100", "otwarty górny", "400", "100", "34", "99", "468", "134", "5,95"],
                ["400x150", "otwarty górny", "400", "150", "34", "99", "468", "184", "6,80"],
                ["450x100", "otwarty dolny", "450", "100", "38", "99", "526", "138", "7,15"],
                ["450x150", "otwarty dolny", "450", "150", "38", "99", "526", "188", "8,25"],
                ["450x200", "otwarty dolny", "450", "200", "38", "99", "526", "238", "9,40"],
                ["450x100", "otwarty górny", "450", "100", "38", "99", "526", "138", "7,20"],
                ["450x150", "otwarty górny", "450", "150", "38", "99", "526", "188", "8,15"],
                ["450x200", "otwarty górny", "450", "200", "38", "99", "526", "238", "9,10"],
            ],
        },
    },
    {
        id: 15,
        slug: "gwiazdobloki-betonowe",
        name: "Gwiazdobloki betonowe",
        imageSrc: "/products/gwiazdobok-01.jpg",
        imageAlt: "Gwiazdobloki betonowe",
        images: [
            { src: "/products/gwiazdobok-01.jpg", alt: "Gwiazdobloki betonowe" },
            { src: "/products/gwiazdobok-02.jpg", alt: "Gwiazdobloki betonowe" },
            { src: "/products/gwiazdobok-03.jpg", alt: "Gwiazdobloki betonowe" },
        ],
        description:
            "Betonowe gwiazdobloki to prefabrykaty o przestrzennej konstrukcji, przeznaczone do zastosowań w inżynierii lądowej, wodnej i wojskowej. Wykonane z wysokiej jakości betonu, gwarantują trwałość, odporność na uszkodzenia mechaniczne oraz działanie niekorzystnych warunków atmosferycznych. Specjalna geometria zapewnia stabilność i skuteczną ochronę struktur.",
        sections: [
            {
                title: "Zalety",
                items: ["Szybki montaż.", "Krótki czas realizacji.", "Wysoka trwałość."],
            },
            {
                title: "Zastosowania",
                items: [
                    "Umocnienia brzegów i falochronów: redukują energię fal, zapobiegając erozji oraz chroniąc linie brzegowe.",
                    "Stabilizacja skarp i zboczy: zapobiegają osuwaniu się gruntu i wzmacniają obszary zagrożone erozją.",
                    "Ochrona fundamentów mostów i nabrzeży: chronią infrastrukturę hydrotechniczną przed wypłukiwaniem i zwiększają jej trwałość.",
                    "Konstrukcje hydrotechniczne: stosowane przy budowie portów, zapór i obiektów wodnych.",
                    "Zastosowania wojskowe: bariery przeciwczołgowe, osłony przeciwodłamkowe, umocnienia polowe oraz blokady drogowe.",
                ],
            },
            {
                title: "Certyfikacja i zgodność",
                items: [
                    "Krajowa deklaracja właściwości użytkowych.",
                    "Znak budowlany B.",
                    "Certyfikat zgodności zakładowej kontroli produkcji.",
                ],
            },
        ],
        table: {
            headers: ["Symbol", "Ciężar [t]", "Wysokość H [cm]", "Odległość od podstawy do środka h [cm]", "Długość ramienia L [cm]", "Szerokość ramienia G [cm]", "Szerokość podstawy ramienia D [cm]", "Szerokość S [cm]"],
            rows: [
                ["T-1,5", "1,5", "134", "88", "57", "65", "38", "144"],
                ["T-3", "3,0", "170", "112", "85", "78", "46", "183"],
                ["T-5", "5,0", "207", "138", "105", "94", "50", "225"],
                ["T-8", "8", "235", "156", "120", "105", "60", "255"],
                ["T-13", "13", "279", "180", "140", "128", "70", "294"],
                ["T-20", "20", "310", "202", "150", "148", "88", "330"],
                ["T-25", "25", "335", "218", "159", "159", "95", "336"],
            ],
        },
    },
    {
        id: 16,
        slug: "prefabrykowane-modulowe-zbiorniki",
        name: "Prefabrykowane modułowe zbiorniki",
        imageSrc: "/products/prefabrykowane-modulowe-zbiorniki-01.jpg",
        imageAlt: "Prefabrykowane modułowe zbiorniki",
        euLogo: true,
        model3d: [
            "/3d-modele/Zbiornik%20Startowy.glb",
            "/3d-modele/Zbiornik%20Posredni.glb",
        ],
        images: [
            { src: "/products/prefabrykowane-modulowe-zbiorniki-01.jpg", alt: "Prefabrykowane modułowe zbiorniki" },
            { src: "/products/prefabrykowane-modulowe-zbiorniki-02.jpg", alt: "Prefabrykowane modułowe zbiorniki" },
            { src: "/products/prefabrykowane-modulowe-zbiorniki-03.jpg", alt: "Prefabrykowane modułowe zbiorniki" },
            { src: "/products/prefabrykowane-modulowe-zbiorniki-04.jpg", alt: "Prefabrykowane modułowe zbiorniki" },
            { src: "/products/prefabrykowane-modulowe-zbiorniki-05.jpg", alt: "Prefabrykowane modułowe zbiorniki" },
            { src: "/products/prefabrykowane-modulowe-zbiorniki-06.jpg", alt: "Prefabrykowane modułowe zbiorniki" },
        ],
        description:
            "Uniwersalne rozwiązanie do inwestycji drogowych, przemysłowych i komercyjnych, przeznaczone do efektywnego magazynowania wody oraz innych cieczy.",
        paragraphs: [
            "Konstrukcja została zaprojektowana z uwzględnieniem oddziaływań obciążeń stałych i zmiennych, co pozwala na ich zastosowanie zarówno jako zbiorniki retencyjne do zarządzania wodami opadowymi, jak i zbiorniki przeciwpożarowe.",
            'System oparty jest na prefabrykowanych elementach modułowych - segmentach pośrednich w kształcie litery „U", elementach zamykających oraz pokrywach, które umożliwiają pełne przykrycie zbiornika lub jego eksploatację w wersji otwartej.',
            "Montaż odbywa się na odpowiednio przygotowanym podłożu, np. płycie fundamentowej, a poszczególne elementy łączone są przy użyciu certyfikowanych systemów łączeń i uszczelnień.",
        ],
        sections: [
            {
                title: "Oferowane wymiary",
                items: [
                    "Szerokość wewnętrzna: 450 cm lub 560 cm",
                    "Długość modułu: 250 cm, 270 cm, 300 cm",
                    "Wysokość wewnętrzna: od 100 cm do 300 cm",
                    "Grubość ścian: 15 cm / 20 cm / 25 cm",
                ],
            },
            {
                title: "Zakres zastosowania",
                items: [
                    "Retencja wód opadowych, magazynowanie cieczy, oczyszczalnie ścieków, zbiorniki przeciwpożarowe, niecki basenowe.",
                ],
            },
        ],
    },
    {
        id: 17,
        slug: "kolumbaria",
        name: "Kolumbaria",
        imageSrc: "/products/kolumbiara-01.jpg",
        imageAlt: "Kolumbaria betonowe prefabrykowane",
        model3d: "/3d-modele/Kolumbaria.glb",
        images: [
            { src: "/products/kolumbiara-01.jpg", alt: "Kolumbaria betonowe prefabrykowane" },
            { src: "/products/kolumbiara-02.jpg", alt: "Kolumbaria betonowe prefabrykowane" },
            { src: "/products/kolumbiara-03.jpg", alt: "Kolumbaria betonowe prefabrykowane" },
        ],
        description:
            "Prefabrykowane betonowe kolumbaria wykonywane według projektu zamawiającego lub w oparciu o nasze standardowe rozwiązanie modułowe obejmujące 6 nisz. Oferowane konstrukcje cechują się wysoką trwałością, odpornością na warunki atmosferyczne oraz estetycznym wykonaniem. Dzięki technologii prefabrykacji możliwy jest szybki montaż na miejscu inwestycji przy zachowaniu precyzji i powtarzalnej jakości elementów. Kolumbaria wykonywane są w formie modułowych prefabrykatów, co pozwala na elastyczne konfigurowanie zabudowy oraz możliwość rozbudowy w przyszłości. Solidna konstrukcja betonowa zapewnia wieloletnią trwałość i elegancki wygląd, harmonijnie wpisując się w przestrzeń cmentarną.",
    },
    {
        id: 18,
        slug: "rowy-strzeleckie",
        name: "Prefabrykowane rowy strzeleckie",
        imageSrc: "/products/row-strzelecki-01.jpg",
        imageAlt: "Prefabrykowane rowy strzeleckie",
        images: [
            { src: "/products/row-strzelecki-01.jpg", alt: "Prefabrykowane rowy strzeleckie" },
            { src: "/products/row-strzelecki-02.jpg", alt: "Prefabrykowane rowy strzeleckie" },
            { src: "/products/row-strzelecki-03.jpg", alt: "Prefabrykowane rowy strzeleckie" },
            { src: "/products/row-strzelecki-04.jpg", alt: "Prefabrykowane rowy strzeleckie" },
            { src: "/products/row-strzelecki-05.jpg", alt: "Prefabrykowane rowy strzeleckie" },
        ],
        description:
            "Prefabrykowane rowy strzeleckie to praktyczne rozwiązanie przeznaczone dla Sił Zbrojnych oraz formacji obronnych. Elementy prefabrykowane pozwalają na szybki montaż i ograniczają zakres prac ziemnych oraz wykonywania tradycyjnych umocnień drewniano-ziemnych.",
        sections: [
            {
                title: "Zalety",
                items: [
                    "Szybki montaż.",
                    "Krótki czas realizacji.",
                    "Wysoka trwałość.",
                ],
            },
            {
                title: "Zastosowania",
                items: [
                    "Budowy linii obronnych na terenach podwyższonego ryzyka.",
                    "Tworzenia tymczasowych i stałych fortyfikacji przygranicznych.",
                    "Ochrony strategicznych punktów (np. stanowisk dowodzenia i składów amunicji).",
                    "Szkolenia i symulacji warunków bojowych.",
                ],
            },
            {
                title: "Certyfikacja i zgodność",
                items: [
                    "Krajowa deklaracja właściwości użytkowych.",
                    "Znak budowlany B.",
                    "Certyfikat zgodności zakładowej kontroli produkcji.",
                ],
            },
        ],
    },
    {
        id: 19,
        slug: "prefabrykaty-na-zamowienie",
        name: "Prefabrykaty na zamówienie",
        imageSrc: "/products/indywidualne-projekty-na-zamowienie-01.jpg",
        imageAlt: "Prefabrykaty na zamówienie",
        images: [
            { src: "/products/indywidualne-projekty-na-zamowienie-01.jpg", alt: "Prefabrykaty na zamówienie" },
            { src: "/products/indywidualne-projekty-na-zamowienie-02.jpg", alt: "Prefabrykaty na zamówienie" },
            { src: "/products/indywidualne-projekty-na-zamowienie-03.jpg", alt: "Prefabrykaty na zamówienie" },
        ],
        description:
            "Indywidualne prefabrykaty betonowe realizowane na życzenie inwestora. Projektujemy i wykonujemy elementy według dostarczonej specyfikacji technicznej.",
        specs: [
            { label: "Wymiary", value: "według specyfikacji klienta" },
            { label: "Waga", value: "zależna od projektu" },
        ],
        // Text and photos 1:1 from transbet.com.pl/indywidualne-zamowienia-prefabrykatow-betonowych.
        paragraphs: [
            "Specjalizujemy się również w realizacji indywidualnych zamówień prefabrykatów betonowych, dostosowanych do specyficznych potrzeb naszych klientów.",
            "Nasz doświadczony zespół inżynierów i techników jest gotowy do współpracy na każdym etapie projektu, od koncepcji po finalne wykonanie.",
            "Oferujemy kompleksową obsługę, obejmującą projektowanie, produkcję oraz dostawę prefabrykatów betonowych, zapewniając najwyższą jakość i terminowość realizacji. Dzięki nowoczesnym technologiom produkcyjnym oraz rygorystycznym standardom jakości, jesteśmy w stanie sprostać nawet najbardziej wymagającym projektom.",
            "Każdy z naszych produktów jest wynikiem wieloletniego doświadczenia oraz zaangażowania w zapewnianie najwyższej jakości rozwiązań budowlanych.",
            "Jesteśmy dumni z naszej oferty i gotowi sprostać Państwa oczekiwaniom.",
        ],
        gallery: Array.from({ length: 26 }, (_, i) => ({
            src: `/products/na-zamowienie/${String(i + 1).padStart(2, "0")}.jpg`,
            alt: "Indywidualne zamówienia prefabrykatów betonowych",
        })),
    },
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
}

// Photos that are not packshots on white (checked by their edge colour): shown edge to edge instead of on the grey ground.
export const scenePhotos = new Set([
    "/products/balkony-02.jpg",
    "/products/stropy-filigran-01.jpg",
    "/products/indywidualne-projekty-na-zamowienie-01.jpg",
    "/products/indywidualne-projekty-na-zamowienie-02.jpg",
    "/products/indywidualne-projekty-na-zamowienie-03.jpg",
]);
