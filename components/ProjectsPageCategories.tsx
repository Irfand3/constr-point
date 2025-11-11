'use client';

import { useEffect, useRef, useState } from 'react';
import { FaBuilding, FaHome, FaIndustry, FaCheckCircle } from 'react-icons/fa';

export default function ProjectsPageCategories() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
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

  const categories = [
    { id: 'all', name: 'Svi projekti', icon: FaCheckCircle, count: 'Portfolio', color: 'from-primary-500 to-primary-700' },
    { id: 'residential', name: 'Stambeni objekti', icon: FaHome, count: 'Stambeni', color: 'from-green-500 to-green-700' },
    { id: 'commercial', name: 'Komercijalni objekti', icon: FaBuilding, count: 'Komercijalni', color: 'from-blue-500 to-blue-700' },
    { id: 'industrial', name: 'Industrijski objekti', icon: FaIndustry, count: 'Industrijski', color: 'from-accent-500 to-accent-700' },
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-lg bg-white/95">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              } ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <category.icon className={`w-5 h-5 ${activeCategory === category.id ? 'text-white' : 'text-gray-500 group-hover:text-primary-700'}`} />
              <span>{category.name}</span>
              <span className={`text-sm px-2 py-1 rounded-full ${
                activeCategory === category.id 
                  ? 'bg-white/20' 
                  : 'bg-white'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

