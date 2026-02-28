const stats = [
  { value: "5000+", label: "Delivery to more than 60+ countries worldwide" },
  { value: "90%", label: "Customer delivery satisfaction in Products and services" },
  { value: "85.88%", label: "Most of our university of businesses with the highest satisfaction index" },
  { value: "5000+", label: "Clients and partners in more than 50 countries worldwide" },
];

const EffectiveTrading = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative orange curves */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] opacity-30 pointer-events-none">
        <svg viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="220" stroke="hsl(24, 100%, 50%)" strokeWidth="3" />
          <circle cx="250" cy="250" r="170" stroke="hsl(24, 100%, 50%)" strokeWidth="2.5" />
          <circle cx="250" cy="250" r="120" stroke="hsl(24, 100%, 50%)" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-secondary font-semibold text-sm mb-2">A Diversified</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Effective
            <br />
            <span className="text-secondary">Global Trading</span>
          </h2>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed max-w-4xl mb-12">
          All FEMSA Group ventures have been created to provide great
          solutions and results. This is a result of being guided by a
          deep understanding of our clients and stakeholders. Our FEMSA
          ventures which include the products and services, are the
          embodiment of innovation and creativity for all initiatives,
          ensuring the highest standards of service and operational
          excellence.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="border-l-4 border-secondary pl-4">
              <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EffectiveTrading;
