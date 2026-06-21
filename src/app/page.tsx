import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import CatalogSection from '@/components/CatalogSection';
import OfferSection from '@/components/OfferSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Hero />
      <TrustedBy />
      <CatalogSection />
      <OfferSection />
      <Footer />
    </main>
  );
}
