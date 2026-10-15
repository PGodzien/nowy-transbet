import type { Metadata } from 'next';
import ArrowIcon from '@/components/ArrowIcon';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { offerAreas } from '@/data/site';

export const metadata: Metadata = {
  title: 'Oferta | Transbet Industrial Group',
  description: 'Beton, prefabrykaty betonowe i zbrojeniowe, laboratorium, sprzęt oraz kruszywa — poznaj ofertę Transbet.',
};

export default function OfferPage() {
  return (
    <>
      <PageHero
        number="02"
        eyebrow="Oferta"
        title="Oferta"
        description="Oferta naszej betoniarni: mieszanki betonowe, produkty betonowe, laboratorium, sprzęt i wynajem, wyroby hutnicze oraz kruszywa."
        image="/background.jpg"
        imagePosition="center 58%"
        facts={[
          { value: '6', label: 'obszarów oferty' },
          { value: '3', label: 'betoniarnie' },
          { value: '1993', label: 'działamy od' },
        ]}
      />

      <section className="bg-[#f6f6f6]">
        <div className="mx-[4vw] border-x border-black/10">
          <SectionHeading
            eyebrow="Oferta naszej betoniarni"
            title="Produkty i usługi"
            description="Mieszanki betonowe, produkty betonowe, laboratorium, sprzęt i wynajem, wyroby hutnicze oraz kruszywa."
          />
          <div className="grid gap-px border-t border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
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

      <section className="bg-black text-white">
        <div className="mx-[4vw] grid border-x border-white/15 lg:grid-cols-3">
          <div className="flex min-h-[42svh] items-end border-b border-white/15 px-6 py-12 sm:px-9 md:px-12 lg:col-span-2 lg:border-r lg:border-b-0">
            <Reveal>
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] text-white/35 uppercase">/ Dane kontaktowe</p>
                <h2 className="mt-6 max-w-[13ch] text-[clamp(2.5rem,5vw,6rem)] font-medium leading-[0.92] tracking-[-0.05em]">Masz pytania? Skontaktuj się z nami<span className="text-brand">.</span></h2>
              </div>
            </Reveal>
          </div>
          <a href="mailto:biuro@transbet.com.pl" className="group flex min-h-72 flex-col justify-between bg-brand p-7 text-black transition-colors hover:bg-brand-hover sm:p-9">
            <span className="font-mono text-[9px] tracking-[0.18em] text-black/45 uppercase">Napisz do nas</span>
            <span>
              <strong className="block text-2xl font-medium tracking-[-0.03em]">biuro@transbet.com.pl</strong>
              <span className="mt-5 flex items-center justify-between border-t border-black/20 pt-5 text-sm font-semibold">Wyślij zapytanie <span className="transition-transform group-hover:translate-x-2"><ArrowIcon /></span></span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
