'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

export default function AboutPageStory() {
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-block bg-primary-100 text-primary-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Naša priča
            </div>
            
            <h2 className="section-title text-left mb-6">
              Od vizije do <span className="text-accent-600">realizacije</span>
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg mb-8">
              <p>
                <strong className="text-primary-900">Constructor point d.o.o.</strong> osnovan je 2025. godine sa jasnom vizijom - postati lider u oblasti upravljanja građevinskim projektima u Bosni i Hercegovini i regionu kroz primjenu najmodernijih tehnologija i pristupa.
              </p>
              <p>
                Kao nova kompanija, donosimo svjež pogled na projektni menadžment, kombinirajući najnovija znanja iz oblasti građevinarstva sa inovativnim digitalnim rješenjima i vrhunskim standardima kvaliteta.
              </p>
              <p>
                Naš tim čine visokokvalifikovani građevinski inženjeri, arhitekte, projektni menadžeri i tehnički stručnjaci koji dijele zajedničku strast prema izvrsnosti i posvećenost svakom projektu, spremni da vaše građevinske vizije pretvore u stvarnost.
              </p>
            </div>

        
          </div>

          {/* Images */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-4/5 h-3/5 rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                  alt="Construction project"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Secondary Image */}
              <div className="absolute bottom-0 left-0 w-3/5 h-2/5 rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
                  alt="Team working"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

