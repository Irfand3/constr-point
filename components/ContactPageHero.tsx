'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { contact } from '@/data/content';

export default function ContactPageHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 animate-slide-up">
            Kontaktirajte nas
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0, animation: 'slideUp 0.6s ease-out 0.1s forwards' }}>
            Spremni smo da odgovorimo na sva vaša pitanja i pružimo stručnu podršku za vaš projekat
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <a
            href={`tel:${contact.phone}`}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-slide-up group"
            style={{ animationDelay: '0.2s', opacity: 0, animation: 'slideUp 0.6s ease-out 0.2s forwards' }}
          >
            <div className="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaPhone className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Telefon</h3>
            <p className="text-gray-200 break-all">{contact.phone}</p>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-slide-up group"
            style={{ animationDelay: '0.3s', opacity: 0, animation: 'slideUp 0.6s ease-out 0.3s forwards' }}
          >
            <div className="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaEnvelope className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-200 break-all">{contact.email}</p>
          </a>

          <div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 animate-slide-up"
            style={{ animationDelay: '0.4s', opacity: 0, animation: 'slideUp 0.6s ease-out 0.4s forwards' }}
          >
            <div className="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Lokacija</h3>
            <p className="text-gray-200 text-sm leading-relaxed">Tuzla, BiH</p>
          </div>

          <div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 animate-slide-up"
            style={{ animationDelay: '0.5s', opacity: 0, animation: 'slideUp 0.6s ease-out 0.5s forwards' }}
          >
            <div className="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center mb-4">
              <FaClock className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Radno vrijeme</h3>
            <p className="text-gray-200 text-sm leading-relaxed">{contact.workingHours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

