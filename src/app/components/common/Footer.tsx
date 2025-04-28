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
  // Dynamic data for the Footer
  const footerContent = {
    brand: {
      name: 'Maroko Ekspert',
      description: 'Authentic Moroccan experiences with Polish-speaking guides. Creating unforgettable journeys since 2015.',
      socialLinks: [
        { href: '#', icon: <FaFacebook className="text-xl" /> },
        { href: '#', icon: <FaInstagram className="text-xl" /> },
        { href: '#', icon: <FaTripadvisor className="text-xl" /> },
      ],
    },
    quickLinks: [
      { href: '#', label: 'Home' },
      { href: '#', label: 'About Us' },
      { href: '#', label: 'Our Tours' },
      { href: '#', label: 'Gallery' },
      { href: '#', label: 'Meet Our Guides' },
      { href: '#', label: 'Contact' },
    ],
    contactInfo: {
      phone: {
        number: '+48 725 648 880 | +212 669 035 305',
        details: '(Polish/English/Arabic)',
      },
      email: 'biuro@maroko-ekspert.pl',
      address: 'N°15, 4éme Etage, Imm. Inflass, Bd Abderrahim Bouabid, Agadir 80000, Morocco',
    },
    newsletter: {
      description: 'Subscribe for exclusive Morocco travel tips and special offers.',
      buttonText: 'Subscribe',
      globeText: 'Available in: Polski | English | Français',
    },
    bottomLinks: [
      { href: '#', label: 'Privacy Policy' },
      { href: '#', label: 'Terms of Service' },
      { href: '#', label: 'Booking Conditions' },
      { href: '#', label: 'FAQ' },
    ],
  };

  return (
    <footer className="relative bg-amber-900 text-amber-50 overflow-hidden">
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand column */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              {/* <GiMagicLamp className="text-3xl text-amber-300 mr-2" /> */}
              <span className="text-2xl font-bold">{footerContent.brand.name}</span>
            </div>
            <p className="mb-4 text-amber-200">
              {footerContent.brand.description}
            </p>
            <div className="flex space-x-4 mb-6">
              {footerContent.brand.socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-amber-300 hover:text-white transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-amber-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerContent.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-amber-200 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
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
                  <span className="block text-amber-200">{footerContent.contactInfo.phone.number}</span>
                  <span className="block text-sm text-amber-400">{footerContent.contactInfo.phone.details}</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-amber-300 flex-shrink-0" />
                <a href={`mailto:${footerContent.contactInfo.email}`} className="text-amber-200 hover:text-white transition-colors">
                  {footerContent.contactInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-amber-300 flex-shrink-0" />
                <address className="not-italic text-amber-200">
                  {footerContent.contactInfo.address}
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
              {footerContent.newsletter.description}
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
                <span>{footerContent.newsletter.buttonText}</span>
              </button>
            </form>
            <div className="mt-4 flex items-center text-sm text-amber-400">
              <FaGlobe className="mr-2" />
              <span>{footerContent.newsletter.globeText}</span>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-amber-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-amber-400 text-sm">
            © {new Date().getFullYear()} Maroko Ekspert. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {footerContent.bottomLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-amber-400 hover:text-white transition-colors">{link.label}</a>
            ))}
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
