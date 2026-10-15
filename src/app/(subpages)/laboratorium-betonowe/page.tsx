import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Laboratorium betonowe',
  description:
    'Firma Transbet posiada przyzakładowe laboratorium betonu i jego składników, które cały czas jest rozwijane w nowe maszyny badawcze.',
};

// Table 1:1 from transbet.com.pl/laboratorium-betonowe.
const groups: { title: string; rows: [string, string][] }[] = [
  {
    title: 'BADANIA KRUSZYW',
    rows: [
      ['Pobranie jednego rodzaju kruszywa zgodnie z wymogami PN-EN 932-1', '1 ozn.'],
      ['Oznaczenie składu ziarnowego metodą przesiewania na sucho zgodnie z wymogami PN-EN 933-1 (max. wymiar ziarn kruszywa ≤32mm)', '1 ozn.'],
      ['Oznaczenie zawartości pyłów mineralnych zgodnie z wymogami PN-EN 933-1 metodą odsiewania', '1 ozn.'],
    ],
  },
  {
    title: 'BADANIA MIESZANKI BETONOWEJ',
    rows: [
      ['Oznaczenie konsystencji mieszanki betonowej zgodnie z wymogami PN-EN 12350-2 metodą opadu stożka', '1 ozn.'],
      ['Oznaczenie zawartości powietrza w mieszance betonowej zgodnie z wymogami PN-EN 12350-7', '1 ozn.'],
      ['Oznaczenie gęstości mieszanki betonowej zgodnie z wymogami PN-EN 12350-6', '1 ozn.'],
      ['Pomiar temperatury mieszanki betonowej i powietrza', '1 ozn.'],
    ],
  },
  {
    title: 'BADANIA BETONU',
    rows: [
      ['Oznaczenie wodoszczelności betonu W2-W12 zgodnie z wymogami PN-88/B-06250 na 6 próbkach typu “B” (150x150x150mm)', '1 szt.'],
      ['Wykonanie próbki sześciennej z betonu oraz jej przechowywanie zgodnie z wymogami PN-88/B-06250 lub PN-EN 12390-2', '1 szt.'],
      ['Oznaczenie wytrzymałości na ściskanie próbki betonowej zgodnie z wymogami PN-EN 12390-3', '1 ozn.'],
      ['Oznaczenie gęstości betonu (na próbkach regularnych) zgodnie z wymogami PN-EN 12390-7', '1 ozn.'],
      ['Oznaczenie nasiąkliwości betonu zgodnie z wymogami PN-88/B-06250 na 3 próbkach typu “C”(100x100x100mm)  lub (bez pobrania próbek do niniejszego badania)', '1 ozn.'],
      ['Oznaczenie nasiąkliwości betonu zgodnie z wymogami PN-88/B-06250 na 3 próbkach typu “B”(150x150x150mm) (bez pobrania próbek do niniejszego badania)', '1 ozn.'],
      ['Oznaczenie nasiąkliwości betonu zgodnie z wymogami PN-88/B-06250 na 3 próbkach typu “C”(100x100x100mm) (wraz z pobraniem próbek do niniejszego badania)', '1 ozn.'],
      ['Oznaczenie nasiąkliwości betonu zgodnie z wymogami PN-88/B-06250 na 3 próbkach typu “B”(150x150x150mm) (wraz z pobraniem próbek do niniejszego badania)', '1 ozn.'],
    ],
  },
  {
    title: 'BADANIA GRUNTÓW STABILIZOWANYCH SPOIWAMI, CHUDEGO BETONU I MIESZANEK ZWIĄZANYCH SPOIWEM HYDRAULICZNYM',
    rows: [
      ['Wykonanie próbek z gruntu stabilizowanego cementem o średnicy ϕ=80mm i wysokości h=80mm zgodnie z wymogami PN-B-04481 wraz z ich pielęgnacją zgodnie z wymogami PN-S-96012', '1 szt.'],
      ['Oznaczenie wytrzymałości na ściskanie na próbkach z gruntu stabilizowanego cementem zgodnie z wymogami PN-S-96012', '1 ozn.'],
      ['Wykonanie próbek mieszanek związanych spoiwem hydraulicznym zgodnie z wymogami normy PN-EN 14227-1 wraz z ich pielęgnacją', '1 ozn.'],
      ['Oznaczenie wytrzymałości na ściskanie na próbkach mieszanki związanej spoiwem hydraulicznym  zgodnie z wymogami PN-EN 14227-1', '1 ozn.'],
      ['Wykonanie próbek z chudego betonu o średnicy ϕ=160mm i wysokości h=160mm wraz      z ich pielęgnacją zgodnie z wymogami PN-S-96013', '1 szt.'],
      ['Oznaczenie wytrzymałości na ściskanie chudego betonu zgodnie z wymogami PN-S-96013', '1 ozn.'],
    ],
  },
  {
    title: 'USŁUGI DODATKOWE',
    rows: [
      ['Dojazd laboranta w miejsce wskazane przez klienta', '1 km'],
      ['Badania wykonywane poza normalnymi godzinami pracy tj. 16.00-21.00 w dni robocze', 'rozpoczęta 1h'],
      ['Badania wykonywane w porze nocnej (21.00-7.00) oraz w dni ustawowo wolne od pracy', 'rozpoczęta 1h'],
      ['Badania i usługi inne', '-'],
    ],
  },
];

