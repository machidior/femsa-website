import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";

const testimonials = [
  {
    image: testimonial1,
    label: "SHIPPING",
    quote: "They consistently deliver high-quality services, earning our trust every step",
    name: "Joseph Khema, CEO, Marina Logistics Tanzania",
  },
  {
    image: testimonial2,
    label: "AGRICULTURE",
    quote: "FEMS Group have been incredible partners for us, and our relationship is growing seamlessly",
    name: "Sara Jones, Director, Agri-World",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Words
            <br />
            <span className="text-secondary">from them</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex gap-6 items-start">
              <img
                src={t.image}
                alt={t.name}
                className="w-32 h-40 object-cover rounded-lg shadow-lg flex-shrink-0"
              />
              <div className="space-y-3 pt-2">
                <span className="text-secondary text-xs font-bold uppercase tracking-wider">
                  {t.label}
                </span>
                <p className="text-foreground font-semibold text-base leading-snug">
                  "{t.quote}"
                </p>
                <p className="text-secondary text-xs font-medium">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
