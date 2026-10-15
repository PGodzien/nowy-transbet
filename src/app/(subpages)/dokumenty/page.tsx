import type { Metadata } from 'next';
import KdwuBrowser from '@/components/KdwuBrowser';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import NewsGallery from '@/components/news/NewsGallery';
import { kdwuPlants, precastDocs } from '@/data/documents';
import { getImageSize } from '@/lib/news';

export const metadata: Metadata = {
  title: 'Dokumenty | Transbet Industrial Group',
  description:
    'Certyfikaty, krajowe deklaracje właściwości użytkowych (KDWU) dla betoniarni w Przemyślu, Jarosławiu i Radymnie, ogólne warunki sprzedaży i informacje o środkach z UE.',
};

/* Index of documents: sections further down this page or their own subpages. */
const documentIndex = [
  {
    title: 'Certyfikaty',
    text: 'Posiadamy wdrożone i udokumentowane systemy, potwierdzone odpowiednimi certyfikatami.',
    href: '#certyfikaty',
    below: true,
  },
  {
    title: 'KDWU – Przemyśl, Jarosław, Radymno',
    text: 'Krajowe Deklaracje Właściwości Użytkowych dla każdej z betoniarni, do pobrania w PDF.',
    href: '#kdwu',
    below: true,
  },
  {
    title: 'Ogólne warunki sprzedaży',
    text: 'Szczegółowe zasady sprzedaży produktów będących w ofercie handlowej.',
    href: '/ogolne-warunki-sprzedazy',
    below: false,
  },
  {
    title: 'Środki UE',
    text: 'Projekty realizowane przy wsparciu Funduszy Europejskich, m.in. wprowadzenie na rynek innowacyjnego systemu płyt drogowych.',
    href: '/srodki-ue',
    below: false,
  },
  {
    title: 'Prefabrykaty betonowe',
    text: 'Instrukcja poprawnego transportu, składowania oraz układania.',
    href: '#prefabrykaty',
    below: true,
  },
] as const;

const certificates = [
  '/dokumenty/krajowy-certyfikat-zgodnosci-zakladowej-kontroli-produkcji.webp',
  '/dokumenty/krajowy-certyfikat-zgodnosci-zakladowej-kontroli-i-produkcji-2.webp',
];

