import React from 'react';
import { Code, Server, Brain } from 'lucide-react';
import { services } from '../data/services';

const ServiceCard = ({ title, description, icon: Icon, color }: {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 transition-transform duration-300 hover:-translate-y-2">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 ${color}`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <a 
        href="#contact" 
        className="inline-flex items-center mt-6 text-teal-600 font-medium hover:text-teal-700 transition-colors"
      >
        Learn more 
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We deliver cutting-edge technology solutions to help businesses innovate and grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Software Development"
            description="Custom software solutions tailored to your specific business needs. From web applications to mobile apps, we build scalable and robust software that drives business growth."
            icon={Code}
            color="bg-gradient-to-br from-blue-900 to-blue-700"
          />
          <ServiceCard 
            title="Infrastructure Automation"
            description="Streamline your operations with our infrastructure automation services. We implement CI/CD pipelines, containerization, and cloud-native solutions to enhance efficiency."
            icon={Server}
            color="bg-gradient-to-br from-teal-600 to-teal-400"
          />
          <ServiceCard 
            title="AI & Machine Learning"
            description="Harness the power of artificial intelligence to gain insights from your data. Our AI solutions include predictive analytics, natural language processing, and computer vision."
            icon={Brain}
            color="bg-gradient-to-br from-purple-700 to-purple-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;