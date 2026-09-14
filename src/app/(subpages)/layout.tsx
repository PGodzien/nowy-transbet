import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SubpagesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
