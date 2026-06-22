'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Betoniarnie', href: '#betoniarnie', number: '01' },
  { label: 'Budowa tuneli', href: '#tunele', number: '02' },
  { label: 'Prefabrykaty', href: '#prefabrykaty', number: '03' },
  { label: 'Zamów beton', href: '#betoniarnie', number: '04' },
  { label: 'Kontakt', href: '#kontakt', number: '05' },
];

const aboutLinks = [
  { label: 'Historia firmy', href: '#historia', number: '01' },
  { label: 'Zespół', href: '#zespol', number: '02' },
  { label: 'Kariera', href: '#kariera', number: '03' },
  { label: 'Aktualności', href: '#aktualnosci', number: '04' },
];

const mainMenuLinks = [
  { label: 'O nas', href: '#o-nas', number: '01', submenu: true },
  { label: 'Betoniarnie', href: '#betoniarnie', number: '02' },
  { label: 'Budowa tuneli', href: '#tunele', number: '03' },
  { label: 'Prefabrykaty', href: '#prefabrykaty', number: '04' },
  { label: 'Realizacje', href: '#realizacje', number: '05' },
  { label: 'Kariera', href: '#kariera', number: '06' },
];

const affiliations = [
  { mark: 'SPBT', name: 'Stowarzyszenie Producentów Betonu Towarowego' },
  { mark: 'PKB', name: 'Polski Klaster Budowlany' },
  { mark: 'PUIG', name: 'Polsko-Ukraińska Izba Gospodarcza' },
];

