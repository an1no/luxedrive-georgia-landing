import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Fleet", href: "#fleet" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-display text-xl font-bold tracking-wide text-foreground">
          <span className="text-primary">Luxe</span>Drive
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <Button variant="gold" size="sm">
            Book Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <Button variant="gold" size="sm" className="w-full">
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
