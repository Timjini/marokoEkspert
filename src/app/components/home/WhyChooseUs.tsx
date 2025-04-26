import React from 'react';
import { 
  FaMapPin, 
  FaHeart, 
  FaSlidersH, 
  FaLanguage, 
  FaStar,
  FaQuoteLeft,
  FaMapMarkerAlt
} from 'react-icons/fa';

const WhyChooseUs: React.FC = () => {
  const content = {
    header: {
      title: "Why Choose Maroko Ekspert?",
      subtitle: "We go beyond ordinary tours to deliver extraordinary Moroccan experiences"
    },
    reasons: [
      {
        icon: FaMapPin,
        title: "Local Expertise",
        description: "Our guides are passionate locals who know Morocco inside out."
      },
      {
        icon: FaHeart,
        title: "Authenticity First",
        description: "We focus on real Moroccan culture, not tourist traps."
      },
      {
        icon: FaSlidersH,
        title: "Flexible Options",
        description: "Private, group, family, and custom tours available."
      },
      {
        icon: FaLanguage,
        title: "Polish-Speaking Support",
        description: "Plan and travel in your own language."
      },
      {
        icon: FaStar,
        title: "Trusted by Travelers",
        description: "Excellent reviews from satisfied clients worldwide."
      }
    ],
    testimonials: {
      title: "What Our Travelers Say",
      items: [
        {
          quote: "Maroko Ekspert showed us the real Morocco beyond the guidebooks. Our Polish-speaking guide made everything so easy!",
          author: "Anna K., Warsaw",
          rating: 5
        },
        {
          quote: "The attention to detail and authentic experiences made this the trip of a lifetime. Highly recommend!",
          author: "Marek & Ewa, Krakow",
          rating: 5
        }
      ]
    },
    cta: {
      text: "Start Your Moroccan Adventure",
      icon: FaMapMarkerAlt
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            {content.header.title}
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            {content.header.subtitle}
          </p>
        </div>
        
        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {content.reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-amber-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 mb-4 mx-auto bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white p-2">
                  <Icon className="w-full h-full" />
                </div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2 text-center">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Testimonials Section */}
        <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg border border-amber-200">
          <h3 className="text-2xl font-semibold text-amber-900 mb-8 text-center flex items-center justify-center gap-2">
            <FaQuoteLeft className="text-amber-400" />
            <span>{content.testimonials.title}</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.testimonials.items.map((testimonial, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-0 text-3xl text-amber-300">
                  <FaQuoteLeft />
                </div>
                <p className="text-gray-700 italic mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="text-amber-700 font-medium">
                  {testimonial.author}
                </p>
                <div className="flex mt-2 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 inline-flex items-center gap-2">
            <content.cta.icon />
            <span>{content.cta.text}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;