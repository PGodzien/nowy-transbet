'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* Floating shortcut to the concrete calculator on every page except the calculator itself (as on the previous site). */
export default function CalculatorTag() {
  const pathname = usePathname();
  if (pathname?.startsWith('/kalkulator-betonu') || pathname?.startsWith('/cms')) return null;

  return (
    <nav aria-label="Skróty" className="fixed bottom-4 left-4 z-40 sm:bottom-5 sm:left-5">
      <Link
        href="/kalkulator-betonu"
        data-curtain-label="Kalkulator betonu"
        className="group flex h-12 items-center gap-3 border border-white/15 bg-black px-4 text-sm font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-colors hover:bg-brand hover:text-black"
      >
        <span aria-hidden="true" className="grid h-6 w-6 place-items-center bg-brand font-mono text-[10px] font-semibold text-black transition-colors group-hover:bg-black group-hover:text-brand">
          m³
        </span>
        kalkulator betonu
      </Link>
    </nav>
  );
}
