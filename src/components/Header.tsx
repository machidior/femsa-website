import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-secondary-foreground font-bold text-xs">F</span>
          </div>
          <span className="text-primary-foreground font-bold text-xl tracking-tight">femsa</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Services", "About Us", "Contacts"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-primary-foreground/90 hover:text-secondary text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2">
            <Search className="w-5 h-5" />
          </button>
          <Button variant="navCta" size="sm">
            Book a demo
          </Button>
        </div>

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

      {mobileOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm border-t border-primary-foreground/10">
          <nav className="flex flex-col p-4 gap-3">
            {["Home", "Services", "About Us", "Contacts"].map((item) => (
              <a key={item} href="#" className="text-primary-foreground/90 hover:text-secondary text-sm font-medium py-2">
                {item}
              </a>
            ))}
            <Button variant="navCta" size="sm" className="mt-2 w-fit">
              Book a demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
