'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AboutPageTimeline() {
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

  const milestones = [
    {
      year: '2025',
      title: 'Osnivanje kompanije',
      description: 'Constructor point d.o.o. je osnovan sa vizijom da postane lider u projektnom menadžmentu koristeći najsavremenije tehnologije.',
      gradient: 'from-blue-500 to-blue-600',
      accent: 'border-primary-500',
      yearBadgeStyle: 'bg-white text-primary-900 border-2 border-primary-500',
    },
    {
      year: 'Q2 2025',
      title: 'Prvi projekti',
      description: 'Početak rada na prvim građevinskim projektima i formiranje stručnog tima inženjera i projektnih menadžera.',
      gradient: 'from-green-500 to-green-600',
      accent: 'border-primary-500',
      yearBadgeStyle: 'bg-white text-primary-900 border-2 border-primary-500',
    },
    {
      year: 'Q4 2025',
      title: 'Rast i razvoj',
      description: 'Planirana ekspanzija portfolio-a projekata i proširenje tima sa dodatnim specijalistima.',
      gradient: 'from-accent-500 to-accent-600',
      accent: 'border-accent-500',
      yearBadgeStyle: 'bg-gradient-to-br from-accent-500 to-accent-600 text-white',
    },
    {
      year: '2026+',
      title: 'Regionalna ekspanzija',
      description: 'Vizija proširenja poslovanja na regionalna tržišta i uspostavljanje dugoročnih partnerstava.',
      gradient: 'from-purple-500 to-purple-600',
      accent: 'border-primary-500',
      yearBadgeStyle: 'bg-white text-primary-900 border-2 border-primary-500',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 30}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071"
            alt="Construction timeline"
            fill
            className="object-cover"
            quality={90}
          />
        </div>
        {/* Multiple gradient overlays for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/98 via-white/95 to-white/98"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-transparent to-accent-50/50"></div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-block bg-white/80 backdrop-blur-sm text-primary-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg border border-primary-100 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Naša istorija
          </div>
          <h2 className={`section-title ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Put ka <span className="text-accent-600">izvrsnosti</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Ključni momenti koji su definisali našu kompaniju
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line with glow effect - Desktop (center) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-400 via-accent-400 to-primary-400 shadow-lg"></div>
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-3 bg-gradient-to-b from-primary-300/30 via-accent-300/30 to-primary-300/30 blur-sm"></div>
          
          {/* Timeline Line with glow effect - Mobile (left side) */}
          <div className="lg:hidden absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-primary-400 via-accent-400 to-primary-400 shadow-lg"></div>
          <div className="lg:hidden absolute left-6 top-0 h-full w-3 bg-gradient-to-b from-primary-300/30 via-accent-300/30 to-primary-300/30 blur-sm"></div>

          <div className="space-y-8 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex lg:items-center lg:justify-between ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                {/* Mobile Dot (left side) - Smaller */}
                <div className="lg:hidden absolute left-6 top-8 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-primary-500 rounded-full border-3 border-white shadow-lg relative z-10">
                    <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-15"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`pl-16 lg:pl-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${milestone.accent} border-l-4 lg:border-l-0 lg:${milestone.accent} hover:-translate-y-1`}>
                    {/* Subtle shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Year Badge - Smaller and more elegant */}
                      <div className={`inline-block ${milestone.yearBadgeStyle} px-4 py-2 rounded-xl mb-4 shadow-sm transform group-hover:scale-105 transition-transform duration-300`}>
                        <div className="text-lg md:text-xl font-bold font-heading tracking-wide">
                          {milestone.year}
                        </div>
                      </div>

                      {/* Title - More refined */}
                      <h3 className="text-xl md:text-2xl font-semibold font-heading text-primary-900 mb-3 leading-tight group-hover:text-accent-600 transition-colors duration-300">
                        {milestone.title}
                      </h3>

                      {/* Description - More subtle */}
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Center Dot with pulse effect - Smaller */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-5 h-5 bg-primary-500 rounded-full border-3 border-white shadow-lg relative z-10">
                    <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-15"></div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status - More subtle */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <div className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-accent-500/30 transition-all duration-300 transform hover:scale-105 cursor-default">
            <span className="inline-flex items-center space-x-2">
              <span>2025 - Nastavljamo da gradimo budućnost!</span>
              <span className="text-xl">🚀</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

