import React from 'react';

const AboutSection: React.FC = () => {

  const content = {
    title: "Experience the Magic of Morocco",
    description: "At Maroko Ekspert, we specialize in authentic Moroccan adventures...",
    companyName: "Maroko Ekspert",
    highlightText: "Now available in your native language!",
    images: {
      decorative: "/images/moroccan-pattern.png",
      icon: "/images/language-icon.svg"
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-amber-50 to-amber-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      {/* Moroccan pattern border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwIj48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYiPjwvcmVjdD48cGF0aCBkPSJNMCwwIEwxMCwxMCBNMTAsMCBMMCwxMCIgc3Ryb2tlPSIjZjU5ZTIzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            <span className="inline-block relative">
              {content.title}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 transform -translate-y-1"></span>
            </span>
          </h2>
          
          {/* Main content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg border border-amber-200 mb-8">
            <p>
              {content.description.replace(
                content.companyName, 
                `<strong>${content.companyName}</strong>`
              )}
            </p>
            
            {/* Polish language highlight */}
            <div className="inline-flex items-center bg-gradient-to-r from-amber-400 to-amber-500 text-white px-6 py-3 rounded-full shadow-md transform transition hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="font-semibold">
                {content.highlightText}
              </span>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className={`w-3 h-3 rounded-full ${item % 2 === 0 ? 'bg-amber-400' : 'bg-blue-400'}`}></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwIj48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYiPjwvcmVjdD48cGF0aCBkPSJNMCwwIEwxMCwxMCBNMTAsMCBMMCwxMCIgc3Ryb2tlPSIjZjU5ZTIzIiB3aWR0aD0iMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
    </section>
  );
};

export default AboutSection;