import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* CTA */}
          <div>
            <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-3">CONTACT US</p>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              Let's Collaborate
              <br />
              To Growth.
            </h3>
            <Button variant="cta" size="default">
              Schedule a Meeting →
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-4">QUICK LINKS</p>
            <nav className="flex flex-col gap-3">
              {["Home", "Our Team", "Our Services", "Company Story"].map((link) => (
                <a key={link} href="#" className="text-primary-foreground/70 hover:text-secondary text-sm transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Information */}
          <div>
            <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-4">INFORMATION</p>
            <nav className="flex flex-col gap-3">
              {["Terms Of Services", "Privacy Policy", "Cookie Setting"].map((link) => (
                <a key={link} href="#" className="text-primary-foreground/70 hover:text-secondary text-sm transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs">
            © Femsa Inc 2025 All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-primary-foreground/50 hover:text-secondary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
