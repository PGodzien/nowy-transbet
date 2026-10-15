'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* Floating shortcut to the concrete calculator on every page except the calculator itself (as on the previous site). */
export default function CalculatorTag() {
  const pathname = usePathname();
  if (pathname?.startsWith('/kalkulator-betonu') || pathname?.startsWith('/cms') || pathname?.startsWith('/mail')) return null;

  return (
    // Vertical, in the left margin column, so it never covers the content or the footer's legal links.
    <nav aria-label="Skróty" className="fixed bottom-4 left-0 z-40 sm:bottom-5 lg:left-[calc(2vw-1.25rem)]">
      <Link
        href="/kalkulator-betonu"
        data-curtain-label="Kalkulator betonu"
        className="group flex w-8 flex-col items-center gap-3 lg:w-10 border border-white/15 bg-black py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-colors hover:bg-brand hover:text-black"
      >
        <span aria-hidden="true" className="grid h-6 w-6 shrink-0 place-items-center bg-brand font-mono text-[10px] font-semibold text-black transition-colors group-hover:bg-black group-hover:text-brand">
          m³
        </span>
        <span className="whitespace-nowrap [writing-mode:vertical-rl]">kalkulator betonu</span>
      </Link>
    </nav>
  );
}
