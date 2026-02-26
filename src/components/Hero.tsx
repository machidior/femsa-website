import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-primary min-h-screen overflow-hidden flex items-center">
      {/* Globe background */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <svg
          viewBox="0 0 800 800"
          className="w-[700px] h-[700px] lg:w-[900px] lg:h-[900px] -mr-20 lg:-mr-10 opacity-[0.12]"
          fill="none"
        >
          {/* Globe circle */}
          <circle cx="400" cy="400" r="350" stroke="hsl(210, 60%, 70%)" strokeWidth="1.5" />
          {/* Latitude lines */}
          <ellipse cx="400" cy="400" rx="350" ry="120" stroke="hsl(210, 60%, 70%)" strokeWidth="1" />
          <ellipse cx="400" cy="400" rx="350" ry="220" stroke="hsl(210, 60%, 70%)" strokeWidth="1" />
          <ellipse cx="400" cy="400" rx="350" ry="310" stroke="hsl(210, 60%, 70%)" strokeWidth="0.8" />
          {/* Longitude lines */}
          <ellipse cx="400" cy="400" rx="120" ry="350" stroke="hsl(210, 60%, 70%)" strokeWidth="1" />
          <ellipse cx="400" cy="400" rx="220" ry="350" stroke="hsl(210, 60%, 70%)" strokeWidth="1" />
          <ellipse cx="400" cy="400" rx="310" ry="350" stroke="hsl(210, 60%, 70%)" strokeWidth="0.8" />
          {/* Continents - simplified shapes */}
          {/* Africa */}
          <path d="M420 250 C430 260, 450 280, 445 320 C440 360, 430 400, 420 430 C410 450, 400 460, 395 440 C390 420, 385 380, 390 340 C395 300, 410 260, 420 250Z" fill="hsl(210, 50%, 55%)" opacity="0.4" />
          {/* Europe */}
          <path d="M380 200 C400 195, 420 200, 430 210 C440 220, 435 240, 420 250 C410 255, 390 250, 380 240 C370 230, 370 210, 380 200Z" fill="hsl(210, 50%, 55%)" opacity="0.4" />
          {/* South America */}
          <path d="M280 350 C290 340, 310 330, 320 350 C330 370, 325 420, 310 460 C300 480, 285 490, 275 470 C265 450, 270 380, 280 350Z" fill="hsl(210, 50%, 55%)" opacity="0.3" />
          {/* North America */}
          <path d="M200 200 C230 180, 280 170, 310 190 C340 210, 340 250, 320 280 C300 300, 260 310, 240 290 C220 270, 190 230, 200 200Z" fill="hsl(210, 50%, 55%)" opacity="0.3" />
          {/* Asia */}
          <path d="M460 200 C500 190, 550 200, 580 230 C600 250, 590 290, 560 310 C530 330, 490 320, 470 290 C450 260, 440 220, 460 200Z" fill="hsl(210, 50%, 55%)" opacity="0.3" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-2xl space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] italic">
            Stronger Together.
            <br />
            Always Moving
            <br />
            Forward!
          </h1>

          <p className="text-primary-foreground/70 text-sm md:text-base max-w-lg leading-relaxed">
            Femsa Group Limited empowers businesses with innovative solutions, strategic guidance, and resources, driving sustainable growth, trust, and long-term success.
          </p>

          <div className="flex items-center gap-5 pt-4">
            <Button variant="hero" size="lg" className="gap-2 rounded-lg">
              Explore More <ArrowRight className="w-4 h-4" />
            </Button>
            <button className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center hover:bg-orange-light transition-colors shadow-lg ring-4 ring-secondary/30">
              <Play className="w-5 h-5 text-secondary-foreground fill-current ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
