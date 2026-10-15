import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/precast/ProductGallery';
import NewsGallery from '@/components/news/NewsGallery';
import { getImageSize } from '@/lib/news';
import { getProductBySlug, products } from '@/data/precast-products';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Prefabrykacja betonowa`,
    description: product.description,
    openGraph: { images: [{ url: product.imageSrc }] },
  };
}

function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <path d={back ? 'M20 12H4M10 6l-6 6 6 6' : 'M4 12h16M14 6l6 6-6 6'} stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const index = products.indexOf(product);
  const previous = products[(index - 1 + products.length) % products.length];
  const next = products[(index + 1) % products.length];
  const images = product.images ?? [{ src: product.imageSrc, alt: product.imageAlt }];
  const gallery = product.gallery
    ? await Promise.all(product.gallery.map(async (photo) => ({ src: photo.src, ...(await getImageSize(photo.src)) })))
    : [];

  return (
    <article>
      <header className="relative overflow-hidden bg-black text-white">
        <Image src="/background.jpg" alt="" fill preload sizes="100vw" className="hero-enter-media object-cover opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.9)_0%,rgba(0,0,0,.6)_55%,rgba(0,0,0,.3)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

        <div className="relative grid min-h-[52svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%]">
          <div className="flex items-center justify-center pt-20">
            <span className="font-mono text-[9px] tracking-[0.2em] text-white/35 [writing-mode:vertical-rl]">04 / Prefabrykacja</span>
          </div>
          <div className="col-span-3 flex min-w-0 flex-col border-x border-white/15 pt-20">
            <nav aria-label="Ścieżka" className="flex min-h-14 items-center gap-3 overflow-hidden border-b border-white/15 px-6 font-mono text-[9px] tracking-[0.17em] whitespace-nowrap text-white/45 uppercase sm:px-9 md:px-12">
              <Link href="/" className="transition-colors hover:text-brand">Start</Link>
              <span>/</span>
              <Link href="/prefabrykacja-betonowa" className="transition-colors hover:text-brand">Prefabrykacja betonowa</Link>
              <span>/</span>
              <span className="truncate text-white/75">{product.name}</span>
            </nav>
            <div className="flex flex-1 flex-col justify-end px-6 py-10 sm:px-9 md:px-12 md:py-14">
              <p className="font-mono text-[9px] tracking-[0.2em] text-brand">
                {String(index + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
              </p>
              <h1 className="hero-enter-title mt-6 max-w-[18ch] text-[clamp(2.4rem,5.4vw,6rem)] leading-[0.95] font-medium tracking-[-0.05em]">
                {product.name}
              </h1>
            </div>
          </div>
          <div />
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-[4vw] grid grid-cols-[minmax(0,1fr)] gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(22rem,0.75fr)] lg:gap-[6vw] lg:py-20">
          <div className="min-w-0">
            <ProductGallery images={images} model3d={product.model3d} name={product.name} />
          </div>

          <div className="flex items-center">
            <div className="w-full max-w-2xl">
              {product.description ? (
                <p className="text-[clamp(1.25rem,1.65vw,1.65rem)] leading-[1.38] font-medium tracking-[-0.025em]">{product.description}</p>
              ) : null}

              {product.specs?.length ? (
                <dl className="mt-10 border-y border-black/15">
                  {product.specs.map((spec, i) => (
                    <div key={`${spec.label}-${i}`} className="grid gap-2 border-b border-black/10 py-4 last:border-b-0 sm:grid-cols-[minmax(7rem,0.38fr)_minmax(0,0.62fr)] sm:gap-6">
                      {spec.label ? <dt className="text-sm text-black/50">{spec.label}</dt> : null}
                      <dd className={spec.label ? 'text-[clamp(1.05rem,1.2vw,1.25rem)] leading-snug font-medium tracking-[-0.02em]' : 'text-base leading-relaxed text-black/70 sm:col-span-2'}>
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {product.paragraphs?.length ? (
                <div className="mt-10 space-y-4 text-base leading-relaxed text-black/75">
                  {product.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              ) : null}

              {product.sections?.length ? (
                <div className="mt-10 space-y-9">
                  {product.sections.map((section) => (
                    <div key={section.title}>
                      <h2 className="text-2xl font-medium tracking-[-0.03em]">{section.title}</h2>
                      <ul className="mt-4 space-y-2.5 text-base leading-relaxed text-black/75">
                        {section.items.map((item) => (
                          <li key={item} className="grid grid-cols-[1.25rem_1fr]">
                            <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 bg-brand" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}

              {product.euLogo ? (
                <a
                  href="/srodki-ue/wdrozenie-innowacyjnej-technologii-produkcji-modulowych-betonowych-elementow-prefabrykowanych-z-wykorzystaniem-procesu-wibrowania-wieloczestotliwosciowego"
                  data-curtain-label="Projekt UE"
                  className="mt-10 block transition-opacity hover:opacity-80"
                >
                  <Image src="/srodki-ue/flagi-ue-projekt.jpg" alt="Fundusze Europejskie" width={2600} height={214} sizes="(max-width: 1024px) 92vw, 34vw" className="h-auto w-full" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {gallery.length ? (
        <section className="bg-[#f6f6f6]">
          <div className="mx-[4vw] border-x border-t border-black/10 px-6 py-6 sm:px-9 md:px-12 lg:py-10">
            <NewsGallery images={gallery} alt={product.name} />
          </div>
        </section>
      ) : null}

      {product.table ? (
        <section className="bg-[#f5f5f3] py-14 sm:py-16">
          <div className="mx-[4vw]">
            <div className="mb-8 flex items-end justify-between gap-6">
              <h2 className="text-[clamp(2rem,3vw,3.25rem)] leading-none font-medium tracking-[-0.035em]">Warianty i wymiary</h2>
              <p className="hidden max-w-sm text-right text-sm leading-relaxed text-black/50 sm:block">Dane techniczne dostępnych wariantów produktu.</p>
            </div>
            <div className="overflow-x-auto bg-white">
              <table className="w-full min-w-[56rem] border-collapse text-left font-mono text-[12px]">
              <thead>
                <tr className="border-b border-black/15">
                  {product.table.headers.map((header) => (
                    <th key={header} scope="col" className="px-4 py-4 align-bottom text-[9px] font-normal tracking-[0.14em] text-black/50 uppercase first:pl-6 sm:first:pl-9 md:first:pl-12">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.table.rows.map((row, i) => (
                  <tr key={i} className="border-b border-black/[0.07] transition-colors last:border-b-0 hover:bg-white">
                    {row.map((cell, j) => (
                      <td key={j} className={`px-4 py-3 whitespace-nowrap first:pl-6 sm:first:pl-9 md:first:pl-12 ${j === 0 ? 'font-semibold text-black' : 'text-black/70'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white">
        <div className="mx-[4vw] grid bg-black text-white lg:grid-cols-[1.2fr_0.8fr_1.25fr]">
          <div className="px-6 py-9 sm:px-9 md:px-12 lg:py-11">
            <p className="text-sm text-brand">Kontakt w sprawie produktu</p>
            <p className="mt-4 text-[clamp(1.65rem,2.2vw,2.3rem)] leading-none font-medium tracking-[-0.035em]">Mateusz Maciaszek</p>
            <p className="mt-2 text-sm text-white/55">Kierownik prefabrykacji betonu</p>
          </div>
          {[
            { href: 'tel:+48539141851', value: '+48 539 141 851' },
            { href: 'mailto:prefabrykaty@transbet.com.pl', value: 'prefabrykaty@transbet.com.pl' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex min-h-28 items-center justify-between gap-6 border-t border-white/15 px-6 py-7 transition-colors duration-300 hover:bg-white hover:text-black sm:px-9 md:px-12 lg:min-h-full lg:border-t-0 lg:border-l"
            >
              <span className="min-w-0 break-words text-[clamp(1.05rem,1.35vw,1.45rem)] leading-tight font-medium tracking-[-0.025em]">{item.value}</span>
              <span className="shrink-0 text-brand transition-transform duration-300 group-hover:translate-x-1"><Arrow /></span>
            </a>
          ))}
        </div>
      </section>

      <nav aria-label="Inne produkty" className="bg-white">
        <div className="mx-[4vw] grid gap-px border-x border-t border-black/10 bg-black/10 md:grid-cols-2">
          {[
            { product: previous, back: true },
            { product: next, back: false },
          ].map(({ product: item, back }) => (
            <a
              key={item.slug + back}
              href={`/prefabrykacja-betonowa/${item.slug}`}
              data-curtain-label={item.name}
              className={`group flex min-h-32 items-center gap-6 bg-white px-6 transition-colors hover:bg-black hover:text-white sm:px-9 md:px-12 ${back ? '' : 'md:flex-row-reverse md:text-right'}`}
            >
              <span className="relative hidden aspect-square w-20 shrink-0 overflow-hidden bg-[#e9e9e9] sm:block">
                <Image src={item.imageSrc} alt="" fill sizes="80px" className="object-cover" />
              </span>
              <span className="flex-1 text-[clamp(1.15rem,1.6vw,1.6rem)] leading-[1.1] font-medium tracking-[-0.03em]">{item.name}</span>
              <span className="text-brand">
                <Arrow back={back} />
              </span>
            </a>
          ))}
        </div>
        <div className="mx-[4vw] border-x border-t border-black/10">
          <a href="/prefabrykacja-betonowa#produkty" className="group flex min-h-24 items-center justify-between bg-brand px-6 text-lg font-semibold transition-colors hover:bg-brand-hover sm:px-9 md:px-12">
            Wróć do wszystkich produktów
            <span className="transition-transform group-hover:translate-x-1.5"><Arrow /></span>
          </a>
        </div>
      </nav>
    </article>
  );
}
