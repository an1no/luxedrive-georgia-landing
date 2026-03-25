import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations } from "./translations";
import { countryToLanguage, detectLanguageFromBrowser } from "./languageDetection";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "preferred_language";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Respect previously saved user preference
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && translations[stored]) {
      setLanguageState(stored);
      return;
    }

    // Auto-detect by IP geolocation
    fetch("https://api.country.is/")
      .then((res) => {
        if (!res.ok) throw new Error("Geolocation response not OK");
        return res.json();
      })
      .then((data: { country?: string }) => {
        const country = (data?.country ?? "").toUpperCase();
        const detected = countryToLanguage[country] ?? detectLanguageFromBrowser();
        setLanguageState(detected);
      })
      .catch(() => {
        // Fall back to browser language preference
        setLanguageState(detectLanguageFromBrowser());
      });
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
