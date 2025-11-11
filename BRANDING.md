# 🎨 Constructor point - Branding & Color Palette

## Logo

Logo se nalazi u `/public/images/logo.png` i koristi se kroz cijelu aplikaciju.

## Color Palette

### 🏆 Primarna paleta (Zlatna - iz logotipa)

```css
primary-50:  #faf8f3  (najsvjetlija)
primary-100: #f5f0e6
primary-200: #e9dfc4
primary-300: #D4B574  (svjetlija zlatna)
primary-400: #c9a863
primary-500: #B8975A  ⭐ GLAVNA ZLATNA
primary-600: #A68548  (tamnija zlatna)
primary-700: #8a6f3d
primary-800: #6f5a32
primary-900: #5a4828
```

### 🎯 Sekundarna paleta (Siva - iz logotipa)

```css
secondary-50:  #f5f5f5
secondary-100: #e8e8e8
secondary-200: #d1d2d3
secondary-300: #8B8D8F  (svjetlija siva)
secondary-400: #7b7d7f
secondary-500: #6B6D70  ⭐ GLAVNA SIVA
secondary-600: #565859  (tamnija siva)
secondary-700: #454647
secondary-800: #353637
secondary-900: #2C2C2C  (tamna za footer)
```

### ✨ Akcent boje (Zlatna za CTA)

```css
accent-500: #B8975A  (glavna)
accent-600: #A68548  (hover)
accent-300: #D4B574  (svijetla)
```

### 📝 Tekstualne boje

```css
text-primary:   #1A1A1A  (naslovi, važan tekst)
text-secondary: #4A4A4A  (body tekst)
text-light:     #6B6D70  (sekundarni tekst)
```

### 🎨 Pozadine

```css
bg-white:    #FFFFFF  (čista bijela)
bg-offWhite: #F8F8F8  (off-white za sekcije)
bg-dark:     #2C2C2C  (tamna za hero/footer)
```

## 📋 Preporuke za upotrebu

### Call-to-Action dugmad
```jsx
className="bg-primary-500 hover:bg-primary-600"
// ili
className="bg-gradient-to-r from-primary-500 to-primary-600"
```

### Navigacija
```jsx
className="text-secondary-700 hover:text-primary-600"
```

### Naslovi
```jsx
className="text-text-primary"
// ili za istaknute:
className="text-primary-600"
```

### Body tekst
```jsx
className="text-text-secondary"
```

### Footer
```jsx
className="bg-secondary-900 text-white"
```

### Hover efekti
```jsx
className="hover:text-primary-400"  // zlatna za hover
className="hover:bg-primary-50"     // svijetla pozadina
```

## 🔄 Što je ažurirano

### ✅ Kompletno ažurirano:
- `tailwind.config.js` - definisane sve boje
- `app/globals.css` - globalni stilovi i button klase
- `components/Header.tsx` - logo i nova paleta
- `components/HeaderWithRoutes.tsx` - logo i nova paleta
- `components/Footer.tsx` - logo i nova paleta

### ⚠️ Djelimično ažurirano:
Ove komponente su kreirane sa starim bojama i trebaju ažuriranje:
- Hero sekcije (plave -> zlatne/sive)
- CTA Banners (narandžasta -> zlatna)
- Services kartice (različite boje -> zlatna/siva)
- About sekcije
- Projects kartice
- Testimonials

## 🎯 Kako ažurirati ostale komponente

### Find & Replace preporuke:

1. **Zamijeni plave boje sa zlatnom:**
```
from-blue-500 to-blue-700    →  from-primary-500 to-primary-700
text-blue-600                →  text-primary-600
bg-blue-100                  →  bg-primary-100
```

2. **Zamijeni narandžaste sa zlatnom:**
```
from-accent-500 to-accent-600  →  from-primary-500 to-primary-600
text-accent-600                →  text-primary-600
bg-accent-100                  →  bg-primary-100
```

3. **Ažuriraj primarne boje:**
```
text-primary-900  →  text-secondary-900  (za sive naslove)
bg-primary-900    →  bg-secondary-900    (za tamne pozadine)
```

4. **Ažuriraj hover stanja:**
```
hover:text-accent-400  →  hover:text-primary-400
hover:bg-accent-500    →  hover:bg-primary-500
```

## 💡 Brzi primjeri

### Zlatno dugme (CTA):
```jsx
<button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-lg shadow-lg">
  Zatraži ponudu
</button>
```

### Glassmorphism kartica:
```jsx
<div className="bg-white/95 backdrop-blur-md border border-primary-100 rounded-2xl p-6">
  Content
</div>
```

### Zlatni akcent tekst:
```jsx
<h2 className="text-text-primary">
  Vaš <span className="text-primary-600">projekat</span>
</h2>
```

### Tamna sekcija sa zlatnim akcentima:
```jsx
<section className="bg-secondary-900 text-white">
  <h2 className="text-white">
    Naslov sa <span className="text-primary-400">zlatnim</span> akcentom
  </h2>
</section>
```

## 🚀 Next Steps

1. **Testirajte logo**: Provjerite da li `/public/images/logo.png` postoji i ispravno se učitava
2. **Build projekat**: `npm run build` da vidite sve promjene
3. **Ažurirajte komponente**: Postupno mijenjajte boje u ostalim komponentama
4. **Testirajte responsive**: Provjerite kako logo izgleda na raznim veličinama ekrana

---

**Paleta odražava profesionalnost i pouzdanost građevinske industrije, dok zlatna dodaje premium osjećaj kvaliteta.** 🏗️✨

