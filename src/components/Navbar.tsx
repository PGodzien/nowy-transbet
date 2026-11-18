'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import OrderPanel from '@/components/OrderPanel';
import Link from 'next/link';

const navLinks = [
  { label: 'Betoniarnie', href: '/beton', number: '01' },
  { label: 'Budowa tuneli', href: 'https://transbettcs.com/', number: '02' },
  { label: 'Prefabrykaty', href: '/prefabrykacja-betonowa', number: '03' },
  { label: 'Zamów beton', href: '/#betoniarnie', number: '04' },
  { label: 'Kontakt', href: '#kontakt', number: '05' },
];

const aboutLinks = [
  { label: 'O nas', href: '/o-nas', number: '01' },
  { label: 'Zespół', href: '/o-nas#zespol', number: '02' },
  { label: 'Kariera', href: '/kariera', number: '03' },
  { label: 'Aktualności', href: '/aktualnosci', number: '04' },
  { label: 'Członkostwa', href: '/czlonkostwa', number: '05' },
  { label: 'Pielęgnacja betonu', href: '/pielegnacja-betonu', number: '06' },
  { label: 'Dokumenty', href: '/dokumenty', number: '07' },
  { label: 'Skład betonu', href: '/sklad-betonu', number: '08' },
];

const mainMenuLinks = [
  { label: 'O firmie', href: '/o-nas', number: '01', submenu: true },
  { label: 'Betoniarnie', href: '/beton', number: '02' },
  { label: 'Prefabrykacja betonowa', href: '/prefabrykacja-betonowa', number: '03' },
  { label: 'Zbrojenia ↗', href: 'https://steel-trans.pl/', number: '04' },
  { label: 'Budowa tuneli ↗', href: 'https://transbettcs.com/', number: '05' },
  { label: 'Pełna oferta', href: '/oferta', number: '06' },
];

const affiliations = [
  { mark: 'SPBT', name: 'Stowarzyszenie Producentów Betonu Towarowego' },
  { mark: 'PKB', name: 'Polski Klaster Budowlany' },
  { mark: 'ITA-AITES', name: 'International Tunnelling and Underground Space Association' },
];

