'use client';

import { projects } from '@/data/content';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaRuler, FaClock } from 'react-icons/fa';

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`section-title ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {projects.title}
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            {projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.items.map((project, index) => (
            <div
              key={project.id}
              className={`card group cursor-pointer ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <FaRuler className="w-4 h-4 text-accent-500" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <FaClock className="w-4 h-4 text-accent-500" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <Link href="/projekti" className="btn-secondary inline-block">
            Pogledaj sve projekte
          </Link>
        </div>
      </div>
    </section>
  );
}

