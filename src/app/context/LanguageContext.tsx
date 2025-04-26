// context/LanguageContext.tsx
'use client';  // Ensures this context is only used on the client side

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextProps {
  lang: string;
  setLang: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = (): LanguageContextProps | null => {
  const context = useContext(LanguageContext);
  return context || null;
};

export const LanguageProvider: React.FC<React.PropsWithChildren<object>> = ({ children }) => {
  const [lang, setLang] = useState<string>('en');

  useEffect(() => {
    const queryParamLang = new URLSearchParams(window.location.search).get('lang');
    if (queryParamLang) {
      setLang(queryParamLang);
    } else {
      const storedLang = localStorage.getItem('lang') || 'en';
      setLang(storedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
