import type { Metadata } from 'next';
import HeaderWithRoutes from '@/components/HeaderWithRoutes';
import Footer from '@/components/Footer';
import ProjectsPageHero from '@/components/ProjectsPageHero';
import ProjectsPageGrid from '@/components/ProjectsPageGrid';
import ProjectsPageCategories from '@/components/ProjectsPageCategories';
import ProjectsPageStats from '@/components/ProjectsPageStats';
import ProjectsPageCTA from '@/components/ProjectsPageCTA';

export const metadata: Metadata = {
  title: 'Projekti - Constructor point d.o.o.',
  description: 'Portfolio uspješno realizovanih stambenih, komercijalnih i industrijskih građevinskih projekata.',
};

export default function ProjektiPage() {
  return (
    <main className="min-h-screen">
      <HeaderWithRoutes />
      <ProjectsPageHero />
      <ProjectsPageCategories />
      <ProjectsPageGrid />
      <ProjectsPageStats />
      <ProjectsPageCTA />
      <Footer />
    </main>
  );
}

