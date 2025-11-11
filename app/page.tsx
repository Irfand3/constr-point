import HeaderWithRoutes from '@/components/HeaderWithRoutes';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import USP from '@/components/USP';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderWithRoutes />
      <Hero />
      <Services />
      <USP />
      <Projects />
      <About />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}

