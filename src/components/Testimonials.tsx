import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    image: testimonial1,
    label: "SHIPPING",
    quote: "They consistently deliver high-quality services, earning our trust every step of the way. Their professionalism and attention to detail are unmatched.",
    name: "Joseph Khema",
    title: "CEO, Marina Logistics Tanzania",
    rating: 5
  },
  {
    image: testimonial2,
    label: "AGRICULTURE",
    quote: "FEMSA Group have been incredible partners for us, and our relationship is growing seamlessly. They understand our needs perfectly.",
    name: "Sara Jones",
    title: "Director, Agri-World",
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Words
            <br />
            <span className="text-secondary">from them</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear what our valued clients and partners have to say about their experience working with FEMSA Group
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 object-cover rounded-xl shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-secondary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-secondary text-xs font-bold uppercase tracking-wider">
                      {t.label}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-foreground leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                  
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional testimonial highlight */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-secondary/30 border-2 border-background"></div>
              <div className="w-8 h-8 rounded-full bg-secondary/40 border-2 border-background"></div>
              <div className="w-8 h-8 rounded-full bg-secondary/50 border-2 border-background"></div>
            </div>
            <span className="text-sm text-muted-foreground">
              Join <span className="font-semibold text-secondary">500+</span> satisfied clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
