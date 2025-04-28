import React from 'react';
import { FaPaperPlane, FaMapMarkedAlt } from 'react-icons/fa';

const CTASection: React.FC = () => {
  // Content configuration object
  const content = {
    main: {
      title: "Ready to Start Your Moroccan Journey?",
      subtitle: "Let's plan a trip you'll never forget. Contact us today — now in Polish!"
    },
    buttons: [
      {
        text: "Explore Tours",
        icon: FaMapMarkedAlt,
        href: "#tours",
        variant: "primary"
      },
      {
        text: "Contact Us",
        icon: FaPaperPlane,
        href: "#contact",
        variant: "secondary"
      }
    ],
    polishBadge: {
      text: "Polish-speaking consultants available",
      iconPath: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-amber-500 to-amber-600 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-400 rounded-full mix-blend-overlay filter blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg border border-amber-300/30 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {content.main.title}
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              {content.main.subtitle}
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {content.buttons.map((button, index) => {
                const Icon = button.icon;
                const buttonClasses = button.variant === "primary" 
                  ? "bg-white text-amber-700 hover:bg-amber-50" 
                  : "bg-transparent border-2 border-white text-white hover:bg-white/10";
                
                return (
                  <a 
                    key={index}
                    href={button.href} 
                    className={`${buttonClasses} px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform transition hover:scale-105 flex items-center justify-center gap-2`}
                  >
                    <Icon />
                    <span>{button.text}</span>
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Polish language reassurance */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-amber-100 px-6 py-2 rounded-full border border-amber-300/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={content.polishBadge.iconPath} />
            </svg>
            <span className="text-sm font-medium">
              {content.polishBadge.text}
            </span>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwIj48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYiPjwvcmVjdD48cGF0aCBkPSJNMCwwIEwxMCwxMCBNMTAsMCBMMCwxMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
    </section>
  );
};

export default CTASection;