import type { Metadata } from 'next';
import HeaderWithRoutes from '@/components/HeaderWithRoutes';
import Footer from '@/components/Footer';
import ServicesPageHero from '@/components/ServicesPageHero';
import ServicesPageGrid from '@/components/ServicesPageGrid';
import ServicesPageProcess from '@/components/ServicesPageProcess';
import ServicesPageBenefits from '@/components/ServicesPageBenefits';
import ServicesPageCTA from '@/components/ServicesPageCTA';

export const metadata: Metadata = {
  title: 'Usluge - Constructor point d.o.o.',
  description: 'Kompletna paleta usluga projektnog menadžmenta za stambene, komercijalne i industrijske građevinske projekte.',
};

export default function UslugePage() {
  return (
    <main className="min-h-screen">
      <HeaderWithRoutes />
      <ServicesPageHero />
      <ServicesPageGrid />
      <ServicesPageProcess />
      <ServicesPageBenefits />
      <ServicesPageCTA />
      <Footer />
    </main>
  );
}

