import Image from 'next/image';
import { scenePhotos, type Product } from '@/data/precast-products';

/* Catalogue grid: packshots stand on a light ground; hover motion keeps the chosen cover intact. */
export default function PrecastGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-px bg-black/10 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product, index) => {
        const photo = scenePhotos.has(product.imageSrc);
        // Slight brightening pushes the off-white studio backdrop of some packshots to white, so it blends into the ground.
        const imageClass = photo ? 'object-cover' : 'object-contain p-[7%] mix-blend-multiply brightness-[1.07] contrast-[1.03]';

        return (
          <a
            key={product.slug}
            href={`/prefabrykacja-betonowa/${product.slug}`}
            data-curtain-label={product.name}
            className="group relative flex flex-col bg-[#f3f3f3] transition-colors duration-500 hover:bg-white"
          >
            <span className="relative z-10 flex items-start justify-between gap-3 px-4 pt-4 font-mono text-[9px] tracking-[0.14em] text-black/40 sm:px-6 sm:pt-5">
              <span>{String(index + 1).padStart(2, '0')}</span>
            </span>

            <span className={`relative block aspect-[4/3] overflow-hidden ${photo ? 'mx-4 mt-3 sm:mx-6' : ''}`}>
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={`${imageClass} transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
              />
            </span>

            <span className="mt-auto flex items-end justify-between gap-3 px-4 pt-3 pb-4 sm:px-6 sm:pb-6">
              <span className="text-[clamp(1rem,1.35vw,1.4rem)] leading-[1.1] font-medium tracking-[-0.03em]">{product.name}</span>
              <span className="grid h-8 w-8 shrink-0 -translate-x-2 place-items-center bg-brand text-black opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100 max-sm:hidden">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
            </span>
          </a>
        );
      })}

      {/* Fills the last slot of the grid, built like a product card; contact from the "Zapytaj o produkt" dialog of the previous site. */}
      <div className="flex flex-col bg-white md:col-span-2 lg:col-span-1">
        <span className="px-4 pt-4 font-mono text-[9px] tracking-[0.14em] text-brand uppercase sm:px-6 sm:pt-5">Zapytaj o produkt</span>
        <span className="flex aspect-[4/3] flex-col justify-center gap-3 px-4 sm:px-6 md:aspect-auto md:flex-1 lg:aspect-[4/3] lg:flex-none">
          <a
            href="tel:+48539141851"
            className="group flex items-center justify-between gap-3 border-b border-black/10 pb-3 text-[clamp(1.05rem,1.6vw,1.6rem)] leading-none font-medium tracking-[-0.03em] transition-colors hover:text-brand"
          >
            +48 539 141 851
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1">
              <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </a>
          <a
            href="mailto:prefabrykaty@transbet.com.pl"
            className="group flex items-center justify-between gap-3 text-[clamp(0.8rem,0.95vw,1rem)] font-medium transition-colors hover:text-brand"
          >
            <span>
              prefabrykaty@<wbr />
              transbet.com.pl
            </span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1">
              <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </a>
        </span>
        <span className="mt-auto block px-4 pt-3 pb-4 sm:px-6 sm:pb-6">
          <span className="block text-[clamp(1rem,1.35vw,1.4rem)] leading-[1.1] font-medium tracking-[-0.03em]">Mateusz Maciaszek</span>
          <span className="mt-1 block text-xs text-black/50 sm:text-sm">Kierownik prefabrykacji betonu</span>
        </span>
      </div>
    </div>
  );
}
