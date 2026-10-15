import Image from 'next/image';
import Link from 'next/link';

type PageHeroProps = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  // Section this page belongs to, shown between Start and the page in the breadcrumb.
  parent?: { label: string; href: string };
  // wide: the fact spans two of the three columns (for a value that is a phrase, not a number).
  facts: readonly { value: string; label: string; wide?: boolean }[];
};

export default function PageHero({
  number,
  eyebrow,
  title,
  description,
  image,
  imagePosition = 'center',
  parent,
  facts,
}: PageHeroProps) {
  // Two wide facts share the row in equal halves; otherwise three columns, a wide fact taking two.
  const halves = facts.length === 2 && facts.every((fact) => fact.wide);
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-black text-white">
      <Image
        src={image}
        alt=""
        fill
        preload
        sizes="100vw"
        className="hero-enter-media object-cover opacity-65"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.88)_0%,rgba(0,0,0,.55)_48%,rgba(0,0,0,.22)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      <div className="subpage-grain absolute inset-0" />

      <div className="relative grid min-h-[88svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%]">
        <div className="flex items-center justify-center pt-20">
          <span className="font-mono text-[9px] tracking-[0.2em] text-white/35 [writing-mode:vertical-rl]">
            {number} / {eyebrow}
          </span>
        </div>

        <div className="col-span-3 flex min-w-0 flex-col border-x border-white/15 pt-20">
          <div className="flex min-h-14 items-center gap-3 border-b border-white/15 px-6 font-mono text-[9px] tracking-[0.17em] text-white/45 uppercase sm:px-9 md:px-12">
            <Link href="/" className="transition-colors hover:text-brand">Start</Link>
            <span>/</span>
            {parent ? (
              <>
                <Link href={parent.href} className="transition-colors hover:text-brand">{parent.label}</Link>
                <span>/</span>
              </>
            ) : null}
            <span className="text-white/75">{eyebrow}</span>
          </div>

          <div className="flex flex-1 flex-col justify-end px-6 py-10 sm:px-9 md:px-12 md:py-14">
            <p className="font-mono text-[9px] tracking-[0.2em] text-brand uppercase">/ Transbet Industrial Group</p>
            <h1 className="hero-enter-title mt-7 max-w-[12ch] text-[clamp(3rem,7.4vw,8.7rem)] font-medium leading-[0.86] tracking-[-0.058em]">
              {title}<span className="text-brand">.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              {description}
            </p>
          </div>

          <div className={`grid border-t border-white/15 ${halves ? 'sm:grid-cols-2' : 'sm:grid-cols-3'}`}>
            {facts.map((fact, index) => (
              <div
                key={`${fact.value}-${fact.label}`}
                className={`flex min-h-28 items-end justify-between gap-5 border-b border-white/15 px-6 py-6 sm:min-h-32 sm:border-b-0 sm:px-8 ${index < facts.length - 1 ? 'sm:border-r sm:border-white/15' : ''} ${fact.wide && !halves ? 'sm:col-span-2' : ''}`}
              >
                <span className={`font-medium leading-none tracking-[-0.045em] ${fact.wide ? 'max-w-[22ch] text-[clamp(1.5rem,2.4vw,2.75rem)] leading-[1.02]' : 'text-[clamp(1.8rem,3vw,3.5rem)]'}`}>{fact.value}</span>
                <span className="max-w-28 text-right font-mono text-[8px] leading-relaxed tracking-[0.15em] text-white/40 uppercase">{fact.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div />
      </div>
    </section>
  );
}
