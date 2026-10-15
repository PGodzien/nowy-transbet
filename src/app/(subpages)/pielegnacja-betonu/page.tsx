import type { Metadata } from 'next';
import CareGuide, { type CareSheet } from '@/components/CareGuide';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Pielęgnacja betonu',
  description:
    'Dowiedz się jak pielęgnować beton, żeby w pełni wykorzystać jego potencjał i właściwości oraz cieszyć się jego trwałością.',
};

// The same six sheets as transbet.com.pl/pielegnacja-betonu; titles as printed on each sheet.
const sheets: CareSheet[] = [
  'Aplikacja mieszanki betonowej',
  'Zagęszczanie mieszanki betonowej',
  'Pielęgnacja betonu',
  'Pękanie betonu',
  'Betonowanie w warunkach obniżonych temperatur',
  'Betonowanie w warunkach podwyższonych temperatur',
].map((title, index) => ({ title, src: `/pielegnacja-betonu/0${index + 1}.webp`, width: 1080, height: 1527 }));

export default function ConcreteCarePage() {
  return (
    <>
      <PageHero
        number="06"
        eyebrow="Pielęgnacja betonu"
        title="Pielęgnacja betonu"
        description="Dowiedz się jak pielęgnować beton, żeby w pełni wykorzystać jego potencjał i właściwości oraz cieszyć się jego trwałością."
        image="/background.jpg"
      />

      <section className="bg-white">
        <div className="mx-[4vw] border-x border-black/10">
          <CareGuide sheets={sheets} />
        </div>
      </section>
    </>
  );
}
