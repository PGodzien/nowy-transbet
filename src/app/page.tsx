import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionPlaceholder from '@/components/SectionPlaceholder';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <SectionPlaceholder id="produkcja" label="Produkcja" number="01" />
      <SectionPlaceholder id="logistyka" label="Logistyka" number="02" />
      <SectionPlaceholder id="technologia" label="Technologia" number="03" />
      <Footer />
    </main>
  );
}
