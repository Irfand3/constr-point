'use client';

import Image from 'next/image';
import { FaRocket, FaUsers, FaLightbulb, FaAward } from 'react-icons/fa';

export default function AboutPageHero() {
  const stats = [
    { icon: FaRocket, value: '2025', label: 'Godina osnivanja' },
    { icon: FaUsers, value: '10+', label: 'Stručnjaka u timu' },
    { icon: FaLightbulb, value: 'Moderna', label: 'Tehnologija i pristup' },
    { icon: FaAward, value: '100%', label: 'Posvećenost kvalitetu' },
  ];

  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center pt-32 lg:pt-40 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076"
          alt="About Constructor point"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-800/90"></div>
      </div>

      {/* Animated elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent-500/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-accent-400/30 animate-slide-up">
            <FaRocket className="w-4 h-4 text-accent-400" />
            <span className="text-white font-semibold text-sm">Izvođač građevinskih radova sa modernim pristupom</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Gradimo kvalitetno, <br />
            <span className="text-accent-400">objekat po objekat</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Constructor point je izvođač građevinskih radova sa fokusom na kvalitet izvođenja, poštovanje rokova i transparentnost u radu.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <stat.icon className="w-10 h-10 text-accent-400 mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
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

