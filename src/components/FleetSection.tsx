import { Check } from "lucide-react";
import fleetImg from "@/assets/fleet-minivan.jpg";

const features = [
  "Spacious legroom",
  "Climate control",
  "Spotless interior",
  "Complimentary Wi-Fi and water",
];

const FleetSection = () => {
  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text */}
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-body">
              Our Fleet
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              7-Seater Premium{" "}
              <span className="text-primary">Black Minivan</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Travel in style with our meticulously maintained premium minivan,
              designed for comfort on Georgia's most scenic routes.
            </p>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="text-primary" size={14} />
                  </div>
                  <span className="text-secondary-foreground font-body">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
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
