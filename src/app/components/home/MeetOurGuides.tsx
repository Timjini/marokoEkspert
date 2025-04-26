import Image from 'next/image';
import React from 'react';
import { FaStar, FaLanguage } from 'react-icons/fa';

const GuideCard = ({ name, expertise, languages, imgSrc }: { name: string, expertise: string, languages: string[], imgSrc: string }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100">
    <div className="h-48 bg-amber-100 overflow-hidden">
        <Image src={imgSrc} alt={name} layout="fill" objectFit="cover" objectPosition="center" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-amber-900 mb-1">{name}</h3>
      <p className="text-amber-600 mb-3">{expertise}</p>
      
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="w-4 h-4 text-amber-400 fill-current" />
        ))}
      </div>
      
      <div className="flex items-center text-sm text-amber-700">
        <FaLanguage className="mr-2 text-amber-600" />
        <span>{languages.join(', ')}</span>
      </div>
    </div>
  </div>
);

export const MeetOurGuides: React.FC = () => {
  const guides = [
    {
      name: "Karim Belhaj",
      expertise: "Sahara Desert Specialist",
      languages: ["Polish", "English", "Arabic", "French"],
      imgSrc: "/guides/karim.jpg"
    },
    {
      name: "Amina Toufiq",
      expertise: "Marrakech Cultural Guide",
      languages: ["Polish", "English", "Arabic"],
      imgSrc: "/guides/amina.jpg"
    },
    {
      name: "Youssef El-Masri",
      expertise: "Atlas Mountain Trekker",
      languages: ["Polish", "English", "Berber"],
      imgSrc: "/guides/youssef.jpg"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
      {/* Moroccan pattern borders */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwIj48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYiPjwvcmVjdD48cGF0aCBkPSJNMCwwIEwxMCwxMCBNMTAsMCBMMCwxMCIgc3Ryb2tlPSIjZjU5ZTIzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Meet Our Expert Guides
          </h2>
          <p className="text-lg text-amber-700">
            Your personal connection to authentic Moroccan experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <GuideCard key={index} {...guide} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-amber-700 mb-6">
            All our Polish-speaking guides are certified professionals with extensive local knowledge
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform transition hover:scale-105">
            Learn About Our Guide Training
          </button>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwIj48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYiPjwvcmVjdD48cGF0aCBkPSJNMCwwIEwxMCwxMCBNMTAsMCBMMCwxMCIgc3Ryb2tlPSIjZjU5ZTIzIiB3aWR0aD0iMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
    </section>
  );
};