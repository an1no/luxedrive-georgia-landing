import { MapPin, Plane, Shield } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Private Tailored Tours",
    description:
      "Explore Kazbegi, Kakheti, and beyond at your own pace with a dedicated driver.",
  },
  {
    icon: Plane,
    title: "VIP Airport Transfers",
    description:
      "Punctual, stress-free pickups and drop-offs from Tbilisi, Kutaisi, or Batumi airports.",
  },
  {
    icon: Shield,
    title: "Executive Transport",
    description:
      "Spotless, high-end minivans for business meetings, delegations, or maximum privacy.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <p className="text-primary text-sm uppercase tracking-[0.3em] text-center mb-3 font-body">
          What We Offer
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-16">
          Our Premium Services
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
