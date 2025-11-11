'use client';

import { contact } from '@/data/content';
import { FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactPageInfo() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Map Placeholder */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.2734728491784!2d18.39837931557946!3d43.856430879114265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8f1c722e54f%3A0x5b8b2b7b2b7b2b7b!2sZmaja%20od%20Bosne%2C%20Sarajevo%2071000!5e0!3m2!1sen!2sba!4v1234567890123!5m2!1sen!2sba"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

          {/* Info Content */}
          <div>
            <h2 className="section-title text-left mb-6">
              Posjetite nas
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Naša kancelarija se nalazi u srcu Tuzle. Dobrodošli ste da nas posjetite za besplatnu konsultaciju o vašem projektu.
            </p>

            {/* Address Card */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 mb-8 border border-primary-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary-900 mb-2">Adresa</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {contact.address}
                  </p>
                </div>
              </div>

              <div className="border-t border-primary-200 pt-6">
                <h4 className="font-semibold text-primary-900 mb-3">Upute za dolazak:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span>
                    <span>Centralna lokacija u Tuzli</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span>
                    <span>Parking dostupan u blizini zgrade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span>
                    <span>Lako dostupna javnim prijevozom</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-xl text-primary-900 mb-4">
                Pratite nas na društvenim mrežama
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary-900 hover:bg-accent-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary-900 hover:bg-accent-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary-900 hover:bg-accent-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

