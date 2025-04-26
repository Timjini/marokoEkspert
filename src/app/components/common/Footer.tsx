import React from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram,
  FaTripadvisor,
  FaGlobe
} from 'react-icons/fa';
import { GiMagicLamp } from 'react-icons/gi';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-amber-900 text-amber-50 overflow-hidden">
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <GiMagicLamp className="text-3xl text-amber-300 mr-2" />
              <span className="text-2xl font-bold">Maroko Ekspert</span>
            </div>
            <p className="mb-4 text-amber-200">
              Authentic Moroccan experiences with Polish-speaking guides. Creating unforgettable journeys since 2015.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <FaTripadvisor className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-amber-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Our Tours</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Meet Our Guides</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-amber-700 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-amber-300 flex-shrink-0" />
                <div>
                  <span className="block text-amber-200">+212 123 456 789</span>
                  <span className="block text-sm text-amber-400">(Polish/English/Arabic)</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-amber-300 flex-shrink-0" />
                <a href="mailto:contact@marokoekspert.com" className="text-amber-200 hover:text-white transition-colors">
                  contact@marokoekspert.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-amber-300 flex-shrink-0" />
                <address className="not-italic text-amber-200">
                  Rue de la Kasbah, Marrakech 40000, Morocco
                </address>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-amber-700 pb-2">
              Travel Tips & Offers
            </h3>
            <p className="mb-4 text-amber-200">
              Subscribe for exclusive Morocco travel tips and special offers.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-amber-800 border border-amber-700 text-white placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button 
                type="submit" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded font-medium w-full transition-colors flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                <span>Subscribe</span>
              </button>
            </form>
            <div className="mt-4 flex items-center text-sm text-amber-400">
              <FaGlobe className="mr-2" />
              <span>Available in: Polski | English | Français</span>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-amber-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-amber-400 text-sm">
            © {new Date().getFullYear()} Maroko Ekspert. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-amber-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-amber-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-amber-400 hover:text-white transition-colors">Booking Conditions</a>
            <a href="#" className="text-amber-400 hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
      </div>

      {/* Moroccan lantern decorative element */}
      <div className="absolute bottom-4 right-4 opacity-20 text-amber-400">
        <GiMagicLamp className="text-6xl" />
      </div>
    </footer>
  );
};

export default Footer;