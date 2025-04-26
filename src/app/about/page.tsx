import Image from 'next/image';
import React from 'react';
import { 
  FaLeaf, 
  FaHandshake, 
  FaAward, 
  FaMap, 
  FaQuoteLeft,
  FaArrowRight,
  FaStar,
  FaUsers
} from 'react-icons/fa';
import { GiDesert, GiMeal, GiMountainRoad } from 'react-icons/gi';

const AboutPage: React.FC = () => {
  const teamMembers = [
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
  ];

  const testimonials = [
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
  ];

  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 bg-[url('/morocco-about.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to Maroko Ekspert</h1>
          <p className="text-xl text-amber-200 max-w-2xl">
            Your gateway to authentic Moroccan experiences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Who We Are */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
                width={800}
                height={600}
                alt="Maroko Ekspert team" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4">
                Maroko Ekspert specializes in crafting unforgettable Moroccan journeys. Since 2015, we&apos;ve been connecting travelers with the soul of Morocco through carefully curated tours and authentic local experiences.
              </p>
              <p className="text-gray-700">
                Our team of passionate locals and travel experts is dedicated to showing you the Morocco we love - from bustling medinas to serene desert landscapes, all with the comfort of Polish-speaking guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-md border border-amber-100">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GiDesert className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Authentic Experiences</h3>
              <p className="text-gray-600">Go beyond tourist spots to discover real Morocco</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Sustainable Tourism</h3>
              <p className="text-gray-600">Support local communities and preserve culture</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Personal Connection</h3>
              <p className="text-gray-600">Build meaningful traveler-local relationships</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Exceptional Service</h3>
              <p className="text-gray-600">Polish-speaking support from start to finish</p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">The Story Behind Maroko Ekspert</h2>
          <div className="bg-white rounded-xl p-8 shadow-md border border-amber-100">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Image 
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                    width={800}
                    height={600}
                  alt="Founder of Maroko Ekspert" 
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4">
                  Maroko Ekspert began with a simple idea: to share the Morocco we know and love with the world. Our founder, Karim Belhaj, grew up in a small Berber village in the Atlas Mountains and spent years guiding travelers through Morocco&apos;s diverse landscapes.
                </p>
                <p className="text-gray-700 mb-4">
                  After noticing many Polish travelers struggling with language barriers and generic tour experiences, Karim established Maroko Ekspert in 2015 with a focus on authentic, Polish-friendly Moroccan adventures.
                </p>
                <p className="text-gray-700">
                  What started as a one-man operation has grown into a team of 15 passionate locals and travel experts, but we&apos;ve never lost sight of our original mission - to create meaningful connections between travelers and the real Morocco.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100">
              <h3 className="text-xl font-semibold text-amber-900 mb-3 flex items-center">
                <FaMap className="text-amber-600 mr-2" />
                Local Expertise
              </h3>
              <p className="text-gray-700">
                Our guides aren&apos;t just employees - they&apos;re Moroccan locals with deep cultural knowledge and personal connections throughout the country.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100">
              <h3 className="text-xl font-semibold text-amber-900 mb-3 flex items-center">
                <GiMeal className="text-amber-600 mr-2 text-xl" />
                Tailored Experiences
              </h3>
              <p className="text-gray-700">
                We customize every itinerary to match your interests, pace, and travel style - no cookie-cutter tours.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100">
              <h3 className="text-xl font-semibold text-amber-900 mb-3 flex items-center">
                <FaUsers className="text-amber-600 mr-2" />
                Small Groups
              </h3>
              <p className="text-gray-700">
                We limit group sizes to ensure personal attention and authentic interactions with locals.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100">
              <h3 className="text-xl font-semibold text-amber-900 mb-3 flex items-center">
                <FaLeaf className="text-amber-600 mr-2" />
                Responsible Tourism
              </h3>
              <p className="text-gray-700">
                We partner with local businesses and communities to ensure tourism benefits Moroccans directly.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
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

        {/* Partners & Community */}
        <section className="mb-16 bg-amber-100 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Our Partners and Impact</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image 
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                width={800}
                height={600} 
                alt="Local partners" 
                className="rounded-xl shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                We&apos;re proud to work with over 30 local cooperatives, family-run guesthouses, and artisan workshops across Morocco.
              </p>
              <p className="text-gray-700 mb-4">
                Our partnerships ensure that at least 70% of your tour cost goes directly to local communities, and we&apos;ve helped fund 3 school projects in rural areas since 2018.
              </p>
              <p className="text-gray-700">
                When you travel with us, you&apos;re not just a tourist - you&apos;re contributing to sustainable development in Morocco.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-amber-100">
                <FaQuoteLeft className="text-amber-300 text-2xl mb-4" />
                <p className="text-gray-700 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-amber-900">{testimonial.author}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore Morocco?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Let us craft your perfect Moroccan adventure with authentic experiences and Polish-speaking support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/tours" 
              className="bg-white text-amber-700 hover:bg-amber-50 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform transition hover:scale-105 flex items-center justify-center gap-2"
            >
              <GiMountainRoad className="text-xl" />
              <span>Browse Our Tours</span>
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform transition hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaArrowRight />
              <span>Contact Us</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;