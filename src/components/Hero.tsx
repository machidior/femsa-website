import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import globe from "@/assets/globe.png";
import heroPeople from "@/assets/hero-people.png";

const Hero = () => {
  return (
    <section className="relative bg-primary min-h-screen overflow-hidden flex items-center">
      {/* Globe image */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 pointer-events-none">
        <img
          src={globe}
          alt=""
          className="w-[600px] md:w-[750px] lg:w-[900px] xl:w-[1000px] opacity-[0.2] object-contain"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
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

          {/* Hero people image */}
          <div className="hidden lg:flex justify-end">
            <img
              src={heroPeople}
              alt="FEMSA professionals"
              className="w-full max-w-md xl:max-w-lg object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
