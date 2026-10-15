import type { Metadata } from 'next';
import ConcreteCalculator from '@/components/ConcreteCalculator';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Kalkulator betonu',
  description: 'Oblicz zapotrzebowanie na beton dla popularnych kształtów. Wynik podawany jest w m³.',
};

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        number="02"
        eyebrow="Kalkulator betonu"
        title="Kalkulator betonu"
        description="Oblicz zapotrzebowanie na beton dla popularnych kształtów. Wynik podawany jest w m³."
        image="/background.jpg"
      />
      <section className="bg-white">
        <div className="mx-[4vw] border-x border-black/10">
          <ConcreteCalculator />
        </div>
      </section>
    </>
  );
}
