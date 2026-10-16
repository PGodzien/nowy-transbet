'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import CalculatorLeaflet, { type LeafletData, type LeafletVariant } from '@/components/CalculatorLeaflet';

/* Concrete volume calculator, ported 1:1 from the previous site (components/calculator.tsx):
   same shapes, formulas, texts, local save and PDF export, in the new look. */

type Shape = 'slab' | 'wall' | 'beam' | 'cylinder';

const STORAGE_KEY = 'concreteCalcV2_clean';

const fmt = (n: number, digits = 3) =>
  new Intl.NumberFormat('pl-PL', { minimumFractionDigits: Math.min(2, digits), maximumFractionDigits: digits }).format(n);

const tabs: { id: Shape; name: string; desc: string }[] = [
  { id: 'slab', name: 'Płyta', desc: 'posadzka / taras' },
  { id: 'wall', name: 'Ściana', desc: 'liniowa przegroda' },
  { id: 'beam', name: 'Ława / Belka', desc: 'fundament / wieniec' },
  { id: 'cylinder', name: 'Cylinder', desc: 'słup / rura' },
];

const formulas = [
  ['Płyta', 'V = długość [m] × szerokość [m] × grubość [m]'],
  ['Ściana', 'V = długość [m] × wysokość [m] × grubość [m]'],
  ['Ława/Belka', 'V = długość [m] × szerokość [m] × wysokość [m]'],
  ['Cylinder (słup)', 'V = π × r² × wysokość [m]'],
] as const;

function NumberInput({
  id,
  label,
  value,
  onChange,
  step = 0.01,
  suffix,
}: {
  id: string;
  label: string;
  value: number | '';
  onChange: (value: number | '') => void;
  step?: number;
  suffix?: string;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="text-sm text-black/60">{label}</span>
      <span className="relative block">
        <input
          id={id}
          inputMode="decimal"
          type="number"
          min={0}
          step={step}
          value={value}
          onChange={(event) => onChange(event.target.value === '' ? '' : parseFloat(event.target.value))}
          className="h-14 w-full border border-black/15 bg-white px-4 pr-14 text-lg font-medium tracking-[-0.01em] outline-none transition-colors focus:border-black"
        />
        {suffix ? (
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-mono text-[11px] tracking-[0.08em] text-black/45">
            {suffix}
          </span>
        ) : null}
      </span>
    </label>
  );
}

