import { concretePlants } from '@/data/site';

// Phones only, right under the hero: the concrete plants' numbers without scrolling (texts as in the "Zamów beton" panel).
export default function MobilePlantContacts() {
  return (
    <section aria-labelledby="mobile-plants-title" className="bg-white md:hidden">
      <div className="mx-[4vw] border-x border-black/10">
        <h2 id="mobile-plants-title" className="border-b border-black/10 px-5 pt-8 pb-6 text-[2rem] leading-[0.95] font-medium tracking-[-0.045em]">
          Skontaktuj się z betoniarniami<span className="text-brand">.</span>
        </h2>
        <ul>
          {concretePlants.map((plant, index) => (
            <li key={plant.city} className="border-b border-black/10">
              <a href={plant.phoneHref} className="group flex items-center justify-between gap-4 px-5 py-5 transition-colors active:bg-black active:text-white">
                <span className="min-w-0">
                  <span className="block font-mono text-[9px] tracking-[0.18em] text-black/40 group-active:text-white/50">/ {String(index + 1).padStart(2, '0')}</span>
                  <span className="mt-2 block text-lg leading-none font-medium tracking-[-0.03em]">Betoniarnia {plant.city}</span>
                  <span className="mt-2 block text-[1.35rem] leading-none font-semibold tracking-[-0.03em] whitespace-nowrap">{plant.phone}</span>
                </span>
                <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center bg-brand text-black">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path
                      d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
