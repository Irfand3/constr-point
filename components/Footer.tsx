import { footer, contact } from '@/data/content';
import { FaFacebook, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const iconMap: { [key: string]: any } = {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
};

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16">
                <img 
                  src="/logo.png" 
                  alt="Constructor point Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-heading font-bold text-lg">
                  {footer.company.name.split(' ')[0]}<br />
                  {footer.company.name.split(' ').slice(1).join(' ')}
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              {footer.company.description}
            </p>
            <div className="flex space-x-4">
              {footer.social.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 bg-secondary-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              Brzi linkovi
            </h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Usluge</h3>
            <ul className="space-y-2">
              {footer.services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <FaMapMarkerAlt className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{contact.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FaPhone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FaEnvelope className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <FaClock className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

