import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '@/components/ArrowIcon';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { companyTimeline, team } from '@/data/site';

export const metadata: Metadata = {
  title: 'O nas | Transbet Industrial Group',
  description: 'Poznaj historię, zespół i zaplecze Transbet — rodzinnej firmy rozwijanej od 1993 roku.',
};

const pillars = [
  ['Produkcja betonu towarowego', 'Główna dziedzina działalności Transbet od początku istnienia zakładu.'],
  ['Własny park maszynowy', 'Własne zaplecze maszynowe, transportowe i mechaniczne wspiera szybkie oraz niezawodne dostawy.'],
  ['Przyzakładowe laboratorium', 'Laboratorium betonu i współpraca z Centrum Technologii Budownictwa przy Politechnice Rzeszowskiej wspierają kontrolę jakości.'],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        number="01"
        eyebrow="O nas"
        title="O nas"
        description="Mamy to co w każdej firmie jest najważniejsze, czyli zgrany zespół kompetentnych i wykwalifikowanych pracowników."
        image="/background.jpg"
        imagePosition="center 44%"
        facts={[
          { value: '1993', label: 'rok założenia' },
          { value: '3', label: 'linie produkcyjne betonu' },
          { value: '30', label: 'osób w zespole' },
        ]}
      />

      <section id="historia" className="relative bg-[#f6f6f6]">
        <div className="mx-[4vw] border-x border-black/10">
          <SectionHeading
            eyebrow="Historia firmy"
            title="Stawiamy na rozwój"
            description="Historia firmy Transbet jest pełna pasji, determinacji i nieustannego rozwoju. Od 1993 roku stawiamy solidne fundamenty pod naszą działalność."
          />
          <div className="grid gap-px border-t border-black/10 bg-black/10 md:grid-cols-3">
            {pillars.map(([title, text], index) => (
              <Reveal key={title} direction="none" delay={index * 70} className="h-full">
                <article className="flex h-full min-h-72 flex-col justify-between bg-white p-7 sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.18em] text-black/35">/ 0{index + 1}</span>
                    <span className="h-2.5 w-2.5 bg-brand" />
                  </div>
                  <div className="mt-16">
                    <h3 className="text-3xl font-medium leading-none tracking-[-0.04em]">{title}</h3>
                    <p className="mt-5 text-base leading-relaxed text-black/55">{text}</p>
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
            eyebrow="Kamienie milowe"
            title="Najważniejsze etapy rozwoju"
            description="Rozszerzenie asortymentu oraz uruchomienie zakładów w Radymnie i Jarosławiu zwiększyły możliwości produkcyjne firmy."
          />
          <div className="border-t border-white/15">
            {companyTimeline.map((item, index) => (
              <Reveal key={item.year} direction="none" delay={index * 45}>
                <article className="group grid gap-5 border-b border-white/15 px-6 py-8 transition-colors hover:bg-brand hover:text-black sm:px-9 md:grid-cols-[0.55fr_1fr_1.35fr] md:items-center md:px-12">
                  <span className="font-mono text-sm tracking-[0.16em] text-brand transition-colors group-hover:text-black/55">{item.year}</span>
                  <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">{item.title}</h3>
                  <p className="text-base leading-relaxed text-white/55 transition-colors group-hover:text-black/65">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="zespol" className="bg-white">
        <div className="mx-[4vw] border-x border-black/10">
          <SectionHeading
            eyebrow="Zespół"
            title="Poznajmy się"
            description="Mamy to co w każdej firmie jest najważniejsze, czyli zgrany zespół kompetentnych i wykwalifikowanych pracowników."
          />
          <div className="grid gap-px border-t border-black/10 bg-black/10 lg:grid-cols-3">
            {team.slice(0, 3).map((person) => (
              <article key={person.name} className="group h-full bg-white">
                <div className="relative aspect-[5/4] overflow-hidden bg-zinc-200">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-black/[0.06] transition-opacity duration-500 group-hover:opacity-0" />
                </div>
                <div className="min-h-40 border-t border-black/10 p-6 sm:p-8">
                  <p className="font-mono text-xs tracking-[0.16em] text-brand uppercase">/ Właściciele</p>
                  <h3 className="mt-4 text-[clamp(1.6rem,2.2vw,2.6rem)] font-medium leading-[0.98] tracking-[-0.04em]">{person.name}</h3>
                  <p className="mt-3 text-base text-black/52">{person.role}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid border-t border-black/10 px-6 py-9 sm:px-9 md:px-12">
            <p className="font-mono text-[9px] tracking-[0.2em] text-black/40 uppercase">/ Zespół operacyjny</p>
          </div>

          <div className="grid gap-px border-t border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {team.slice(3).map((person) => (
              <article key={person.name} className="group h-full bg-white">
                <div className="relative aspect-square overflow-hidden bg-zinc-200">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                </div>
                <div className="min-h-36 border-t border-black/10 p-6">
                  <h3 className="text-xl font-medium leading-tight tracking-[-0.03em]">{person.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/50">{person.role}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/oferta" className="group flex min-h-36 items-center justify-between gap-8 border-t border-black/10 bg-brand px-6 py-8 transition-colors hover:bg-brand-hover sm:px-9 md:px-12">
            <span className="text-[clamp(1.8rem,3.4vw,4rem)] font-medium leading-none tracking-[-0.045em]">Zobacz, w czym możemy pomóc</span>
            <span className="transition-transform group-hover:translate-x-2"><ArrowIcon /></span>
          </Link>
        </div>
      </section>
    </>
  );
}
