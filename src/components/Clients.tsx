import React from 'react';
import { clients } from '../data/clients';

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Trusted by leading companies from various industries
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clients.testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg relative"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-blue-900 text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l3-3m0 0l3 3m-3-3v8m13-8l-3-3m0 0l-3 3m3-3v8" />
                </svg>
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.logos.map((client, index) => (
            <div key={index} className="group flex items-center justify-center">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-12 md:h-16 opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;