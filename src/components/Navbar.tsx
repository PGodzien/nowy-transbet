'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Produkcja', href: '#produkcja' },
  { label: 'Logistyka', href: '#logistyka' },
  { label: 'Technologia', href: '#technologia' },
  { label: 'O nas', href: '#' },
  { label: 'Kontakt', href: '#' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      {/* 5-column grid – content spans 3 middle cols */}
      <div className="grid h-16 w-full grid-cols-5">
        {/* col 1 – left gutter */}
        <div className="flex items-center px-4">
          <span className="font-mono text-[10px] tracking-widest text-zinc-700">TBG</span>
        </div>

        {/* cols 2-4 – logo + nav + cta */}
        <div className="col-span-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
              Transbet
            </span>
            <span className="hidden h-4 w-px bg-zinc-700 sm:block" />
            <span className="hidden text-xs tracking-widest text-zinc-400 uppercase sm:block">
              Industrial Group
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-widest text-zinc-400 uppercase transition-colors hover:text-amber-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="hidden items-center gap-2 border border-amber-500 px-4 py-2 text-xs font-medium tracking-widest text-amber-500 uppercase transition-colors hover:bg-amber-500 hover:text-zinc-950 md:flex"
          >
            Oferta
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-px w-6 bg-zinc-400 transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-zinc-400 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-px w-6 bg-zinc-400 transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {/* col 5 – right gutter */}
        <div />
      </div>

      {open && (
        <div className="grid grid-cols-5 border-t border-zinc-800 bg-zinc-950">
          <div />
          <div className="col-span-3 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-xs font-medium tracking-widest text-zinc-400 uppercase transition-colors hover:text-amber-500"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div />
        </div>
      )}
    </header>
  );
}
