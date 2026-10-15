import Image from 'next/image';
import Reveal from '@/components/Reveal';

/* Photos from the top of transbet.com.pl/o-nas, laid out as a collage on the site grid. */
const photos = [
  { src: '/o-nas/transbet-01.jpg', alt: 'Zespół Transbet — grupa pierwsza', cell: 'row-span-2 lg:col-start-1 lg:row-start-1', position: 'center 30%' },
  { src: '/o-nas/transbet-02.jpg', alt: 'Zespół Transbet — grupa druga', cell: 'lg:col-start-2 lg:row-start-1', position: 'center 40%' },
  { src: '/o-nas/transbet-03.jpg', alt: 'Zespół Transbet — grupa trzecia', cell: 'lg:col-start-3 lg:row-start-1', position: 'center 40%' },
  { src: '/o-nas/transbet-06.jpg', alt: 'Zespół Transbet — grupa szósta', cell: 'row-span-2 lg:col-start-4 lg:row-start-1', position: 'center 30%' },
  { src: '/o-nas/realizacja-farma-wiatrowa.jpg', alt: 'Realizacja Transbet przy farmie wiatrowej', cell: 'col-span-2 lg:col-start-2 lg:row-start-2', position: 'center' },
  { src: '/o-nas/transbet-04.jpg', alt: 'Zespół Transbet — grupa czwarta', cell: 'lg:col-start-1 lg:row-start-3', position: 'center 40%' },
  { src: '/o-nas/transbet-05.jpg', alt: 'Zespół Transbet — grupa piąta', cell: 'lg:col-start-2 lg:row-start-3', position: 'center 40%' },
  { src: '/o-nas/transbet-07.jpg', alt: 'Zespół Transbet — grupa siódma', cell: 'col-span-2 lg:col-start-3 lg:row-start-3', position: 'center 27%' },
] as const;

export default function AboutIntro() {
  return (
    <section id="o-firmie" className="bg-white">
      <div className="mx-[4vw] border-x border-black/10">
        <div className="grid gap-8 px-6 py-14 sm:px-9 md:px-12 md:py-20 lg:grid-cols-3 lg:gap-12">
          <Reveal className="lg:col-span-2">
            <p className="font-mono text-[9px] tracking-[0.2em] text-black/40 uppercase">/ O firmie</p>
            <p className="mt-6 text-[clamp(1.45rem,2.3vw,2.5rem)] font-medium leading-[1.18] tracking-[-0.03em] text-black">
              Od początku istnienia zakładu, główną dziedziną naszej działalności jest produkcja betonu towarowego dla odbiorców
              indywidualnych i instytucjonalnych<span className="text-brand">.</span>
            </p>
          </Reveal>
          <Reveal delay={120} className="flex items-end">
            <p className="max-w-md text-base leading-relaxed text-black/60">
              Dzięki indywidualnemu podejściu do Klienta oraz produktom wysokiej klasy w połączeniu z terminowością dostaw
              Betoniarnia rozwija się bardzo dynamicznie stając się jednym z lokalnych liderów rynku produkcji betonu towarowego.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-flow-row-dense auto-rows-[clamp(11rem,40vw,16rem)] grid-cols-2 gap-px border-t border-black/10 bg-black/10 lg:auto-rows-[clamp(14rem,19vw,22rem)] lg:grid-cols-4">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} direction="none" delay={(index % 4) * 70} className={`group relative overflow-hidden bg-[#f6f6f6] ${photo.cell}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                style={{ objectPosition: photo.position }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