export default function LaboratoryPage() {
  return (
    <>
      <PageHero
        number="02"
        eyebrow="Laboratorium betonowe"
        parent={{ label: 'Oferta', href: '/oferta' }}
        title="Laboratorium betonowe"
        description="Firma Transbet posiada przyzakładowe laboratorium betonu i jego składników, które cały czas jest rozwijane w nowe maszyny badawcze."
        image="/background.jpg"
      />

      <section className="bg-white">
        <div className="mx-[4vw] border-x border-black/10">
          <div className="px-6 py-12 sm:px-9 md:px-12 lg:py-16">
            <Reveal>
              <h2 className="max-w-[24ch] text-[clamp(2rem,3.4vw,3.6rem)] leading-[0.98] font-medium tracking-[-0.045em]">
                Oferujemy obsługę laboratoryjną inwestycji wg poniższego zestawienia.
              </h2>
            </Reveal>
          </div>

          <div className="hidden grid-cols-[5rem_1fr_9rem] border-t border-black/10 px-6 py-4 font-mono text-[9px] tracking-[0.16em] text-black/45 uppercase sm:grid sm:px-9 md:px-12">
            <span>Poz.</span>
            <span>Rodzaj badania</span>
            <span className="text-right">Jednostka badania</span>
          </div>

          {groups.map((group, groupIndex) => (
            <div key={group.title} className="border-t border-black/10">
              <div className="grid grid-cols-[3.5rem_1fr] items-baseline bg-[#f6f6f6] px-6 py-5 sm:grid-cols-[5rem_1fr] sm:px-9 md:px-12">
                <span className="font-mono text-sm text-brand">{groupIndex + 1}.</span>
                <h3 className="text-[clamp(1.05rem,1.4vw,1.35rem)] font-medium tracking-[-0.02em]">{group.title}</h3>
              </div>
              <ol>
                {group.rows.map(([test, unit], rowIndex) => (
                  <li
                    key={test}
                    className="grid grid-cols-[3.5rem_1fr] gap-y-1 border-t border-black/[0.07] px-6 py-4 transition-colors hover:bg-[#fafafa] sm:grid-cols-[5rem_1fr_9rem] sm:px-9 md:px-12"
                  >
                    <span className="font-mono text-[12px] leading-6 text-black/40">
                      {groupIndex + 1}.{rowIndex + 1}.
                    </span>
                    <span className="text-base leading-relaxed text-black/80">{test}</span>
                    <span className="col-start-2 font-mono text-[12px] leading-6 text-black/55 sm:col-start-3 sm:text-right">{unit}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
