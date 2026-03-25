import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { countryToLanguage, detectLanguageFromBrowser } from "@/i18n/languageDetection";

describe("countryToLanguage", () => {
  it("maps China to Chinese", () => {
    expect(countryToLanguage["CN"]).toBe("zh");
  });

  it("maps Hong Kong to Chinese", () => {
    expect(countryToLanguage["HK"]).toBe("zh");
  });

  it("maps Russia to Russian", () => {
    expect(countryToLanguage["RU"]).toBe("ru");
  });

  it("maps Kazakhstan to Russian", () => {
    expect(countryToLanguage["KZ"]).toBe("ru");
  });

  it("maps Spain to Spanish", () => {
    expect(countryToLanguage["ES"]).toBe("es");
  });

  it("maps Mexico to Spanish", () => {
    expect(countryToLanguage["MX"]).toBe("es");
  });

  it("maps Italy to Italian", () => {
    expect(countryToLanguage["IT"]).toBe("it");
  });

  it("maps Georgia to Georgian", () => {
    expect(countryToLanguage["GE"]).toBe("ka");
  });

  it("does not have a mapping for unknown countries", () => {
    expect(countryToLanguage["US"]).toBeUndefined();
    expect(countryToLanguage["GB"]).toBeUndefined();
    expect(countryToLanguage["DE"]).toBeUndefined();
  });
});

describe("detectLanguageFromBrowser", () => {
  const originalLanguage = navigator.language;

  beforeEach(() => {
    Object.defineProperty(navigator, "language", {
      configurable: true,
      writable: true,
      value: originalLanguage,
    });
  });

  afterEach(() => {
    Object.defineProperty(navigator, "language", {
      configurable: true,
      writable: true,
      value: originalLanguage,
    });
  });

  it("returns English for 'en' browser locale", () => {
    Object.defineProperty(navigator, "language", { value: "en-US", configurable: true });
    expect(detectLanguageFromBrowser()).toBe("en");
  });

  it("returns Russian for 'ru' browser locale", () => {
    Object.defineProperty(navigator, "language", { value: "ru-RU", configurable: true });
    expect(detectLanguageFromBrowser()).toBe("ru");
  });

  it("returns Chinese for 'zh' browser locale", () => {
    Object.defineProperty(navigator, "language", { value: "zh-CN", configurable: true });
    expect(detectLanguageFromBrowser()).toBe("zh");
  });

  it("returns Spanish for 'es' browser locale", () => {
    Object.defineProperty(navigator, "language", { value: "es-ES", configurable: true });
    expect(detectLanguageFromBrowser()).toBe("es");
  });

  it("returns Italian for 'it' browser locale", () => {
    Object.defineProperty(navigator, "language", { value: "it-IT", configurable: true });
    expect(detectLanguageFromBrowser()).toBe("it");
  });

  it("defaults to English for 'ka' browser locale (Georgian not auto-selected)", () => {
    Object.defineProperty(navigator, "language", { value: "ka-GE", configurable: true });
    expect(detectLanguageFromBrowser()).toBe("en");
  });

  it("defaults to English for unsupported browser locale", () => {
    Object.defineProperty(navigator, "language", { value: "de-DE", configurable: true });
    expect(detectLanguageFromBrowser()).toBe("en");
  });
});
