import Reveal from '@/components/Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, dark = false }: SectionHeadingProps) {
  return (
    <div className="grid gap-8 px-6 py-12 sm:px-9 md:px-12 md:py-16 lg:grid-cols-3 lg:gap-12">
      <div className="lg:col-span-2">
        <Reveal>
          <p className={`font-mono text-[9px] tracking-[0.2em] uppercase ${dark ? 'text-white/40' : 'text-black/40'}`}>
            / {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-6 max-w-[14ch] text-[clamp(2.5rem,5vw,6rem)] font-medium leading-[0.92] tracking-[-0.05em]">
            {title}<span className="text-brand">.</span>
          </h2>
        </Reveal>
      </div>
      {description ? (
        <Reveal delay={120} className="flex items-end">
          <p className={`max-w-md text-base leading-relaxed ${dark ? 'text-white/58' : 'text-black/58'}`}>{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
