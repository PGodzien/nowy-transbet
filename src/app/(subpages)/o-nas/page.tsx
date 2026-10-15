import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '@/components/ArrowIcon';
import AboutIntro from '@/components/AboutIntro';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { team } from '@/data/site';

export const metadata: Metadata = {
  title: 'O nas | Transbet Industrial Group',
  description: 'Poznaj historię, zespół i zaplecze Transbet — rodzinnej firmy rozwijanej od 1993 roku.',
};

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
          { value: 'Od lokalnych inwestycji do międzynarodowych projektów', label: 'skala realizacji', wide: true },
        ]}
      />

      <AboutIntro />

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
