const footerLinks = {
  Obszary: ['Produkcja', 'Logistyka', 'Technologia'],
  Firma: ['O nas', 'Kariera', 'Aktualności', 'Kontakt'],
  Wsparcie: ['Dokumentacja', 'Certyfikaty', 'Polityka prywatności'],
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="grid w-full grid-cols-5">
        {/* col 1 – left gutter */}
        <div className="border-r border-zinc-800/50" />

        {/* cols 2-4 – content */}
        <div className="col-span-3 py-16 px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-amber-500 uppercase">
                Transbet
              </p>
              <p className="mt-1 text-xs tracking-widest text-zinc-600 uppercase">
                Industrial Group
              </p>
              <p className="mt-6 text-xs leading-relaxed text-zinc-500">
                Kompleksowe rozwiązania przemysłowe dla nowoczesnych przedsiębiorstw.
              </p>
              <div className="mt-6 h-px w-12 bg-amber-500/40" />
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="mb-4 text-xs font-medium tracking-[0.2em] text-zinc-400 uppercase">
                  {category}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs tracking-wide text-zinc-600 transition-colors hover:text-amber-500"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-zinc-800/60 pt-8 md:flex-row md:items-center">
            <p className="text-xs tracking-widest text-zinc-700 uppercase">
              © 2026 Transbet Industrial Group. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6">
              {['LinkedIn', 'Twitter', 'YouTube'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs tracking-widest text-zinc-700 uppercase transition-colors hover:text-amber-500"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* col 5 – right gutter */}
        <div className="border-l border-zinc-800/50" />
      </div>
    </footer>
  );
}
