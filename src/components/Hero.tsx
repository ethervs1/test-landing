import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = 1 - scrollPosition / 700;
        const translateY = scrollPosition * 0.3;
        
        if (opacity >= 0) {
          heroRef.current.style.opacity = opacity.toString();
          heroRef.current.style.transform = `translateY(${translateY}px)`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-15 z-0"></div>
      
      <div className="absolute inset-0 bg-blue-900/70 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10" ref={heroRef}>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block">Innovative Solutions for a</span>
            <span className="bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            We specialize in custom software development, infrastructure automation, 
            and cutting-edge AI solutions that transform businesses for the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-white text-blue-900 hover:bg-blue-50 transition-colors py-3 px-8 rounded-md font-medium"
            >
              Get in Touch
            </a>
            <a 
              href="#services" 
              className="bg-transparent hover:bg-white/10 border border-white text-white transition-colors py-3 px-8 rounded-md font-medium"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-10 w-10" />
      </button>
    </section>
  );
};

export default Hero;