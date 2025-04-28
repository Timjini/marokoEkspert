import Image from 'next/image';
import React from 'react';
import { FaCamera, FaSearchPlus } from 'react-icons/fa';

export const Gallery: React.FC = () => {
  // Content configuration object
  const content = {
    header: {
      title: "Morocco Through Our Lens",
      subtitle: "A glimpse of the unforgettable experiences awaiting you",
      icon: FaCamera
    },
    galleryItems: [
      {
        imgSrc: "/gallery/desert-sunset.jpg",
        alt: "Sahara Desert at sunset",
        category: "Desert"
      },
      {
        imgSrc: "/gallery/spice-market.jpg",
        alt: "Colorful spice market in Marrakech",
        category: "Markets"
      },
      {
        imgSrc: "/gallery/camel-trek.jpg",
        alt: "Camel trek in the dunes",
        category: "Adventure"
      },
      {
        imgSrc: "/gallery/riad-courtyard.jpg",
        alt: "Traditional riad courtyard",
        category: "Accommodation"
      },
      {
        imgSrc: "/gallery/berber-village.jpg",
        alt: "Atlas Mountains Berber village",
        category: "Culture"
      },
      {
        imgSrc: "/gallery/essaouira-beach.jpg",
        alt: "Essaouira beach and boats",
        category: "Coastal"
      },
      {
        imgSrc: "/gallery/moroccan-cuisine.jpg",
        alt: "Traditional Moroccan tagine",
        category: "Food"
      },
      {
        imgSrc: "/gallery/fes-alley.jpg",
        alt: "Historic alley in Fes",
        category: "Cities"
      }
    ],
    cta: {
      text: "View Full Gallery",
      icon: FaSearchPlus
    }
  };

  // Extract icon component from content
  const HeaderIcon = content.header.icon;

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 flex items-center justify-center gap-3">
            <HeaderIcon className="text-amber-600" />
            <span>{content.header.title}</span>
          </h2>
          <p className="text-lg text-amber-700">
            {content.header.subtitle}
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {content.galleryItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg aspect-square">
              <Image 
                src={item.imgSrc} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <div className="w-10 h-10 mb-2 bg-amber-500 rounded-full flex items-center justify-center mx-auto">
                    <FaSearchPlus className="text-lg" />
                  </div>
                  <span className="text-sm font-medium">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center text-amber-600 hover:text-amber-800 font-semibold group">
            <span className="border-b border-transparent group-hover:border-amber-600 transition-all">
              {content.cta.text}
            </span>
            <content.cta.icon className="ml-2 transition-transform group-hover:scale-125" />
          </button>
        </div>
      </div>
    </section>
  );
};