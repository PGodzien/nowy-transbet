import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/precast/ProductGallery';
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

const label = 'font-mono text-[9px] tracking-[0.16em] text-black/45 uppercase';

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const index = products.indexOf(product);
  const previous = products[(index - 1 + products.length) % products.length];
  const next = products[(index + 1) % products.length];
  const images = product.images ?? [{ src: product.imageSrc, alt: product.imageAlt }];

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
        <div className="mx-[4vw] grid grid-cols-[minmax(0,1fr)] border-x border-black/10 lg:grid-cols-2">
          <div className="border-b border-black/10 p-6 sm:p-9 lg:border-r lg:border-b-0 xl:p-12">
            <div className="lg:sticky lg:top-12">
              <ProductGallery images={images} model3d={product.model3d} name={product.name} />
            </div>
          </div>

          <div className="px-6 py-10 sm:px-9 md:px-12 lg:py-14">
            {product.description ? (
              <p className="text-[clamp(1.15rem,1.5vw,1.45rem)] leading-[1.45] font-medium tracking-[-0.02em]">{product.description}</p>
            ) : null}

            {product.specs?.length ? (
              <dl className="mt-12 grid items-start gap-x-10 gap-y-8 sm:grid-cols-2">
                {product.specs.map((spec, i) => (
                  <div key={`${spec.label}-${i}`} className={spec.label ? '' : 'sm:col-span-2'}>
                    {spec.label ? <dt className={`mb-2 ${label}`}>{spec.label}</dt> : null}
                    <dd className={spec.label ? 'text-[clamp(1.15rem,1.4vw,1.4rem)] leading-snug font-medium tracking-[-0.02em]' : 'text-base leading-relaxed text-black/65'}>
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {product.paragraphs?.length ? (
              <div className="mt-12 space-y-4 text-base leading-relaxed text-black/75">
                {product.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            ) : null}

            {product.sections?.length ? (
              <div className="mt-12 space-y-10">
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
                className="mt-12 block transition-opacity hover:opacity-80"
              >
                <Image src="/srodki-ue/flagi-ue-projekt.jpg" alt="Fundusze Europejskie" width={2600} height={214} sizes="(max-width: 1024px) 92vw, 44vw" className="h-auto w-full" />
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {/* Contact from the "Zapytaj o produkt" dialog of the previous site, as a strip of the page grid. */}
      <section className="bg-white">
        <div className="mx-[4vw] grid gap-px border-x border-t border-black/10 bg-black/10 lg:grid-cols-3">
          <div className="flex min-h-56 flex-col justify-between bg-[#f6f6f6] px-6 py-7 sm:px-9 md:px-12">
            <p className="font-mono text-[9px] tracking-[0.18em] text-brand uppercase">Zapytaj o produkt</p>
            <div className="mt-10">
              <p className="text-[clamp(1.6rem,2.2vw,2.2rem)] leading-none font-medium tracking-[-0.04em]">Mateusz Maciaszek</p>
              <p className="mt-2 text-sm text-black/50">Kierownik prefabrykacji betonu</p>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-black/65">
                Zapraszam do kontaktu — chętnie odpowiem na wszelkie pytania dotyczące oferty prefabrykacji betonowej.
              </p>
            </div>
          </div>
          {[
            { href: 'tel:+48539141851', value: '+48 539 141 851' },
            { href: 'mailto:prefabrykaty@transbet.com.pl', value: 'prefabrykaty@transbet.com.pl' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex min-h-36 flex-col justify-between bg-white px-6 py-7 lg:min-h-56 transition-colors duration-300 hover:bg-black hover:text-white sm:px-9 md:px-12"
            >
              <span className="flex justify-end text-brand transition-transform duration-300 group-hover:translate-x-1">
                <Arrow />
              </span>
              <span className="mt-6 block text-[clamp(1.15rem,1.4vw,1.6rem)] leading-tight font-medium tracking-[-0.03em] break-words">{item.value}</span>
            </a>
          ))}
        </div>
      </section>

      {product.table ? (
        <section className="bg-[#f6f6f6]">
          <div className="mx-[4vw] overflow-x-auto border-x border-t border-black/10">
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
        </section>
      ) : null}

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
