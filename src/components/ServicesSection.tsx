import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Globe, 
  Lightbulb, 
  TrendingUp, 
  Package, 
  Shield, 
  Users, 
  BarChart3, 
  Target,
  CheckCircle2,
  Star,
  Award,
  Zap,
  Clock,
  DollarSign,
  Building2,
  Truck,
  FileText,
  Briefcase,
  ChevronRight
} from 'lucide-react';

interface Service {
  id: number;
  name: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  benefits: string[];
  caseStudy: string;
  stat: string;
  statValue: number;
  duration: string;
  complexity: 'Low' | 'Medium' | 'High';
  pricing: string;
}

interface ClientResult {
  company: string;
  industry: string;
  result: string;
  metric: string;
  improvement: string;
}

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', name: 'All Services', description: 'Complete trading solutions' },
    { id: 'packaging', name: 'Raw Materials', description: 'Packaging materials & supplies' },
    { id: 'equipment', name: 'Equipment', description: 'Machinery & production lines' },
    { id: 'spares', name: 'Spare Parts', description: 'Components & replacements' },
    { id: 'consumables', name: 'Consumables', description: 'Plant supplies & chemicals' }
  ];

  const services: Service[] = [
    {
      id: 1,
      name: 'Raw Materials & Packaging',
      category: 'packaging',
      icon: <Package className="w-8 h-8" />,
      description: 'Comprehensive packaging materials including PET, HDPE, PP, LDPE, preforms, caps, labels, and plastic films for industrial applications.',
      features: [
        'PET, HDPE, PP, LDPE, LLDPE materials',
        'Preforms in various neck sizes & weights',
        'Caps and closures for all applications',
        'Labels: PVC, OPP, and adhesive types',
        'Plastic bags, shrink films, wrapping materials'
      ],
      benefits: [
        'Reduce packaging costs by up to 30%',
        'Ensure consistent quality & supply',
        'Access to global manufacturer network',
        'Technical support for material selection'
      ],
      caseStudy: 'Supplied 500 tons of PET preforms to leading beverage company, reducing their costs by 25% while maintaining quality standards.',
      stat: '500+',
      statValue: 500,
      duration: '3-7 days',
      complexity: 'Low',
      pricing: 'Starting from TSh 50K'
    },
    {
      id: 2,
      name: 'Equipment & Machinery',
      category: 'equipment',
      icon: <Target className="w-8 h-8" />,
      description: 'Complete range of industrial equipment including plastic injection machines, blowing machines, filling lines, and quality control systems.',
      features: [
        'Plastic injection & blowing machines',
        'Filling lines & packaging equipment',
        'Date stamping & labeling machines',
        'Water treatment & filtration systems',
        'Quality control & laboratory equipment'
      ],
      benefits: [
        'Increase production efficiency by 40%',
        'Reduce equipment downtime by 60%',
        'Access to latest technology',
        'Comprehensive technical support'
      ],
      caseStudy: 'Installed complete PET bottling line for water company, increasing production capacity by 200% with 99% uptime.',
      stat: '200+',
      statValue: 200,
      duration: '2-4 weeks',
      complexity: 'Medium',
      pricing: 'Starting from TSh 5M'
    },
    {
      id: 3,
      name: 'Spare Parts & Components',
      category: 'spares',
      icon: <Building2 className="w-8 h-8" />,
      description: 'Comprehensive spare parts including electrical components, mechanical parts, and pneumatic/hydraulic systems for industrial equipment.',
      features: [
        'Electrical parts: motors, drives, PLCs, sensors',
        'Mechanical parts: gears, bearings, shafts, valves',
        'Pneumatic & hydraulic components',
        'Control panels & circuit boards',
        'Pumps, seals, and replacement parts'
      ],
      benefits: [
        'Reduce equipment downtime by 80%',
        'Extend equipment lifespan by 50%',
        '24/7 availability of critical parts',
        'Technical installation support'
      ],
      caseStudy: 'Provided critical spare parts for major manufacturer, preventing 48 hours of downtime and saving TSh 10M in lost production.',
      stat: '1000+',
      statValue: 1000,
      duration: '24-48 hours',
      complexity: 'Low',
      pricing: 'Starting from TSh 10K'
    },
    {
      id: 4,
      name: 'Consumables & Plant Supplies',
      category: 'consumables',
      icon: <Star className="w-8 h-8" />,
      description: 'Essential consumables including lubricants, industrial chemicals, maintenance tools, and safety equipment for plant operations.',
      features: [
        'Lubricants and cleaning agents',
        'Industrial chemicals for production',
        'Maintenance tools & safety equipment',
        'Plant operation supplies',
        'Quality testing consumables'
      ],
      benefits: [
        'Improve operational efficiency by 25%',
        'Ensure compliance with safety standards',
        'Reduce maintenance costs by 20%',
        'One-stop procurement solution'
      ],
      caseStudy: 'Supplied comprehensive consumables package to food processing plant, reducing their procurement costs by 30% and improving safety compliance.',
      stat: '200+',
      statValue: 200,
      duration: '1-3 days',
      complexity: 'Low',
      pricing: 'Starting from TSh 25K'
    }
  ];

  const clientResults: ClientResult[] = [
    {
      company: 'TechCorp Africa',
      industry: 'Technology',
      result: 'Revenue Growth',
      metric: '$50M',
      improvement: '+340%'
    },
    {
      company: 'Global Foods Ltd',
      industry: 'Agriculture',
      result: 'Market Expansion',
      metric: '12 Countries',
      improvement: '+240%'
    },
    {
      company: 'FinanceHub',
      industry: 'Financial Services',
      result: 'Cost Reduction',
      metric: '32%',
      improvement: 'Annual Savings'
    },
    {
      company: 'LogisticsPro',
      industry: 'Logistics',
      result: 'Delivery Speed',
      metric: '50%',
      improvement: 'Faster Delivery'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

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

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'High': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center px-4 py-2 bg-orange-50 rounded-full mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Star className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-semibold text-orange-700 tracking-wide uppercase">Our Services</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.1s' }}>
            What We
            <span className="text-orange-500"> Offer</span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.2s' }}>
            Comprehensive business solutions designed to accelerate growth, optimize operations, and unlock new opportunities across African markets and beyond.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id 
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}`}
              style={{ transitionDelay: `${0.3 + index * 0.05}s` }}
            >
              <span className="block text-sm">{category.name}</span>
              <span className="block text-xs opacity-75 mt-1">{category.description}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => setSelectedService(service)}
            >
              {/* Service Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getComplexityColor(service.complexity)}`}>
                    {service.complexity}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-orange-500 font-semibold">
                    <span className="text-2xl mr-1">{service.stat}</span>
                    <span className="text-sm text-gray-500">clients</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>

              {/* Hover Preview */}
              <div className={`absolute inset-0 bg-gradient-to-t from-orange-500 to-orange-600 p-8 text-white transition-all duration-300 ${hoveredService === service.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h4 className="text-2xl font-bold mb-4">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-75">Duration</p>
                      <p className="font-semibold">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm opacity-75">Starting from</p>
                      <p className="font-semibold">{service.pricing}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Results Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Proven Results</h3>
            <p className="text-gray-300 text-lg">Real impact for real businesses across Africa</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientResults.map((result, index) => (
              <div key={index} className={`text-center transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: `${0.8 + index * 0.1}s` }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300">
                  <h4 className="font-bold text-lg mb-2">{result.company}</h4>
                  <p className="text-gray-400 text-sm mb-4">{result.industry}</p>
                  <div className="text-3xl font-bold text-orange-400 mb-2">{result.metric}</div>
                  <p className="text-white font-semibold">{result.result}</p>
                  <p className="text-orange-300 text-sm mt-1">{result.improvement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s' }}>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how our comprehensive solutions can accelerate your growth and unlock new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedService.name}</h3>
                    <p className="text-gray-600">{selectedService.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Service Features</h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h4>
                  <ul className="space-y-3">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Zap className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 rounded-2xl">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Success Story</h4>
                <p className="text-gray-700">{selectedService.caseStudy}</p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors duration-300">
                  Get Started
                </button>
                <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-bold hover:bg-gray-200 transition-colors duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
