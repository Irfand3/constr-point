'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';

export default function ServicesPageCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
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

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-32">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 40}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070"
            alt="Contact us"
            fill
            className="object-cover"
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-accent-900/92 to-primary-900/95"></div>
      </div>

      {/* Animated elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className={`max-w-4xl mx-auto text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <FaComments className="w-16 h-16 text-accent-400 mx-auto mb-8" />
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            Započnite izgradnju <span className="text-accent-400">vašeg objekta</span> danas
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            Kontaktirajte nas za besplatnu procjenu i detaljnu ponudu za izvođenje svih građevinskih radova
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="tel:+38733123456"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
            >
              <FaPhone className="w-8 h-8 text-accent-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-white mb-1">Pozovite nas</div>
              <div className="text-gray-300 text-sm">035 258 220</div>
            </a>

            <a
              href="mailto:info@constructionpoint.ba"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
            >
              <FaEnvelope className="w-8 h-8 text-accent-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-white mb-1">Pošaljite email</div>
              <div className="text-gray-300 text-sm">info@constructionpoint.ba</div>
            </a>

            <Link
              href="/kontakt"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
            >
              <FaComments className="w-8 h-8 text-accent-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-white mb-1">Kontakt forma</div>
              <div className="text-gray-300 text-sm">Popunite online formu</div>
            </Link>
          </div>

          {/* Main CTA */}
          <Link
            href="/kontakt"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold text-lg px-12 py-6 rounded-xl shadow-2xl hover:shadow-accent-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <span>Zatraži besplatnu procjenu radova</span>
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Besplatna procjena</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Brz odgovor</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Bez obaveza</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

