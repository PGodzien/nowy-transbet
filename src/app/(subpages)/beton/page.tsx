import type { Metadata } from 'next';
import ArrowIcon from '@/components/ArrowIcon';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { concretePlants, concreteTypes } from '@/data/site';

export const metadata: Metadata = {
  title: 'Beton towarowy i betoniarnie | Transbet',
  description: 'Produkcja i dostawa betonu z betoniarni w Przemyślu, Jarosławiu i Radymnie. Mieszanki projektowane pod wymagania inwestycji.',
};

const productionCapabilities = [
  ['01', 'Indywidualne mieszanki', 'Możemy wyprodukować mieszanki betonowe według indywidualnych potrzeb danej inwestycji lub Klienta.'],
  ['02', 'Produkcja w każdych warunkach', 'Węzły są wyposażone w układy grzewcze kruszyw oraz wody, co pozwala dostarczać mieszankę w niemal każdych warunkach atmosferycznych.'],
  ['03', 'Potwierdzenie każdej dostawy', 'Każda dostawa betonu jest zaopatrzona w komputerowy wydruk WZ potwierdzający zgodność z zamówieniem i składem mieszanki.'],
] as const;

export default function ConcretePage() {
  return (
    <>
      <PageHero
        number="03"
        eyebrow="Beton"
        title="Beton"
        description="Poznaj naszą ofertę wysokiej jakości betonu od Transbet. Oferujemy szeroki wybór betonów dostosowanych do różnych potrzeb budowlanych."
        image="/beton.jpg"
        imagePosition="center"
        facts={[
          { value: '3', label: 'betoniarnie' },
          { value: 'C8/10—C40/50', label: 'zakres klas' },
          { value: '1993', label: 'produkcja betonu od' },
        ]}
      />

      <section className="bg-[#f6f6f6]">
        <div className="mx-[4vw] border-x border-black/10">
          <SectionHeading
            eyebrow="Produkcja betonu"
            title="W naszej wytwórni znajdą Państwo"
            description="Pełny zakres betonów towarowych, posadzkowych, drogowo-mostowych, hydrotechnicznych, architektonicznych i mieszanek specjalistycznych."
          />
          <div className="grid gap-px border-t border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-5">
            {concreteTypes.map(([title, text], index) => (
              <Reveal key={title} direction="none" delay={(index % 5) * 40} className="h-full">
                <article className="group flex h-full min-h-64 flex-col justify-between bg-white p-6 transition-colors hover:bg-brand">
                  <span className="font-mono text-[8px] tracking-[0.17em] text-black/30">/ {String(index + 1).padStart(2, '0')}</span>
                  <div className="mt-14">
                    <h2 className="text-xl font-medium leading-tight tracking-[-0.03em]">{title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-black/52 transition-colors group-hover:text-black/65">{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-[4vw] border-x border-white/15">
          <SectionHeading
            dark
            eyebrow="Możliwości produkcyjne"
            title="Mieszanki według potrzeb inwestycji"
            description="Wyposażenie węzłów umożliwia realizację zamówień indywidualnych oraz dostawy w zróżnicowanych warunkach atmosferycznych."
          />
          <div className="grid gap-px border-t border-white/15 bg-white/15 lg:grid-cols-3">
            {productionCapabilities.map(([number, title, text], index) => (
              <Reveal key={title} direction="none" delay={index * 55} className="h-full">
                <article className="flex h-full min-h-72 flex-col justify-between bg-black p-7 sm:p-8">
                  <span className="font-mono text-[9px] tracking-[0.18em] text-brand">/ {number}</span>
                  <div className="mt-16">
                    <h2 className="text-2xl font-medium tracking-[-0.035em]">{title}</h2>
                    <p className="mt-5 text-base leading-relaxed text-white/52">{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt-beton" className="bg-white scroll-mt-20">
        <div className="mx-[4vw] border-x border-black/10">
          <SectionHeading
            eyebrow="Trzy betoniarnie"
            title="Przemyśl, Radymno i Jarosław"
            description="Nasza betoniarnia działa na terenie województwa podkarpackiego. Beton dostarczamy na terenie powiatów przemyskiego, jarosławskiego, przeworskiego, bieszczadzkiego, sanockiego i leskiego."
          />
          <div className="grid gap-px border-t border-black/10 bg-black/10 lg:grid-cols-3">
            {concretePlants.map((plant, index) => (
              <Reveal key={plant.city} direction="none" delay={index * 65} className="h-full">
                <article className="group flex h-full min-h-80 flex-col justify-between bg-[#f6f6f6] p-7 transition-colors hover:bg-brand sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.18em] text-black/35">/ 0{index + 1}</span>
                    <span className="transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
                  </div>
                  <div className="mt-20">
                    <h2 className="text-[clamp(2.3rem,4vw,4.8rem)] font-medium leading-none tracking-[-0.05em]">{plant.city}</h2>
                    <p className="mt-5 text-base text-black/55">{plant.address}</p>
                    <a href={plant.phoneHref} className="mt-7 inline-block border-t border-black/20 pt-4 text-lg font-semibold tracking-[-0.02em]">{plant.phone}</a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
