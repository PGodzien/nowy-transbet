import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getJob, getJobs, recruitmentUrl } from '@/lib/jobs';

export const revalidate = 60;
// Offers added in the CMS after the build are rendered on first visit.
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getJobs()).map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) return {};
  return {
    title: `${job.nazwa} – ${job.miejsce} | Kariera Transbet`,
    description: `Oferta pracy: ${job.nazwa}, miejsce pracy: ${job.miejsce}.`,
  };
}

function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <path d={back ? 'M20 12H4M10 6l-6 6 6 6' : 'M4 12h16M14 6l6 6-6 6'} stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

// Content is Markdown typed into the CMS; if it does not compile as MDX, show it as plain text.
async function renderContent(source: string) {
  try {
    const { content } = await compileMDX({ source, options: { mdxOptions: { remarkPlugins: [remarkGfm] } } });
    return content;
  } catch {
    return <p className="whitespace-pre-line">{source}</p>;
  }
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) notFound();

  const applyUrl = recruitmentUrl(job);
  // Same rule as the previous site: with an online form, the "send a CV" line points to the Apply button.
  const source = applyUrl
    ? job.content.replace(
        /Zainteresowanych prosimy o przesłanie CV lub [Kk]ontakt telefoniczny(?: tylko)? w godzinach(?:\s|&nbsp;| )*\*\*8:00\s*-\s*15:00\s*\(pon\s*-\s*pt\)\*\*/i,
        'Aby wziąć udział w rekrutacji, kliknij przycisk **Aplikuj** poniżej.',
      )
    : job.content;
  const content = await renderContent(source);
  const mailto = `mailto:biuro@transbet.com.pl?subject=${encodeURIComponent(`Rekrutacja: ${job.nazwa}`)}`;

  return (
    <article>
      <header className="relative overflow-hidden bg-black text-white">
        <Image src="/background.jpg" alt="" fill preload sizes="100vw" className="hero-enter-media object-cover opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.9)_0%,rgba(0,0,0,.6)_55%,rgba(0,0,0,.3)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

        <div className="relative grid min-h-[64svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%]">
          <div className="flex items-center justify-center pt-20">
            <span className="font-mono text-[9px] tracking-[0.2em] text-white/35 [writing-mode:vertical-rl]">03 / Kariera</span>
          </div>

          <div className="col-span-3 flex min-w-0 flex-col border-x border-white/15 pt-20">
            <nav aria-label="Ścieżka" className="flex min-h-14 items-center gap-3 overflow-hidden border-b border-white/15 px-6 font-mono text-[9px] tracking-[0.17em] whitespace-nowrap text-white/45 uppercase sm:px-9 md:px-12">
              <Link href="/" className="transition-colors hover:text-brand">Start</Link>
              <span>/</span>
              <Link href="/kariera" className="transition-colors hover:text-brand">Kariera</Link>
              <span>/</span>
              <span className="truncate text-white/75">{job.nazwa}</span>
            </nav>

            <div className="flex flex-1 flex-col justify-end px-6 py-10 sm:px-9 md:px-12 md:py-14">
              <p className="flex items-center gap-3 font-mono text-[9px] tracking-[0.2em] text-brand uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                Rekrutacja otwarta
              </p>
              <h1 className="hero-enter-title mt-6 max-w-[20ch] text-[clamp(2.3rem,5vw,5.5rem)] font-medium leading-[0.96] tracking-[-0.045em]">
                {job.nazwa}
              </h1>
            </div>

            <dl className="grid border-t border-white/15 sm:grid-cols-2">
              <div className="flex min-h-24 items-end justify-between gap-5 border-b border-white/15 px-6 py-5 sm:border-r sm:border-b-0 sm:px-8">
                <dd className="text-[clamp(1.2rem,1.8vw,1.9rem)] font-medium leading-none tracking-[-0.03em]">{job.miejsce}</dd>
                <dt className="text-right font-mono text-[8px] tracking-[0.15em] text-white/40 uppercase">miejsce pracy</dt>
              </div>
              <a href={applyUrl ?? mailto} target={applyUrl ? '_blank' : undefined} rel={applyUrl ? 'noreferrer' : undefined} className="group flex min-h-24 items-center justify-between gap-5 bg-brand px-6 py-5 text-black transition-colors hover:bg-brand-hover sm:px-8">
                <span className="text-[clamp(1.2rem,1.8vw,1.9rem)] font-semibold leading-none tracking-[-0.03em]">{applyUrl ? 'Aplikuj' : 'Wyślij CV'}</span>
                <span className="transition-transform group-hover:translate-x-1"><Arrow /></span>
              </a>
            </dl>
          </div>
          <div />
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-[4vw] grid border-x border-black/10 lg:grid-cols-3">
          <aside className="hidden border-r border-black/10 px-9 py-16 lg:block">
            <div className="sticky top-12 flex flex-col gap-6">
              <a href="/kariera" className="flex items-center gap-3 font-mono text-[9px] tracking-[0.18em] text-black/50 uppercase hover:text-black">
                <Arrow back /> Wszystkie oferty
              </a>
              <p className="text-sm leading-relaxed text-black/55">Miejsce pracy: {job.miejsce}</p>
            </div>
          </aside>
          <div className="px-6 py-12 sm:px-9 md:px-12 lg:col-span-2 lg:py-16">
            <div className="news-body max-w-3xl">{content}</div>
          </div>
        </div>
      </section>

      <nav aria-label="Kariera" className="bg-white">
        <div className="mx-[4vw] grid gap-px border-x border-t border-black/10 bg-black/10 md:grid-cols-2">
          <a href="/kariera" className="group flex min-h-24 items-center gap-4 bg-white px-6 text-lg font-semibold transition-colors hover:bg-black hover:text-white sm:px-9 md:px-12">
            <Arrow back /> Wszystkie oferty pracy
          </a>
          <a href={applyUrl ?? mailto} target={applyUrl ? '_blank' : undefined} rel={applyUrl ? 'noreferrer' : undefined} className="group flex min-h-24 items-center justify-between bg-brand px-6 text-lg font-semibold transition-colors hover:bg-brand-hover sm:px-9 md:px-12">
            {applyUrl ? 'Aplikuj na to stanowisko' : 'Wyślij CV: biuro@transbet.com.pl'}
            <span className="transition-transform group-hover:translate-x-1.5"><Arrow /></span>
          </a>
        </div>
      </nav>
    </article>
  );
}
