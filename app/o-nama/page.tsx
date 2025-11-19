import type { Metadata } from 'next';
import HeaderWithRoutes from '@/components/HeaderWithRoutes';
import Footer from '@/components/Footer';
import AboutPageHero from '@/components/AboutPageHero';
import AboutPageStory from '@/components/AboutPageStory';
import AboutPageValues from '@/components/AboutPageValues';
// import AboutPageTeam from '@/components/AboutPageTeam';
import AboutPageTimeline from '@/components/AboutPageTimeline';
import AboutPageCTA from '@/components/AboutPageCTA';

export const metadata: Metadata = {
  title: 'O nama - Constructor point d.o.o.',
  description: 'Upoznajte Constructor point - modernu kompaniju za upravljanje građevinskim projektima.',
};

export default function ONamaPage() {
  return (
    <main className="min-h-screen">
      <HeaderWithRoutes />
      <AboutPageHero />
      <AboutPageStory />
      <AboutPageValues />
      <AboutPageTimeline />
      {/* <AboutPageTeam /> */}
      <AboutPageCTA />
      <Footer />
    </main>
  );
}

