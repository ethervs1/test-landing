import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-900 flex items-center">
            <span className="bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent">
              TechNova
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Services', 'Portfolio', 'Clients', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-base ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-teal-600 transition-colors`}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-900 to-teal-600 text-white py-2 px-4 rounded-md flex items-center group"
            >
              Get Started
              <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 transition-all duration-300">
            <nav className="flex flex-col space-y-4">
              {['Services', 'Portfolio', 'Clients', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-teal-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-900 to-teal-600 text-white py-2 px-4 rounded-md inline-flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;