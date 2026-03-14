import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.fleet"), href: "#fleet" },
    { label: t("nav.reviews"), href: "#reviews" },
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
              key={link.href}
              href={link.href}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
          <Button variant="gold" size="sm">
            {t("nav.bookNow")}
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <Button variant="gold" size="sm" className="w-full">
            {t("nav.bookNow")}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
