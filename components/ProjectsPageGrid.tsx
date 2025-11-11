'use client';

import { useEffect, useRef, useState } from 'react';
import { projects } from '@/data/content';
import Image from 'next/image';
import { FaRuler, FaClock, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

export default function ProjectsPageGrid() {
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
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className={`inline-block bg-white text-primary-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Portfolio
          </div>
          <h2 className={`section-title ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Izdvojeni <span className="text-accent-600">projekti</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Pogledajte neke od naših najuspješnijih realizacija
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.05}s` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay Info */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="bg-white text-primary-900 px-6 py-3 rounded-full font-bold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl hover:bg-accent-500 hover:text-white">
                    <span>Pogledaj detalje</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-start space-x-2">
                    <FaRuler className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-gray-500">Površina</div>
                      <div className="font-semibold text-primary-900">{project.area}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaClock className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-gray-500">Trajanje</div>
                      <div className="font-semibold text-primary-900">{project.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <button className="group bg-white hover:bg-primary-900 text-primary-900 hover:text-white border-2 border-primary-900 font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2">
            <span>Učitaj više projekata</span>
            <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

