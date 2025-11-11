'use client';

import { hero } from '@/data/content';
import Image from 'next/image';

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.backgroundImage}
          alt="Construction site"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/90 to-primary-800/85"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white mb-6 leading-tight animate-slide-up">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 md:mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0, animation: 'slideUp 0.6s ease-out 0.2s forwards' }}>
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0, animation: 'slideUp 0.6s ease-out 0.4s forwards' }}>
            <button
              onClick={() => handleScroll('#contact')}
              className="btn-primary"
            >
              {hero.ctaPrimary}
            </button>
            <button
              onClick={() => handleScroll('#projects')}
              className="btn-secondary bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
            >
              {hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={() => handleScroll('#services')}
          className="flex flex-col items-center text-white hover:text-accent-400 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Saznaj više</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

