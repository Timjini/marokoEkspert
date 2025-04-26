'use client';

import { useLanguage } from '@/app/context/LanguageContext';

const LanguageSwitcher: React.FC<{ setLanguageOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setLanguageOpen }) => {
  const languageContext = useLanguage();
  if (!languageContext) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  const { lang, setLang } = languageContext;

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  ];

  const changeLanguage = (newLang: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url);
    setLang(newLang);
    setLanguageOpen(false);
  };

  return (
    <div className="absolute right-0 mt-2 w-48 shadow-lg rounded-lg z-10">
      {languages.map(({ code, label, flag }) => (
        <a
          key={code}
          onClick={() => changeLanguage(code)}
          href="#"
          className={`block px-4 py-2 text-amber-900 items-center hover:bg-amber-100 ${
            code === lang ? 'bg-amber-200' : ''
          }`}
        >
          <span className="mr-2">{flag}</span> {label}
        </a>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
