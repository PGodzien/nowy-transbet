import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionPlaceholder from '@/components/SectionPlaceholder';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#f3f2ed] text-black">
      <Navbar />
      <Hero />
      <SectionPlaceholder id="betoniarnie" label="Betoniarnie" number="01" />
      <SectionPlaceholder id="tunele" label="Budowa tuneli" number="02" />
      <SectionPlaceholder id="prefabrykaty" label="Prefabrykaty" number="03" />
      <Footer />
    </main>
  );
}