// Same memberships as the header of transbet.com.pl, shown as monochrome marks.
const memberships = [
  { name: 'Stowarzyszenie Producentów Betonu Towarowego', logo: '/czlonkostwo-spbt-mono.png', width: 114, height: 78 },
  { name: 'Polski Klaster Budowlany', logo: '/czlonkostwo-pkb-mono.png', width: 388, height: 65 },
  { name: 'ITA-AITES', logo: '/czlonkostwo-ita-aites-mono.png', width: 315, height: 87 },
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
  const [orderOpen, setOrderOpen] = useState(false);
  const closeOrder = useCallback(() => setOrderOpen(false), []);
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
        'absolute inset-x-0 top-0 z-50 h-20 border-b transition-colors duration-300',
        // Glass bar over the hero. The blur is dropped while the menu is open,
        // because backdrop-filter would trap the fixed menu panel inside the header.
        open ? 'border-black/15 bg-transparent' : 'border-white/10 bg-black/55 backdrop-blur-md backdrop-saturate-150',
      ].join(' ')}
    >
      <div className="relative z-50 flex h-full items-center pl-[calc(4vw+0.75rem)] sm:pl-[calc(4vw+1.5rem)] md:pl-[calc(4vw+1.75rem)]">
        <Link href="/" className="nav-enter-logo flex shrink-0 items-center gap-2 sm:gap-4" onClick={() => setOpen(false)}>
          <Image src="/logo-transbet.png" alt="" width={519} height={267} preload className="h-8 w-auto sm:h-9" />
          <span
            className={[
              'hidden text-[1.35rem] font-bold tracking-[-0.02em] uppercase transition-colors duration-300 sm:inline sm:text-2xl',
              open
                ? 'text-black'
                : 'text-white',
            ].join(' ')}
          >
            Transbet
          </span>
        </Link>

        <div className="ml-auto flex h-full items-center">
          <Link
            href="/czlonkostwa"
            onClick={() => setOpen(false)}
            aria-label="Członkostwa i stowarzyszenia"
            data-curtain-label="Członkostwa"
            // Only from 1400 px: below that the logos would crowd the calculator and "Zamów beton".
            className="group nav-enter-action mr-10 hidden items-center gap-7 min-[1400px]:flex"
          >
            <span className={['text-sm font-medium transition-colors duration-300 group-hover:text-brand', open ? 'text-black/60' : 'text-white/70'].join(' ')}>
              Członkostwa
            </span>
            {memberships.map((membership) => (
              <Image
                key={membership.name}
                src={membership.logo}
                alt={membership.name}
                title={membership.name}
                width={membership.width}
                height={membership.height}
                className={[
                  'h-7 w-auto opacity-80 transition-[filter,opacity] duration-300 group-hover:opacity-100',
                  open ? 'brightness-0' : '',
                ].join(' ')}
              />
            ))}
          </Link>
          {/* Calculator and "Zamów beton": from 1360 px they share the hero's last column with the menu button, in two
              equal halves, so the calculator's left edge sits on that column's line. Positioned against the header row,
              whose width is the hero's, so it lines up with or without a classic scrollbar. */}
          <div className="flex h-20 shrink-0 nav:absolute nav:top-0 nav:right-[calc(4vw+80px)] nav:w-[calc((100%-8vw)/4-80px)]">
          <Link
            href="/kalkulator-betonu"
            onClick={() => setOpen(false)}
            aria-label="Kalkulator betonu"
            data-curtain-label="Kalkulator betonu"
            className={[
              'group nav-enter-action flex h-20 shrink-0 items-center gap-3 border-l px-3 text-sm font-semibold whitespace-nowrap transition-colors duration-300 sm:px-4 lg:px-6 nav:min-w-0 nav:flex-1 nav:justify-center nav:px-2',
              open ? 'border-black/15 text-black hover:bg-black hover:text-white' : 'border-white/10 text-white hover:bg-white hover:text-black',
            ].join(' ')}
          >
            <span aria-hidden="true" className="grid h-6 w-6 shrink-0 place-items-center bg-brand font-mono text-[10px] font-semibold text-black">
              m³
            </span>
            {/* full label where it fits, shorter on narrower laptops */}
            <span className="hidden lg:inline nav:hidden nav-md:inline">
              Kalkulator<span className="nav:hidden nav-xl:inline"> betonu</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setOrderOpen(true);
            }}
            aria-haspopup="dialog"
            aria-expanded={orderOpen}
            className={[
              // Tighter below 360 px, so the calculator still fits on the smallest phones.
              'group nav-enter-action flex h-20 shrink-0 cursor-pointer items-center gap-3 border-l px-5 text-sm font-semibold whitespace-nowrap transition-colors duration-300 max-[359px]:px-3 lg:px-6 nav:min-w-0 nav:flex-1 nav:justify-center nav:px-2',
              open ? 'border-black/15' : 'border-white/10',
              'bg-black text-white hover:bg-brand hover:text-black',
            ].join(' ')}
          >
            Zamów beton
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="hidden h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 lg:block nav:hidden nav-lg:block">
              <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          </div>
          <button
            type="button"
            onClick={() =>
              setOpen((current) => {
                if (current) setAboutOpen(false);
                return !current;
              })
            }
            className="nav-enter-action mr-[4vw] flex h-20 w-20 shrink-0 cursor-pointer flex-col items-center justify-center gap-2 bg-brand transition-colors duration-300 hover:bg-brand-hover max-[359px]:w-16"
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
                  <a
                    href={link.href}
                    onClick={(event) => {
                      // Hover devices already see the sub-links, so a click opens the page.
                      // On touch, the first tap reveals the sub-links and the second opens the page.
                      const canHover = window.matchMedia('(hover: hover)').matches;
                      if (!canHover && !aboutOpen) {
                        event.preventDefault();
                        setAboutOpen(true);
                        return;
                      }
                      setAboutOpen(false);
                      setOpen(false);
                    }}
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
                  </a>

                  <div
                    className={[
                      'relative grid w-full grid-cols-2 grid-rows-4 overflow-hidden border-l border-black/10 bg-white transition-[max-height,opacity,transform,visibility] duration-300 md:absolute md:top-0 md:left-full md:h-full md:max-h-none',
                      aboutOpen
                        ? 'visible max-h-80 translate-y-0 opacity-100 md:translate-x-0'
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
                          index < aboutLinks.length - 2 ? 'border-b border-black/10' : '',
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
                href="/srodki-ue/wdrozenie-nowej-technologii-wytwarzania-betonow-przy-pomocy-mobilnego-i-modulowego-wezla-betoniarskiego"
                data-curtain-label="Projekt UE"
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

              <Link
                href="/czlonkostwa"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                data-curtain-label="Członkostwa"
                className="group flex items-center gap-3 px-5 py-4 transition-colors hover:bg-zinc-950"
              >
                <span className="mr-auto hidden font-mono text-[8px] tracking-[0.16em] text-zinc-600 uppercase xl:block">
                  Członkostwa
                </span>
                {affiliations.map((affiliation) => (
                  <span
                    key={affiliation.mark}
                    title={affiliation.name}
                    className="grid h-11 min-w-12 place-items-center border border-white/20 px-2 font-mono text-[9px] font-semibold tracking-[0.1em] text-zinc-300 transition-colors group-hover:border-brand group-hover:text-brand"
                  >
                    {affiliation.mark}
                  </span>
                ))}
              </Link>
            </section>
          </div>

          <div className={['flex items-center justify-between px-5 py-3 font-mono text-[8px] tracking-[0.16em] text-black/40 uppercase sm:px-8', open ? 'menu-enter-item' : ''].join(' ')} style={{ animationDelay: '760ms' }}>
            <span className="normal-case">TRANSBET BETONIARNIE GROCHOWICZ Sp. K.</span>
            <span>© 2026</span>
          </div>
        </div>
      </div>
      <OrderPanel open={orderOpen} onClose={closeOrder} />
    </header>
  );
}
