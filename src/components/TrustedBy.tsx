import cocaLogo from "@/assets/coca.png";
import uberLogo from "@/assets/uber.png";
import vodacomLogo from "@/assets/vodacom.png";
import ajaLogo from "@/assets/aja.png";
import autotronicsLogo from "@/assets/autotronics.png";

const TrustedBy = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Trusted By Leading Companies
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            We partner with industry leaders to deliver exceptional results and drive mutual success
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          <div className="flex items-center justify-center">
            <img
              src={cocaLogo}
              alt="Coca-Cola"
              className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={uberLogo}
              alt="Uber"
              className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={vodacomLogo}
              alt="Vodacom"
              className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={ajaLogo}
              alt="AJA"
              className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={autotronicsLogo}
              alt="Autotronics"
              className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
