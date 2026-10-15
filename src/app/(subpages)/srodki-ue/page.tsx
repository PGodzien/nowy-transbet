import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { euProjects } from '@/data/eu-projects';

export const metadata: Metadata = {
  title: 'Środki UE',
  description: 'Projekty Transbet realizowane przy wsparciu Funduszy Europejskich.',
};

export default function EuFundsPage() {
  return (
    <>
      <PageHero
        number="06"
        eyebrow="Środki UE"
        parent={{ label: 'Dokumenty', href: '/dokumenty' }}
        title="Środki UE"
        description="Stawiamy na nieustanny rozwój, dzięki środkom z Unii Europejskiej możemy stale zwiększać atrakcyjność naszej oferty."
        image="/background.jpg"
        facts={[
          { value: String(euProjects.length), label: 'projekty' },
          { value: 'Fundusze Europejskie', label: 'źródło finansowania', wide: true },
        ]}
      />

      <section className="bg-white">
        <div className="mx-[4vw] border-x border-black/10">
          <div className="grid gap-px bg-black/10 md:grid-cols-2">
            {euProjects.map((project, index) => (
              <Reveal key={project.slug} direction="none" delay={(index % 2) * 60} className="h-full">
                <a
                  href={`/srodki-ue/${project.slug}`}
                  data-curtain-label="Projekt UE"
                  className="group flex h-full min-h-96 flex-col justify-between gap-10 bg-white p-7 transition-colors duration-300 hover:bg-[#f6f6f6] sm:p-9"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.18em] text-black/35">/ {String(index + 1).padStart(2, '0')}</span>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-brand transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <span className="block text-[clamp(1.35rem,1.9vw,2rem)] font-medium leading-[1.08] tracking-[-0.03em]">{project.title}</span>
                  <span className="block">
                    <span className="grid grid-cols-2 gap-6 border-t border-black/10 pt-5">
                      <span>
                        <span className="block font-mono text-[8px] tracking-[0.15em] text-black/40 uppercase">Wartość projektu</span>
                        <span className="mt-2 block text-lg font-medium tracking-[-0.02em]">{project.value}</span>
                      </span>
                      <span>
                        <span className="block font-mono text-[8px] tracking-[0.15em] text-black/40 uppercase">Wkład Funduszy Europejskich</span>
                        <span className="mt-2 block text-lg font-medium tracking-[-0.02em]">{project.contribution}</span>
                      </span>
                    </span>
                    <Image
                      src={project.logo.src}
                      alt="Logotypy Funduszy Europejskich"
                      width={project.logo.width}
                      height={project.logo.height}
                      sizes="(max-width: 768px) 90vw, 45vw"
                      className="mt-7 h-auto w-full"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
