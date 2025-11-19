'use client';

import { useEffect, useRef, useState } from 'react';
import { FaClipboardList, FaTools, FaChartBar, FaCheckCircle } from 'react-icons/fa';

export default function ServicesPageProcess() {
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

  const steps = [
    {
      number: '01',
      icon: FaClipboardList,
      title: 'Procjena i ponuda',
      description: 'Pregled lokacije, analiza projekta, sastavljanje detaljne ponude za izvođenje radova.',
      duration: '1-2 sedmice',
      color: 'from-primary-600 to-primary-700',
    },
    {
      number: '02',
      icon: FaTools,
      title: 'Priprema gradilišta',
      description: 'Priprema objekta, organizacija gradilišta, nabavka materijala i mobilizacija tima.',
      duration: '2-4 sedmice',
      color: 'from-primary-500 to-primary-600',
    },
    {
      number: '03',
      icon: FaChartBar,
      title: 'Izvođenje radova',
      description: 'Realizacija svih vrsta građevinskih radova uz stalni nadzor kvaliteta i poštovanje rokova.',
      duration: 'Tokom cijelog projekta',
      color: 'from-slate-600 to-slate-700',
    },
    {
      number: '04',
      icon: FaCheckCircle,
      title: 'Predaja objekta',
      description: 'Završni pregled izvedenih radova, tehnička dokumentacija i predaja ključeva klijentu.',
      duration: '2-3 sedmice',
      color: 'from-slate-700 to-slate-800',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-block bg-primary-100 text-primary-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Naš proces
          </div>
          <h2 className={`section-title ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Kako <span className="text-accent-600">radimo</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Organizovan pristup izvođenju radova od prve kopke do predaje objekta
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-primary-400 to-slate-400"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Step Number Badge */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl relative z-10`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-14 h-14 bg-white border-4 border-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-primary-900 font-heading">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold font-heading text-primary-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <div className="inline-block bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <p className="text-lg text-gray-700 mb-4">
              <strong className="text-primary-900">Prosječno trajanje izvođenja:</strong> 6-18 mjeseci, zavisno od veličine i složenosti objekta
            </p>
            <p className="text-gray-600">
              Tokom cijelog procesa izvođenja radova održavamo redovnu komunikaciju i pružamo transparentne izvještaje o napretku
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

