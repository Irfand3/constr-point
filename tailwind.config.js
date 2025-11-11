/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Zlatna paleta (iz logotipa)
        primary: {
          50: '#faf8f3',
          100: '#f5f0e6',
          200: '#e9dfc4',
          300: '#D4B574', // svjetlija zlatna
          400: '#c9a863',
          500: '#B8975A', // glavna zlatna
          600: '#A68548', // tamnija zlatna
          700: '#8a6f3d',
          800: '#6f5a32',
          900: '#5a4828',
        },
        // Siva paleta (iz logotipa)
        secondary: {
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d2d3',
          300: '#8B8D8F', // svjetlija siva
          400: '#7b7d7f',
          500: '#6B6D70', // glavna siva
          600: '#565859', // tamnija siva
          700: '#454647',
          800: '#353637',
          900: '#2C2C2C', // tamna za footer
        },
        // Akcent zlatna (za CTA dugmad)
        accent: {
          50: '#faf8f3',
          100: '#f5f0e6',
          200: '#e9dfc4',
          300: '#D4B574',
          400: '#c9a863',
          500: '#B8975A',
          600: '#A68548',
          700: '#8a6f3d',
          800: '#6f5a32',
          900: '#5a4828',
        },
        // Tekstualne boje
        text: {
          primary: '#1A1A1A',
          secondary: '#4A4A4A',
          light: '#6B6D70',
        },
        // Pozadine
        bg: {
          white: '#FFFFFF',
          offWhite: '#F8F8F8',
          dark: '#2C2C2C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

