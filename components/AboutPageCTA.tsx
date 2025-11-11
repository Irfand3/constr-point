'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRocket, FaEnvelope } from 'react-icons/fa';

export default function AboutPageCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070"
          alt="Contact us"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-accent-900/90 to-primary-900/95"></div>
      </div>

      {/* Animated elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className={`max-w-4xl mx-auto text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <FaRocket className="w-16 h-16 text-accent-400 mx-auto mb-8 animate-bounce" />
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            Spremni smo za <span className="text-accent-400">vaš projekat</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            Kontaktirajte nas danas i saznajte kako možemo pomoći da vaš građevinski projekat bude uspješan
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="group relative overflow-hidden bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-2xl hover:shadow-accent-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>Kontaktirajte nas</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/#projects"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-lg px-10 py-5 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Pogledajte projekte</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

