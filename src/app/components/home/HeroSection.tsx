import React from 'react';
import { 
  FaMapMarkedAlt, 
  FaChevronDown 
} from 'react-icons/fa';
import { 
  GiDesert, 
  GiMountainRoad, 
  GiSpotedFlower 
} from 'react-icons/gi';

const HeroSection: React.FC = () => {
  const content = {
    backgroundImage: '',
    decorativeIcons: [
      { icon: GiSpotedFlower, className: "text-amber-300 text-3xl" },
      { icon: GiDesert, className: "text-amber-400 text-4xl" },
      { icon: GiMountainRoad, className: "text-amber-300 text-3xl" }
    ],
    headings: {
      main: "Discover Authentic Moroccan Tours",
      sub: "Maroko Ekspert offers professional tours, excursions, and authentic activities in Morocco."
    },
    polishBadge: {
      text: "Now in Polish!",
      iconPath: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
    },
    ctaButton: {
      text: "Explore Tours",
      icon: FaMapMarkedAlt,
      href: "#tours"
    },
    scrollIndicator: {
      icon: FaChevronDown,
      className: "text-amber-300 text-2xl"
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        // style={{ backgroundImage: `url(${content.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-amber-700/70 to-amber-600/30"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Decorative elements */}
          <div className="flex justify-center mb-6">
            {content.decorativeIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <Icon 
                  key={index} 
                  className={`${item.className} mx-2`} 
                />
              );
            })}
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {content.headings.main}
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-2xl mx-auto">
            {content.headings.sub}
          </p>
          
          {/* Polish language badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full border border-amber-300/50 mb-8">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={content.polishBadge.iconPath} 
              />
            </svg>
            <span className="font-medium">
              {content.polishBadge.text}
            </span>
          </div>
          
          {/* CTA button */}
          <div className="mb-12">
            <a 
              href={content.ctaButton.href}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform transition hover:scale-105 inline-flex items-center gap-2"
            >
              <content.ctaButton.icon />
              <span>{content.ctaButton.text}</span>
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce absolute left-1/2 transform -translate-x-1/2">
            <content.scrollIndicator.icon className={content.scrollIndicator.className} />
          </div>
        </div>
      </div>
      
      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;