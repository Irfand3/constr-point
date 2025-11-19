'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaClock, FaMoneyBillWave, FaShieldAlt, FaUserTie, FaChartLine, FaHandshake } from 'react-icons/fa';

export default function ServicesPageBenefits() {
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

  const benefits = [
    {
      icon: FaClock,
      title: 'Poštovanje rokova',
      description: 'Efikasno izvođenje radova sa vlastitim timom omogućava realizaciju u planiranim rokovima.',
    },
    {
      icon: FaMoneyBillWave,
      title: 'Fiksna cijena',
      description: 'Precizna procjena troškova i fiksna cijena izvođenja bez skrivenih troškova.',
    },
    {
      icon: FaShieldAlt,
      title: 'Garantovan kvalitet',
      description: 'Kvalitetno izvođenje svih radova sa garancijom na izvedene radove i materijale.',
    },
    {
      icon: FaUserTie,
      title: 'Vlastiti tim majstora',
      description: 'Licencirani majstori i radnici direktno zaposleni za potpunu kontrolu kvaliteta.',
    },
    {
      icon: FaChartLine,
      title: 'Transparentnost',
      description: 'Redovno izvještavanje o napretku radova i potpuna transparentnost u izvođenju.',
    },
    {
      icon: FaHandshake,
      title: 'Pouzdanost izvođača',
      description: 'Kao izvođač sa vlastitim timom garantujemo kvalitet i pouzdanost.',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className={`relative order-2 lg:order-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                alt="Construction benefits"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold font-heading text-accent-600">100%</div>
                    <div className="text-xs text-gray-600">Kvalitet</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-heading text-accent-600">2025</div>
                    <div className="text-xs text-gray-600">Nova era</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-heading text-accent-600">10+</div>
                    <div className="text-xs text-gray-600">Stručnjaka</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="inline-block bg-white text-primary-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
              Zašto odabrati nas
            </div>
            
            <h2 className="section-title text-left mb-6">
              Benefiti <span className="text-accent-600">saradnje</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Kao izvođač sa vlastitim timom stručnjaka i majstora, osiguravamo kvalitet i pouzdanost izvođenja svih vrsta građevinskih radova.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 mb-1 group-hover:text-accent-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

