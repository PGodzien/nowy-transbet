'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Betoniarnie', href: '#betoniarnie' },
  { label: 'Budowa tuneli', href: '#tunele' },
  { label: 'Prefabrykaty', href: '#prefabrykaty' },
  { label: 'O grupie', href: '#' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-black/10 bg-[#f3f2ed]/95 backdrop-blur-xl">
      <div className="flex h-full items-center pl-[4vw]">
        <Link href="/" className="flex shrink-0 items-center gap-4">
          <span className="text-xl font-bold tracking-[-0.03em] text-black uppercase">
            Transbet
          </span>
          <span className="hidden h-5 w-px bg-black/20 sm:block" />
          <span className="hidden text-[10px] font-semibold leading-tight tracking-[0.18em] text-zinc-500 uppercase sm:block">
            Industrial
            <br />
            Group
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative py-8 text-[13px] font-semibold tracking-[0.1em] text-zinc-700 uppercase transition-colors duration-300 hover:text-black"
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="group hidden h-full items-center gap-5 border-l border-black/10 px-8 text-xs font-bold tracking-[0.16em] text-black uppercase transition-colors hover:bg-black hover:text-white md:flex"
        >
          Kontakt
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        </a>

        <div
          aria-label="Unia Europejska"
          role="img"
          className="hidden h-20 w-20 shrink-0 items-center justify-center border-l border-black/15 bg-transparent text-black md:flex"
        >
          <svg aria-hidden="true" viewBox="0 0 80 80" className="h-14 w-14" fill="currentColor">
            <defs>
              <path
                id="eu-star"
                d="M40 7.5l.9 2.77h2.91l-2.36 1.71.9 2.77L40 13.04l-2.35 1.71.9-2.77-2.36-1.71h2.91z"
              />
            </defs>
            {Array.from({ length: 12 }, (_, index) => (
              <use key={index} href="#eu-star" transform={`rotate(${index * 30} 40 40)`} />
            ))}
          </svg>
        </div>

        <a
          href="#kontakt"
          aria-label="Przejdź do kontaktu"
          className="group order-5 mr-[4vw] flex h-20 w-20 shrink-0 items-center justify-center bg-brand text-black transition-colors duration-300 hover:bg-brand-hover"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="order-4 ml-auto flex h-20 w-16 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Przełącz menu"
        >
          <span className={`h-0.5 w-7 bg-black transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-7 bg-black transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-7 bg-black transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/10 bg-[#f3f2ed] px-6 py-5 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-black/10 py-4 text-lg font-bold tracking-wide text-black uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
