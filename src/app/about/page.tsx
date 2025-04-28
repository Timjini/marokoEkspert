import Image from 'next/image';
import React from 'react';
import { 
  FaLeaf, 
  FaHandshake, 
  FaAward, 
  FaMap,
  FaStar,
  FaUsers
} from 'react-icons/fa';
import { GiDesert, GiMeal } from 'react-icons/gi';

const AboutPage: React.FC = () => {
  // Dynamic data for the About page
  const pageContent = {
    hero: {
      image: '/morocco-about.jpg',
      title: 'Welcome to Maroko Ekspert',
      subtitle: 'Your gateway to authentic Moroccan experiences'
    },
    sections: [
      {
        title: "Who We Are",
        text: "Maroko Ekspert specializes in crafting unforgettable Moroccan journeys. Since 2015, we’ve been connecting travelers with the soul of Morocco through carefully curated tours and authentic local experiences.",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        title: "Our Mission",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        missionItems: [
          {
            icon: <GiDesert className="text-amber-600 text-2xl" />,
            title: "Authentic Experiences",
            description: "Go beyond tourist spots to discover real Morocco"
          },
          {
            icon: <FaLeaf className="text-amber-600 text-2xl" />,
            title: "Sustainable Tourism",
            description: "Support local communities and preserve culture"
          },
          {
            icon: <FaHandshake className="text-amber-600 text-2xl" />,
            title: "Personal Connection",
            description: "Build meaningful traveler-local relationships"
          },
          {
            icon: <FaAward className="text-amber-600 text-2xl" />,
            title: "Exceptional Service",
            description: "Polish-speaking support from start to finish"
          }
        ]
      },
      {
        title: "What Makes Us Different",
        items: [
          {
            icon: <FaMap className="text-amber-600 mr-2" />,
            title: "Local Expertise",
            description: "Our guides aren’t just employees - they’re Moroccan locals with deep cultural knowledge and personal connections throughout the country."
          },
          {
            icon: <GiMeal className="text-amber-600 mr-2 text-xl" />,
            title: "Tailored Experiences",
            description: "We customize every itinerary to match your interests, pace, and travel style - no cookie-cutter tours."
          },
          {
            icon: <FaUsers className="text-amber-600 mr-2" />,
            title: "Small Groups",
            description: "We limit group sizes to ensure personal attention and authentic interactions with locals."
          },
          {
            icon: <FaLeaf className="text-amber-600 mr-2" />,
            title: "Responsible Tourism",
            description: "We partner with local businesses and communities to ensure tourism benefits Moroccans directly."
          }
        ]
      }
    ],
    teamMembers: [
      {
        name: "Karim Belhaj",
        role: "Founder & Lead Guide",
        bio: "Born in the Atlas Mountains, Karim has been sharing Morocco's secrets for over 15 years.",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        name: "Amina Toufiq",
        role: "Cultural Experience Director",
        bio: "Expert in Moroccan traditions and culinary arts, fluent in 4 languages.",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        name: "Youssef El-Masri",
        role: "Desert Expedition Specialist",
        bio: "Knows every dune in the Sahara like the back of his hand.",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    testimonials: [
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
  };

  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-[url('/morocco-about.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{pageContent.hero.title}</h1>
          <p className="text-xl text-amber-200 max-w-2xl">{pageContent.hero.subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Who We Are */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src={pageContent.sections[0].image || ''} 
                width={800}
                height={600}
                alt="Maroko Ekspert team" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">{pageContent.sections[0].title}</h2>
              <p className="text-lg text-gray-700 mb-4">{pageContent.sections[0].text}</p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-md border border-amber-100">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">{pageContent.sections[1].title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageContent.sections[1].missionItems?.map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageContent.teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <Image 
                    width={800}
                    height={600}
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900">{member.name}</h3>
                  <p className="text-amber-600 mb-2">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">What Our Clients Say</h2>
          <div className="flex gap-4">
            {pageContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md flex-1">
                <div className="text-xl text-gray-600 mb-4">{testimonial.quote}</div>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-amber-900">{testimonial.author}</p>
                  <div className="text-amber-600">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <FaStar key={idx} className="inline text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
