import Reveal from '@/components/Reveal';

const footerColumns = [
  {
    label: 'Obszary',
    links: [
      { label: 'Betoniarnie', href: '#betoniarnie' },
      { label: 'Budowa tuneli', href: '#tunele' },
      { label: 'Prefabrykaty', href: '#prefabrykaty' },
    ],
  },
  {
    label: 'Firma',
    links: [
      { label: 'O nas', href: '#o-nas' },
      { label: 'Realizacje', href: '#realizacje' },
      { label: 'Kariera', href: '#kariera' },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer id="kontakt" className="viewport-section relative border-t border-white/10 bg-black text-white">
      <div className="grid min-h-[100svh] grid-cols-[4%_repeat(3,minmax(0,1fr))_4%]">
        <div className="flex items-center justify-center">
          <Reveal direction="left">
            <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 [writing-mode:vertical-rl]">
              06 / KONTAKT
            </span>
          </Reveal>
        </div>

        <div className="col-span-3 flex min-w-0 flex-col">
          <div className="flex min-h-20 items-center border-b border-white/12 px-6 sm:px-9">
            <Reveal direction="none" className="w-full">
              <div className="flex w-full items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold tracking-[-0.025em] uppercase sm:text-2xl">Transbet</span>
                  <span className="h-5 w-px bg-white/20" />
                  <span className="font-mono text-[8px] leading-relaxed tracking-[0.18em] text-white/40 uppercase">
                    Industrial<br />Group
                  </span>
                </div>
                <span className="font-mono text-[8px] tracking-[0.18em] text-white/30 uppercase">
                  Od 1993
                </span>
              </div>
            </Reveal>
          </div>

          <div className="grid flex-1 border-b border-white/12 lg:grid-cols-3">
            <div className="flex min-h-[48svh] items-end px-6 py-10 sm:px-9 md:px-12 lg:col-span-2 lg:min-h-0 lg:border-r lg:border-white/12 lg:py-14">
              <div>
                <Reveal>
                  <p className="mb-6 font-mono text-[9px] tracking-[0.2em] text-white/35 uppercase">
                    / Porozmawiajmy o Twojej inwestycji
                  </p>
                </Reveal>
                <Reveal delay={90}>
                  <h2 className="max-w-[12ch] text-[clamp(2.5rem,4.75vw,5.7rem)] font-medium leading-[0.9] tracking-[-0.052em]">
                    Zbudujmy coś trwałego<span className="text-brand">.</span>
                  </h2>
                </Reveal>
              </div>
            </div>

            <Reveal direction="none" delay={150} className="h-full">
              <a
                href="tel:+48888839617"
                className="group flex h-full min-h-64 flex-col justify-between bg-brand px-6 py-8 text-black transition-colors hover:bg-brand-hover sm:px-9 lg:min-h-0 lg:py-10"
              >
                <span className="font-mono text-[9px] tracking-[0.18em] text-black/45 uppercase">
                  Bezpośredni kontakt
                </span>
                <span>
                  <span className="block text-[clamp(1.6rem,2.65vw,3rem)] font-medium leading-none tracking-[-0.04em]">
                    +48 888 839 617
                  </span>
                  <span className="mt-5 flex items-center justify-between border-t border-black/20 pt-5 text-sm font-semibold">
                    Zadzwoń do nas
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-1.5">
                      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          <div className="grid min-h-[25svh] md:grid-cols-3">
            {footerColumns.map((column, index) => (
              <Reveal key={column.label} direction="none" delay={80 + index * 70} className="h-full">
                <div className="flex h-full min-h-40 flex-col justify-between border-b border-white/10 px-6 py-6 sm:px-9 md:border-r md:border-b-0">
                  <span className="font-mono text-[8px] tracking-[0.18em] text-white/30 uppercase">
                    / 0{index + 1} {column.label}
                  </span>
                  <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                    {column.links.map((link) => (
                      <a key={link.label} href={link.href} className="text-sm text-white/55 transition-colors hover:text-brand">
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </Reveal>
            ))}

            <Reveal direction="none" delay={220} className="h-full">
              <div className="flex h-full min-h-40 flex-col justify-between px-6 py-6 sm:px-9">
                <span className="font-mono text-[8px] tracking-[0.18em] text-white/30 uppercase">
                  / 03 Online
                </span>
                <div className="mt-8 flex items-end justify-between gap-6">
                  <div className="flex gap-5">
                    <a href="#" className="text-sm text-white/55 transition-colors hover:text-brand">LinkedIn</a>
                    <a href="#" className="text-sm text-white/55 transition-colors hover:text-brand">YouTube</a>
                  </div>
                  <span className="font-mono text-[8px] tracking-[0.14em] text-white/25 uppercase">© 2026</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div />
      </div>
    </footer>
  );
}
