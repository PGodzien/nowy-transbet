import NavbarV2 from '@/components/NavbarV2';
import Hero from '@/components/Hero';
import BusinessSectionsV2 from '@/components/BusinessSectionsV2';
import TrustedBy from '@/components/TrustedBy';
import CatalogSection from '@/components/CatalogSection';
import OfferSection from '@/components/OfferSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white text-black">
      <NavbarV2 />
      <Hero />
      <BusinessSectionsV2 />
      <TrustedBy />
      <CatalogSection />
      <OfferSection />
      <NewsSection />
      <Footer />
    </main>
  );
}
