'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaTrophy, FaUsers, FaBuilding, FaStar } from 'react-icons/fa';

export default function ProjectsPageStats() {
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

  const stats = [
    {
      icon: FaBuilding,
      value: 'Portfolio',
      label: 'Raznovrsnih projekata',
      description: 'Stambeni, komercijalni i industrijski objekti',
    },
    {
      icon: FaTrophy,
      value: '100%',
      label: 'Posvećenost',
      description: 'Projekti planirani u roku i budžetu',
    },
    {
      icon: FaUsers,
      value: '10+',
      label: 'Zadovoljnih klijenata',
      description: 'Dugogodišnja saradnja i preporuke',
    },
    {
      icon: FaStar,
      value: '4.9/5',
      label: 'Prosječna ocjena',
      description: 'Zasnovano na feedback-u klijenata',
    },
  ];

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
            alt="Project stats"
            fill
            className="object-cover"
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/93 to-accent-900/95"></div>
      </div>

      {/* Animated elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Uspjeh u <span className="text-accent-400">brojkama</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Rezultati koji potvrđuju našu posvećenost kvalitetu i zadovoljstvu klijenata
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group hover:-translate-y-2 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-2 font-heading">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-accent-400 mb-3">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-300 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20">
            <p className="text-white text-lg">
              <strong className="text-accent-400">Od 2025. godine</strong> postavljamo nove standarde u projektnom menadžmentu sa modernim pristupom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

