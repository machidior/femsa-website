const stats = [
  { value: "5000+", label: "Delivery to more than 60+ countries worldwide" },
  { value: "90%", label: "Customer delivery satisfaction in Products and services" },
  { value: "85.88%", label: "Business partners with highest satisfaction index" },
  { value: "5000+", label: "Clients and partners in more than 50 countries worldwide" },
];

const EffectiveTrading = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/3 rounded-full blur-2xl"></div>
      
      {/* Decorative curves */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] opacity-20 pointer-events-none">
        <svg viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="220" stroke="hsl(24, 100%, 50%)" strokeWidth="3" />
          <circle cx="250" cy="250" r="170" stroke="hsl(24, 100%, 50%)" strokeWidth="2.5" />
          <circle cx="250" cy="250" r="120" stroke="hsl(24, 100%, 50%)" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-secondary font-semibold text-sm mb-3 uppercase tracking-wider">A Diversified</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Effective
            <br />
            <span className="text-secondary">Global Trading</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            All FEMSA Group ventures have been created to provide great solutions and results. 
            This is a result of being guided by a deep understanding of our clients and stakeholders.
          </p>
        </div>

        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-12">
          <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
            Our FEMSA ventures which include the products and services, are the embodiment of 
            innovation and creativity for all initiatives, ensuring the highest standards of 
            service and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-lg bg-background border border-border hover:border-secondary/50 transition-all group">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-secondary"></div>
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EffectiveTrading;
