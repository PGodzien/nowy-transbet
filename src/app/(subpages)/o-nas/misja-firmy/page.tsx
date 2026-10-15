import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Misja firmy',
  description:
    'Misja firmy Transbet: trwałe i innowacyjne rozwiązania dla nowoczesnego budownictwa, odpowiedzialny rozwój oraz relacje oparte na zaufaniu.',
};

// Text 1:1 from transbet.com.pl/o-nas/misja-firmy.
const missionParagraphs = [
  'Budujemy trwałe i innowacyjne rozwiązania, które odpowiadają na potrzeby nowoczesnego budownictwa, szanując środowisko i wspierając rozwój naszego zespołu.',
  'Z dumą łączymy tradycję z najnowszymi technologiami, tworząc produkty i oferując usługi, które stanowią fundament przyszłości.',
  'Wspieramy naszych klientów w realizacji nawet najbardziej wymagających projektów, budując trwałe relacje oparte na zaufaniu, wiedzy i doświadczeniu.',
  'Naszym celem jest nieustanny rozwój - od lokalnych inwestycji po globalne wyzwania.',
];

const pillars = [
  {
    title: 'Trwałość',
    description: 'Tworzymy produkty i usługi, które mają być solidnym fundamentem inwestycji na lata.',
    image: '/products/na-zamowienie/17.jpg',
    alt: 'Prefabrykowane elementy betonowe Transbet',
  },
  {
    title: 'Innowacje',
    description: 'Łączymy doświadczenie z technologiami, które odpowiadają na wymagania nowoczesnego budownictwa.',
    image: '/products/na-zamowienie/14.jpg',
    alt: 'Produkcja prefabrykatów betonowych Transbet',
  },
  {
    title: 'Odpowiedzialność',
    description: 'Rozwijamy firmę z poszanowaniem środowiska, jakości procesu i długofalowych efektów.',
    image: '/kontrola-jakosci.jpg',
    alt: 'Kontrola jakości w Transbet',
  },
  {
    title: 'Zespół',
    description: 'Wspieramy ludzi, bo wiedza, zaangażowanie i współpraca są realną siłą Transbetu.',
    image: '/misja/zespol.webp',
    alt: 'Zespół Transbet',
  },
];

const eyebrow = 'font-mono text-[9px] tracking-[0.2em] uppercase';

