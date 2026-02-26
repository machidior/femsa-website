import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", active: true },
    { label: "Services", active: false },
    { label: "About Us", active: false },
    { label: "Contacts", active: false },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-6 px-4 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-primary-foreground">
            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 20 + 10 * Math.cos(angle);
              const y1 = 20 + 10 * Math.sin(angle);
              const x2 = 20 + 16 * Math.cos(angle);
              const y2 = 20 + 16 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" />;
            })}
            <circle cx="20" cy="20" r="5" fill="currentColor" />
          </svg>
          <span className="text-primary-foreground font-bold text-2xl tracking-tight">femsa</span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium transition-colors pb-1 ${
                item.active ? "border-b-2 border-secondary" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:border-primary-foreground/60 transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <Button variant="navCta" size="default" className="rounded-lg px-6 gap-2">
            Quick Access <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="space-y-1.5">
            <div className="w-6 h-0.5 bg-current" />
            <div className="w-6 h-0.5 bg-current" />
            <div className="w-6 h-0.5 bg-current" />
          </div>
        </button>
      </div>

      {/* Separator line */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-px bg-primary-foreground/15" />
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm">
          <nav className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <a key={item.label} href="#" className={`text-primary-foreground/90 text-sm font-medium py-2 ${item.active ? "text-secondary" : ""}`}>
                {item.label}
              </a>
            ))}
            <Button variant="navCta" size="sm" className="mt-2 w-fit gap-2">
              Quick Access <ArrowRight className="w-4 h-4" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
