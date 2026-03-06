import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Globe, Ship, Plane, Truck, BarChart3, Shield, TrendingUp, Users, FileText, Phone, Mail, MapPin, CheckCircle2, Star, Award, Target, Building2, Clock, Navigation, Package, Warehouse, Anchor, Compass } from 'lucide-react';

const GlobalTrading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const tradingServices = [
    {
      id: 'sea-freight',
      icon: <Ship className="w-6 h-6" />,
      title: 'Ocean Freight Solutions',
      description: 'Strategic maritime logistics optimized for cost-efficiency and reliability',
      features: [
        'Full Container Load (FCL) services',
        'Less than Container Load (LCL) consolidation',
        'Refrigerated cargo (Reefer) handling',
        'Project cargo & oversized freight',
        'Hazardous materials transport',
        'Port-to-door delivery solutions'
      ],
      benefits: ['40% cost reduction vs competitors', '99.8% on-time delivery', 'Real-time vessel tracking'],
      certifications: ['ISO 9001:2015', 'IMO certified', 'Dangerous Goods certified'],
      price: 'Starting from $1,200/TEU',
      transitTime: '14-45 days',
      coverage: '150+ global ports'
    },
    {
      id: 'air-freight',
      icon: <Plane className="w-6 h-6" />,
      title: 'Air Cargo Excellence',
      description: 'Time-critical air freight solutions for high-value and perishable goods',
      features: [
        'Express air freight services',
        'Charter flight arrangements',
        'Temperature-controlled transport',
        'Dangerous goods handling',
        'Pharmaceutical logistics',
        'Secure cargo services'
      ],
      benefits: ['24-48 hour delivery', 'Global network coverage', 'Specialized handling'],
      certifications: ['IATA certified', 'GDP certified', 'TSA approved'],
      price: 'Starting from $3.50/kg',
      transitTime: '24-72 hours',
      coverage: '200+ destinations'
    },
    {
      id: 'land-transport',
      icon: <Truck className="w-6 h-6" />,
      title: 'Ground Transportation',
      description: 'Comprehensive land freight solutions across African road and rail networks',
      features: [
        'Cross-border trucking services',
        'Rail freight partnerships',
        'Last-mile delivery networks',
        'Warehousing & distribution',
        'Customs clearance services',
        'Fleet management solutions'
      ],
      benefits: ['Pan-African coverage', 'Integrated tracking', 'Cost-effective solutions'],
      certifications: ['Cross-border permits', 'Quality certified', 'Safety compliant'],
      price: 'Starting from $0.80/km',
      transitTime: '1-14 days',
      coverage: '25+ African countries'
    }
  ];

  const enterpriseFeatures = [
    {
      icon: <Navigation className="w-8 h-8" />,
      title: 'Global Network',
      description: 'Access to 500+ ports and 200+ airports worldwide',
      highlight: 'Strategic partnerships with major carriers'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Risk Management',
      description: 'Comprehensive insurance and compliance solutions',
      highlight: '100% cargo protection guaranteed'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Cost Optimization',
      description: 'AI-powered route optimization and cost analysis',
      highlight: 'Average 35% savings for clients'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Enterprise Integration',
      description: 'Seamless ERP and supply chain system integration',
      highlight: 'API-first architecture'
    }
  ];

  const caseStudies = [
    {
      company: 'AfriTech Manufacturing',
      industry: 'Technology Manufacturing',
      revenue: '$500M+',
      challenge: 'Complex multi-country supply chain with 5 sourcing countries and 12 distribution markets',
      solution: 'Implemented consolidated shipping solution with integrated customs clearance and real-time tracking',
      results: ['40% logistics cost reduction', '30% faster time-to-market', '100% compliance rate', 'Expanded to 8 new markets'],
      testimonial: 'FEMSA transformed our supply chain from a liability to a competitive advantage.',
      metrics: {
        costSavings: '$2.5M annually',
        efficiency: '45% improvement',
        compliance: '100%',
        markets: '8 new countries'
      },
      image: 'AT'
    },
    {
      company: 'Global Retail Chain',
      industry: 'Retail & Distribution',
      revenue: '$2B+',
      challenge: 'Complex supply chain across 15 African countries with varying infrastructure',
      solution: 'End-to-end logistics management with multi-modal transport optimization',
      results: ['25% inventory reduction', '50% improvement in delivery time', '99.8% on-time delivery', 'Customer satisfaction 95%'],
      testimonial: 'The efficiency gains have transformed our retail operations across Africa.',
      metrics: {
        inventory: '25% reduction',
        delivery: '50% faster',
        reliability: '99.8%',
        satisfaction: '95%'
      },
      image: 'GR'
    },
    {
      company: 'Mining Corporation',
      industry: 'Mining & Heavy Industry',
      revenue: '$1B+',
      challenge: 'Export of heavy equipment to remote mining locations with limited infrastructure',
      solution: 'Specialized project cargo handling with custom transport solutions',
      results: ['Zero damage incidents', '20% under budget', 'Completed 2 weeks ahead of schedule', 'Established new transport routes'],
      testimonial: 'Their expertise in handling oversized cargo is unmatched in the industry.',
      metrics: {
        damage: '0 incidents',
        budget: '20% under',
        timeline: '2 weeks early',
        routes: '5 new corridors'
      },
      image: 'MC'
    }
  ];

  const stats = [
    { value: 150, label: 'Countries Served', description: 'Global network coverage', icon: <Globe className="w-5 h-5" /> },
    { value: 50000, label: 'Annual Shipments', description: 'Containers and parcels', icon: <Package className="w-5 h-5" /> },
    { value: 99.8, label: 'On-Time Delivery', description: 'Service reliability', icon: <Clock className="w-5 h-5" /> },
    { value: 24, label: 'Hours Support', description: 'Round-the-clock service', icon: <Phone className="w-5 h-5" /> }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
    { name: 'IATA', description: 'International Air Transport Association' },
    { name: 'IMO', description: 'International Maritime Organization' },
    { name: 'C-TPAT', description: 'Customs-Trade Partnership Against Terrorism' }
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
      if (!isLoaded || started) return;
      setStarted(true);

      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [target, isLoaded, started]);

    return <>{count.toLocaleString()}{suffix}</>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      {/* Enhanced Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=2000&q=80')"
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Globe className="w-4 h-4 text-blue-300 mr-2" />
              <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">Global Trading Solutions</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
              Connecting Africa to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                {" "}Global Markets
              </span>
            </h1>
            
            <p className={`text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
              Enterprise-grade international trade solutions that streamline your supply chain, reduce costs by up to 40%, 
              and ensure 100% compliance across borders. Trusted by Fortune 500 companies and leading African enterprises.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25">
                <Phone className="w-5 h-5" />
                <span>Get Enterprise Quote</span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                <span>Download Capability Statement</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap justify-center gap-8 text-blue-100 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Fortune 500 Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">100% Cargo Protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`text-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${0.8 + index * 0.1}s` }}>
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.label.includes('Delivery') ? '%' : '+'} />
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enterprise Trading Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced features designed for large-scale operations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={feature.title} className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1.2 + index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-blue-600">{feature.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Trading Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">End-to-end logistics solutions tailored for enterprise needs</p>
          </div>

          <div className="space-y-8">
            {tradingServices.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${1.4 + index * 0.1}s` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-blue-100 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.transitTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span className="text-sm">{service.coverage}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span className="text-sm">{service.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Service Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.certifications.map((cert, idx) => (
                              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enterprise Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Proven results with industry leaders</p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={study.company} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1.6 + index * 0.1}s` }}>
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
                      {study.image}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                    <div className="text-blue-200 mb-4">{study.industry}</div>
                    <div className="text-blue-100 text-sm mb-4">Revenue: {study.revenue}</div>
                    <blockquote className="text-blue-100 italic text-sm">
                      "{study.testimonial}"
                    </blockquote>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Challenge</h4>
                        <p className="text-gray-600 mb-6">{study.challenge}</p>
                        
                        <h4 className="font-semibold text-gray-900 mb-4">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                        <ul className="space-y-2 mb-6">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-green-600 font-medium">
                              <TrendingUp className="w-4 h-4" />
                              {result}
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="font-semibold text-gray-900 mb-4">Key Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-lg font-bold text-blue-600">{value}</div>
                              <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Industry-recognized standards for quality and safety</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={cert.name} className={`text-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1.8 + index * 0.1}s` }}>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white">
                  <Award className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Your Global Supply Chain?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join Fortune 500 companies and leading African enterprises that trust FEMSA Group for their international trading needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg">
              <Phone className="w-5 h-5" />
              <span>Contact Enterprise Team</span>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
              <Mail className="w-5 h-5 mr-2" />
              <span>Request Capability Statement</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalTrading;
