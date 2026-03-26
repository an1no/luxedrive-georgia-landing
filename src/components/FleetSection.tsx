import { useLanguage } from "@/i18n/LanguageContext";
import minivanImg from "@/assets/minivan.png";
import jeepImg from "@/assets/jeep-final.png";

const FleetSection = () => {
  const { t } = useLanguage();

  const vehicles = [
    {
      id: "minivan",
      image: minivanImg,
      model: t("fleet.minivan.model"),
      desc: t("fleet.minivan.desc"),
    },
    {
      id: "jeep",
      image: jeepImg,
      model: t("fleet.jeep.model"),
      desc: t("fleet.jeep.desc"),
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-body">
            {t("fleet.tagline")}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            {t("fleet.title1")} <span className="text-primary">{t("fleet.title2")}</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed text-lg">
            {t("fleet.desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={vehicle.image}
                  alt={vehicle.model}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {vehicle.model}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                   {vehicle.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
