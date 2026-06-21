interface SectionPlaceholderProps {
  id: string;
  label: string;
  number: string;
}

export default function SectionPlaceholder({ id, label, number }: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className="relative border-t border-black/10 bg-[#f3f2ed]"
    >
      <div className="grid min-h-screen w-full grid-cols-[4%_repeat(3,minmax(0,1fr))_4%]">
        {/* col 1 – left gutter */}
        <div className="flex flex-col items-center justify-center border-r border-black/10">
          <span className="font-mono text-[10px] tracking-widest text-zinc-500 [writing-mode:vertical-rl]">
            {number}
          </span>
        </div>

        {/* cols 2-4 – content */}
        <div className="col-span-3 flex items-center py-32 px-10">
          <div>
            <p className="mb-5 text-xs font-bold tracking-[0.3em] text-brand uppercase">
              Obszar
            </p>
            <h2 className="text-5xl font-medium tracking-[-0.04em] text-black md:text-8xl lg:text-9xl">
              {label}
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-600">
              Ta sekcja jest przygotowana pod przyszłą treść dotyczącą obszaru{' '}
              <span className="font-semibold text-zinc-900">{label}</span>. Skontaktuj się z nami, aby uzyskać
              więcej informacji.
            </p>
            <div className="mt-8 h-px w-24 bg-brand/50" />
          </div>
        </div>

        {/* col 5 – right gutter */}
        <div className="border-l border-black/10" />
      </div>
    </section>
  );
}
