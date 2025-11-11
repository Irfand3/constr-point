'use client';

import { useState, useEffect } from 'react';
import { navigation, contact } from '@/data/content';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar - Desktop Only */}
      <div className={`hidden lg:block bg-secondary-900 text-white transition-all duration-300 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
      }`}>
        <div className="container-custom py-2">
          <div className="flex items-center justify-end space-x-6 text-sm">
            <a 
              href={`tel:${contact.phone}`} 
              className="flex items-center space-x-2 hover:text-primary-400 transition-colors"
            >
              <FaPhone className="w-3 h-3" />
              <span>{contact.phone}</span>
            </a>
            <a 
              href={`mailto:${contact.email}`} 
              className="flex items-center space-x-2 hover:text-primary-400 transition-colors"
            >
              <FaEnvelope className="w-3 h-3" />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xl py-3 lg:py-4'
            : 'bg-white/90 backdrop-blur-sm lg:mt-10'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center space-x-3 group relative z-10"
            >
              <div className={`relative transition-all duration-300 ${
                isScrolled ? 'w-14 h-14' : 'w-20 h-20'
              }`}>
                <img 
                  src="/logo.png" 
                  alt="Constructor point Logo" 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform"
                />
              </div>
              
              <div className="hidden md:block">
                <div className={`font-heading font-bold text-secondary-900 transition-all duration-300 ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`}>
                  Constructor point
                </div>
                <div className="text-xs text-secondary-600 tracking-wider">GRAĐEVINSKI PROJEKTI</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`px-4 py-2 font-medium transition-all duration-300 relative group ${
                      isActive 
                        ? 'text-primary-600' 
                        : 'text-secondary-700 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => handleNavClick('#contact')}
                className="relative overflow-hidden group px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Zatraži ponudu</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-secondary-900 transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`w-full h-0.5 bg-secondary-900 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`w-full h-0.5 bg-secondary-900 transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-secondary-900/95 backdrop-blur-md z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`min-h-screen flex flex-col justify-center items-center transition-all duration-500 delay-100 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center space-y-6 mb-12">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-white hover:text-primary-400 text-2xl font-heading font-semibold transition-all duration-500 transform hover:scale-110 ${
                  isMobileMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' 
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => handleNavClick('#contact')}
            className={`btn-primary bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-500 ${
              isMobileMenuOpen 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? '300ms' : '0ms' }}
          >
            Zatraži ponudu
          </button>

          {/* Mobile Contact Info */}
          <div className={`mt-12 flex flex-col items-center space-y-3 text-white/80 transition-all duration-500 ${
            isMobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? '400ms' : '0ms' }}
          >
            <a href={`tel:${contact.phone}`} className="flex items-center space-x-2 hover:text-primary-400 transition-colors">
              <FaPhone className="w-4 h-4" />
              <span>{contact.phone}</span>
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center space-x-2 hover:text-primary-400 transition-colors">
              <FaEnvelope className="w-4 h-4" />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
