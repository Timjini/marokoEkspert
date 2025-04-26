'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { 
  FaBars, FaTimes, FaHome, FaMapMarkedAlt, FaUserAlt, 
  FaPhoneAlt, FaGlobe, FaChevronDown
} from 'react-icons/fa';
import { GiDesert, GiMagicLamp } from 'react-icons/gi';

const navLinks = [
  { href: '/', label: 'Home', icon: <FaHome className="mr-1" /> },
  { href: '/tours', label: 'Tours', icon: <FaMapMarkedAlt className="mr-1" /> },
  { href: '/experiences', label: 'Experiences', icon: <GiDesert className="mr-1" /> },
  { href: '/about', label: 'About Us', icon: <FaUserAlt className="mr-1" /> },
  { href: '/contact', label: 'Contact', icon: <FaPhoneAlt className="mr-1" /> },
];

const languages = [
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <nav className="bg-amber-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <GiMagicLamp className="text-2xl text-amber-300" />
            <span className="text-xl font-bold">Maroko Ekspert</span>
          </div>

          <div className="flex space-x-6">
            {navLinks.map(({ href, label, icon }) => (
              <Link key={href} href={href} className="flex items-center hover:text-amber-300 transition-colors">
                {icon} {label}
              </Link>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center hover:text-amber-300 transition-colors"
            >
              <FaGlobe className="mr-1" />
              <span>EN</span>
              <FaChevronDown className={`ml-1 transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language dropdown */}
            <div className={`absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50 ${languageOpen ? 'block' : 'hidden'}`}>
              {languages.map(({ code, label, flag }) => (
                <a key={code} href="#" className="block px-4 py-2 text-amber-900 hover:bg-amber-100 flex items-center">
                  <span className="mr-2">{flag}</span> {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <GiMagicLamp className="text-2xl text-amber-300" />
            <span className="text-xl font-bold">Maroko Ekspert</span>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden pb-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 mt-4">
            {navLinks.map(({ href, label, icon }) => (
              <Link 
                key={href}
                href={href}
                className="flex items-center py-2 px-4 hover:bg-amber-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {icon} {label}
              </Link>
            ))}

            {/* Language Mobile */}
            <div className="border-t border-amber-800 pt-4">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center w-full py-2 px-4 hover:bg-amber-800 rounded transition-colors"
              >
                <FaGlobe className="mr-3" />
                <span>Language (EN)</span>
                <FaChevronDown className={`ml-auto transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`pl-12 mt-2 space-y-2 ${languageOpen ? 'block' : 'hidden'}`}>
                {languages.map(({ code, label, flag }) => (
                  <a 
                    key={code}
                    href="#"
                    className="block py-2 px-4 hover:bg-amber-800 rounded transition-colors flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-2">{flag}</span> {label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
