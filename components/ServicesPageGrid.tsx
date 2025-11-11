'use client';

import { useEffect, useRef, useState } from 'react';
import { FaProjectDiagram, FaHardHat, FaTruckLoading, FaFileContract, FaChartLine, FaShieldAlt, FaUsers, FaCog } from 'react-icons/fa';

export default function ServicesPageGrid() {
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

  const services = [
    {
      icon: FaProjectDiagram,
      title: 'Projektno planiranje',
      description: 'Detaljno planiranje svih faza projekta sa preciznim vremenskim okvirima, alokacijom resursa i identifikacijom potencijalnih rizika.',
      features: ['Gantt dijagrami', 'Alokacija resursa', 'Analiza rizika', 'Vremenski planovi'],
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: FaHardHat,
      title: 'Organizacija i nadzor građenja',
      description: 'Profesionalni nadzor nad gradnjom sa kontinuiranim praćenjem napretka, kvaliteta radova i usklađenosti sa projektnom dokumentacijom.',
      features: ['Dnevni nadzor', 'Kontrola kvaliteta', 'Praćenje napretka', 'Dokumentacija'],
      color: 'from-accent-500 to-accent-700',
    },
    {
      icon: FaTruckLoading,
      title: 'Upravljanje izvođačima i materijalima',
      description: 'Koordinacija svih izvođača, pravovremena nabavka kvalitetnih materijala i optimizacija logistike na gradilištu.',
      features: ['Koordinacija izvođača', 'Nabavka materijala', 'Logistika', 'Kontrola troškova'],
      color: 'from-green-500 to-green-700',
    },
    {
      icon: FaFileContract,
      title: 'Konsalting i tehnička dokumentacija',
      description: 'Priprema i verifikacija tehničke dokumentacije, stručno savjetovanje i podrška u dobijanju potrebnih dozvola.',
      features: ['Tehnički crteži', 'Dozvole i saglasnosti', 'Revizija projekata', 'Stručno savjetovanje'],
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: FaChartLine,
      title: 'Vođenje budžeta i rokova',
      description: 'Striktno praćenje budžeta projekta i poštovanje rokova sa transparentnim izvještavanjem o napretku i eventualnim odstupanjima.',
      features: ['Budget kontrola', 'Cash flow analiza', 'Upravljanje rokovima', 'Finansijski izvještaji'],
      color: 'from-indigo-500 to-indigo-700',
    },
    {
      icon: FaShieldAlt,
      title: 'Kontrola kvaliteta i sigurnosti',
      description: 'Osiguranje najviših standarda kvaliteta i sigurnosti na gradilištu u skladu sa nacionalnim propisima i međunarodnim standardima.',
      features: ['QA/QC procedure', 'Sigurnost na radu', 'Inspekcijski pregledi', 'Certifikacija'],
      color: 'from-red-500 to-red-700',
    },
    {
      icon: FaUsers,
      title: 'Koordinacija svih učesnika',
      description: 'Efikasna komunikacija i koordinacija između investitora, projektanata, izvođača, nadzornih organa i svih ostalih učesnika projekta.',
      features: ['Sastanci i koordinacija', 'Komunikacioni planovi', 'Rješavanje problema', 'Reporting'],
      color: 'from-pink-500 to-pink-700',
    },
    {
      icon: FaCog,
      title: 'Prijem i predaja objekta',
      description: 'Organizacija tehničkog pregleda, priprema dokumentacije za upotrebnu dozvolu i formalna predaja objekta investitoru.',
      features: ['Tehnički pregled', 'Upotrebna dozvola', 'As-built dokumentacija', 'Garancije i servis'],
      color: 'from-teal-500 to-teal-700',
    },
  ];

  return (
    <section id="services-grid" ref={sectionRef} className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className={`inline-block bg-white text-primary-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Naše usluge
          </div>
          <h2 className={`section-title ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Sveobuhvatna <span className="text-accent-600">podrška</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Pružamo kompletnu paletu usluga za uspješnu realizaciju vašeg projekta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.05}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold font-heading text-primary-900 mb-4 group-hover:text-accent-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 pt-6 border-t border-gray-200">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 md:p-12 text-white text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <h3 className="text-3xl font-bold font-heading mb-4">
            Trebate prilagođeno rješenje?
          </h3>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6">
            Svaki projekat je jedinstven. Kontaktirajte nas i kreiraćemo prilagođeni paket usluga prema vašim specifičnim potrebama.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <span>Kontaktirajte nas</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

