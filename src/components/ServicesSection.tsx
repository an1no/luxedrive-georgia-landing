import { MapPin, Plane, Shield } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: MapPin, title: t("services.tour.title"), description: t("services.tour.desc") },
    { icon: Plane, title: t("services.airport.title"), description: t("services.airport.desc") },
    { icon: Shield, title: t("services.executive.title"), description: t("services.executive.desc") },
  ];

  return (
    <section id="services" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <p className="text-primary text-sm uppercase tracking-[0.3em] text-center mb-3 font-body">
          {t("services.tagline")}
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-16">
          {t("services.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-gold)]"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
