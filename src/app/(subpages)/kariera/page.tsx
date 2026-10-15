import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { getJobs, jobImage } from "@/lib/jobs";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Kariera",
  description:
    "Dołącz do naszego zespołu! Sprawdź aktualne oferty pracy, warunki zatrudnienia oraz możliwości rozwoju w naszej betoniarni.",
};

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0"
    >
      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default async function CareerPage() {
  const jobs = await getJobs();
  const places = new Set(
    jobs
      .flatMap((job) => job.miejsce.split("/").map((place) => place.trim()))
      .filter(Boolean),
  );

  return (
    <>
      <PageHero
        number="03"
        eyebrow="Kariera"
        title="Kariera"
        description="Dołącz do naszego zespołu! Sprawdź aktualne oferty pracy, warunki zatrudnienia oraz możliwości rozwoju w naszej betoniarni."
        image="/background.jpg"
        facts={[
          {
            value: String(jobs.length),
            label:
              jobs.length === 1 ? "otwarta rekrutacja" : "otwartych rekrutacji",
          },
          { value: String(places.size), label: "miejsca pracy" },
          { value: "M/K", label: "oferty dla wszystkich" },
        ]}
      />

      <section id="oferty" className="bg-white">
        <div className="mx-[4vw] border-x border-black/10">
          <div className="flex min-h-28 items-end justify-between gap-8 border-b border-black/10 px-6 py-7 sm:px-9 md:px-12">
            <h2 className="text-[clamp(1.8rem,3vw,3.25rem)] leading-none font-medium tracking-[-0.035em]">
              Aktualne oferty pracy
            </h2>
            <p className="shrink-0 font-mono text-[9px] tracking-[0.16em] text-black/45 uppercase">
              {String(jobs.length).padStart(2, "0")}{" "}
              {jobs.length === 1 ? "stanowisko" : "stanowisk"}
            </p>
          </div>

          {jobs.length ? (
            <div
              role="list"
              aria-label="Aktualne oferty pracy"
              className="grid gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-3"
            >
              {jobs.map((job, index) => (
                <article
                  key={job.slug}
                  role="listitem"
                  className="min-w-0 bg-white"
                >
                  <a
                    href={`/kariera/${job.slug}`}
                    data-curtain-label={job.nazwa}
                    className="group flex h-full flex-col transition-colors duration-300 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
                  >
                    {/* Photo chosen for the offer in the CMS. */}
                    {jobImage(job) ? (
                      <span className="relative block aspect-[16/10] overflow-hidden bg-[#e9e9e9]">
                        <Image
                          src={jobImage(job)!}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 31vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      </span>
                    ) : null}
                    <span className="flex min-h-56 flex-1 flex-col justify-between gap-10 px-6 py-7 sm:px-8 sm:py-8">
                      <span className="flex items-center justify-between gap-5">
                        <span className="font-mono text-[10px] tracking-[0.14em] text-black/40 transition-colors group-hover:text-white/45 group-focus-visible:text-white/45">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex items-center gap-2 font-mono text-[8px] tracking-[0.14em] text-black/45 uppercase transition-colors group-hover:text-white/50 group-focus-visible:text-white/50">
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 bg-brand"
                          />
                          Rekrutacja otwarta
                        </span>
                      </span>

                      <h3 className="max-w-[20ch] text-[clamp(1.45rem,2vw,2.15rem)] leading-[1.06] font-medium tracking-[-0.035em]">
                        {job.nazwa}
                      </h3>

                      <span className="flex items-end justify-between gap-6 border-t border-black/10 pt-5 transition-colors group-hover:border-white/15 group-focus-visible:border-white/15">
                        <span>
                          <span className="block text-[11px] text-black/45 transition-colors group-hover:text-white/45 group-focus-visible:text-white/45">
                            Miejsce pracy
                          </span>
                          <span className="mt-1 block text-sm leading-snug font-medium">
                            {job.miejsce}
                          </span>
                        </span>
                        <span className="shrink-0 text-brand transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1">
                          <Arrow />
                        </span>
                      </span>
                    </span>
                  </a>
                </article>
              ))}

              <a
                href="#formularz"
                data-curtain="off"
                className="group flex min-h-64 flex-col justify-between gap-10 bg-brand px-6 py-7 transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-black sm:min-h-72 sm:px-8 sm:py-8 lg:col-span-2"
              >
                <span className="font-mono text-[10px] tracking-[0.14em] text-black/50">
                  CV / KONTAKT
                </span>
                <span className="flex items-end justify-between gap-8">
                  <span>
                    <span className="block text-[clamp(1.55rem,2.3vw,2.6rem)] leading-[1.05] font-semibold tracking-[-0.035em]">
                      Nie widzisz oferty dla siebie?
                    </span>
                    <span className="mt-3 block max-w-xl text-sm leading-relaxed text-black/65">
                      Napisz do nas przez formularz kontaktowy i zostaw swoje
                      CV.
                    </span>
                  </span>
                  <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5">
                    <Arrow />
                  </span>
                </span>
              </a>
            </div>
          ) : (
            <div className="px-6 py-16 sm:px-9 md:px-12">
              <p className="text-[clamp(1.5rem,2.4vw,2.4rem)] font-medium tracking-[-0.035em]">
                Brak aktualnych ofert
              </p>
              <p className="mt-3 text-base text-black/60">
                Aktualnie nie mamy otwartych rekrutacji, ale wróć wkrótce!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
