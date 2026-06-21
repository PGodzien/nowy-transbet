interface SectionPlaceholderProps {
  id: string;
  label: string;
  number: string;
}

export default function SectionPlaceholder({ id, label, number }: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className="relative border-t border-zinc-800 bg-zinc-950"
    >
      <div className="grid min-h-screen w-full grid-cols-5">
        {/* col 1 – left gutter */}
        <div className="flex flex-col items-center justify-center border-r border-zinc-800/50">
          <span className="font-mono text-[10px] tracking-widest text-zinc-700 [writing-mode:vertical-rl]">
            {number}
          </span>
        </div>

        {/* cols 2-4 – content */}
        <div className="col-span-3 flex items-center py-32 px-10">
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.3em] text-amber-500 uppercase">
              Obszar
            </p>
            <h2 className="text-4xl font-bold text-white md:text-6xl">{label}</h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-500">
              Ta sekcja jest przygotowana pod przyszłą treść dotyczącą obszaru{' '}
              <span className="text-zinc-300">{label}</span>. Skontaktuj się z nami, aby uzyskać
              więcej informacji.
            </p>
            <div className="mt-8 h-px w-24 bg-amber-500/40" />
          </div>
        </div>

        {/* col 5 – right gutter */}
        <div className="border-l border-zinc-800/50" />
      </div>
    </section>
  );
}
