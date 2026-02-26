const logos = [
  { name: "Coca-Cola", text: "Coca-Cola" },
  { name: "Uber", text: "Uber" },
  { name: "Vodacom", text: "Vodacom" },
  { name: "AJA", text: "AJA" },
  { name: "Autotronics", text: "AUTOTRONICS SOLUTION" },
];

const TrustedBy = () => {
  return (
    <section className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-muted-foreground text-sm text-center mb-8">Trusted By</p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center">
              <span className="text-foreground/60 font-bold text-lg md:text-xl tracking-wide">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
