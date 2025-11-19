export const siteMetadata = {
  title: 'Constructor point d.o.o. - Izvođenje i organizacija građevinskih radova',
  description: 'Izvođač građevinskih radova za stambene, komercijalne i industrijske objekte. Kompletan spektar usluga od temelja do krova sa profesionalnim nadzorom.',
  keywords: 'građevina, izvođenje radova, izvođač, građevinski radovi, organizacija građenja, nadzor projekata, građevinski projekti',
  url: 'https://constructorpoint.ba',
  image: '/og-image.jpg',
};

// Navigation for landing page (with anchors)
export const navigation = [
  { name: 'Početna', href: '#home' },
  { name: 'Usluge', href: '#services' },
  { name: 'Projekti', href: '#projects' },
  { name: 'O nama', href: '#about' },
  { name: 'Kontakt', href: '#contact' },
];

// Navigation with page routes
export const navigationRoutes = [
  { name: 'Početna', href: '/' },
  { name: 'Usluge', href: '/usluge' },
  { name: 'Projekti', href: '/projekti' },
  { name: 'O nama', href: '/o-nama' },
  { name: 'Kontakt', href: '/kontakt' },
];

export const hero = {
  title: 'Izvođenje svih vrsta građevinskih radova',
  subtitle: 'Kompletna izgradnja objekata od temelja do ključa u ruke — vaš pouzdani izvođač za stambene, komercijalne i industrijske projekte.',
  ctaPrimary: 'Zatraži ponudu',
  ctaSecondary: 'Pogledaj naše projekte',
  backgroundImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
};

export const services = {
  title: 'Naše usluge',
  subtitle: 'Kao izvođač građevinskih radova, pružamo kompletna rješenja od temelja do završne obrade',
  items: [
    {
      id: 1,
      title: 'Izvođenje grubih građevinskih radova',
      description: 'Kompletna izrada temelja, zidova, armiranobetonskih konstrukcija i svih nosećih elemenata objekta.',
      icon: 'FaProjectDiagram',
    },
    {
      id: 2,
      title: 'Izvođenje završnih građevinskih radova',
      description: 'Fasade, krovovi, termoizolacija, stolarija, keramika, podovi i svi završni radovi do useljivog stanja.',
      icon: 'FaHardHat',
    },
    {
      id: 3,
      title: 'Instalacioni radovi',
      description: 'Izvođenje kompletnih elektro, vodovodnih, kanalizacionih, grijnih i klimatizacionih instalacija.',
      icon: 'FaTruckLoading',
    },
    {
      id: 4,
      title: 'Izgradnja "ključ u ruke"',
      description: 'Kompletna realizacija objekta od projekta do predaje - useljiva nekretnina spremna za upotrebu.',
      icon: 'FaFileContract',
    },
    {
      id: 5,
      title: 'Rekonstrukcije i adaptacije',
      description: 'Preuređenje i renoviranje postojećih objekata uz poštovanje svih građevinskih standarda.',
      icon: 'FaChartLine',
    },
    {
      id: 6,
      title: 'Nadzor nad izvođenjem radova',
      description: 'Profesionalni tehnički nadzor sa kontrolom kvaliteta i sigurnosti tokom cijelog procesa gradnje.',
      icon: 'FaShieldAlt',
    },
  ],
};

export const uspSection = {
  title: 'Zašto odabrati nas kao izvođača',
  subtitle: 'Iskustvo i kvalitet izvođenja radova su naša glavna prednost',
  items: [
    {
      id: 1,
      title: 'Vlastiti tim izvođača',
      description: 'Licencirani majstori i radnici za sve vrste građevinskih i zanatskih radova',
      icon: 'FaAward',
    },
    {
      id: 2,
      title: 'Certificirani građevinski stručnjaci',
      description: 'Građevinski inženjeri i tehničari sa potrebnim licencama za izvođenje',
      icon: 'FaCertificate',
    },
    {
      id: 3,
      title: 'Garantovani rokovi izvođenja',
      description: 'Realni rokovi i striktno poštovanje dinamike izvođenja radova',
      icon: 'FaClock',
    },
    {
      id: 4,
      title: 'Kvalitet izvedenih radova',
      description: 'Kontrola kvaliteta u svakoj fazi izvođenja sa garancijom na izvedene radove',
      icon: 'FaHandshake',
    },
  ],
};

export const projects = {
  title: 'Izdvojeni projekti',
  subtitle: 'Pogledajte neke od naših najuspješnijih realizacija',
  items: [
    {
      id: 1,
      name: 'Stambeni kompleks "Zeleni Brijeg"',
      category: 'Stambeni objekat',
      description: 'Moderni stambeni kompleks sa 120 stanova i pratećim sadržajima',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
      area: '15.000 m²',
      duration: '24 mjeseca',
    },
    {
      id: 2,
      name: 'Poslovni centar "City Plaza"',
      category: 'Komercijalni objekat',
      description: 'Višefunkcionalni poslovni centar sa kancelarijskim prostorima i retail zonom',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      area: '8.500 m²',
      duration: '18 mjeseci',
    },
    {
      id: 3,
      name: 'Industrijska hala "TechPark"',
      category: 'Industrijski objekat',
      description: 'Savremena industrijska hala sa administrativnim prostorijama',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076',
      area: '12.000 m²',
      duration: '16 mjeseci',
    },
    {
      id: 4,
      name: 'Luksuzne vile "Panorama"',
      category: 'Stambeni objekat',
      description: 'Kompleks od 12 luksuznih vila sa pogledom na grad',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
      area: '6.500 m²',
      duration: '20 mjeseci',
    },
    {
      id: 5,
      name: 'Trgovački centar "Forum"',
      category: 'Komercijalni objekat',
      description: 'Regionalni trgovački centar sa 80+ prodajnih jedinica',
      image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2077',
      area: '22.000 m²',
      duration: '28 mjeseci',
    },
    {
      id: 6,
      name: 'Proizvodni pogon "AutoParts"',
      category: 'Industrijski objekat',
      description: 'Moderni proizvodni pogon sa skladišnim prostorom',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070',
      area: '9.200 m²',
      duration: '14 mjeseci',
    },
  ],
};

