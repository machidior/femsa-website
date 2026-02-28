import { CheckCircle } from "lucide-react";

const TrustedBy = () => {
  return (
    <section className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-muted-foreground text-sm text-center mb-8">Trusted By</p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {/* Coca-Cola style */}
          <span className="text-foreground/70 text-2xl md:text-3xl italic font-bold tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
            Coca-Cola
          </span>
          {/* Uber style */}
          <span className="text-foreground/70 text-xl md:text-2xl font-black tracking-tight">
            Uber
          </span>
          {/* Vodacom style */}
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-5 h-5 text-destructive" />
            <span className="text-foreground/70 text-xl md:text-2xl font-bold">
              vodacom
            </span>
          </div>
          {/* AJA style */}
          <span className="text-foreground/70 text-xl md:text-2xl font-extrabold tracking-widest uppercase">
            AJA
          </span>
          {/* Autotronics style */}
          <div className="flex flex-col items-center leading-none">
            <span className="text-foreground/70 text-base md:text-lg font-extrabold tracking-[0.2em] uppercase">
              AUTOTRONICS
            </span>
            <span className="text-foreground/50 text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold">
              SOLUTION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
