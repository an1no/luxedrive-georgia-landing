import { Check } from "lucide-react";
import fleetImg from "@/assets/fleet-minivan.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const FleetSection = () => {
  const { t } = useLanguage();

  const features = [t("fleet.f1"), t("fleet.f2"), t("fleet.f3"), t("fleet.f4")];

  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-body">
              {t("fleet.tagline")}
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              {t("fleet.title1")}{" "}
              <span className="text-primary">{t("fleet.title2")}</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              {t("fleet.desc")}
            </p>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="text-primary" size={14} />
                  </div>
                  <span className="text-secondary-foreground font-body">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src={fleetImg}
              alt="Premium 7-seater black minivan interior and exterior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
