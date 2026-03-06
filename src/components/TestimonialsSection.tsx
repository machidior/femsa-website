import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote, 
  Trophy, 
  Flag,
  Play,
  Calendar,
  Building2,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    country: string;
    initials: string;
    avatar: string;
  };
  rating: number;
  result?: {
    metric: string;
    description: string;
  };
  featured?: boolean;
}

interface Award {
  id: number;
  name: string;
  body: string;
  year: string;
  icon: React.ReactNode;
}

interface Partner {
  id: number;
  name: string;
  initials: string;
  logo: string;
}

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "FEMSA's reliable supply of PET preforms and packaging materials has been crucial for our beverage production. Their cost-effective pricing and on-time delivery helped us reduce packaging costs by 25% while maintaining quality standards.",
      author: {
        name: "Joseph Mwangi",
        title: "Production Manager",
        company: "Tanzania Beverages Ltd",
        country: "Tanzania",
        initials: "JM",
        avatar: "JM"
      },
      rating: 5,
      result: {
        metric: "25% Cost Reduction",
        description: "Annual savings of TSh 45M"
      },
      featured: true
    },
    {
      id: 2,
      quote: "The injection molding machine we purchased through FEMSA has transformed our manufacturing capacity. Their technical support and equipment expertise helped us increase production efficiency by 40% within just 3 months.",
      author: {
        name: "Grace Nkya",
        title: "Operations Director",
        company: "Packaging Industries Tanzania",
        country: "Tanzania",
        initials: "GN",
        avatar: "GN"
      },
      rating: 5,
      result: {
        metric: "40% Efficiency Increase",
        description: "Production capacity doubled"
      },
      featured: true
    },
    {
      id: 3,
      quote: "FEMSA's one-stop procurement solution for all our plant supplies has been invaluable. From lubricants to spare parts, their comprehensive inventory and reliable delivery have reduced our procurement costs by 30%.",
      author: {
        name: "Abdul Hassan",
        title: "Plant Manager",
        company: "East Africa Processing",
        country: "Tanzania",
        initials: "AH",
        avatar: "AH"
      },
      rating: 5,
      result: {
        metric: "30% Procurement Savings",
        description: "TSh 15M annual savings"
      }
    },
    {
      id: 4,
      quote: "The quality control equipment we sourced through FEMSA has significantly improved our product standards. Their expertise in industrial equipment and after-sales support is exceptional.",
      author: {
        name: "Fatma Ali",
        title: "Quality Assurance Manager",
        company: "Zanzibar Food Products",
        country: "Tanzania",
        initials: "FA",
        avatar: "FA"
      },
      rating: 5,
      result: {
        metric: "99% Quality Score",
        description: "Zero customer complaints"
      }
    }
  ];

  const awards: Award[] = [
    {
      id: 1,
      name: "Trading Excellence Award",
      body: "Best Industrial Trading Company",
      year: "2023",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      id: 2,
      name: "Supply Chain Innovation",
      body: "Outstanding Procurement Solutions",
      year: "2022",
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Customer Success Leader",
      body: "94% Client Profitability Achievement",
      year: "2021",
      icon: <Star className="w-6 h-6" />
    }
  ];

  const partners: Partner[] = [
    { id: 1, name: "Tanzania Beverages Ltd", initials: "TB", logo: "TB" },
    { id: 2, name: "Packaging Industries TZ", initials: "PI", logo: "PI" },
    { id: 3, name: "East Africa Processing", initials: "EA", logo: "EA" },
    { id: 4, name: "Zanzibar Food Products", initials: "ZF", logo: "ZF" },
    { id: 5, name: "Industrial Supplies Ltd", initials: "IS", logo: "IS" },
    { id: 6, name: "Manufacturing Pro TZ", initials: "MP", logo: "MP" },
    { id: 7, name: "Quality Control Systems", initials: "QC", logo: "QC" },
    { id: 8, name: "Global Packaging Co", initials: "GP", logo: "GP" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isLoaded, isPaused]);

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center px-4 py-2 bg-orange-50 rounded-full mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Quote className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-semibold text-orange-700 tracking-wide uppercase">Client Success</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.1s' }}>
            Trusted by
            <span className="text-orange-500">Industry Leaders</span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.2s' }}>
            Real results from real businesses across Africa. Discover why 5,000+ companies trust FEMSA Group for their growth journey.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className={`mb-20 transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Quote */}
              <div>
                <Quote className="w-12 h-12 text-orange-400 mb-6" />
                <blockquote className="text-2xl font-medium leading-relaxed mb-8 text-gray-100">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[activeIndex].author.initials}
                      </div>
                      <div>
                        <div className="font-bold text-lg text-white">{testimonials[activeIndex].author.name}</div>
                        <div className="text-orange-400">{testimonials[activeIndex].author.title}</div>
                        <div className="text-gray-400 text-sm">{testimonials[activeIndex].author.company}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {renderStars(testimonials[activeIndex].rating)}
                    </div>
                  </div>
                  
                  <div className="w-px h-12 bg-gray-600"></div>
                  
                  <div className="flex-1">
                    {testimonials[activeIndex].result && (
                      <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/30">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-orange-400" />
                          <span className="text-orange-400 font-bold">{testimonials[activeIndex].result?.metric}</span>
                        </div>
                        <div className="text-gray-300 text-sm">{testimonials[activeIndex].result?.description}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right - Navigation */}
              <div className="text-center lg:text-right">
                <div className="flex items-center justify-center gap-2 mb-6 text-gray-400">
                  <button
                    onClick={() => goToTestimonial((activeIndex - 1 + testimonials.length) % testimonials.length)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  <div className="flex gap-1">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === activeIndex 
                            ? 'bg-orange-500 w-8' 
                            : 'bg-gray-600 hover:bg-orange-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={() => goToTestimonial((activeIndex + 1) % testimonials.length)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-gray-300 text-sm font-medium transition-colors duration-300 flex items-center gap-2"
                >
                  {isPaused ? <Play className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
                  {isPaused ? 'Play' : 'Pause'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden group ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
              onClick={() => setSelectedTestimonial(testimonial)}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center text-gray-600 font-bold">
                    {testimonial.author.initials}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.author.title}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">{testimonial.author.company}</div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className={`mb-20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Recognition & Awards</h3>
            <p className="text-lg text-gray-600">Industry recognition for our commitment to excellence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div
                key={award.id}
                className={`bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-500 group ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${1.4 + index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {award.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{award.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{award.body}</p>
                <div className="text-orange-500 font-semibold">{award.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Strip */}
        <div className={`bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.6s' }}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-300 text-lg">Partnering with excellence across sectors</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className={`text-center transition-all duration-500 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${1.8 + index * 0.05}s` }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-2 hover:bg-white/20 transition-colors duration-300">
                  {partner.initials}
                </div>
                <div className="text-sm text-gray-400 font-medium">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Detail Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedTestimonial(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    {selectedTestimonial.author.initials}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedTestimonial.author.name}</h3>
                    <p className="text-gray-600">{selectedTestimonial.author.title}</p>
                    <p className="text-orange-500 font-medium">{selectedTestimonial.author.company}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Testimonial</h4>
                  <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                    "{selectedTestimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-2 mt-6">
                    <span className="text-gray-600 font-medium">Rating:</span>
                    <div className="flex items-center gap-1">
                      {renderStars(selectedTestimonial.rating)}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Results</h4>
                  {selectedTestimonial.result && (
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="w-6 h-6 text-orange-500" />
                        <span className="text-orange-600 font-bold text-xl">{selectedTestimonial.result.metric}</span>
                      </div>
                      <p className="text-gray-700">{selectedTestimonial.result.description}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors duration-300">
                  Schedule Consultation
                </button>
                <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors duration-300">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
