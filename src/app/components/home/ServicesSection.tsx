import React from 'react';
import { 
  FaMapMarkedAlt, 
  FaUmbrellaBeach, 
  FaHatCowboy, 
  FaLandmark, 
  FaRoute 
} from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaMapMarkedAlt className="w-full h-full" />,
      title: 'Private Guided Tours',
      description: 'Personalized tours with knowledgeable local guides who bring Morocco\'s culture and history to life.'
    },
    {
      icon: <FaHatCowboy className="w-full h-full" />,
      title: 'Desert Excursions',
      description: 'Unforgettable Sahara adventures including overnight stays in luxury desert camps under the stars.'
    },
    {
      icon: <GiCookingPot className="w-full h-full" />,
      title: 'Authentic Experiences',
      description: 'Immerse yourself in Moroccan culture with cooking classes, artisan workshops, and home visits.'
    },
    {
      icon: <FaUmbrellaBeach className="w-full h-full" />,
      title: 'Coastal Getaways',
      description: 'Relax on Atlantic beaches or explore charming coastal towns like Essaouira and Asilah.'
    },
    {
      icon: <FaLandmark className="w-full h-full" />,
      title: 'Historical City Tours',
      description: 'Discover the imperial cities - Marrakech, Fes, Casablanca, and Rabat - with expert guides.'
    },
    {
      icon: <FaRoute className="w-full h-full" />,
      title: 'Custom Itineraries',
      description: 'Tailor-made journeys designed specifically for your interests, pace, and travel style.'
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      {/* Moroccan pattern border */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Discover the wonders of Morocco with our carefully crafted experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 mb-4 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white p-3 group-hover:rotate-6 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA at bottom */}
        <div className="mt-16 text-center">
          <p className="text-lg text-blue-700 mb-6">
            Ready to create your perfect Moroccan adventure?
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 flex items-center justify-center mx-auto gap-2">
            <FaMapMarkedAlt />
            <span>Contact Us Today</span>
          </button>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwIj48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYiPjwvcmVjdD48cGF0aCBkPSJNMCwwIEwxMCwxMCBNMTAsMCBMMCwxMCIgc3Ryb2tlPSIjMzg4MmI0IiB3aWR0aD0iMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
    </section>
  );
};

export default ServicesSection;