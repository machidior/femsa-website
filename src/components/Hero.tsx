import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroPeople from "@/assets/hero-people.png";

const Hero = () => {
  return (
    <section className="relative bg-primary min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* World map background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="mapGlow" cx="30%" cy="50%" r="60%">
              <stop offset="0%" stopColor="hsl(233, 63%, 40%)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect fill="url(#mapGlow)" width="1200" height="600" />
          {/* Simplified world map dots */}
          {Array.from({ length: 80 }).map((_, i) => (
            <circle
              key={i}
              cx={100 + (i % 20) * 55}
              cy={80 + Math.floor(i / 20) * 120 + Math.sin(i) * 40}
              r={1.5 + Math.random() * 2}
              fill="hsl(233, 63%, 60%)"
              opacity={0.3 + Math.random() * 0.5}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-28 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              <span className="italic">Stronger Together.</span>
              <br />
              Always Moving
              <br />
              Forward!
            </h1>
            <p className="text-primary-foreground/70 text-sm md:text-base max-w-md leading-relaxed">
              Femsa Group Limited, a dynamic and diversified corporation committed to delivering innovative solutions for clients, building value for stakeholders, businesses, and communities. Built on a foundation of integrity, collaboration, and trust.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Button variant="hero" size="lg">
                Discover More
              </Button>
              <button className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-orange-light transition-colors shadow-lg">
                <Play className="w-5 h-5 text-secondary-foreground fill-current" />
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <img
              src={heroPeople}
              alt="FEMSA Group professionals"
              className="max-w-md xl:max-w-lg object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60L1440 60L1440 0C1440 0 1080 40 720 40C360 40 0 0 0 0L0 60Z" fill="hsl(0, 0%, 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
