import React from 'react';
import { 
  FaMountain, 
  FaUmbrellaBeach, 
  FaCity, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';
import { GiDesert } from 'react-icons/gi';

const FeaturedTours: React.FC = () => {
  // Content configuration object
  const content = {
    header: {
      title: "Most Popular Tours",
      subtitle: "Discover our handpicked selection of unforgettable Moroccan experiences"
    },
    tours: [
      {
        icon: GiDesert,
        title: "4-Day Sahara Desert Adventure",
        route: "Marrakech ➔ Merzouga ➔ Ouarzazate",
        duration: "4 days",
        highlight: "Overnight in luxury desert camp under the stars"
      },
      {
        icon: FaCity,
        title: "Authentic Marrakech City Tour",
        route: "Hidden gardens, spice markets, and historic palaces",
        duration: "1 day",
        highlight: "Private guide reveals secret local spots"
      },
      {
        icon: FaUmbrellaBeach,
        title: "Essaouira Coastal Escape",
        route: "Charming port town vibes and beach relaxation",
        duration: "2 days",
        highlight: "Fresh seafood and artisan workshops"
      },
      {
        icon: FaMountain,
        title: "Atlas Mountains Day Trip",
        route: "Berber villages and mountain hikes",
        duration: "1 day",
        highlight: "Authentic home-cooked lunch with locals"
      }
    ],
    cta: {
      text: "See All Tours",
      icon: FaArrowRight,
      href: "tours"
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
      {/* Moroccan pattern borders */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwIj48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYiPjwvcmVjdD48cGF0aCBkPSJNMCwwIEwxMCwxMCBNMTAsMCBMMCwxMCIgc3Ryb2tlPSIjZjU5ZTIzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            {content.header.title}
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            {content.header.subtitle}
          </p>
        </div>
        
        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {content.tours.map((tour, index) => {
            const Icon = tour.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-amber-100"
              >
                <div className="h-40 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center p-3 backdrop-blur-sm">
                    <Icon className="w-full h-full" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{tour.title}</h3>
                  <div className="flex items-center text-sm text-amber-700 mb-2">
                    <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
                    <span>{tour.route}</span>
                  </div>
                  <div className="flex items-center text-sm text-amber-600 mb-3">
                    <FaCalendarAlt className="mr-2 flex-shrink-0" />
                    <span>{tour.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm italic border-l-2 border-amber-400 pl-3 py-1">
                    {tour.highlight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <a 
            href={content.cta.href} 
            className="inline-flex items-center text-amber-600 hover:text-amber-800 font-semibold group transition-colors"
          >
            <span className="border-b border-transparent group-hover:border-amber-600 transition-all">
              {content.cta.text}
            </span>
            <content.cta.icon className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwIj48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYiPjwvcmVjdD48cGF0aCBkPSJNMCwwIEwxMCwxMCBNMTAsMCBMMCwxMCIgc3Ryb2tlPSIjZjU5ZTIzIiB3aWR0aD0iMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
    </section>
  );
};

export default FeaturedTours;