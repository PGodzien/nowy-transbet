import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Wynajem sprzętu budowlanego',
  description: 'Nasza wytwórnia posiada duże, młode zaplecze sprzętowe, które w miarę możliwości jest odświeżane.',
};

// List 1:1 from transbet.com.pl/sprzet-i-wynajem. The leading count is only set apart visually.
const equipment = [
  '3 osuszacze powietrza',
  '3 pompy do betonu o wysięgnikach 26, 36, 49mb',
  '5 pompogruszek o wysięgnikach 28mb i 32mb oraz pojemności do 10m3',
  '11 betonowozów o pojemności do 13m3',
  '4 wywrotki typu BUS trójstronne',
  '1 wywrotka z HDS-em trójstronna o ładowności 10t i udźwigu 5,5t',
  '2 wywrotki 4-osiowe o ładowności 18t',
  '3 wywrotki z naczepą o ładowności 27t',
  '1 wywrotka 3-osiowa z przyczepą (TANDEM) trójstronna o ładowności 22t',
  '4 ładowarki kołowe o pojemności łyżki ok. 4m3',
  '4 wózki widłowe o udźwigu 2,5t',
  '1 zamiatarka',
  '2 przyczepy typu „DŁUŻYCA”',
  '1 przyczepa typu laweta',
  'wibratory wgłębne do betonu',
  'listwy wibracyjne do betonu',
];

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        number="02"
        eyebrow="Sprzęt i wynajem"
        parent={{ label: 'Oferta', href: '/oferta' }}
        title="Wynajem sprzętu budowlanego"
        description="Nasza wytwórnia posiada duże, młode zaplecze sprzętowe, które w miarę możliwości jest odświeżane."
        image="/background.jpg"
      />

      <section className="bg-white">
        <div className="mx-[4vw] grid border-x border-black/10 lg:grid-cols-3">
          <div className="px-6 pt-12 sm:px-9 md:px-12 lg:border-r lg:border-black/10 lg:py-16">
            <Reveal>
              <h2 className="text-[clamp(2rem,3.2vw,3.4rem)] leading-[0.98] font-medium tracking-[-0.045em]">Wynajem sprzętu budowlanego</h2>
            </Reveal>
          </div>
          <div className="px-6 pt-6 pb-12 sm:px-9 md:px-12 lg:col-span-2 lg:py-16">
            <p className="max-w-3xl text-[clamp(1.05rem,1.25vw,1.2rem)] leading-relaxed text-black/75">
              Nasza wytwórnia posiada duże, młode zaplecze sprzętowe, które w miarę możliwości jest odświeżane, w skład, którego wchodzą:
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6f6]">
        <div className="mx-[4vw] border-x border-t border-black/10">
          <ul className="grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((item) => {
              const [, count, rest] = item.match(/^(\d+)\s+(.*)$/) ?? [null, null, item];
              return (
                <li key={item} className="flex min-h-44 flex-col justify-between gap-6 bg-[#f6f6f6] p-6 sm:p-8">
                  <span className="text-[clamp(2.4rem,3.6vw,3.8rem)] leading-none font-medium tracking-[-0.05em]">
                    {count ?? <span className="text-brand">—</span>}
                  </span>
                  <span className="text-base leading-snug text-black/75">{rest}</span>
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
              Istnieje możliwość wynajmu sprzętu. Nie świadczymy usług transportowych.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
