import { forwardRef } from 'react';
import { concretePlants } from '@/data/site';

/*
 * The calculation as a one-page A4 leaflet (794 × 1123 CSS px), rendered off screen and turned into the PDF.
 * Every text comes from the calculator or the site (footer, plants, company data).
 * Elements with data-pdf-link become clickable links in the PDF.
 */

export type LeafletData = {
  printedAt: string;
  shapeName: string;
  shapeDesc: string;
  formula: string;
  dimensions: { label: string; value: string }[];
  volume: string;
  price: string;
  cost: string;
};

const mono = 'font-mono uppercase';

const notes = [
  'Wartości orientacyjne - weryfikuj z projektem i producentem mieszanki.',
  'Należy uwzględnić współczynnik zagęszczenia mieszanki betonowej.',
  'Pamiętaj o doliczeniu zapasu na pompę.',
  'Sprawdź minimalne zamówienie i transport w wytwórni betonu.',
];

const CalculatorLeaflet = forwardRef<HTMLDivElement, { data: LeafletData }>(function CalculatorLeaflet({ data }, ref) {
  return (
    <div ref={ref} className="flex h-[1123px] w-[794px] flex-col bg-white text-black" style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}>
      {/* Cover: the fleet from above */}
      <div
        className="relative h-[278px] shrink-0 bg-black bg-cover bg-center text-white"
        style={{ backgroundImage: 'url(/hero-betoniarnie-poster.jpg)' }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.9) 100%)' }} />
        <div className="relative flex h-full flex-col">
          <div className="flex h-[68px] items-center justify-between border-b border-white/20 px-[44px]">
            <div className="flex items-center gap-[12px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-transbet.png" alt="" className="h-[26px] w-auto" />
              <span className="text-[19px] font-bold tracking-[-0.02em] uppercase">Transbet</span>
            </div>
            <span className={`${mono} text-[9px] tracking-[0.2em] text-white/70`}>{data.printedAt}</span>
          </div>
          <div className="mt-auto px-[44px] pb-[34px]">
            <p className={`${mono} text-[9px] tracking-[0.2em] text-brand`}>TRANSBET BETONIARNIE GROCHOWICZ Sp. K.</p>
            <h1 className="mt-[12px] text-[62px] leading-[0.9] font-medium tracking-[-0.055em]">
              Kalkulacja betonu<span className="text-brand">.</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="grid shrink-0 grid-cols-3 border-b border-black/12">
        <div className="col-span-2 border-r border-black/12 px-[44px] pt-[26px] pb-[22px]">
          <p className={`${mono} text-[9px] tracking-[0.18em] text-black/50`}>Objętość geometryczna</p>
          <p className="mt-[10px] text-[86px] leading-[0.88] font-medium tracking-[-0.06em]">
            {data.volume} <span className="text-brand">m³</span>
          </p>
          <div className="mt-[18px] flex items-baseline gap-[12px]">
            <span className="text-[22px] font-medium tracking-[-0.03em]">{data.shapeName}</span>
            <span className={`${mono} text-[9px] tracking-[0.16em] text-brand`}>{data.shapeDesc}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-1 flex-col justify-between bg-black px-[26px] py-[22px] text-white">
            <p className={`${mono} text-[8px] tracking-[0.18em] text-white/50`}>Cena za 1 m³</p>
            <p className="text-[28px] leading-none font-medium tracking-[-0.04em]">{data.price}</p>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-brand px-[26px] py-[22px] text-black">
            <p className={`${mono} text-[8px] tracking-[0.18em] text-black/55`}>Cena łączna (jeśli podano)</p>
            <p className="text-[28px] leading-none font-medium tracking-[-0.04em]">{data.cost}</p>
          </div>
        </div>
      </div>

      {/* Dimensions and formula */}
      <div className="grid shrink-0 border-b border-black/12" style={{ gridTemplateColumns: `repeat(${data.dimensions.length}, minmax(0, 1fr))` }}>
        {data.dimensions.map((dimension, index) => (
          <div key={dimension.label} className={`px-[44px] py-[18px] ${index > 0 ? 'border-l border-black/12' : ''}`} style={index > 0 ? { paddingLeft: 26 } : undefined}>
            <p className={`${mono} text-[8px] tracking-[0.16em] text-black/45`}>{dimension.label}</p>
            <p className="mt-[8px] text-[24px] leading-none font-medium tracking-[-0.035em]">{dimension.value}</p>
          </div>
        ))}
      </div>
      <div className="shrink-0 border-b border-black/12 bg-[#f6f6f6] px-[44px] py-[14px] font-mono text-[11px] tracking-[0.02em] text-black/65">{data.formula}</div>

      {/* Notes */}
      <div className="shrink-0 border-b border-black/12 px-[44px] pt-[20px] pb-[18px]">
        <p className={`${mono} text-[9px] tracking-[0.18em] text-black/50`}>Uwagi:</p>
        <ol className="mt-[12px] grid grid-cols-2 gap-x-[30px] gap-y-[10px]">
          {notes.map((note, index) => (
            <li key={note} className="flex gap-[12px] text-[12px] leading-[1.45] text-black/75">
              <span className="w-[16px] shrink-0 font-mono text-[9px] leading-[17px] text-brand">{String(index + 1).padStart(2, '0')}</span>
              {note}
            </li>
          ))}
        </ol>
      </div>

      {/* Plants */}
      <div className="grid min-h-0 flex-1 grid-cols-3">
        {concretePlants.map((plant, index) => (
          <div key={plant.city} className={`flex flex-col justify-between px-[26px] py-[22px] ${index === 0 ? 'pl-[44px]' : 'border-l border-black/12'}`}>
            <div>
              <p className={`${mono} text-[8px] tracking-[0.18em] text-black/45`}>/ 0{index + 1} Betoniarnie</p>
              <p className="mt-[10px] text-[26px] leading-none font-medium tracking-[-0.04em]">{plant.city}</p>
              <p className="mt-[8px] text-[11px] leading-snug text-black/60">{plant.address}</p>
            </div>
            <a data-pdf-link={plant.phoneHref} href={plant.phoneHref} className="mt-[14px] block text-[15px] font-medium tracking-[-0.01em]">
              {plant.phone}
            </a>
          </div>
        ))}
      </div>

      {/* Closing band, as the site's footer */}
      <div className="grid h-[206px] shrink-0 grid-cols-3 bg-black text-white">
        <div className="col-span-2 flex flex-col justify-between border-r border-white/15 px-[44px] pt-[22px] pb-[20px]">
          <div>
            <p className={`${mono} text-[8px] tracking-[0.2em] text-white/40`}>/ Porozmawiajmy o Twojej inwestycji</p>
            <p className="mt-[10px] text-[40px] leading-[0.94] font-medium tracking-[-0.045em]">
              Zbudujmy coś trwałego<span className="text-brand">.</span>
            </p>
          </div>
          <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-[14px] text-[8.5px] leading-[1.55] text-white/55">
            <div>
              <p className="text-white/85">Dane firmy</p>
              <p>TRANSBET BETONIARNIE GROCHOWICZ Sp. K.</p>
              <p>NIP: 795-10-07-169</p>
              <p>KRS: 0000573370</p>
            </div>
            <div>
              <p className="text-white/85">Adres</p>
              <p>Topolowa 5</p>
              <p>37-700 Przemyśl</p>
            </div>
            <div>
              <p className="text-white/85">Kontakt</p>
              <a data-pdf-link="mailto:biuro@transbet.com.pl" href="mailto:biuro@transbet.com.pl" className="block">biuro@transbet.com.pl</a>
              <a data-pdf-link="https://transbet.com.pl/" href="https://transbet.com.pl/" className="block">www.transbet.com.pl</a>
            </div>
          </div>
        </div>
        <a data-pdf-link="tel:+48888839617" href="tel:+48888839617" className="flex flex-col justify-between bg-brand px-[26px] pt-[24px] pb-[22px] text-black">
          <span className={`${mono} text-[8px] tracking-[0.18em] text-black/50`}>Bezpośredni kontakt</span>
          <span>
            <span className="block text-[27px] leading-none font-medium tracking-[-0.04em]">+48 888 839 617</span>
            <span className="mt-[14px] flex items-center justify-between border-t border-black/25 pt-[12px] text-[12px] font-semibold">
              Zadzwoń do nas
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
});

export default CalculatorLeaflet;
