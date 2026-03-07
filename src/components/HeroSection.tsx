import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
          Premium Transportation in Georgia
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
          Experience Georgia in{" "}
          <span className="text-primary">Premium Comfort</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-body mb-10 max-w-xl mx-auto">
          Private tours and VIP transfers with professional drivers.
        </p>
        <Button variant="gold" size="lg" className="text-base px-10 py-6">
          Plan Your Journey
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
