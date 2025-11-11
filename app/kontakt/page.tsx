import type { Metadata } from 'next';
import HeaderWithRoutes from '@/components/HeaderWithRoutes';
import Footer from '@/components/Footer';
import ContactPageHero from '@/components/ContactPageHero';
import ContactPageForm from '@/components/ContactPageForm';
import ContactPageInfo from '@/components/ContactPageInfo';
import ContactPageFAQ from '@/components/ContactPageFAQ';

export const metadata: Metadata = {
  title: 'Kontakt - Constructor point d.o.o.',
  description: 'Kontaktirajte nas za besplatnu konsultaciju. Dostupni smo za sva vaša pitanja o građevinskim projektima.',
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen">
      <HeaderWithRoutes />
      <ContactPageHero />
      <ContactPageForm />
      <ContactPageInfo />
      <ContactPageFAQ />
      <Footer />
    </main>
  );
}

