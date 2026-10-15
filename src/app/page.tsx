import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BusinessSections from '@/components/BusinessSections';
import TrustedBy from '@/components/TrustedBy';
import CatalogSection from '@/components/CatalogSection';
import OfferSection from '@/components/OfferSection';
import NewsSection from '@/components/NewsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Hero />
      <TrustedBy />
      <BusinessSections />
      <CatalogSection />
      <OfferSection />
      <NewsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
