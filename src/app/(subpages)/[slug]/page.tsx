import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { concretePlants, getPlant } from '@/data/concrete-plants';

// Root-level local pages "/betoniarnia-<miejscowość>" (same addresses as the previous site); any other slug is a 404.
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return concretePlants.map((plant) => ({ slug: plant.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const plant = getPlant(slug);
  if (!plant) return {};
  return { title: plant.title, description: plant.description, alternates: { canonical: `/${plant.slug}` } };
}

const eyebrow = 'font-mono text-[9px] tracking-[0.2em] uppercase';

export default async function PlantPage({ params }: Props) {
  const { slug } = await params;
  const plant = getPlant(slug);
  if (!plant) notFound();

  return (
    <>
      <PageHero
        number="02"
        eyebrow={plant.title}
        parent={{ label: 'Betoniarnie', href: '/beton' }}
        title={plant.title}
        description={plant.description}
        image="/background.jpg"
      />

      {/* Intro */}
      <section className="bg-white">
        <div className="mx-[4vw] grid border-x border-black/10 lg:grid-cols-3">
          <div className="px-6 pt-12 sm:px-9 md:px-12 lg:border-r lg:border-black/10 lg:py-16">
            <Reveal>
              <h2 className="text-[clamp(2rem,3.2vw,3.4rem)] leading-[0.98] font-medium tracking-[-0.045em]">{plant.intro.heading}</h2>
            </Reveal>
          </div>
          <div className="px-6 pt-6 pb-12 sm:px-9 md:px-12 lg:col-span-2 lg:py-16">
            <Reveal delay={70}>
              <p className="max-w-3xl text-[clamp(1.1rem,1.45vw,1.4rem)] leading-relaxed text-black/75">{plant.intro.text}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sections: a list becomes a row of cards, text sits beside its heading */}
      {plant.sections.map((section) =>
        section.items ? (
          <section key={section.heading} className="bg-[#f6f6f6]">
            <div className="mx-[4vw] border-x border-t border-black/10">
              <div className="px-6 py-10 sm:px-9 md:px-12 lg:py-14">
                <Reveal>
                  <h2 className="text-[clamp(1.9rem,3vw,3.2rem)] leading-[0.98] font-medium tracking-[-0.045em]">{section.heading}</h2>
                </Reveal>
                {section.text ? <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70">{section.text}</p> : null}
              </div>
              <ul className={`grid gap-px border-t border-black/10 bg-black/10 sm:grid-cols-2 ${section.items.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
                {section.items.map((item, index) => (
                  <li key={item.lead || index} className="flex flex-col bg-[#f6f6f6] p-6 sm:min-h-64 sm:p-8">
                    <span className={`${eyebrow} text-brand`}>{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="mt-auto pt-6 sm:pt-12 text-[clamp(1.35rem,1.8vw,1.8rem)] leading-[1.05] font-medium tracking-[-0.035em]">{item.lead}</h3>
                    <p className="mt-3 text-base leading-relaxed text-black/65">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : (
          <section key={section.heading} className="bg-white">
            <div className="mx-[4vw] grid border-x border-t border-black/10 lg:grid-cols-3">
              <div className="px-6 pt-12 sm:px-9 md:px-12 lg:border-r lg:border-black/10 lg:py-14">
                <Reveal>
                  <h2 className="text-[clamp(1.6rem,2.4vw,2.5rem)] leading-[1.02] font-medium tracking-[-0.04em]">{section.heading}</h2>
                </Reveal>
              </div>
              <div className="px-6 pt-6 pb-12 sm:px-9 md:px-12 lg:col-span-2 lg:py-14">
                <Reveal delay={70}>
                  <p className="max-w-3xl text-[clamp(1.05rem,1.25vw,1.2rem)] leading-relaxed text-black/75">{section.text}</p>
                </Reveal>
              </div>
            </div>
          </section>
        ),
      )}

      {/* Closing line */}
      <section className="bg-black text-white">
        <div className="mx-[4vw] border-x border-white/15 px-6 py-12 sm:px-9 md:px-12 lg:py-16">
          <Reveal>
            <p className="max-w-5xl text-[clamp(1.6rem,3vw,3.2rem)] leading-[1.08] font-medium tracking-[-0.04em]">
              <span className="text-brand">{plant.closing.lead}</span> {plant.closing.text}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Map from the previous page */}
      {plant.map ? (
        <section className="bg-white">
          <div className="mx-[4vw] border-x border-black/10">
            <div className="flex min-h-14 items-center border-b border-black/10 px-6 sm:px-9 md:px-12">
              <p className={`${eyebrow} text-black/45`}>{plant.intro.heading}</p>
            </div>
            <iframe
              src={plant.map}
              title={`Mapa – ${plant.title}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[60svh] min-h-96 w-full border-0 grayscale-[0.85] transition-[filter] duration-500 hover:grayscale-0"
            />
          </div>
        </section>
      ) : null}
    </>
  );
}
