'use client';

import { about } from '@/data/content';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function About() {
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
    <section id="about" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className={`relative ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={about.image}
                alt="About Constructor point"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 max-w-sm hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                {about.stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold font-heading text-accent-500 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h2 className="section-title text-left">
              {about.title}
            </h2>
            <p className="text-lg text-accent-600 font-semibold mb-6">
              {about.subtitle}
            </p>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              {about.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-300">
              {about.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-4xl font-bold font-heading text-primary-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

