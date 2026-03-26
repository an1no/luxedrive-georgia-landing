import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
          {t("hero.tagline")}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
          {t("hero.title1")}{" "}
          <span className="text-primary">{t("hero.title2")}</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-body mb-10 max-w-xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <Button variant="gold" size="lg" className="text-base px-10 py-6" asChild>
          <a href="https://wa.me/995511134449" target="_blank" rel="noopener noreferrer">
            {t("hero.cta")}
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
