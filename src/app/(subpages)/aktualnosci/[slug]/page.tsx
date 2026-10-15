import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { formatDate, getAllPosts, getImageSize, getNeighbours, getPost, type NewsPost } from '@/lib/news';
import { renderPost } from '@/lib/news-mdx';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} | Aktualności`,
    description: post.description,
    alternates: { canonical: `/aktualnosci/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: [{ url: post.coverSrc }],
    },
  };
}

function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <path d={back ? 'M20 12H4M10 6l-6 6 6 6' : 'M4 12h16M14 6l6 6-6 6'} stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function NeighbourLink({ post, label, back }: { post: NewsPost | null; label: string; back?: boolean }) {
  if (!post) return <div className="hidden bg-white md:block" />;
  return (
    <a href={`/aktualnosci/${post.slug}`} data-curtain-label={post.title} className="group flex min-h-44 flex-col justify-between gap-6 bg-white p-6 transition-colors hover:bg-black hover:text-white sm:p-9">
      <span className={`flex items-center gap-3 font-mono text-[9px] tracking-[0.18em] text-black/45 uppercase group-hover:text-white/55 ${back ? '' : 'justify-end'}`}>
        {back ? <Arrow back /> : null}
        {label}
        {back ? null : <Arrow />}
      </span>
      <span className={`text-[clamp(1.2rem,1.7vw,1.7rem)] font-medium leading-[1.1] tracking-[-0.03em] ${back ? '' : 'text-right'}`}>{post.title}</span>
    </a>
  );
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  // Old address of one post ended with ".mdx" (file name typo on the previous site).
  if (slug.endsWith('.mdx')) permanentRedirect(`/aktualnosci/${slug.replace(/(\.mdx)+$/, '')}`);

  const post = getPost(slug);
  if (!post) notFound();

  const content = await renderPost(post);
  const cover = await getImageSize(post.coverSrc);
  const { newer, older } = getNeighbours(slug);

  return (
    <article>
      <header className="relative overflow-hidden bg-black text-white">
        {/* Same background on every post; the post's own photo is shown uncropped below. */}
        <Image src="/background.jpg" alt="" fill preload sizes="100vw" className="hero-enter-media object-cover opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.9)_0%,rgba(0,0,0,.6)_55%,rgba(0,0,0,.3)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

        <div className="relative grid min-h-[64svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%]">
          <div className="flex items-center justify-center pt-20">
            <span className="font-mono text-[9px] tracking-[0.2em] text-white/35 [writing-mode:vertical-rl]">05 / Aktualności</span>
          </div>

          <div className="col-span-3 flex min-w-0 flex-col border-x border-white/15 pt-20">
            <nav aria-label="Ścieżka" className="flex min-h-14 items-center gap-3 overflow-hidden border-b border-white/15 px-6 font-mono text-[9px] tracking-[0.17em] whitespace-nowrap text-white/45 uppercase sm:px-9 md:px-12">
              <Link href="/" className="transition-colors hover:text-brand">Start</Link>
              <span>/</span>
              <Link href="/aktualnosci" className="transition-colors hover:text-brand">Aktualności</Link>
              <span>/</span>
              <span className="truncate text-white/75">{post.title}</span>
            </nav>

            <div className="flex flex-1 flex-col justify-end px-6 py-10 sm:px-9 md:px-12 md:py-14">
              <a href={`/aktualnosci?kategoria=${encodeURIComponent(post.category)}`} className="font-mono text-[9px] tracking-[0.2em] text-brand uppercase hover:underline">
                / {post.category}
              </a>
              <h1 className="hero-enter-title mt-6 max-w-[22ch] text-[clamp(2.1rem,4.6vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.045em]">
                {post.title}
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">{post.description}</p>
            </div>

            <dl className="grid border-t border-white/15 sm:grid-cols-3">
              {[
                { label: 'data publikacji', value: formatDate(post.date) },
                { label: 'kategoria', value: post.category },
                { label: 'czas czytania', value: `${post.readingMinutes} min` },
              ].map((fact, index) => (
                <div
                  key={fact.label}
                  className={`flex min-h-24 items-end justify-between gap-5 border-b border-white/15 px-6 py-5 sm:border-b-0 sm:px-8 ${index < 2 ? 'sm:border-r sm:border-white/15' : ''}`}
                >
                  <dd className="text-[clamp(1.2rem,1.8vw,1.9rem)] font-medium leading-none tracking-[-0.03em]">{fact.value}</dd>
                  <dt className="text-right font-mono text-[8px] tracking-[0.15em] text-white/40 uppercase">{fact.label}</dt>
                </div>
              ))}
            </dl>
          </div>
          <div />
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-[4vw] grid border-x border-black/10 lg:grid-cols-3">
          <aside className="hidden border-r border-black/10 px-9 py-16 lg:block">
            <div className="sticky top-12 flex flex-col gap-6">
              <a href="/aktualnosci" className="group flex items-center gap-3 font-mono text-[9px] tracking-[0.18em] text-black/50 uppercase hover:text-black">
                <Arrow back /> Wszystkie aktualności
              </a>
              <p className="text-sm leading-relaxed text-black/55">{formatDate(post.date)} · {post.category}</p>
            </div>
          </aside>
          <div className="px-6 py-12 sm:px-9 md:px-12 lg:col-span-2 lg:py-16">
            <figure className="mb-12 max-w-3xl bg-[#f6f6f6]">
              <Image
                src={post.coverSrc}
                alt={post.title}
                width={cover.width}
                height={cover.height}
                preload
                sizes="(max-width: 1024px) 92vw, 768px"
                className="block h-auto max-h-[80vh] w-full object-contain"
              />
            </figure>
            <div className="news-body max-w-3xl">{content}</div>
          </div>
        </div>
      </section>

      <nav aria-label="Inne wpisy" className="bg-white">
        <div className="mx-[4vw] grid gap-px border-x border-t border-black/10 bg-black/10 md:grid-cols-2">
          <NeighbourLink post={older} label="Starszy wpis" back />
          <NeighbourLink post={newer} label="Nowszy wpis" />
        </div>
        <div className="mx-[4vw] border-x border-t border-black/10">
          <a href="/aktualnosci" className="group flex min-h-24 items-center justify-between bg-brand px-6 text-lg font-semibold transition-colors hover:bg-brand-hover sm:px-9 md:px-12">
            Wszystkie aktualności
            <span className="transition-transform group-hover:translate-x-1.5"><Arrow /></span>
          </a>
        </div>
      </nav>
    </article>
  );
}
