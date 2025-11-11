export const siteMetadata = {
  title: 'Constructor point d.o.o. - Profesionalna organizacija građevinskih projekata',
  description: 'Pružamo usluge planiranja, organizacije, nadzora i izvođenja građevinskih projekata za stambene, komercijalne i industrijske objekte.',
  keywords: 'građevina, projektni menadžment, organizacija građenja, nadzor projekata, građevinski projekti',
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
  title: 'Profesionalna organizacija i izvođenje građevinskih projekata',
  subtitle: 'Od ideje do završetka gradnje — sigurni partner za sve vrste građevinskih projekata.',
  ctaPrimary: 'Zatraži ponudu',
  ctaSecondary: 'Pogledaj naše projekte',
  backgroundImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
};

export const services = {
  title: 'Naše usluge',
  subtitle: 'Pružamo kompletna rješenja za uspješnu realizaciju vašeg građevinskog projekta',
  items: [
    {
      id: 1,
      title: 'Projektno planiranje',
      description: 'Detaljno planiranje svih faza projekta sa preciznim vremenskim okvirima i resursima.',
      icon: 'FaProjectDiagram',
    },
    {
      id: 2,
      title: 'Organizacija i nadzor građenja',
      description: 'Profesionalni nadzor nad gradnjom sa kontinuiranim praćenjem napretka i kvaliteta radova.',
      icon: 'FaHardHat',
    },
    {
      id: 3,
      title: 'Upravljanje izvođačima i materijalima',
      description: 'Koordinacija svih izvođača i pravovremena nabavka kvalitetnih građevinskih materijala.',
      icon: 'FaTruckLoading',
    },
    {
      id: 4,
      title: 'Konsalting i tehnička dokumentacija',
      description: 'Priprema potrebne tehničke dokumentacije i stručno savjetovanje tokom cijelog projekta.',
      icon: 'FaFileContract',
    },
    {
      id: 5,
      title: 'Vođenje budžeta i rokova',
      description: 'Striktno praćenje budžeta i rokova sa transparentnim izvještavanjem o napretku.',
      icon: 'FaChartLine',
    },
    {
      id: 6,
      title: 'Kontrola kvaliteta i sigurnosti',
      description: 'Osiguranje najviših standarda kvalitete i sigurnosti na gradilištu u skladu sa propisima.',
      icon: 'FaShieldAlt',
    },
  ],
};

export const uspSection = {
  title: 'Zašto odabrati nas',
  subtitle: 'Gradimo povjerenje kroz kvalitet i posvećenost svakom projektu',
  items: [
    {
      id: 1,
      title: 'Iskustvo',
      description: 'Više od decenije uspješno realiziranih projekata u regionu',
      icon: 'FaAward',
    },
    {
      id: 2,
      title: 'Certificirani inženjeri',
      description: 'Tim licenciranih stručnjaka sa međunarodnim certifikatima',
      icon: 'FaCertificate',
    },
    {
      id: 3,
      title: 'Garantovani rokovi',
      description: 'Striktno poštovanje dogovorenih rokova bez odgađanja',
      icon: 'FaClock',
    },
    {
      id: 4,
      title: 'Transparentno vođenje projekata',
      description: 'Redovno izvještavanje i potpuna transparentnost u radu',
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
  subtitle: 'Vaš partner u realizaciji građevinskih projekata',
  content: `Constructor point d.o.o. je moderna kompanija za organizaciju i upravljanje građevinskim projektima sa sjedištem u Tuzli. Specijalizovani smo za kompletnu realizaciju projekata od početne ideje do završetka gradnje.

Naš tim čine visokokvalifikovani građevinski inženjeri, arhitekte i projektni menadžeri sa bogatim iskustvom u organizaciji stambenih, komercijalnih i industrijskih projekata. Koristimo najsavremenije tehnologije i metode upravljanja projektima kako bismo osigurali da svaki projekat bude završen na vrijeme, u okviru budžeta i sa najvišim standardima kvaliteta.

Naša misija je pružiti klijentima potpunu podršku i stručnost tokom cijelog procesa gradnje, omogućavajući im da se fokusiraju na svoje poslovanje dok mi brinemo o svakom detalju projekta.`,
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
  subtitle: 'Povjerenje i zadovoljstvo klijenata su naš najveći uspjeh',
  items: [
    {
      id: 1,
      name: 'Osoba jedan',
      position: 'Direktor, Firma jedan',
      content: 'Izuzetna profesionalnost i posvećenost projektu. Constructor point je uspješno realizovao naš stambeni kompleks u roku sa najvišim standardima kvaliteta. Toplo preporučujemo!',
      avatar: 'MP',
      rating: 5,
    },
    {
      id: 2,
      name: 'Osoba dva',
      position: 'Vlasnik, Firma dva',
      content: 'Radili smo sa mnogim izvođačima, ali ovakav pristup i transparentnost nismo ranije doživjeli. Svaki detalj je bio pod kontrolom i redovno smo bili informisani o napretku.',
      avatar: 'AK',
      rating: 5,
    },
    {
      id: 3,
      name: 'Osoba tri',
      position: 'Tehnički direktor, Firma tri',
      content: 'Za nas su izgradili industrijsku halu i prevaziši su sva naša očekivanja. Projekat je završen prije roka i ispod planiranog budžeta. Definitivno ćemo nastaviti saradnju!',
      avatar: 'DN',
      rating: 5,
    },
  ],
};

export const ctaBanner = {
  title: 'Počnimo graditi vaš projekat danas!',
  subtitle: 'Kontaktirajte nas za besplatnu konsultaciju i detaljnu ponudu',
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
    description: 'Profesionalna organizacija i izvođenje građevinskih projekata.',
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
    { name: 'Projektno planiranje', href: '#services' },
    { name: 'Nadzor građenja', href: '#services' },
    { name: 'Upravljanje projektima', href: '#services' },
    { name: 'Tehnička dokumentacija', href: '#services' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: 'FaFacebook' },
    { name: 'LinkedIn', href: '#', icon: 'FaLinkedin' },
    { name: 'Instagram', href: '#', icon: 'FaInstagram' },
  ],
  copyright: '© 2025 Constructor point d.o.o. Sva prava zadržana.',
};

