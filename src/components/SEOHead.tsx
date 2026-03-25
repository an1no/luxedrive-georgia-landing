import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";
import { seoData } from "@/seo/seoData";
import { Language } from "@/i18n/translations";

const BASE_URL = "https://an1no.github.io/luxedrive-georgia-landing";

const LANG_CODES: Record<Language, string> = {
  en: "en",
  ka: "ka",
  ru: "ru",
  zh: "zh",
  es: "es",
  it: "it",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${BASE_URL}/#organization`,
      name: "Midi Travel Georgia",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.svg`,
      image: `${BASE_URL}/hero-bg.jpg`,
      description:
        "Premium private tours and VIP transportation across Georgia.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "GE",
        addressLocality: "Tbilisi",
      },
      areaServed: {
        "@type": "Country",
        name: "Georgia",
      },
      serviceType: [
        "Private Tours",
        "VIP Airport Transfers",
        "Executive Transport",
      ],
      priceRange: "$$",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["English", "Georgian", "Russian"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Midi Travel Georgia",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      inLanguage: ["en", "ka", "ru", "zh", "es", "it"],
    },
    {
      "@type": "TouristTrip",
      name: "Private Georgia Tour",
      description:
        "Private tailored tours across Georgia including Kazbegi, Kakheti, Tbilisi, and the Black Sea coast.",
      touristType: ["luxury traveler", "business traveler", "cultural tourist"],
      provider: {
        "@id": `${BASE_URL}/#organization`,
      },
    },
  ],
};

export function SEOHead() {
  const { language } = useLanguage();
  const data = seoData[language];

  const allKeywords = data.keywords.join(", ");

  const canonicalUrl = `${BASE_URL}/`;

  return (
    <Helmet>
      <html lang={LANG_CODES[language]} />
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={data.ogTitle} />
      <meta property="og:description" content={data.ogDescription} />
      <meta property="og:locale" content={data.locale} />
      <meta
        property="og:image"
        content={`${BASE_URL}/hero-bg.jpg`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Midi Travel Georgia" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MidiTravelGeorgia" />
      <meta name="twitter:title" content={data.twitterTitle} />
      <meta name="twitter:description" content={data.twitterDescription} />
      <meta
        name="twitter:image"
        content={`${BASE_URL}/hero-bg.jpg`}
      />

      {/* hreflang alternates */}
      {(Object.keys(LANG_CODES) as Language[]).map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={LANG_CODES[lang]}
          href={canonicalUrl}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
