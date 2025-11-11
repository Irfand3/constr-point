'use client';

import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export default function ServicesPageHero() {
  const highlights = [
    'Projektno planiranje',
    'Nadzor građenja',
    'Upravljanje budžetom',
    'Kontrola kvaliteta',
  ];

  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center pt-32 lg:pt-40 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
          alt="Construction services"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-accent-900/85"></div>
      </div>

      {/* Animated elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent-500/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-accent-400/30 animate-slide-up">
            <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
            <span className="text-white font-semibold text-sm">Kompletna paleta usluga</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Usluge projektnog <br />
            <span className="text-accent-400">menadžmenta</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Od planiranja do završetka gradnje - pružamo sveobuhvatnu podršku za uspješnu realizaciju vašeg građevinskog projekta.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <FaCheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#services-grid"
              className="group relative overflow-hidden bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-2xl hover:shadow-accent-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Pogledaj usluge</span>
              <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            
            <a
              href="/kontakt"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-lg px-10 py-5 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Zatraži ponudu</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
     {/*  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div> */}
    </section>
  );
}