export default function MissionPage() {
  const words = pillars.map((pillar) => pillar.title);

  return (
    <>
      <PageHero
        number="01"
        eyebrow="Misja firmy"
        parent={{ label: 'O nas', href: '/o-nas' }}
        title="Misja firmy"
        description="Budujemy rozwiązania, które mają wytrzymać próbę czasu - w konstrukcjach, relacjach i sposobie, w jaki rozwijamy Transbet."
        image="/background.jpg"
      />

      {/* Mission */}
      <section className="bg-[#f6f6f6]">
        <div className="mx-[4vw] border-x border-black/10">
          <div className="px-6 py-12 sm:px-9 md:px-12 lg:py-16">
            <Reveal>
              <p className={`${eyebrow} text-brand`}>Nasza misja</p>
              <h2 className="mt-6 max-w-4xl text-[clamp(2.5rem,5vw,5.6rem)] leading-[0.92] font-medium tracking-[-0.05em]">
                To, co budujemy,
                <span className="block text-brand">zostaje na lata.</span>
              </h2>
            </Reveal>
          </div>
          <div className="grid border-t border-black/10 lg:grid-cols-3">
            <div className="px-6 py-10 sm:px-9 md:px-12 lg:border-r lg:border-black/10 lg:py-14">
              <p className="max-w-sm text-[clamp(1.05rem,1.3vw,1.25rem)] leading-relaxed text-black/70 lg:sticky lg:top-12">
                Solidna konstrukcja zaczyna się dużo wcześniej niż na placu budowy: od odpowiedzialności za każdy detal, decyzję i relację.
              </p>
            </div>
            <ol className="lg:col-span-2">
              {missionParagraphs.map((text, index) => (
                <li key={text} className="grid grid-cols-[3rem_1fr] border-t border-black/10 px-6 py-8 first:border-t-0 sm:px-9 md:px-12 lg:py-10">
                  <span className="font-mono text-[11px] leading-8 text-brand">{String(index + 1).padStart(2, '0')}</span>
                  <Reveal>
                    <p className="text-[clamp(1.25rem,1.9vw,1.9rem)] leading-[1.28] font-medium tracking-[-0.025em]">{text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-label="Wartości" className="overflow-hidden bg-brand py-6 text-black sm:py-8">
        <div className="marquee-third flex w-max items-center gap-8 whitespace-nowrap sm:gap-12">
          {[...words, ...words, ...words].map((word, index) => (
            <span key={index} className="flex items-center gap-8 sm:gap-12" aria-hidden={index >= words.length}>
              <span className="text-[clamp(1.8rem,3.4vw,3.2rem)] font-medium tracking-[-0.04em]">{word}</span>
              <span aria-hidden="true" className="text-[clamp(1.4rem,2.4vw,2.4rem)] text-black/45">
                ✳
              </span>
            </span>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-black text-white">
        <div className="mx-[4vw] border-x border-white/15">
          <div className="px-6 py-12 sm:px-9 md:px-12 lg:py-16">
            <Reveal>
              <p className={`${eyebrow} text-brand`}>Cztery filary</p>
              <h2 className="mt-6 max-w-3xl text-[clamp(2.2rem,4.2vw,4.6rem)] leading-[0.95] font-medium tracking-[-0.05em]">
                Zasady, które pracują razem z nami.
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-px border-t border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className="flex flex-col bg-black">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={pillar.image} alt={pillar.alt} fill sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 23vw" className="object-cover opacity-80" />
                  <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.16em] text-white/80">
                    {String(index + 1).padStart(2, '0')} / {String(pillars.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-[clamp(1.6rem,2.2vw,2.3rem)] font-medium tracking-[-0.04em]">{pillar.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/65">{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* People and quality */}
      <section className="bg-[#f6f6f6]">
        <div className="mx-[4vw] border-x border-black/10">
          <div className="px-6 py-12 sm:px-9 md:px-12 lg:py-16">
            <Reveal>
              <p className={`${eyebrow} text-brand`}>Ludzie i jakość</p>
              <h2 className="mt-6 max-w-3xl text-[clamp(2.2rem,4.2vw,4.6rem)] leading-[0.95] font-medium tracking-[-0.05em]">
                Pewność realizacji zaczyna się od ludzi i jakości.
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-px border-t border-black/10 bg-black/10 lg:grid-cols-12">
            <div className="flex flex-col justify-between bg-black p-7 text-white sm:p-10 lg:col-span-5 lg:row-span-2">
              <div>
                <p className="text-[clamp(1.3rem,1.9vw,1.8rem)] leading-[1.3] font-medium tracking-[-0.025em]">
                  Wymagające projekty potrzebują partnera, który łączy technologię, kontrolę jakości i odpowiedzialny zespół.
                </p>
                <p className="mt-8 text-base leading-relaxed text-white/60">
                  Dlatego rozwijamy zaplecze technologiczne, dbamy o proces i wspieramy ludzi, których wiedza pomaga klientom podejmować
                  dobre decyzje na każdym etapie inwestycji.
                </p>
              </div>
              <a href="#formularz" data-curtain="off" className="group mt-12 inline-flex items-center gap-4 self-start border-b border-brand pb-2 text-sm font-semibold text-brand">
                Skontaktuj się z nami
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
            <div className="relative min-h-72 overflow-hidden lg:col-span-7 lg:min-h-[22rem]">
              <Image src="/misja/zespol.webp" alt="Zespół Transbet" fill sizes="(max-width: 1024px) 92vw, 55vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 text-sm font-medium text-white sm:left-8">Wiedza, doświadczenie, odpowiedzialność.</p>
            </div>
            <div className="relative min-h-60 overflow-hidden lg:col-span-4">
              <Image src="/kontrola-jakosci.jpg" alt="Kontrola jakości w Transbet" fill sizes="(max-width: 1024px) 92vw, 31vw" className="object-cover" />
            </div>
            <div className="flex items-end bg-brand p-7 text-black sm:p-10 lg:col-span-3">
              <p className="text-[clamp(1.3rem,1.8vw,1.75rem)] leading-tight font-medium tracking-[-0.03em]">
                Dobry partner jest obecny nie tylko na początku inwestycji, ale na każdym jej etapie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
