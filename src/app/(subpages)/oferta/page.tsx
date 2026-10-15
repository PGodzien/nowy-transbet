import type { Metadata } from 'next';
import ArrowIcon from '@/components/ArrowIcon';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { offerAreas } from '@/data/site';

export const metadata: Metadata = {
  title: 'Oferta',
  description: 'Oferta naszej betoniarni: mieszanki betonowe, produkty betonowe, laboratorium, sprzęt i wynajem, wyroby hutnicze, kruszywa.',
};

export default function OfferPage() {
  return (
    <>
      <PageHero
        number="02"
        eyebrow="Oferta"
        title="Oferta"
        description="Oferta naszej betoniarni: mieszanki betonowe, produkty betonowe, laboratorium, sprzęt i wynajem, wyroby hutnicze, kruszywa."
        image="/background.jpg"
        imagePosition="center 58%"
      />

      <section className="bg-[#f6f6f6]">
        <div className="mx-[4vw] border-x border-black/10">
          <div className="grid gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-3">
            {offerAreas.map((area, index) => (
              <Reveal key={area.title} direction="none" delay={(index % 3) * 60} className="h-full">
                <a
                  href={area.href}
                  target={area.external ? '_blank' : undefined}
                  rel={area.external ? 'noreferrer' : undefined}
                  className="group flex h-full min-h-[22rem] flex-col justify-between bg-white p-7 transition-colors duration-500 hover:bg-black hover:text-white sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.18em] text-black/35 transition-colors group-hover:text-white/35">/ {area.number}</span>
                    <span className="text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><ArrowIcon external={area.external} /></span>
                  </div>
                  <div className="mt-20">
                    <h2 className="max-w-[13ch] text-[clamp(1.9rem,3vw,3.4rem)] font-medium leading-[0.94] tracking-[-0.045em]">{area.title}</h2>
                    <p className="mt-5 text-base leading-relaxed text-black/52 transition-colors group-hover:text-white/55">{area.description}</p>
                    <span className="mt-7 flex items-center gap-4 border-t border-black/10 pt-5 text-sm font-semibold transition-colors group-hover:border-white/15">
                      {area.linkLabel}
                      <span className="text-brand"><ArrowIcon external={area.external} /></span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
