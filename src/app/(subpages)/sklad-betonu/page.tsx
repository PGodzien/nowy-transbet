import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Skład betonu | Transbet Industrial Group',
  description:
    'Nasza Firma dzięki ścisłej kontroli jakości, zapewnia bezproblemowe spełnienie wszystkich wymagań jakościowych dotyczących mieszanki betonu.',
};

// Text 1:1 from transbet.com.pl/sklad-betonu, in the original order.
const sections = [
  {
    title: 'Skład betonu',
    text: 'Mogłoby się wydawać, że beton to materiał powstały po związaniu spoiwa, kruszywa i wody- „wystarczy tylko wymieszać i gotowe”- jednak to nie takie proste. Skład betonu należy tak dobrać, aby zostały spełnione określone wymagania dla mieszanki betonowej i betonu, łącznie z konsystencją, gęstością, wytrzymałością, mrozoodpornością, wytrzymałością, wodoszczelnością, trwałością, ochroną przed korozją stali w betonie, z uwzględnieniem procesu produkcyjnego i planowanej metody realizacji prac betonowych. Nasza Firma dzięki ścisłej kontroli jakości, zapewnia bezproblemowe spełnienie powyższych wymagań.',
  },
  {
    statement: 'Nasza Firma dzięki ścisłej kontroli jakości, zapewnia bezproblemowe spełnienie wszystkich wymagań.',
  },
  {
    title: 'Zastosowania:',
    text: 'Podstawowym składnikiem betonu jest spoiwo mineralne, które możemy określić jako drobno zmielony materiał nieorganiczny, który po zmieszaniu z wodą lub wodnym roztworem określonego związku chemicznego tworzy plastyczny zaczyn wiążący, a następnie twardniejący w wyniku zachodzących w nim procesów fizykochemicznych. Naszymi głównymi dostawcami cementu są największe polskie cementownie, mająca szeroki asortyment najlepszych jakościowo produktów oraz wysoko kwalifikowane doradztwo techniczne.',
  },
  {
    title: 'Kruszywo',
    text: 'Kolejnym niezbędnym materiałem potrzebnym do produkcji betonu jest drobne i grube kruszywo. Jego rodzaj i dobra jakość mają również bardzo duży wpływ na osiągnięcie przez beton wymaganych parametrów. Surowce te w głównej mierze zapewniają Naszej firmie lokalne kopalnie kruszyw.',
  },
  {
    title: 'Domieszki',
    text: 'Mieszanka betonowa cały czas jest poddawana modyfikacjom. Nie byłoby to możliwe bez powstawania coraz to nowszych, skuteczniejszych domieszek do betonu. W ostatnim 25-leciu widoczny jest bardzo duży wzrost zużycia domieszek przy produkcji mieszanek betonowych, co skutkuje między innymi na uzyskaniu odpowiednich właściwości betonu. Dostawcami chemii budowlanej do mieszanek betonowych dla Naszej wytwórni są znani liderzy na rynku polskim, MC Bauchemie oraz BASF.',
  },
] as const;

export default function ConcreteMixPage() {
  return (
    <>
      <PageHero
        number="08"
        eyebrow="Skład betonu"
        title="Skład betonu"
        description="Nasza Firma dzięki ścisłej kontroli jakości, zapewnia bezproblemowe spełnienie wszystkich wymagań jakościowych dotyczących mieszanki betonu."
        image="/background.jpg"
      />

      <section className="bg-white">
        <div className="mx-[4vw] border-x border-black/10">
          {sections.map((section, index) =>
            'statement' in section ? (
              <div key={index} className="border-b border-black/10 bg-[#f6f6f6] px-6 py-14 sm:px-9 md:px-12 lg:py-20">
                <Reveal>
                  <p className="max-w-5xl text-[clamp(1.6rem,3vw,3.2rem)] font-medium leading-[1.08] tracking-[-0.04em]">
                    {section.statement}
                  </p>
                </Reveal>
              </div>
            ) : (
              <div key={section.title} className="grid border-b border-black/10 last:border-b-0 lg:grid-cols-3">
                <div className="px-6 pt-12 sm:px-9 md:px-12 lg:border-r lg:border-black/10 lg:py-16">
                  <Reveal>
                    <h2 className="text-[clamp(2rem,3.2vw,3.4rem)] font-medium leading-[0.98] tracking-[-0.045em]">{section.title}</h2>
                  </Reveal>
                </div>
                <div className="px-6 pt-6 pb-12 sm:px-9 md:px-12 lg:col-span-2 lg:py-16">
                  <Reveal delay={70}>
                    <p className="max-w-3xl text-[clamp(1.05rem,1.25vw,1.25rem)] leading-relaxed text-black/75">{section.text}</p>
                  </Reveal>
                </div>
              </div>
            ),
          )}
        </div>
      </section>
    </>
  );
}
