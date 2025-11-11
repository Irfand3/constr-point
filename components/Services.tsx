'use client';

import { services } from '@/data/content';
import { FaProjectDiagram, FaHardHat, FaTruckLoading, FaFileContract, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const iconMap: { [key: string]: any } = {
  FaProjectDiagram,
  FaHardHat,
  FaTruckLoading,
  FaFileContract,
  FaChartLine,
  FaShieldAlt,
};

export default function Services() {
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
    <section id="services" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`section-title ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {services.title}
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            {services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={`card p-6 lg:p-8 hover:scale-105 transform transition-all duration-300 group ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-heading text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

