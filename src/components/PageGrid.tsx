import type { ReactNode } from 'react';

interface PageGridProps {
  children: ReactNode;
  className?: string;
}

/**
 * Globally persistent 5-column grid overlay.
 * Columns: [empty] | [content] | [content] | [content] | [empty]
 * Each border line runs full height of every section.
 */
export function GridLines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10 grid grid-cols-5"
      style={{ top: 0, bottom: 0 }}
    >
      <div className="border-r border-zinc-800/50" />
      <div className="border-r border-zinc-800/30" />
      <div className="border-r border-zinc-800/30" />
      <div className="border-r border-zinc-800/50" />
      <div />
    </div>
  );
}

/**
 * Content wrapper that sits in the 3 middle columns of the 5-column grid.
 * Use inside any section that needs the constrained layout.
 */
export function ContentColumns({ children, className = '' }: PageGridProps) {
  return (
    <div className={`grid w-full grid-cols-5 ${className}`}>
      {/* left gutter */}
      <div />
      {/* 3 middle columns */}
      <div className="col-span-3">{children}</div>
      {/* right gutter */}
      <div />
    </div>
  );
}
