import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Innowacje',
  description:
    'Nowy system płyt drogowych, wykazujący się poprawionymi parametrami użytkowymi oraz zastosowaniem proekologicznych rozwiązań.',
};

// Text 1:1 from transbet.com.pl/innowacje, laid out like a news post.
export default function InnovationPage() {
  return (
    <>
      <PageHero
        number="06"
        eyebrow="Innowacje"
        title="Innowacje"
        description="Nowy system płyt drogowych, wykazujący się poprawionymi parametrami użytkowymi oraz zastosowaniem proekologicznych rozwiązań."
        image="/background.jpg"
      />

      <section className="bg-[#f6f6f6]">
        <div className="mx-[4vw] grid items-center border-x border-black/10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="px-6 py-12 sm:px-9 md:px-12 lg:py-16">
            <Reveal>
              <p className="font-mono text-[9px] tracking-[0.2em] text-brand uppercase">UE - Fundusze Europejskie</p>
              <h2 className="mt-6 text-[clamp(2.2rem,4vw,4.4rem)] leading-[0.95] font-medium tracking-[-0.05em]">
                Nowatorski system
                <br />
                płyt drogowych
              </h2>
              <p className="mt-8 max-w-xl text-[clamp(1.05rem,1.3vw,1.25rem)] leading-relaxed text-black/70">
                Naszym nowy produktem jest nowatorski system płyt drogowych o poprawionej wytrzymałości mechanicznej i odporności na
                warunki atmosferyczne.
              </p>
            </Reveal>
          </div>
          <div className="px-6 pb-12 sm:px-9 md:px-12 lg:py-16">
            <Image
              src="/innowacje/plyta-drogowa-ue.png"
              alt="Płyta drogowa"
              width={1753}
              height={714}
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="h-auto w-full mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-[4vw] grid border-x border-t border-black/10 lg:grid-cols-3">
          <aside className="hidden border-r border-black/10 px-9 py-16 lg:block">
            <div className="sticky top-12">
              <a href="/srodki-ue" className="flex items-center gap-3 font-mono text-[9px] tracking-[0.18em] text-black/50 uppercase hover:text-black">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
                  <path d="M20 12H4M10 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                Środki UE
              </a>
            </div>
          </aside>

          <div className="px-6 py-12 sm:px-9 md:px-12 lg:col-span-2 lg:py-16">
            <div className="news-body max-w-3xl">
              <h2>Konstrukcja płyty:</h2>
              <ul>
                <li>redukuje możliwość wzajemnego przemieszczania,</li>
                <li>
                  umożliwia utworzenie trwałej nawierzchni przy zachowaniu stałych odstępów dylatacyjnych z wydajnym odprowadzeniem wody
                  poza obręb płyty.
                </li>
              </ul>

              <h2>Zastosowania:</h2>
              <ul>
                <li>budowa drogi o niewielkim natężeniu ruchu (drogi dojazdowe, drogi wewnętrzne),</li>
                <li>budowa placów składowych oraz parkingów,</li>
                <li>budowa tymczasowej nawierzchni na placach budów.</li>
              </ul>
              <p>Nasza płyta pokryta jest modyfikowaną powłoką polimerową, która poprawia jej właściwości higroskopijne jak również mechaniczne.</p>

              <h2>Zastosowana powłoka polimerowa pozwoliła na:</h2>
              <ul>
                <li>ograniczenie nasiąkliwości aż o 60%,</li>
                <li>zwiększenie odporności na ścieranie i uderzenia nawet o 50%,</li>
                <li>przyśpieszenie odprowadzania wody z nawierzchni o 30%.</li>
              </ul>
              <p>
                Ponadto, woda jest odprowadzana poza obręb płyty w przeciwieństwie do płyty konkurencyjnej, w której woda dostaje się
                bezpośrednio pod płytę dodatkowo zmiękczając znajdujący się pod nią grunt.
              </p>
              <p>
                Warto również podkreślić proekologiczny charakter rozwiązania, który osiągnięty został poprzez zastosowanie surowców
                pochodzenia odpadowego i naturalnego.
              </p>
              <p>Dużą zaletą Naszego produktu jest estetyczność oraz łatwość układania poprzez zastosowanie specjalnych pióro-wpustów.</p>

              <Image
                src="/srodki-ue/flagi-ue-projekt.jpg"
                alt="Fudusze Europejskie"
                width={2600}
                height={214}
                sizes="(max-width: 1024px) 92vw, 768px"
                className="h-auto w-full"
              />

              <p>
                <strong>TRANSBET BETONIARNIE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ SPÓŁKA KOMANDYTOWA</strong>
                <br />
                realizuje projekt pod nazwą: „Wprowadzenie na rynek innowacyjnego systemu płyt drogowych będącego wynikiem prac badawczo -
                rozwojowych”.
              </p>
              <p>
                <strong>Cele i planowane efekty projektu:</strong>
                <br />
                Celem realizacji projektu jest Wdrożenie wyników własnych prac B+R, skutkujące wprowadzeniem na rynek nowego systemu płyt
                drogowych, wykazującego się poprawionymi parametrami użytkowymi oraz zastosowaniem proekologicznych rozwiązań. Efektem
                realizacji projektu będzie umożliwienie Spółce podniesienia poziomu innowacyjności oraz konkurencyjności na rynku.
              </p>
              <p>
                <strong>Ponadto zostaną osiągnięte inne korzyści:</strong>
              </p>
              <ul>
                <li>uzyskanie przewagi rynkowej poprzez wprowadzenie na rynek przełomowego produktu,</li>
                <li>zaspokojenie zidentyﬁkowanych potrzeb obecnych i potencjalnych klientów,</li>
                <li>osiągnięcie dużej wydajności produkcji przy zachowaniu niskich kosztów,</li>
                <li>możliwość stałego poszerzania oferty dzięki nowoczesnemu parkowi maszynowemu,</li>
                <li>pozyskanie nowych klientów i zwiększenie przychodów przedsiębiorstwa,</li>
                <li>rozpoczęcie działalności eksportowej,</li>
                <li>stworzenie nowych miejsc pracy.</li>
              </ul>
            </div>

            <dl className="mt-12 grid max-w-3xl gap-10 sm:grid-cols-2 sm:gap-16">
              <div className="flex flex-col-reverse">
                <dt className="mt-2 font-mono text-[9px] tracking-[0.16em] text-black/45 uppercase">Wartość projektu</dt>
                <dd className="text-[clamp(1.3rem,1.8vw,1.8rem)] font-medium tracking-[-0.03em]">5 920 605,00 PLN</dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="mt-2 font-mono text-[9px] tracking-[0.16em] text-black/45 uppercase">Wkład Funduszy Europejskich</dt>
                <dd className="text-[clamp(1.3rem,1.8vw,1.8rem)] font-medium tracking-[-0.03em]">3 369 450,00 PLN</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