const euStars = [
  [32, 14],
  [41, 16.412],
  [47.588, 23],
  [50, 32],
  [47.588, 41],
  [41, 47.588],
  [32, 50],
  [23, 47.588],
  [16.412, 41],
  [14, 32],
  [16.412, 23],
  [23, 16.412],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={[
        'absolute inset-x-0 top-0 z-50 h-20 border-b bg-transparent transition-colors duration-300',
        open ? 'border-black/15' : 'border-white/15',
      ].join(' ')}
    >
      <div
        aria-hidden="true"
        className={[
          'pointer-events-none absolute inset-y-0 left-0 w-[min(32rem,72vw)] bg-gradient-to-r from-black/70 via-black/30 to-transparent transition-opacity duration-300',
          open ? 'opacity-0' : 'opacity-100',
        ].join(' ')}
      />
      <div className="relative z-50 flex h-full items-center pl-[calc(4vw+1rem)] sm:pl-[calc(4vw+1.5rem)] md:pl-[calc(4vw+1.75rem)]">
        <Link href="/" className="nav-enter-logo flex shrink-0 items-center gap-4" onClick={() => setOpen(false)}>
          <span
            className={[
              'text-[1.35rem] font-bold tracking-[-0.02em] uppercase transition-colors duration-300 sm:text-2xl',
              open
                ? 'text-black'
                : 'text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]',
            ].join(' ')}
          >
            Transbet
          </span>
          <span className={['hidden h-5 w-px sm:block', open ? 'bg-black/20' : 'bg-white/25'].join(' ')} />
          <span
            className={[
              'hidden text-[10px] font-semibold leading-tight tracking-[0.18em] uppercase transition-colors duration-300 sm:block',
              open ? 'text-zinc-600' : 'text-zinc-400',
            ].join(' ')}
          >
            Industrial
            <br />
            Group
          </span>
        </Link>

        <div className="ml-auto flex h-full items-center">
          <button
            type="button"
            onClick={() =>
              setOpen((current) => {
                if (current) setAboutOpen(false);
                return !current;
              })
            }
            className="nav-enter-action mr-[4vw] flex h-20 w-20 shrink-0 cursor-pointer flex-col items-center justify-center gap-2 bg-brand transition-colors duration-300 hover:bg-brand-hover"
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={open}
          >
            <span
              className={[
                'h-0.5 w-8 transition-all duration-300',
                open ? 'translate-y-[5px] rotate-45 bg-black' : 'bg-black',
              ].join(' ')}
            />
            <span
              className={[
                'h-0.5 w-8 transition-all duration-300',
                open ? '-translate-y-[5px] -rotate-45 bg-black' : 'bg-black',
              ].join(' ')}
            />
          </button>
        </div>
      </div>

      <div
        className={[
          'fixed inset-0 z-40 overflow-y-auto bg-white px-[4vw] pt-20 text-black transition-[opacity,visibility] duration-500',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        ].join(' ')}
        aria-hidden={!open}
      >
        <div className="flex min-h-full flex-col border-x border-black/10">
          <div className={['flex min-h-11 items-center justify-between border-b border-black/10 px-5 sm:px-8', open ? 'menu-enter-item' : ''].join(' ')}>
            <span className="font-mono text-[9px] tracking-[0.18em] text-black/45 uppercase">
              Menu
            </span>
            <span className="font-mono text-[8px] tracking-[0.16em] text-black/40 uppercase">
              Transbet / 1993—2026
            </span>
          </div>

          <nav className="relative z-20 grid flex-1 gap-px border-b border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
            {mainMenuLinks.map((link, index) =>
              link.submenu ? (
                <div
                  key={link.label}
                  className={[
                    'relative z-20 flex min-h-28 flex-col bg-white md:block md:min-h-0',
                    open ? 'menu-enter-item' : '',
                  ].join(' ')}
                  style={{ animationDelay: `${80 + index * 70}ms` }}
                  onMouseEnter={() => {
                    if (window.matchMedia('(hover: hover)').matches) setAboutOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia('(hover: hover)').matches) setAboutOpen(false);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setAboutOpen(true)}
                    tabIndex={open ? 0 : -1}
                    aria-expanded={aboutOpen}
                    className="group flex min-h-28 w-full cursor-pointer items-center gap-5 px-5 text-left transition-colors hover:bg-black hover:text-white sm:px-8 md:h-full md:min-h-0"
                  >
                    <span className="font-mono text-[8px] tracking-[0.18em] opacity-40">
                      / {link.number}
                    </span>
                    <span className="text-[clamp(1.55rem,2.65vw,3.1rem)] font-medium leading-none tracking-[-0.035em]">
                      {link.label}
                    </span>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="ml-auto h-6 w-6 transition-transform duration-300 group-hover:translate-x-1.5">
                      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </button>

                  <div
                    className={[
                      'relative grid w-full grid-cols-2 grid-rows-2 overflow-hidden border-l border-black/10 bg-white transition-[max-height,opacity,transform,visibility] duration-300 md:absolute md:top-0 md:left-full md:h-full md:max-h-none',
                      aboutOpen
                        ? 'visible max-h-40 translate-y-0 opacity-100 md:translate-x-0'
                        : 'invisible max-h-0 -translate-y-2 opacity-0 md:max-h-none md:translate-y-0 md:-translate-x-3',
                    ].join(' ')}
                  >
                    {aboutLinks.map((aboutLink, index) => (
                      <a
                        key={aboutLink.label}
                        href={aboutLink.href}
                        onClick={() => {
                          setAboutOpen(false);
                          setOpen(false);
                        }}
                        tabIndex={open && aboutOpen ? 0 : -1}
                        className={[
                          'group flex min-h-16 items-center gap-3 px-4 transition-colors hover:bg-brand md:min-h-0',
                          index % 2 === 0 ? 'border-r border-black/10' : '',
                          index < 2 ? 'border-b border-black/10' : '',
                        ].join(' ')}
                      >
                        <span className="font-mono text-[8px] tracking-[0.16em] text-black/40">
                          / {aboutLink.number}
                        </span>
                        <span className="text-sm font-semibold tracking-[-0.015em]">
                          {aboutLink.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className={[
                    'group flex min-h-28 items-center gap-5 bg-white px-5 transition-colors hover:bg-black hover:text-white sm:px-8 md:min-h-0',
                    open ? 'menu-enter-item' : '',
                  ].join(' ')}
                  style={{ animationDelay: `${80 + index * 70}ms` }}
                >
                  <span className="font-mono text-[8px] tracking-[0.18em] opacity-40">
                    / {link.number}
                  </span>
                  <span className="text-[clamp(1.55rem,2.65vw,3.1rem)] font-medium leading-none tracking-[-0.035em]">
                    {link.label}
                  </span>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="ml-auto h-6 w-6 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-1.5 group-hover:opacity-100">
                    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </a>
              ),
            )}
          </nav>

          <div className="grid border-b border-black/10 md:grid-cols-[0.5fr_0.5fr_2fr]">
            {navLinks.slice(3).map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={[
                  'group flex min-h-24 items-center justify-between border-b border-black/10 px-5 transition-colors md:min-h-28 md:border-r md:border-b-0 md:px-6',
                  index === 0 ? 'bg-brand hover:bg-brand-hover' : 'hover:bg-black hover:text-white',
                  open ? 'menu-enter-item' : '',
                ].join(' ')}
                style={{ animationDelay: `${520 + index * 80}ms` }}
              >
                <span className="text-xl font-semibold tracking-[-0.025em] md:text-2xl">
                  {link.label}
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1.5">
                  <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </a>
            ))}

            <section
              className={[
                'grid min-h-28 bg-black text-white sm:grid-cols-2',
                open ? 'menu-enter-item' : '',
              ].join(' ')}
              style={{ animationDelay: '680ms' }}
            >
              <a
                href="https://transbet.com.pl/wdrozenie-nowej-technologii-wytwarzania-betonow-przy-pomocy-mobilnego-i-modulowego-wezla-betoniarskiego"
                target="_blank"
                rel="noreferrer"
                tabIndex={open ? 0 : -1}
                className="group flex cursor-pointer items-center gap-4 border-b border-white/10 px-5 py-4 transition-colors hover:bg-zinc-950 sm:border-r sm:border-b-0"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-white/20 transition-colors group-hover:border-brand">
                  <svg aria-hidden="true" viewBox="0 0 64 64" className="h-9 w-9 text-brand">
                    {euStars.map(([cx, cy], index) => (
                      <circle key={index} cx={cx} cy={cy} r="2" fill="currentColor" />
                    ))}
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-semibold tracking-[-0.018em]">Fundusze Europejskie</span>
                  <span className="mt-1 block text-[10px] text-zinc-500">Podkarpacie 2021–2027</span>
                </span>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="ml-auto h-4 w-4 text-zinc-600 transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-brand">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>

              <div className="flex items-center gap-3 px-5 py-4">
                <span className="mr-auto hidden font-mono text-[8px] tracking-[0.16em] text-zinc-600 uppercase xl:block">
                  Członkostwa
                </span>
                {affiliations.map((affiliation) => (
                  <span
                    key={affiliation.mark}
                    title={affiliation.name}
                    className="grid h-11 min-w-12 place-items-center border border-white/20 px-2 font-mono text-[9px] font-semibold tracking-[0.1em] text-zinc-300 transition-colors hover:border-brand hover:text-brand"
                  >
                    {affiliation.mark}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className={['flex items-center justify-between px-5 py-3 font-mono text-[8px] tracking-[0.16em] text-black/40 uppercase sm:px-8', open ? 'menu-enter-item' : ''].join(' ')} style={{ animationDelay: '760ms' }}>
            <span>Transbet Industrial Group</span>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </header>
  );
}
