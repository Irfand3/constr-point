'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaRocket, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ProjectsPageCTA() {
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className={`max-w-5xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <FaRocket className="w-16 h-16 text-accent-400 mx-auto mb-6 animate-bounce" />
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
                Spremni ste da <span className="text-accent-400">započnete</span>?
              </h2>
              
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Napravićemo vaš projekat realnost. Kontaktirajte nas za besplatnu konsultaciju i procjenu.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-2xl hover:shadow-accent-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <FaEnvelope className="w-5 h-5" />
                  <span>Zatraži ponudu</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <a
                  href="tel:+38733123456"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-lg px-10 py-5 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
                >
                  <FaPhone className="w-5 h-5" />
                  <span>Pozovite nas</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
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
                  <span>Odgovor u 24h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Stručan tim</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

