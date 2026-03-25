import type { Language } from "./translations";

// Map ISO 3166-1 alpha-2 country codes to supported languages
export const countryToLanguage: Record<string, Language> = {
  // Chinese-speaking regions
  CN: "zh", TW: "zh", HK: "zh", MO: "zh",
  // Russian-speaking regions
  RU: "ru", BY: "ru", KZ: "ru", KG: "ru", TJ: "ru", TM: "ru", UZ: "ru",
  AM: "ru", AZ: "ru", MD: "ru",
  // Spanish-speaking regions
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es",
  EC: "es", BO: "es", PY: "es", UY: "es", CU: "es", DO: "es", GT: "es",
  HN: "es", SV: "es", NI: "es", CR: "es", PA: "es", GQ: "es",
  // Italian-speaking regions
  IT: "it", SM: "it", VA: "it",
  // Georgian
  GE: "ka",
};

// Detect language from browser settings as a fallback
export const detectLanguageFromBrowser = (): Language => {
  const browserLang = navigator.language.split("-")[0].toLowerCase();
  const supported: Record<string, Language> = {
    zh: "zh",
    ru: "ru",
    es: "es",
    it: "it",
    ka: "ka",
    en: "en",
  };
  return supported[browserLang] ?? "en";
};
