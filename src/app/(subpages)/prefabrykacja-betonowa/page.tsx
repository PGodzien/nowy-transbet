import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import PrecastGrid from '@/components/precast/PrecastGrid';
import { products } from '@/data/precast-products';

export const metadata: Metadata = {
  title: 'Prefabrykacja betonowa',
  description: 'Kompleksowa oferta prefabrykatów betonowych i wyrobów zbrojarskich z katalogu Transbet.',
};

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
      />

      {/* Text 1:1 from transbet.com.pl/prefabrykacja-betonowa. */}
      <section className="bg-white">
        <div className="mx-[4vw] grid border-x border-black/10 lg:grid-cols-3">
          <div className="px-6 pt-12 sm:px-9 md:px-12 lg:border-r lg:border-black/10 lg:py-16">
            <Reveal>
              <h2 className="text-[clamp(2rem,3.2vw,3.4rem)] leading-[0.98] font-medium tracking-[-0.045em]">
                Prefabrykaty betonowe - kompleksowa oferta Transbet
              </h2>
            </Reveal>
          </div>
          <div className="space-y-5 px-6 pt-6 pb-12 text-[clamp(1.05rem,1.25vw,1.2rem)] leading-relaxed text-black/75 sm:px-9 md:px-12 lg:col-span-2 lg:py-16">
            <p>
              Transbet oferuje szeroki asortyment prefabrykatów betonowych przeznaczonych do budownictwa drogowego, hydrotechnicznego i
              przemysłowego. W naszej ofercie znajdują się m.in. korytka odpływowe (krakowskie, naskarpowe, ciekowe, ściekowe, trójkątne),
              płyty drogowe i płyty YOMB, mury i bloki oporowe, schody prefabrykowane, stropy filigran, przepusty skrzynkowe, gwiazdobloki
              betonowe, balkony prefabrykowane, podwaliny pod ekrany akustyczne, prefabrykowane zbiorniki modułowe oraz prefabrykaty
              wykonywane na indywidualne zamówienie.
            </p>
            <p>
              Wszystkie elementy produkowane są z betonu wysokiej klasy, zgodnie z obowiązującymi normami i standardami. Dzięki precyzji
              wykonania i powtarzalności wymiarów nasze prefabrykaty zapewniają szybki montaż, trwałość konstrukcji oraz odporność na
              obciążenia i warunki atmosferyczne.
            </p>
            <p className="font-semibold text-black">Realizujemy dostawy na terenie całej Polski.</p>
          </div>
        </div>
      </section>

      <section id="produkty" className="bg-white">
        <div className="mx-[4vw] border-x border-t border-black/10">
          <h2 className="sr-only">Produkty</h2>
          <PrecastGrid products={products} />
        </div>
      </section>
    </>
  );
}
