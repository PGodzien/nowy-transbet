import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Członkostwa i stowarzyszenia',
  description:
    'Transbet jest aktywnym członkiem wiodących organizacji branżowych, które wspierają rozwój i innowacje w budownictwie.',
};

// Text 1:1 from transbet.com.pl/czlonkostwa. The old page hid the details in a dialog; here they are shown in place.
const organizations = [
  {
    name: 'Stowarzyszenie Producentów Betonu Towarowego w Polsce',
    shortName: 'SPBT',
    role: 'Członek',
    founded: '1999',
    members: '135 członków zwyczajnych, 58 członków wspierających',
    description:
      'Stowarzyszenie zrzeszające producentów betonu towarowego i firmy powiązane z branżą, działające na rzecz polskiej normalizacji, certyfikacji i legislacji w obszarze betonu towarowego.',
    mission:
      'Wspieranie rozwoju branży betonowej w Polsce poprzez prace normalizacyjne, promocję betonu jako ekonomicznego, zrównoważonego i trwałego materiału budowlanego oraz dbałość o środowisko naturalne.',
    website: 'https://spbt.pl/',
    // Small source file: shown at its own size instead of being stretched.
    logo: { src: '/czlonkostwa/spbt.png', width: 129, height: 88, fit: 'native' },
  },
  {
    name: 'International Tunnelling and Underground Space Association',
    shortName: 'ITA-AITES',
    role: 'Affiliate Member',
    founded: '1974',
    members: '81 krajów członkowskich, 300 członków stowarzyszonych',
    description:
      'Wiodąca międzynarodowa organizacja pozarządowa zrzeszająca ekspertów i firmy z branży tunelowania, budownictwa podziemnego i inżynierii geotechnicznej. Posiada status NGO przy Radzie Gospodarczo-Społecznej ONZ.',
    mission:
      'Przewodzić, wspierać i ułatwiać rozwój zrównoważonych i innowacyjnych rozwiązań w zakresie optymalnego, bezpiecznego i sprawiedliwego wykorzystania przestrzeni podziemnej.',
    website: 'https://www.ita-aites.org/',
    logo: { src: '/czlonkostwa/ita.jpg', width: 1397, height: 174, fit: 'contain' },
  },
  {
    name: 'Polski Klaster Budowlany',
    shortName: 'Polski Klaster Budowlany',
    role: 'Członek',
    founded: '2015',
    members: 'Blisko 500 podmiotów z branży budowlanej',
    description:
      'Krajowy Klaster Kluczowy zrzeszający blisko 500 podmiotów działających w branży budowlanej i sektorach pokrewnych z terenu całego kraju. Certyfikat SILVER LABEL zarządzania klastrem (ESCA).',
    mission:
      'Systematyczne wsparcie instytucji i przedsiębiorców w obszarze usług budowlanych poprzez tworzenie trwałych ram współpracy, transfer wiedzy i nowych technologii.',
    website: 'https://polskiklaster.pl/',
    // A photo with the logo on it: fills the frame.
    logo: { src: '/czlonkostwa/pkb.jpg', width: 1920, height: 1080, fit: 'cover' },
  },
];

export default function MembershipsPage() {
  return (
    <>
      <PageHero
        number="05"
        eyebrow="Członkostwa"
        title="Członkostwa i stowarzyszenia"
        description="Transbet jest aktywnym członkiem wiodących organizacji branżowych, które wspierają rozwój i innowacje w budownictwie."
        image="/background.jpg"
      />

      <section className="bg-white">
        <div className="mx-[4vw] border-x border-black/10">
          {organizations.map((org, index) => (
            <article key={org.shortName} className="grid border-b border-black/10 last:border-b-0 lg:grid-cols-3">
              <div className="flex flex-col border-b border-black/10 lg:border-r lg:border-b-0">
                <div className="relative aspect-[16/9] bg-white">
                  {org.logo.fit === 'native' ? (
                    <div className="absolute inset-0 grid place-items-center">
                      <Image src={org.logo.src} alt={org.shortName} width={org.logo.width} height={org.logo.height} unoptimized />
                    </div>
                  ) : (
                    <Image src={org.logo.src} alt={org.shortName} fill sizes="(max-width: 1024px) 92vw, 31vw" className={org.logo.fit === 'cover' ? 'object-cover' : 'object-contain p-10'} />
                  )}
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-black/10 px-6 py-5 sm:px-9 md:px-12">
                  <span className="font-mono text-[9px] tracking-[0.18em] text-black/35">/ {String(index + 1).padStart(2, '0')}</span>
                  <span className="border border-black/15 px-3 py-1.5 font-mono text-[9px] tracking-[0.16em] text-black/60 uppercase">{org.role}</span>
                </div>
              </div>

              <div className="px-6 py-10 sm:px-9 md:px-12 lg:col-span-2 lg:py-14">
                <Reveal>
                  <h2 className="text-[clamp(2rem,3.4vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.045em]">{org.shortName}</h2>
                  {org.name !== org.shortName ? <p className="mt-3 text-base text-black/50">{org.name}</p> : null}
                </Reveal>
                <Reveal delay={70}>
                  <p className="mt-8 max-w-3xl text-[clamp(1.05rem,1.25vw,1.2rem)] leading-relaxed text-black/75">{org.description}</p>
                </Reveal>
                <Reveal delay={120}>
                  <div className="mt-12 max-w-3xl">
                    <p className="font-mono text-[9px] tracking-[0.18em] text-brand uppercase">Misja</p>
                    <p className="mt-4 text-[clamp(1.35rem,1.9vw,1.9rem)] leading-[1.25] font-medium tracking-[-0.03em]">{org.mission}</p>
                  </div>
                </Reveal>
                <dl className="mt-12 grid max-w-3xl gap-10 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-16">
                  <div className="flex flex-col-reverse justify-end">
                    <dt className="mt-3 font-mono text-[9px] tracking-[0.16em] text-black/45 uppercase">Założona</dt>
                    <dd className="text-[clamp(2.6rem,4vw,4.2rem)] leading-none font-medium tracking-[-0.05em]">{org.founded}</dd>
                  </div>
                  <div className="flex flex-col-reverse">
                    <dt className="mt-3 font-mono text-[9px] tracking-[0.16em] text-black/45 uppercase">Członkowie</dt>
                    <dd className="text-[clamp(1.2rem,1.6vw,1.6rem)] leading-[1.2] font-medium tracking-[-0.025em]">{org.members}</dd>
                  </div>
                </dl>
                <a
                  href={org.website}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-12 inline-flex min-h-14 items-center gap-4 bg-black px-6 text-sm font-semibold text-white transition-colors hover:bg-brand hover:text-black"
                >
                  Odwiedź stronę organizacji
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
