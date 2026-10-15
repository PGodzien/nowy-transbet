import type { Metadata } from 'next';
import Image from 'next/image';
import ArrowIcon from '@/components/ArrowIcon';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { prefabProducts } from '@/data/site';

export const metadata: Metadata = {
  title: 'Prefabrykacja betonowa',
  description: 'Prefabrykaty betonowe dla infrastruktury, hydrotechniki i przemysłu. Produkcja seryjna i elementy według indywidualnej dokumentacji.',
};

const benefits = [
  ['Beton wysokiej klasy', 'Wszystkie elementy produkujemy z betonu wysokiej klasy, zgodnie z obowiązującymi normami i standardami.'],
  ['Precyzja i powtarzalność', 'Powtarzalność wymiarów zapewnia szybki montaż, trwałość konstrukcji oraz odporność na obciążenia i warunki atmosferyczne.'],
  ['Dostawa w całej Polsce', 'Realizujemy dostawy prefabrykatów na terenie całej Polski.'],
] as const;

export default function ConcretePrefabricationPage() {
  return (
    <>
      <PageHero
        number="04"
        eyebrow="Prefabrykacja betonowa"
        title="Prefabrykacja betonowa"
        description="Kompleksowa oferta prefabrykatów betonowych i wyrobów zbrojarskich z katalogu Transbet."
        image="/background.jpg"
        imagePosition="center 52%"
        facts={[
          { value: '19', label: 'produktów w katalogu' },
          { value: 'PL', label: 'dostawa na terenie całej Polski' },
          { value: 'Indywidualne', label: 'prefabrykaty na zamówienie' },
        ]}
      />

      <section className="bg-[#f6f6f6]">
        <div className="mx-[4vw] border-x border-black/10">
          <SectionHeading
            eyebrow="Produkty"
            title="Prefabrykaty betonowe — kompleksowa oferta Transbet"
            description="Szeroki asortyment prefabrykatów betonowych przeznaczonych do budownictwa drogowego, hydrotechnicznego i przemysłowego."
          />
          <div className="grid gap-px border-t border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {prefabProducts.map((product) => (
              <article key={product.title} className="group h-full bg-white">
                <div className="relative aspect-[5/4] overflow-hidden bg-[#d7d7d7]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-black/[0.04] transition-opacity duration-500 group-hover:opacity-0" />
                </div>
                <div className="flex min-h-32 items-end border-t border-black/10 p-6">
                  <h2 className="text-[clamp(1.45rem,1.8vw,2rem)] font-medium leading-[1.02] tracking-[-0.035em]">{product.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-[4vw] border-x border-white/15">
          <SectionHeading
            dark
            eyebrow="Jakość prefabrykatów"
            title="Trwałość i precyzja wykonania"
            description="Elementy powstają zgodnie z obowiązującymi normami i standardami, z zachowaniem powtarzalności wymiarów."
          />
          <div className="grid gap-px border-t border-white/15 bg-white/15 lg:grid-cols-3">
            {benefits.map(([title, text], index) => (
              <Reveal key={title} direction="none" delay={index * 65} className="h-full">
                <article className="flex h-full min-h-72 flex-col justify-between bg-black p-7 sm:p-9">
                  <span className="font-mono text-[9px] tracking-[0.18em] text-brand">/ 0{index + 1}</span>
                  <div className="mt-16">
                    <h2 className="text-3xl font-medium tracking-[-0.04em]">{title}</h2>
                    <p className="mt-5 text-base leading-relaxed text-white/55">{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid border-t border-white/15 lg:grid-cols-3">
            <div className="flex min-h-80 items-end px-6 py-10 sm:px-9 md:px-12 lg:col-span-2 lg:border-r lg:border-white/15">
              <Reveal>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.2em] text-white/35 uppercase">/ Prefabrykaty na zamówienie</p>
                  <h2 className="mt-6 max-w-[13ch] text-[clamp(2.5rem,5vw,6rem)] font-medium leading-[0.92] tracking-[-0.05em]">Masz pytania? Skontaktuj się z nami<span className="text-brand">.</span></h2>
                </div>
              </Reveal>
            </div>
            <a href="mailto:prefabrykaty@transbet.com.pl" className="group flex min-h-72 flex-col justify-between bg-brand p-7 text-black transition-colors hover:bg-brand-hover sm:p-9">
              <span className="font-mono text-[9px] tracking-[0.18em] text-black/45 uppercase">Prefabrykacja</span>
              <span>
                <strong className="block text-xl font-medium tracking-[-0.025em] sm:text-2xl">+48 539 141 851</strong>
                <span className="mt-3 block text-sm">prefabrykaty@transbet.com.pl</span>
                <span className="mt-5 flex items-center justify-between border-t border-black/20 pt-5 text-sm font-semibold">Wyślij zapytanie <span className="transition-transform group-hover:translate-x-2"><ArrowIcon /></span></span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
