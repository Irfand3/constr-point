# Constructor point d.o.o. - Landing Page

Moderna, profesionalna web stranica za kompaniju za upravljanje građevinskim projektima.

## 🚀 Tehnologije

- **Next.js 14** - React framework sa server-side renderingom
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **React Icons** - Biblioteka ikona
- **Google Fonts** - Inter & Montserrat fontovi

## 🎨 Karakteristike

- ✅ Potpuno responzivan dizajn (mobile-first)
- ✅ Server-side rendering za SEO optimizaciju
- ✅ Moderne animacije i prelazi
- ✅ Sticky navigacija sa smooth scrolling
- ✅ Profesionalna color paleta (plava, bijela, narandžasta)
- ✅ Optimizovane slike preko Next.js Image komponente
- ✅ SEO meta tagovi
- ✅ Accessibility best practices

## 📦 Instalacija

1. Instalirajte dependencies:
```bash
npm install
```

2. Pokrenite development server:
```bash
npm run dev
```

3. Otvorite [http://localhost:3000](http://localhost:3000) u browseru.

## 🏗️ Struktura projekta

```
construction-point-doo/
├── app/
│   ├── globals.css          # Globalni stilovi i TailwindCSS
│   ├── layout.tsx           # Root layout sa SEO meta tagovima
│   └── page.tsx             # Glavna stranica
├── components/
│   ├── Header.tsx           # Sticky navigacija
│   ├── Hero.tsx             # Hero sekcija
│   ├── Services.tsx         # Usluge
│   ├── USP.tsx              # Prednosti (Why Choose Us)
│   ├── Projects.tsx         # Projekti
│   ├── About.tsx            # O nama
│   ├── Testimonials.tsx     # Testimonijali
│   ├── CTABanner.tsx        # CTA banner
│   ├── Contact.tsx          # Kontakt forma
│   └── Footer.tsx           # Footer
├── data/
│   └── content.js           # Svi tekstualni sadržaji
├── public/                  # Statički fajlovi
└── tailwind.config.js       # TailwindCSS konfiguracija
```

## 🎯 Sekcije

1. **Header** - Sticky navigacija sa logom i CTA buttonom
2. **Hero** - Glavna sekcija sa pozivom na akciju
3. **Services** - 6 kartica sa uslugama
4. **USP** - 4 prednosti kompanije
5. **Projects** - Grid od 6 projekata
6. **About** - O kompaniji sa statistikama
7. **Testimonials** - 3 testimonijala klijenata
8. **CTA Banner** - Poziv na akciju
9. **Contact** - Kontakt forma i informacije
10. **Footer** - Linkovi, kontakt i social media

## ✏️ Prilagođavanje sadržaja

Svi tekstualni sadržaji se nalaze u `data/content.js` fajlu. Promijenite bilo koji tekst, dodajte nove usluge ili projekte bez diranja komponenata.

## 🎨 Prilagođavanje boja

Boje možete promijeniti u `tailwind.config.js` fajlu:

- `primary` - Plava boja (trenutno: tamno plava)
- `accent` - Akcentna boja (trenutno: narandžasta/žuta)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Production Build

```bash
npm run build
npm start
```

## 📄 Licenca

© 2025 Constructor point d.o.o. Sva prava zadržana.

