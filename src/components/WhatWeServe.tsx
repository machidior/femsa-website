import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import servicesImage from "@/assets/services-image.png";

const WhatWeServe = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description: "Expert guidance to navigate complex business challenges and drive growth"
    },
    {
      title: "Global Trading",
      description: "Comprehensive trading solutions across international markets"
    },
    {
      title: "Wealth Management",
      description: "Tailored financial strategies to secure and grow your assets"
    },
    {
      title: "Investment Solutions",
      description: "Diversified investment opportunities for sustainable returns"
    }
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute left-1/4 bottom-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm mb-3 uppercase tracking-wider">What We Serve</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Professional Services
            <br />
            <span className="text-secondary">For Global Success</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-3xl mx-auto">
            FEMSA Group delivers comprehensive trading solutions and wealth management services 
            that empower businesses and individuals to achieve their financial goals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                    <ChevronRight className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="cta" size="lg" className="px-8 py-6 text-base gap-2">
              Explore All Services <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="relative">
            <img
              src={servicesImage}
              alt="Trading services"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-primary-foreground/10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-primary-foreground/60 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">50+</div>
            <div className="text-primary-foreground/60 text-sm">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-primary-foreground/60 text-sm">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">10+</div>
            <div className="text-primary-foreground/60 text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeServe;
