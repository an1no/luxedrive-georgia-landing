import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const reviews = [
  {
    name: "James W.",
    location: "United Kingdom",
    text: "Absolutely outstanding service. The driver was professional, punctual, and the minivan was immaculate. Our Kazbegi trip was unforgettable.",
  },
  {
    name: "Sophie L.",
    location: "France",
    text: "We booked a full-day Kakheti wine tour. Everything was perfectly organized — comfortable ride, great recommendations, and very fair pricing.",
  },
  {
    name: "Marco R.",
    location: "Germany",
    text: "Used Midi Travel for an airport transfer and a 3-day tour. Exceptional quality both times. Highly recommend for anyone visiting Georgia.",
  },
];

const ReviewsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <p className="text-primary text-sm uppercase tracking-[0.3em] text-center mb-3 font-body">
          {t("reviews.tagline")}
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-16">
          {t("reviews.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-card border border-border rounded-lg p-8 transition-all duration-300 hover:border-primary/40"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-secondary-foreground font-body text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div>
                <p className="text-foreground font-body font-semibold text-sm">{review.name}</p>
                <p className="text-muted-foreground font-body text-xs">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
