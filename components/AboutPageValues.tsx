'use client';

import { useEffect, useRef, useState } from 'react';
import { FaShieldAlt, FaHandshake, FaLightbulb, FaHeart, FaCheckCircle, FaTrophy } from 'react-icons/fa';

export default function AboutPageValues() {
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

  const values = [
    {
      icon: FaShieldAlt,
      title: 'Integritet',
      description: 'Gradimo odnose zasnovane na povjenju, transparentnosti i etičkom poslovanju.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: FaCheckCircle,
      title: 'Kvalitet',
      description: 'Posvećeni smo najvišim standardima kvaliteta u svakom aspektu našeg rada.',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: FaLightbulb,
      title: 'Inovacija',
      description: 'Kontinuirano unapređujemo procese i koristimo najsavremenije tehnologije.',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: FaHandshake,
      title: 'Partnerstvo',
      description: 'Vaš uspjeh je naš uspjeh - gradimo dugoročne odnose zasnovane na posvećenosti.',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: FaTrophy,
      title: 'Izvrsnost',
      description: 'Težimo ka izvrsnosti u svakom projektu, premašujući očekivanja klijenata.',
      color: 'from-accent-500 to-accent-700',
    },
    {
      icon: FaHeart,
      title: 'Odgovornost',
      description: 'Preuzimamo punu odgovornost za sve aspekte projekta i njegove rezultate.',
      color: 'from-red-500 to-pink-600',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className={`inline-block bg-white text-primary-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Naše vrijednosti
          </div>
          <h2 className={`section-title ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Principi koji nas <span className="text-accent-600">vode</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Naše vrijednosti su temelj svega što radimo i način na koji gradimo odnose sa klijentima
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary-900 mb-4 group-hover:text-accent-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 md:p-12 text-white text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <h3 className="text-3xl font-bold font-heading mb-4">
            Zašto klijenti biraju nas?
          </h3>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Kombinacija tehničke stručnosti, dugogodišnjeg iskustva i pristupa fokusiranog na klijenta čini nas idealnim partnerom za vaš građevinski projekat.
          </p>
        </div>
      </div>
    </section>
  );
}

