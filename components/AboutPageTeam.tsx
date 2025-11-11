'use client';

import { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function AboutPageTeam() {
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

  const team = [
    {
      name: 'Prva osoba',
      role: 'Osnivač i direktor',
      description: 'Diplomirani građevinski inženjer sa bogatim iskustvom u upravljanju velikim infrastrukturnim projektima.',
      initials: 'MP',
      color: 'from-blue-500 to-blue-700',
    },
    {
      name: 'Druga osoba',
      role: 'Tehnička direktorica',
      description: 'Licencirana arhitekta i projektni menadžer sa specijalizacijom u komercijalnim objektima.',
      initials: 'AK',
      color: 'from-purple-500 to-purple-700',
    },
    {
      name: 'Treca osoba',
      role: 'Rukovodilac projekata',
      description: 'Certificirani PMI projektni menadžer sa iskustvom u organizaciji i nadzoru složenih projekata.',
      initials: 'DN',
      color: 'from-accent-500 to-accent-700',
    },
    {
      name: 'Cetvrta osoba',
      role: 'Rukovoditeljica kvaliteta',
      description: 'Stručnjak za kontrolu kvaliteta i sigurnosti sa međunarodnim certifikatima.',
      initials: 'MS',
      color: 'from-green-500 to-green-700',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className={`inline-block bg-white text-primary-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Naš tim
          </div>
          <h2 className={`section-title ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Upoznajte <span className="text-accent-600">stručnjake</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Tim iskusnih profesionalaca posvećenih vašem uspjehu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center overflow-hidden">
                <div className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-4xl font-bold font-heading">
                    {member.initials}
                  </span>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
                  {member.name}
                </h3>
                <div className="text-accent-600 font-semibold mb-4 text-sm">
                  {member.role}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex space-x-3 pt-4 border-t border-gray-200">
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-100 hover:bg-primary-900 rounded-lg flex items-center justify-center transition-all duration-300 group/icon"
                  >
                    <FaLinkedin className="w-5 h-5 text-primary-900 group-hover/icon:text-white transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-100 hover:bg-primary-900 rounded-lg flex items-center justify-center transition-all duration-300 group/icon"
                  >
                    <FaEnvelope className="w-5 h-5 text-primary-900 group-hover/icon:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Statement */}
        <div className={`mt-16 max-w-4xl mx-auto text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <p className="text-xl text-gray-700 leading-relaxed">
            Naš multidisciplinarni tim kombinuje tehničku stručnost, kreativnost i dugogodišnje iskustvo kako bi osigurao da svaki projekat bude realizovan sa najvišim standardima kvaliteta.
          </p>
        </div>
      </div>
    </section>
  );
}