export default function ConcreteCalculator() {
  const [shape, setShape] = useState<Shape>('slab');
  const [pricePerM3, setPricePerM3] = useState<number | ''>('');
  const [slab, setSlab] = useState({ lengthM: 4, widthM: 3, thicknessCm: 10 });
  const [wall, setWall] = useState({ lengthM: 5, heightM: 2.5, thicknessCm: 15 });
  const [beam, setBeam] = useState({ lengthM: 6, widthCm: 40, heightCm: 30 });
  const [cyl, setCyl] = useState({ diameterCm: 30, heightM: 3 });
  const [loaded, setLoaded] = useState(false);

  // Remember the last calculation in this browser (same key as the previous site).
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null');
      if (saved) {
        setShape(saved.shape ?? 'slab');
        setPricePerM3(saved.pricePerM3 ?? '');
        if (saved.slab) setSlab(saved.slab);
        if (saved.wall) setWall(saved.wall);
        if (saved.beam) setBeam(saved.beam);
        if (saved.cyl) setCyl(saved.cyl);
      }
    } catch {
      /* storage unavailable */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ shape, pricePerM3, slab, wall, beam, cyl }));
    } catch {
      /* storage unavailable */
    }
  }, [loaded, shape, pricePerM3, slab, wall, beam, cyl]);

  const volumeM3 = useMemo(() => {
    switch (shape) {
      case 'slab':
        return (slab.lengthM || 0) * (slab.widthM || 0) * ((slab.thicknessCm || 0) / 100);
      case 'wall':
        return (wall.lengthM || 0) * (wall.heightM || 0) * ((wall.thicknessCm || 0) / 100);
      case 'beam':
        return (beam.lengthM || 0) * ((beam.widthCm || 0) / 100) * ((beam.heightCm || 0) / 100);
      case 'cylinder': {
        const r = (cyl.diameterCm || 0) / 100 / 2;
        return Math.PI * r * r * (cyl.heightM || 0);
      }
    }
  }, [shape, slab, wall, beam, cyl]);

  const cost = pricePerM3 === '' || !pricePerM3 ? null : volumeM3 * pricePerM3;

  const resetAll = () => {
    setShape('slab');
    setPricePerM3('');
    setSlab({ lengthM: 4, widthM: 3, thicknessCm: 10 });
    setWall({ lengthM: 5, heightM: 2.5, thicknessCm: 15 });
    setBeam({ lengthM: 6, widthCm: 40, heightCm: 30 });
    setCyl({ diameterCm: 30, heightM: 3 });
  };

  const num = (v: number | '') => (v === '' ? 0 : Number(v));

  // PDF: the hidden sheet below is rendered to an image and placed on A4 pages.
  const colorRef = useRef<HTMLDivElement>(null);
  const printRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState<LeafletVariant | null>(null);
  // Set when exporting, so server and browser render the same markup (no date during hydration).
  const [printedAt, setPrintedAt] = useState('');

  const dimensions = (): LeafletData['dimensions'] => {
    switch (shape) {
      case 'slab':
        return [
          { label: 'Długość płyty', value: `${fmt(slab.lengthM, 2)} m` },
          { label: 'Szerokość płyty', value: `${fmt(slab.widthM, 2)} m` },
          { label: 'Grubość płyty', value: `${fmt(slab.thicknessCm, 1)} cm` },
        ];
      case 'wall':
        return [
          { label: 'Długość ściany', value: `${fmt(wall.lengthM, 2)} m` },
          { label: 'Wysokość ściany', value: `${fmt(wall.heightM, 2)} m` },
          { label: 'Grubość ściany', value: `${fmt(wall.thicknessCm, 1)} cm` },
        ];
      case 'beam':
        return [
          { label: 'Długość', value: `${fmt(beam.lengthM, 2)} m` },
          { label: 'Szerokość', value: `${fmt(beam.widthCm, 1)} cm` },
          { label: 'Wysokość', value: `${fmt(beam.heightCm, 1)} cm` },
        ];
      case 'cylinder':
        return [
          { label: 'Średnica', value: `${fmt(cyl.diameterCm, 1)} cm` },
          { label: 'Wysokość', value: `${fmt(cyl.heightM, 2)} m` },
        ];
    }
  };

  const tab = tabs.find((item) => item.id === shape)!;
  const leaflet: LeafletData = {
    printedAt,
    shapeName: tab.name,
    shapeDesc: tab.desc,
    formula: formulas[tabs.indexOf(tab)][1],
    dimensions: dimensions(),
    volume: fmt(volumeM3),
    // Left empty when no price was given, so it can be filled in by hand.
    price: pricePerM3 ? `${fmt(+pricePerM3, 2)} zł` : '',
    cost: cost === null ? '' : `${fmt(cost, 2)} zł`,
  };

  // Two files: the colour leaflet, and the same page in black ink for printing.
  const handleExportPDF = async (variant: LeafletVariant) => {
    const sheet = (variant === 'color' ? colorRef : printRef).current;
    if (!sheet || exporting) return;
    try {
      setExporting(variant);
      setPrintedAt(new Date().toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' }));
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      await document.fonts.ready;
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas-pro'), import('jspdf')]);
      const canvas = await html2canvas(sheet, {
        scale: 2.5,
        useCORS: true,
        backgroundColor: '#ffffff',
        // Copy only the leaflet, not the whole page: much faster.
        ignoreElements: (element) => element !== sheet && !sheet.contains(element) && !element.contains(sheet) && element.tagName !== 'HEAD' && !(element.parentElement?.tagName === 'HEAD'),
      });
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4', compress: true });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      // The sheet is drawn at A4 proportions, so it fills the page edge to edge.
      pdf.addImage(canvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, pageWidth, pageHeight);

      // Phone numbers, e-mail and website stay clickable.
      const box = sheet.getBoundingClientRect();
      const ratio = pageWidth / box.width;
      sheet.querySelectorAll<HTMLElement>('[data-pdf-link]').forEach((element) => {
        const rect = element.getBoundingClientRect();
        pdf.link((rect.left - box.left) * ratio, (rect.top - box.top) * ratio, rect.width * ratio, rect.height * ratio, {
          url: element.dataset.pdfLink!,
        });
      });

      pdf.setProperties({ title: 'Kalkulacja betonu – Transbet', author: 'TRANSBET BETONIARNIE GROCHOWICZ Sp. K.' });
      pdf.save(variant === 'color' ? 'kalkulacja-betonu-Transbet.pdf' : 'kalkulacja-betonu-Transbet-do-druku.pdf');
    } catch (error) {
      console.error(error);
      alert('Nie udało się wygenerować PDF. Upewnij się, że zainstalowano jspdf i html2canvas.');
    } finally {
      setExporting(null);
    }
  };

  return (
    <div>
      {/* Shape */}
      <div className="flex flex-wrap items-end justify-between gap-6 px-6 py-10 sm:px-9 md:px-12">
        <div>
          <p className="text-lg font-medium tracking-[-0.02em]">Wybierz kształt</p>
          <p className="mt-1 text-sm text-black/55">Podaj wymiary w jednostkach metrycznych.</p>
        </div>
        <button
          type="button"
          onClick={resetAll}
          className="h-11 cursor-pointer border border-black/20 px-5 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white"
        >
          Resetuj
        </button>
      </div>

      <div role="tablist" aria-label="Kształt" className="grid grid-cols-2 gap-px border-t border-black/10 bg-black/10 md:grid-cols-4">
        {tabs.map((tab) => {
          const active = tab.id === shape;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setShape(tab.id)}
              className={`flex min-h-24 cursor-pointer flex-col items-start justify-end gap-1 px-6 py-5 text-left transition-colors sm:px-8 ${
                active ? 'bg-black text-white' : 'bg-white hover:bg-[#f6f6f6]'
              }`}
            >
              <span className="text-xl font-medium tracking-[-0.03em]">{tab.name}</span>
              <span className={`font-mono text-[9px] tracking-[0.14em] uppercase ${active ? 'text-brand' : 'text-black/45'}`}>{tab.desc}</span>
            </button>
          );
        })}
      </div>

      {/* Dimensions and result */}
      <div className="grid border-t border-black/10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="grid content-start gap-5 px-6 py-10 sm:grid-cols-2 sm:px-9 md:px-12 lg:border-r lg:border-black/10">
          {shape === 'slab' ? (
            <>
              <NumberInput id="slab_len" label="Długość płyty" value={slab.lengthM} onChange={(v) => setSlab((s) => ({ ...s, lengthM: num(v) }))} suffix="m" />
              <NumberInput id="slab_wid" label="Szerokość płyty" value={slab.widthM} onChange={(v) => setSlab((s) => ({ ...s, widthM: num(v) }))} suffix="m" />
              <NumberInput id="slab_th" label="Grubość płyty" value={slab.thicknessCm} onChange={(v) => setSlab((s) => ({ ...s, thicknessCm: num(v) }))} step={1} suffix="cm" />
            </>
          ) : null}
          {shape === 'wall' ? (
            <>
              <NumberInput id="wall_len" label="Długość ściany" value={wall.lengthM} onChange={(v) => setWall((s) => ({ ...s, lengthM: num(v) }))} suffix="m" />
              <NumberInput id="wall_h" label="Wysokość ściany" value={wall.heightM} onChange={(v) => setWall((s) => ({ ...s, heightM: num(v) }))} suffix="m" />
              <NumberInput id="wall_th" label="Grubość ściany" value={wall.thicknessCm} onChange={(v) => setWall((s) => ({ ...s, thicknessCm: num(v) }))} step={1} suffix="cm" />
            </>
          ) : null}
          {shape === 'beam' ? (
            <>
              <NumberInput id="beam_len" label="Długość" value={beam.lengthM} onChange={(v) => setBeam((s) => ({ ...s, lengthM: num(v) }))} suffix="m" />
              <NumberInput id="beam_w" label="Szerokość" value={beam.widthCm} onChange={(v) => setBeam((s) => ({ ...s, widthCm: num(v) }))} step={1} suffix="cm" />
              <NumberInput id="beam_h" label="Wysokość" value={beam.heightCm} onChange={(v) => setBeam((s) => ({ ...s, heightCm: num(v) }))} step={1} suffix="cm" />
            </>
          ) : null}
          {shape === 'cylinder' ? (
            <>
              <NumberInput id="cyl_d" label="Średnica" value={cyl.diameterCm} onChange={(v) => setCyl((s) => ({ ...s, diameterCm: num(v) }))} step={1} suffix="cm" />
              <NumberInput id="cyl_h" label="Wysokość" value={cyl.heightM} onChange={(v) => setCyl((s) => ({ ...s, heightM: num(v) }))} suffix="m" />
            </>
          ) : null}
          <div className="border-t border-black/10 pt-5 sm:col-span-2">
            <div className="max-w-sm">
              <NumberInput id="price" label="Cena za 1 m³ (opcjonalnie)" value={pricePerM3} onChange={setPricePerM3} step={1} suffix="zł" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10 bg-black px-6 py-10 text-white sm:px-9 md:px-12" aria-live="polite">
          <div className="grid gap-8">
            <div>
              <p className="font-mono text-[9px] tracking-[0.16em] text-white/50 uppercase">Objętość geometryczna</p>
              <p className="mt-3 text-[clamp(2.6rem,4.6vw,4.8rem)] leading-none font-medium tracking-[-0.05em]">
                {fmt(volumeM3)} <span className="text-brand">m³</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-[0.16em] text-white/50 uppercase">Cena łączna (jeśli podano)</p>
              <p className="mt-3 text-[clamp(1.6rem,2.4vw,2.4rem)] leading-none font-medium tracking-[-0.04em]">
                {cost === null ? '-' : `${fmt(cost, 2)} zł`}
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            <button
              type="button"
              onClick={() => handleExportPDF('color')}
              disabled={exporting !== null}
              aria-busy={exporting === 'color'}
              className="flex min-h-16 cursor-pointer items-center justify-between gap-4 bg-brand px-6 font-semibold text-black transition-colors hover:bg-brand-hover disabled:opacity-60"
            >
              {exporting === 'color' ? 'Generowanie PDF…' : 'Pobierz PDF'}
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
                <path d="M12 4v12M6 11l6 6 6-6M5 20h14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleExportPDF('print')}
              disabled={exporting !== null}
              aria-busy={exporting === 'print'}
              className="flex min-h-16 cursor-pointer items-center justify-between gap-4 border border-white/25 px-6 font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-black disabled:opacity-60"
            >
              {exporting === 'print' ? 'Generowanie PDF…' : 'PDF do druku'}
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
                <path d="M7 9V4h10v5M7 17H5v-6h14v6h-2M7 14h10v6H7z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Formulas */}
      <details className="group border-t border-black/10">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-8 sm:px-9 md:px-12">
          <span>
            <span className="block text-lg font-medium tracking-[-0.02em]">Jak liczymy objętości?</span>
            <span className="mt-1 block text-sm text-black/55">Proste wzory geometryczne na podstawie wymiarów.</span>
          </span>
          <span className="shrink-0 border border-black/20 px-4 py-2 text-xs font-medium transition-colors group-open:bg-black group-open:text-white">
            Pokaż wzory
          </span>
        </summary>
        <div className="grid gap-px border-t border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {formulas.map(([name, formula]) => (
            <div key={name} className="bg-[#f6f6f6] px-6 py-6 sm:px-8">
              <p className="font-medium">{name}</p>
              <p className="mt-2 font-mono text-[12px] leading-relaxed text-black/65">{formula}</p>
            </div>
          ))}
        </div>
      </details>

      <p className="border-t border-black/10 px-6 py-8 text-sm leading-relaxed text-black/55 sm:px-9 md:px-12">
        Wyniki mają charakter orientacyjny i nie stanowią specyfikacji technicznej. Zawsze weryfikuj wymiary, klasy betonu i wymagania
        projektowe. <strong className="font-semibold text-black">Należy wziąć pod uwagę współczynnik zagęszczenia i zapas na pompę.</strong>
      </p>

      {/* Leaflet rendered into the PDF (off screen) */}
      <div aria-hidden className="pointer-events-none fixed top-0 left-[-10000px]">
        <CalculatorLeaflet ref={colorRef} data={leaflet} variant="color" />
        <CalculatorLeaflet ref={printRef} data={leaflet} variant="print" />
      </div>
    </div>
  );
}
