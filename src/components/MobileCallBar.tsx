'use client';

import { usePathname } from 'next/navigation';
import { concretePlants } from '@/data/site';

// Phones only: the Przemyśl concrete plant one tap away.
const przemysl = concretePlants.find((p) => p.city === 'Przemyśl')!;

export default function MobileCallBar() {
  const pathname = usePathname();
  if (pathname?.startsWith('/cms') || pathname?.startsWith('/mail')) return null;

  return (
    <>
      {/* keeps the end of every page clear of the bar */}
      <div aria-hidden="true" className="h-[calc(4rem+env(safe-area-inset-bottom))] bg-black md:hidden" />
      <a
        href={przemysl.phoneHref}
        aria-label={`Skontaktuj się z nami: ${przemysl.phone}`}
        className="fixed inset-x-0 bottom-0 z-40 flex h-[calc(4rem+env(safe-area-inset-bottom))] items-center justify-center gap-3 bg-brand px-4 pb-[env(safe-area-inset-bottom)] text-black shadow-[0_-8px_30px_rgba(0,0,0,0.25)] transition-colors active:bg-brand-hover md:hidden"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
          <path
            d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-mono text-[10px] tracking-[0.12em] uppercase">Skontaktuj się z nami</span>
        <span className="text-[16px] font-semibold whitespace-nowrap">{przemysl.phone}</span>
      </a>
    </>
  );
}
