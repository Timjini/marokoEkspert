'use client';
import { Gallery } from '@/app/components/home/Gallery';
import React from 'react';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaLanguage, 
  FaCheck, 
  FaTimes,
  FaStar,
  FaQuestionCircle,
} from 'react-icons/fa';
import { GiCamel, GiDesert, GiMeal, GiMoneyStack } from 'react-icons/gi';

const TourPage: React.FC = () => {
  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-[url('/sahara-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">4-Day Sahara Desert Adventure</h1>
          <p className="text-xl text-amber-200 max-w-2xl">
            &quot;Ride camels into golden dunes, sleep under the stars, and discover Berber culture.&quot;
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Photo Gallery */}
            <Gallery />

            {/* Quick Summary */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <GiCamel className="text-amber-600 text-2xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Camel Trekking</h3>
                    <p className="text-gray-600 text-sm">Sunset ride into the Erg Chebbi dunes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <GiDesert className="text-amber-600 text-2xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Desert Camp</h3>
                    <p className="text-gray-600 text-sm">Luxury tent with private facilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaStar className="text-amber-600 text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Berber Culture</h3>
                    <p className="text-gray-600 text-sm">Authentic village visits</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaLanguage className="text-amber-600 text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Polish Guides</h3>
                    <p className="text-gray-600 text-sm">Available upon request</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Detailed Itinerary</h2>
              
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div className="w-0.5 h-full bg-amber-300"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">Day 1: Marrakech to Dades Valley</h3>
                    <p className="text-gray-700">
                      Depart from Marrakech, cross the High Atlas Mountains, visit UNESCO-listed Ait Benhaddou kasbah, 
                      and continue through the Valley of Roses to your riad in Dades Valley.
                    </p>
                  </div>
                </div>
                
                {/* Day 2 */}
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div className="w-0.5 h-full bg-amber-300"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">Day 2: Sahara Desert Camp</h3>
                    <p className="text-gray-700">
                      Explore Todra Gorge, drive through palm groves to Merzouga, then camel trek into the Erg Chebbi dunes 
                      at sunset. Overnight in luxury desert camp with Berber music and stargazing.
                    </p>
                  </div>
                </div>
                
                {/* Day 3 */}
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div className="w-0.5 h-full bg-amber-300"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">Day 3: Berber Experiences</h3>
                    <p className="text-gray-700">
                      Sunrise over the dunes, visit a Berber family for tea, explore the desert oasis, 
                      and optional quad biking or sandboarding. Second night in desert camp.
                    </p>
                  </div>
                </div>
                
                {/* Day 4 */}
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">Day 4: Return to Marrakech</h3>
                    <p className="text-gray-700">
                      Morning drive back through the Draa Valley with stops at kasbahs and palmeraies. 
                      Arrival in Marrakech by evening.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Book This Tour */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Why Choose This Tour?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Authentic Sahara experience with luxury camping</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Small groups only (max 12 people)</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Polish-speaking guides available</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Responsible tourism - supports local Berber communities</span>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="border-b border-amber-100 pb-4">
                  <h3 className="font-semibold text-amber-900 flex items-center">
                    <FaQuestionCircle className="text-amber-600 mr-2" />
                    What should I pack for the desert?
                  </h3>
                  <p className="text-gray-700 mt-2 pl-6">
                    Comfortable clothing, warm layers for cool nights, sturdy shoes, sunglasses, sunscreen, 
                    a headscarf, and a camera. We provide detailed packing lists upon booking.
                  </p>
                </div>
                
                <div className="border-b border-amber-100 pb-4">
                  <h3 className="font-semibold text-amber-900 flex items-center">
                    <FaQuestionCircle className="text-amber-600 mr-2" />
                    Can I customize this tour?
                  </h3>
                  <p className="text-gray-700 mt-2 pl-6">
                    Yes! We offer private departures that can be customized. Popular additions include extra nights in the desert, 
                    visits to Fes or Chefchaouen, or cooking classes.
                  </p>
                </div>
                
                <div className="border-b border-amber-100 pb-4">
                  <h3 className="font-semibold text-amber-900 flex items-center">
                    <FaQuestionCircle className="text-amber-600 mr-2" />
                    Is this tour suitable for children?
                  </h3>
                  <p className="text-gray-700 mt-2 pl-6">
                    Absolutely! We&apos;ve had many families enjoy this tour. Children under 5 ride for free in parents&apos; 4x4, 
                    and we can adjust camel riding times for young children.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Sidebar */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200 sticky top-4">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Tour Details</h2>
              
              {/* Quick Facts */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-amber-600 mr-3" />
                  <div>
                    <p className="text-gray-500 text-sm">Duration</p>
                    <p className="font-medium">4 Days / 3 Nights</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-amber-600 mr-3" />
                  <div>
                    <p className="text-gray-500 text-sm">Departure</p>
                    <p className="font-medium">Marrakech</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaLanguage className="text-amber-600 mr-3" />
                  <div>
                    <p className="text-gray-500 text-sm">Languages</p>
                    <p className="font-medium">Polish, English, French</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <GiMeal className="text-amber-600 mr-3 text-xl" />
                  <div>
                    <p className="text-gray-500 text-sm">Meals</p>
                    <p className="font-medium">3 Breakfasts, 2 Dinners</p>
                  </div>
                </div>
              </div>
              
              {/* Pricing */}
              <div className="bg-amber-50 rounded-lg p-4 mb-6">
                <div className="text-center mb-2">
                  <span className="text-gray-500">From</span>
                  <p className="text-3xl font-bold text-amber-700">€450</p>
                  <span className="text-gray-600 text-sm">per person (2 travelers)</span>
                </div>
                <div className="text-center text-sm text-amber-700">
                  <p>€420 pp (4+ travelers)</p>
                  <p>Children 5-12: €250</p>
                </div>
              </div>
              
              {/* Included/Not Included */}
              <div className="mb-6">
                <h3 className="font-semibold text-amber-900 mb-2">What&apos;s Included</h3>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>3 nights accommodation (riad & luxury camp)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Private air-conditioned 4x4 with driver</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Camel trek with guides</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Meals as specified</span>
                  </li>
                </ul>
                
                <h3 className="font-semibold text-amber-900 mb-2">Not Included</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Lunches and drinks</span>
                  </li>
                  <li className="flex items-start">
                    <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Travel insurance</span>
                  </li>
                  <li className="flex items-start">
                    <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Personal expenses & tips</span>
                  </li>
                </ul>
              </div>
              
              {/* Booking CTA */}
              <div className="space-y-3">
                <button className="cursor-pointer w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <GiMoneyStack className="text-xl" />
                  <span>Book Now</span>
                </button>
                <button className="w-full bg-white border-2 border-amber-600 text-amber-700 py-3 rounded-lg font-bold shadow-sm hover:bg-amber-50 transition-all flex items-center justify-center gap-2">
                  <FaQuestionCircle />
                  <span>Ask a Question</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPage;