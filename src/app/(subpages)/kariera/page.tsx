import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { getJobs } from '@/lib/jobs';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Kariera | Transbet Industrial Group',
  description:
    'Dołącz do naszego zespołu! Sprawdź aktualne oferty pracy, warunki zatrudnienia oraz możliwości rozwoju w naszej betoniarni.',
};

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default async function CareerPage() {
  const jobs = await getJobs();
  const places = new Set(jobs.flatMap((job) => job.miejsce.split('/').map((place) => place.trim())).filter(Boolean));

  return (
    <>
      <PageHero
        number="03"
        eyebrow="Kariera"
        title="Kariera"
        description="Dołącz do naszego zespołu! Sprawdź aktualne oferty pracy, warunki zatrudnienia oraz możliwości rozwoju w naszej betoniarni."
        image="/background.jpg"
        facts={[
          { value: String(jobs.length), label: jobs.length === 1 ? 'otwarta rekrutacja' : 'otwartych rekrutacji' },
          { value: String(places.size), label: 'miejsca pracy' },
          { value: 'M/K', label: 'oferty dla wszystkich' },
        ]}
      />

      <section id="oferty" className="bg-white">
        <div className="mx-[4vw] border-x border-black/10">
          <div className="flex min-h-14 items-center justify-between border-b border-black/10 px-6 font-mono text-[9px] tracking-[0.18em] text-black/45 uppercase sm:px-9 md:px-12">
            <span>/ Aktualne oferty pracy</span>
            <span className="hidden sm:inline">Miejsce pracy</span>
          </div>

          {jobs.length ? (
            <ul>
              {jobs.map((job, index) => (
                <li key={job.slug} className="border-b border-black/10 last:border-b-0">
                  <Reveal direction="none" delay={Math.min(index, 6) * 40}>
                    <a
                      href={`/kariera/${job.slug}`}
                      data-curtain-label={job.nazwa}
                      className="group grid min-h-24 grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 gap-y-2 px-6 py-6 transition-colors duration-300 hover:bg-black hover:text-white sm:grid-cols-[3.5rem_1fr_14rem_auto] sm:px-9 md:px-12"
                    >
                      <span className="font-mono text-[10px] tracking-[0.14em] text-black/35 group-hover:text-white/40">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[clamp(1.25rem,2.1vw,2.2rem)] font-medium leading-[1.05] tracking-[-0.035em]">{job.nazwa}</span>
                      <span className="col-start-2 row-start-2 font-mono text-[10px] tracking-[0.14em] text-black/50 uppercase group-hover:text-white/60 sm:col-start-3 sm:row-start-1">
                        {job.miejsce}
                      </span>
                      <span className="col-start-3 row-span-2 row-start-1 text-brand transition-transform duration-300 group-hover:translate-x-1 sm:col-start-4 sm:row-span-1">
                        <Arrow />
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-6 py-16 sm:px-9 md:px-12">
              <p className="text-[clamp(1.5rem,2.4vw,2.4rem)] font-medium tracking-[-0.035em]">Brak aktualnych ofert</p>
              <p className="mt-3 text-base text-black/60">Aktualnie nie mamy otwartych rekrutacji, ale wróć wkrótce!</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-[4vw] border-x border-t border-black/10">
          <a
            href="/#formularz"
            className="group flex min-h-32 flex-col justify-center gap-2 bg-brand px-6 transition-colors hover:bg-brand-hover sm:flex-row sm:items-center sm:justify-between sm:px-9 md:px-12"
          >
            <span>
              <span className="block font-mono text-[9px] tracking-[0.18em] text-black/50 uppercase">/ Nie widzisz oferty dla siebie?</span>
              <span className="mt-2 block text-2xl font-semibold tracking-[-0.03em]">Napisz do nas przez formularz kontaktowy</span>
            </span>
            <span className="transition-transform group-hover:translate-x-1.5">
              <Arrow />
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
