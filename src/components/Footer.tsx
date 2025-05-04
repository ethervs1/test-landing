import React from 'react';
import { ChevronRight, Mail, Github as GitHub, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">TechNova</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Innovative technology solutions for businesses of all sizes. 
              We help companies transform and thrive in the digital era.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-teal-300 transition-colors"
                aria-label="GitHub"
              >
                <GitHub className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-teal-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@technova.com" 
                className="text-white hover:text-teal-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Software Development',
                'Mobile Applications',
                'Web Development',
                'Cloud Solutions',
                'Infrastructure Automation',
                'AI & Machine Learning'
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-blue-100 hover:text-teal-300 flex items-center transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#' },
                { name: 'About Us', href: '#' },
                { name: 'Services', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Clients', href: '#clients' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-blue-100 hover:text-teal-300 flex items-center transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <address className="not-italic text-blue-100 space-y-3">
              <p className="flex items-start">
                <span className="mr-3">📍</span>
                <span>100 Technology Park<br />San Francisco, CA 94103</span>
              </p>
              <p className="flex items-center">
                <span className="mr-3">📞</span>
                <a href="tel:+14155550123" className="hover:text-teal-300 transition-colors">
                  +1 (415) 555-0123
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-3">✉️</span>
                <a href="mailto:info@technova.com" className="hover:text-teal-300 transition-colors">
                  info@technova.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-800 text-center">
          <p className="text-blue-200">
            © {currentYear} TechNova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;