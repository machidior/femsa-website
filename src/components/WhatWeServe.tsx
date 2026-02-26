import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import servicesImage from "@/assets/services-image.png";

const WhatWeServe = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <p className="text-secondary font-semibold text-sm mb-2">What</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            we <span className="text-secondary">Serve</span>
          </h2>
        </div>

        <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-foreground/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground leading-tight">
                Professional
                <br />
                Global Trading
                <br />
                Services
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                FEMSA Group is a leading corporate enterprise dedicated
                to providing comprehensive trading solutions and wealth
                management services that empower businesses and individuals
                alike. Specializing in creating, distributing, and managing 
                sophisticated financial products, FEMSA Group partners with clients
                to optimize their portfolios and achieve long-term financial
                success. With a focus on global markets, FEMSA Group offers
                tailored solutions for the modern, international landscape,
                bridging the gap between traditional trade and
                contemporary wealth management practices.
              </p>
              <Button variant="cta" size="lg">
                Read More
              </Button>
            </div>

            <div className="relative">
              <img
                src={servicesImage}
                alt="Trading services"
                className="rounded-xl shadow-2xl w-full"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <ChevronRight className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-8 h-2 rounded-full bg-secondary" />
            <div className="w-2 h-2 rounded-full bg-primary-foreground/30" />
            <div className="w-2 h-2 rounded-full bg-primary-foreground/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeServe;
