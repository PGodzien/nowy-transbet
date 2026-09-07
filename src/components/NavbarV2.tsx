'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const menuLinks = [
  { label: 'O nas', href: '#o-nas' },
  { label: 'Betoniarnie', href: '#betoniarnie' },
  { label: 'Prefabrykaty betonowe', href: '#prefabrykaty-betonowe' },
  { label: 'Zbrojenia', href: 'https://zbrojeniebudowlane.pl/', external: true },
  { label: 'Budowa tuneli', href: 'https://transbettcs.com/', external: true },
  { label: 'Realizacje', href: '#realizacje' },
  { label: 'Aktualności', href: '#aktualnosci' },
  { label: 'Kontakt', href: '#kontakt' },
] as const;

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M8 16L16 8M9 8h7v7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function NavbarV2() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 h-20 border-b border-white/15 bg-transparent text-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[min(36rem,76vw)] bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

      <div className="relative z-50 flex h-full items-center px-[4vw]">
        <Link href="/" className="flex items-center gap-4" onClick={() => setOpen(false)}>
          <span className={['text-xl font-bold tracking-[-0.02em] uppercase sm:text-2xl', open ? 'text-black' : 'text-white'].join(' ')}>
            Transbet
          </span>
          <span className={['hidden h-5 w-px sm:block', open ? 'bg-black/20' : 'bg-white/25'].join(' ')} />
          <span className={['hidden text-[9px] font-semibold leading-tight tracking-[0.18em] uppercase sm:block', open ? 'text-black/50' : 'text-white/45'].join(' ')}>
            Industrial<br />Group
          </span>
        </Link>

        <div className="ml-auto hidden items-center gap-7 xl:flex">
          <a href="#betoniarnie" className="text-xs font-semibold tracking-[-0.01em] text-white/80 transition-colors hover:text-brand">
            Betoniarnie
          </a>
          <a href="#prefabrykaty-betonowe" className="text-xs font-semibold tracking-[-0.01em] text-white/80 transition-colors hover:text-brand">
            Prefabrykaty
          </a>
          <a href="https://zbrojeniebudowlane.pl/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-white/80 transition-colors hover:text-brand">
            Zbrojenia <ExternalIcon />
          </a>
          <a href="https://transbettcs.com/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-white/80 transition-colors hover:text-brand">
            Tunele <ExternalIcon />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          className="ml-6 grid h-12 w-12 place-items-center bg-brand text-black transition-colors hover:bg-brand-hover sm:h-14 sm:w-14"
        >
          <span className="relative block h-5 w-7">
            <span className={['absolute left-0 top-[6px] h-0.5 w-7 bg-black transition-transform duration-300', open ? 'translate-y-[3px] rotate-45' : ''].join(' ')} />
            <span className={['absolute left-0 top-[13px] h-0.5 w-7 bg-black transition-transform duration-300', open ? '-translate-y-[4px] -rotate-45' : ''].join(' ')} />
          </span>
        </button>
      </div>

      <div className={['fixed inset-0 z-40 bg-white px-[4vw] pt-20 text-black transition-[opacity,visibility] duration-400', open ? 'visible opacity-100' : 'invisible opacity-0'].join(' ')} aria-hidden={!open}>
        <div className="flex h-full flex-col border-x border-black/10">
          <div className="flex min-h-12 items-center justify-between border-b border-black/10 px-5 sm:px-8">
            <span className="font-mono text-[9px] tracking-[0.18em] text-black/45 uppercase">Nawigacja</span>
            <span className="font-mono text-[8px] tracking-[0.16em] text-black/35 uppercase">Grupa Transbet</span>
          </div>

          <nav className="grid flex-1 gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-4">
            {menuLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={'external' in link && link.external ? '_blank' : undefined}
                rel={'external' in link && link.external ? 'noreferrer' : undefined}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="group flex min-h-32 flex-col justify-between bg-white px-6 py-6 transition-colors hover:bg-black hover:text-white sm:px-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="font-mono text-[8px] tracking-[0.18em] opacity-35">/ {String(index + 1).padStart(2, '0')}</span>
                  {'external' in link && link.external ? <ExternalIcon /> : null}
                </div>
                <span className="text-[clamp(1.35rem,2.2vw,2.7rem)] font-medium leading-none tracking-[-0.035em]">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="grid border-t border-black/10 md:grid-cols-3">
            <div className="border-b border-black/10 px-6 py-5 md:border-r md:border-b-0 sm:px-8">
              <span className="font-mono text-[8px] tracking-[0.16em] text-black/35 uppercase">Transbet</span>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-black/55">Beton i prefabrykacja betonowa rozwijane w głównym serwisie Transbet.</p>
            </div>
            <a href="https://zbrojeniebudowlane.pl/" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-black/10 px-6 py-5 transition-colors hover:bg-brand md:border-r md:border-b-0 sm:px-8">
              <span>
                <span className="block font-mono text-[8px] tracking-[0.16em] text-black/35 uppercase">Serwis specjalistyczny</span>
                <span className="mt-2 block text-lg font-semibold">Steeltrans / Zbrojenia</span>
              </span>
              <ExternalIcon />
            </a>
            <a href="https://transbettcs.com/" target="_blank" rel="noreferrer" className="group flex items-center justify-between px-6 py-5 transition-colors hover:bg-brand sm:px-8">
              <span>
                <span className="block font-mono text-[8px] tracking-[0.16em] text-black/35 uppercase">Serwis specjalistyczny</span>
                <span className="mt-2 block text-lg font-semibold">Transbet TCS / Tunele</span>
              </span>
              <ExternalIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
