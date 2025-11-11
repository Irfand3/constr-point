'use client';

import { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaCommentAlt, FaCheckCircle } from 'react-icons/fa';

export default function ContactPageForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', projectType: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-form" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Pošaljite nam poruku</h2>
            <p className="section-subtitle">
              Popunite formu ispod i kontaktiraćemo vas u najkraćem mogućem roku
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center animate-slide-up">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold font-heading text-primary-900 mb-4">
                Hvala vam!
              </h3>
              <p className="text-lg text-gray-600">
                Vaša poruka je uspješno poslata. Kontaktiraćemo vas uskoro.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                    <FaUser className="w-4 h-4 text-accent-500" />
                    <span>Ime i prezime *</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-accent-500 focus:ring-2 focus:ring-accent-200 focus:outline-none transition-all"
                    placeholder="Vaše ime i prezime"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                    <FaEnvelope className="w-4 h-4 text-accent-500" />
                    <span>Email adresa *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-accent-500 focus:ring-2 focus:ring-accent-200 focus:outline-none transition-all"
                    placeholder="vasa@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                    <FaPhone className="w-4 h-4 text-accent-500" />
                    <span>Telefon</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-accent-500 focus:ring-2 focus:ring-accent-200 focus:outline-none transition-all"
                    placeholder="+387 33 123 456"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                    <FaCommentAlt className="w-4 h-4 text-accent-500" />
                    <span>Tip projekta</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-accent-500 focus:ring-2 focus:ring-accent-200 focus:outline-none transition-all bg-white"
                  >
                    <option value="">Odaberite tip projekta</option>
                    <option value="stambeni">Stambeni objekat</option>
                    <option value="komercijalni">Komercijalni objekat</option>
                    <option value="industrijski">Industrijski objekat</option>
                    <option value="renovacija">Renovacija</option>
                    <option value="konsalting">Konsalting</option>
                    <option value="ostalo">Ostalo</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                  <span>Tema *</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-accent-500 focus:ring-2 focus:ring-accent-200 focus:outline-none transition-all"
                  placeholder="Kratak opis teme"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                  <span>Poruka *</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-accent-500 focus:ring-2 focus:ring-accent-200 focus:outline-none transition-all resize-none"
                  placeholder="Detaljno opišite vaš projekat ili postavite pitanje..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-3"
              >
                <span className="text-lg">Pošalji poruku</span>
                <FaPaperPlane className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-500 text-center mt-6">
                Zaštićujemo vašu privatnost. Vaši podaci neće biti dijeljeni sa trećim stranama.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

