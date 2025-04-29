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
        imgSrc: "https://plus.unsplash.com/premium_photo-1705004597770-40e4db5df8a6?q=80&w=3590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Sahara Desert at sunset",
        category: "Desert"
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Colorful spice market in Marrakech",
        category: "Markets"
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1559586616-361e18714958?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Camel trek in the dunes",
        category: "Adventure"
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1519594445471-0e5f86b3fb09?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Traditional riad courtyard",
        category: "Accommodation"
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1517315403381-a12569a9da85?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Atlas Mountains Berber village",
        category: "Culture"
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1559925523-10de9e23cf90?q=80&w=3152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Essaouira beach and boats",
        category: "Coastal"
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1508589066756-c5dfb2cb7587?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Traditional Moroccan tagine",
        category: "Food"
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1534273006427-1686266049b7?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                style={{ objectFit: 'cover' }}
                height={600}
                width={600}
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