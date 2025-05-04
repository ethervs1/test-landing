import React, { useState } from 'react';
import { projects } from '../data/portfolio';

type Filter = 'all' | 'software' | 'infrastructure' | 'ai';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Explore our portfolio of successful projects that showcase our expertise.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { label: 'All Projects', value: 'all' },
            { label: 'Software', value: 'software' },
            { label: 'Infrastructure', value: 'infrastructure' },
            { label: 'AI Solutions', value: 'ai' }
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as Filter)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === filter.value
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-teal-600 text-white text-xs uppercase tracking-wider rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-white bg-blue-900/80 backdrop-blur-sm py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
                  >
                    View Case Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;