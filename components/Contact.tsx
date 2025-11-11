'use client';

import { contact } from '@/data/content';
import { useEffect, useRef, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Hvala! Vaša poruka je poslata. Kontaktiraćemo vas uskoro.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`section-title ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {contact.title}
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="bg-primary-900 text-white rounded-2xl p-8 md:p-10 h-full shadow-2xl">
              <h3 className="text-2xl font-bold font-heading mb-8">
                Kontakt informacije
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Adresa</div>
                    <p className="text-gray-300">{contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                      <FaPhone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Telefon</div>
                    <a href={`tel:${contact.phone}`} className="text-gray-300 hover:text-accent-400 transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-accent-400 transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                      <FaClock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Radno vrijeme</div>
                    <p className="text-gray-300">{contact.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-primary-800">
                <p className="text-gray-300 leading-relaxed">
                  Pozovite nas ili pošaljite poruku putem kontakt forme. Odgovorićemo vam u najkraćem mogućem roku.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ime i prezime *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-accent-500 focus:outline-none transition-colors"
                    placeholder="Vaše ime i prezime"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email adresa *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-accent-500 focus:outline-none transition-colors"
                    placeholder="vasa@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-accent-500 focus:outline-none transition-colors"
                    placeholder="+387 33 123 456"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Poruka *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-accent-500 focus:outline-none transition-colors resize-none"
                    placeholder="Opišite vaš projekat ili postavite pitanje..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <span>Pošalji poruku</span>
                  <FaPaperPlane className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

