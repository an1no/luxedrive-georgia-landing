import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              <span className="text-primary">Luxe</span>Drive Georgia
            </h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-primary font-body mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:luxedrivegeorgia@gmail.com" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                  <Mail size={14} />
                  luxedrivegeorgia@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/995555000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                  <Phone size={14} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-primary font-body mb-4">
              {t("footer.follow")}
            </h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} LuxeDrive Georgia. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