function Arrow({ down }: { down: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d={down ? 'M12 4v16M6 14l6 6 6-6' : 'M4 12h16M14 6l6 6-6 6'} stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DocList({ title, docs }: { title: string; docs: readonly { name: string; file: string; kb: number }[] }) {
  return (
    <div>
      <p className="border-t border-black/10 px-6 py-5 font-mono text-[9px] tracking-[0.18em] text-black/45 uppercase sm:px-9 md:px-12">/ {title}</p>
      <ul className="grid gap-px border-t border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((doc) => (
          <li key={doc.file} className="bg-white">
            <a
              href={doc.file}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-24 items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-black hover:text-white sm:px-8"
            >
              <span>
                <span className="block text-base font-medium tracking-[-0.01em]">{doc.name}</span>
                <span className="mt-1 block font-mono text-[9px] tracking-[0.14em] text-black/40 uppercase group-hover:text-white/50">
                  PDF · {doc.kb} KB
                </span>
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-brand transition-transform group-hover:translate-y-0.5">
                <path d="M12 4v12M6 11l6 6 6-6M5 20h14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function DocumentsPage() {
  const declarations = kdwuPlants.reduce((sum, plant) => sum + plant.docs.length, 0);
  const certificatePhotos = await Promise.all(certificates.map(async (src) => ({ src, ...(await getImageSize(src)) })));

  return (
    <>
      <PageHero
        number="06"
        eyebrow="Dokumenty"
        title="Dokumenty"
        description="Certyfikaty, krajowe deklaracje właściwości użytkowych, ogólne warunki sprzedaży, informacje o środkach z UE."
        image="/background.jpg"
        facts={[
          { value: String(declarations), label: 'deklaracji KDWU do pobrania' },
          { value: '3', label: 'betoniarnie' },
          { value: 'ZKP', label: 'certyfikat zakładowej kontroli produkcji' },
        ]}
      />

      {/* Index */}
      <section className="bg-white">
        <div className="mx-[4vw] border-x border-black/10">
          <div className="grid gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-3">
            {documentIndex.map((item, index) => (
              <Reveal key={item.title} direction="none" delay={(index % 3) * 60} className="h-full">
                <a
                  href={item.href}
                  data-curtain={item.below ? 'off' : undefined}
                  className="group flex h-full min-h-64 flex-col justify-between bg-white p-7 transition-colors duration-300 hover:bg-black hover:text-white sm:p-9"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.18em] text-black/35 group-hover:text-white/40">
                      / {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-brand transition-transform duration-300 group-hover:translate-x-1">
                      <Arrow down={item.below} />
                    </span>
                  </span>
                  <span className="mt-12 block">
                    <span className="block text-[clamp(1.5rem,2.2vw,2.3rem)] font-medium leading-[1] tracking-[-0.035em]">{item.title}</span>
                    <span className="mt-4 block text-base leading-relaxed text-black/55 group-hover:text-white/65">{item.text}</span>
                    <span className="mt-6 block font-mono text-[9px] tracking-[0.16em] text-brand uppercase">
                      {item.below ? 'Zobacz poniżej' : 'Otwórz'}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
            <div className="hidden bg-[#f6f6f6] md:block" />
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certyfikaty" className="bg-[#f6f6f6]">
        <div className="mx-[4vw] border-x border-t border-black/10">
          <SectionHeading
            eyebrow="Certyfikaty"
            title="Certyfikaty naszej betoniarni"
            description="Zapewniamy najwyższą jakość betonu dzięki naszemu laboratorium i współpracy z Centrum Technologicznym Budownictwa."
          />
          <div className="grid border-t border-black/10 lg:grid-cols-3">
            <div className="space-y-6 px-6 py-10 text-base leading-relaxed text-black/70 sm:px-9 md:px-12 lg:col-span-1 lg:border-r lg:border-black/10 lg:py-14">
              <p>
                Prowadzimy przyzakładowe laboratorium betonu oraz współpracujemy z Centrum Technologiczne Budownictwa Instytut Badań i
                Certyfikacji Sp. z o.o., aby zapewnić najwyższej jakości towar. Dzięki odpowiedniemu doborowi składników potrzebnych do
                produkcji masy betonowej zapewniamy niebywałą trwałość betonu, potwierdzoną długim okresem użytkowania w konstrukcjach
                budowlanych.
              </p>
              <p>
                Nasze wytwórnie betonu towarowego posiadają wdrożony i udokumentowany system Zakładowej Kontroli Produkcji. Certyfikat
                Zgodności Zakładowej Kontroli Produkcji to dokument, który potwierdza prawidłowe postępowanie w zakresie produkcji wyrobów
                budowlanych tj. betonu towarowego, stabilizacji i mieszanek związanych spoiwem hydraulicznym wraz z dopuszczeniem ich do
                obrotu i powszechnego stosowania w budownictwie.
              </p>
            </div>
            <div className="px-6 sm:px-9 md:px-12 lg:col-span-2">
              <NewsGallery images={certificatePhotos} alt="Krajowy Certyfikat Zgodności Zakładowej Kontroli Produkcji" />
            </div>
          </div>
        </div>
      </section>

      {/* Declarations of performance */}
      <section id="kdwu" className="bg-white">
        <div className="mx-[4vw] border-x border-t border-black/10">
          <SectionHeading
            eyebrow="KDWU"
            title="Krajowe Deklaracje Właściwości Użytkowych"
            description="Wybierz betoniarnię i pobierz deklarację w PDF albo wyszukaj ją po numerze."
          />
          <KdwuBrowser />
        </div>
      </section>

      {/* Precast elements */}
      <section id="prefabrykaty" className="bg-[#f6f6f6]">
        <div className="mx-[4vw] border-x border-t border-black/10">
          <SectionHeading
            eyebrow="Prefabrykaty betonowe"
            title="Instrukcje i deklaracje prefabrykatów"
            description="Instrukcja poprawnego transportu, składowania oraz układania płyt, a także deklaracje właściwości użytkowych."
          />
          <DocList title="Instrukcje" docs={precastDocs.instructions} />
          <DocList title="Deklaracje" docs={precastDocs.declarations} />
        </div>
      </section>
    </>
  );
}