export const about = {
  title: 'O nama',
  subtitle: 'Izvođač građevinskih radova sa fokusom na kvalitet i rok izvođenja',
  content: `Constructor point d.o.o. je građevinska firma specijalizovana za izvođenje svih vrsta građevinskih radova sa sjedištem u Tuzli. Bavimo se kompletnim izvođenjem stambenih, komercijalnih i industrijskih objekata - od grubih građevinskih radova do završne obrade i predaje objekta "ključ u ruke".

Kao izvođač, raspolažemo vlastitim timom licenciranih građevinskih radnika, majstora i stručnog nadzornog osoblja. Naš tim čine certificirani građevinski inženjeri, tehničari i iskusni majstori svih zanata potrebnih za kvalitetnu izgradnju objekta. Direktno izvođenje radova vlastitim timom omogućava nam potpunu kontrolu nad kvalitetom i rokovima izvođenja.

Naša misija je izgraditi kvalitetne i trajne objekte poštujući sve građevinske standarde i propise, uz striktno pridržavanje dogovorenih rokova i transparentnost tokom cijelog procesa izvođenja radova.`,
  image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076',
  stats: [
    { value: '50+', label: 'Projekata u planu' },
    { value: '2025', label: 'Godina osnivanja' },
    { value: '10+', label: 'Stručnjaka u timu' },
    { value: '100%', label: 'Posvećenost kvalitetu' },
  ],
};

export const testimonials = {
  title: 'Šta kažu naši klijenti',
  subtitle: 'Povjerenje i zadovoljstvo kvalitetom izvedenih radova',
  items: [
    {
      id: 1,
      name: 'Osoba jedan',
      position: 'Direktor, Firma jedan',
      content: 'Izvođenje radova na našem stambenom kompleksu je bilo besprijekorno. Kvalitet izvedenih radova, poštovanje rokova i profesionalnost tima su na najvišem nivou. Toplo preporučujemo!',
      avatar: 'MP',
      rating: 5,
    },
    {
      id: 2,
      name: 'Osoba dva',
      position: 'Vlasnik, Firma dva',
      content: 'Konačno smo pronašli izvođača koji radi po dogovoru. Radovi su izvođeni kvalitetno, uredno gradilište, a majstori su bili ljubazni i stručni. Svaka preporuka!',
      avatar: 'AK',
      rating: 5,
    },
    {
      id: 3,
      name: 'Osoba tri',
      position: 'Tehnički direktor, Firma tri',
      content: 'Izveli su našu industrijsku halu "ključ u ruke" prije planiranog roka. Kvalitet svih izvedenih radova je na visokom nivou. Definitivno ćemo ih angažovati i za buduće projekte!',
      avatar: 'DN',
      rating: 5,
    },
  ],
};

export const ctaBanner = {
  title: 'Tražite pouzdanog izvođača radova?',
  subtitle: 'Kontaktirajte nas za besplatnu procjenu troškova i ponudu za izvođenje radova',
  buttonText: 'Zatraži besplatnu ponudu',
  buttonLink: '#contact',
};

export const contact = {
  title: 'Kontaktirajte nas',
  subtitle: 'Tu smo da odgovorimo na sva vaša pitanja',
  address: 'Turalibegova 25A, 75000 Tuzla, Bosna i Hercegovina',
  phone: '+387 33 123 456',
  email: 'info@constructorpoint.ba',
  workingHours: 'Ponedjeljak - Petak: 08:00 - 17:00',
};

export const footer = {
  company: {
    name: 'Constructor point d.o.o.',
    description: 'Izvođač svih vrsta građevinskih radova - od temelja do krova.',
    logo: 'CP',
  },
  quickLinks: [
    { name: 'Početna', href: '#home' },
    { name: 'Usluge', href: '#services' },
    { name: 'Projekti', href: '#projects' },
    { name: 'O nama', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ],
  services: [
    { name: 'Grubi građevinski radovi', href: '#services' },
    { name: 'Završni radovi', href: '#services' },
    { name: 'Ključ u ruke', href: '#services' },
    { name: 'Rekonstrukcije', href: '#services' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: 'FaFacebook' },
    { name: 'LinkedIn', href: '#', icon: 'FaLinkedin' },
    { name: 'Instagram', href: '#', icon: 'FaInstagram' },
  ],
  copyright: '© 2025 Constructor point d.o.o. Sva prava zadržana.',
};

