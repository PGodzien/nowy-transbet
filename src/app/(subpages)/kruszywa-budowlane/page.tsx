import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Kruszywa budowlane',
  description: 'Świadczymy usługi sprzedaży oraz dostawy kruszyw, które są nieodzownym elementem każdej budowy.',
};

// List 1:1 from transbet.com.pl/kruszywa-budowlane.
const aggregates = [
  'Piasek płukany',
  'Żwir 2-8mm',
  'Żwir 4-16mm',
  'Żwir 16-63mm (najczęściej wykorzystywany do drenaży)',
  'Keramzyt 10/20',
  'Pospółki',
  'Tłuczeń',
  'Kliniec',
  'Kruszywa drogowe',
];

export default function AggregatesPage() {
  return (
    <>
      <PageHero
        number="02"
        eyebrow="Kruszywa budowlane"
        parent={{ label: 'Oferta', href: '/oferta' }}
        title="Kruszywa budowlane"
        description="Świadczymy usługi sprzedaży oraz dostawy kruszyw, które są nieodzownym elementem każdej budowy."
        image="/background.jpg"
      />

      <section className="bg-white">
        <div className="mx-[4vw] grid border-x border-black/10 lg:grid-cols-3">
          <div className="px-6 pt-12 sm:px-9 md:px-12 lg:border-r lg:border-black/10 lg:py-16">
            <Reveal>
              <h2 className="text-[clamp(2rem,3.2vw,3.4rem)] leading-[0.98] font-medium tracking-[-0.045em]">Kruszywa budowlane</h2>
            </Reveal>
          </div>
          <div className="px-6 pt-6 pb-12 sm:px-9 md:px-12 lg:col-span-2 lg:py-16">
            <p className="max-w-3xl text-[clamp(1.05rem,1.25vw,1.2rem)] leading-relaxed text-black/75">
              Prowadzimy sprzedaż wraz z dostawą kruszyw, potrzebnych przy każdej budowie:
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6f6]">
        <div className="mx-[4vw] border-x border-t border-black/10">
          <ul className="grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {aggregates.map((item, index) => {
              const [, name, note] = item.match(/^(.*?)\s*(\(.*\))?$/) ?? [null, item, undefined];
              return (
                <li key={item} className="flex min-h-40 flex-col justify-between gap-8 bg-[#f6f6f6] p-6 sm:p-8">
                  <span className="font-mono text-[9px] tracking-[0.18em] text-brand">/ {String(index + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="block text-[clamp(1.5rem,2.2vw,2.3rem)] leading-[1.02] font-medium tracking-[-0.04em]">{name}</span>
                    {note ? <span className="mt-2 block text-sm text-black/55">{note}</span> : null}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-[4vw] border-x border-t border-black/10 px-6 py-12 sm:px-9 md:px-12 lg:py-16">
          <Reveal>
            <p className="max-w-4xl text-[clamp(1.5rem,2.6vw,2.6rem)] leading-[1.12] font-medium tracking-[-0.035em]">
              Zapewniamy transport na teren budowy autami samowyładowczymi o ładowności od 1t do 27t.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
