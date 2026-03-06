import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Truck, Package, Warehouse, Route, BarChart3, Shield, TrendingUp, Users, FileText, Phone, Mail, CheckCircle2, Star, Target, Clock, Globe, Settings, Building2, Lightbulb, Zap, ArrowUpRight, Cpu, Database, Network, Award } from 'lucide-react';

const SupplyChain: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(true); // Start as true for immediate visibility
  const [activeTab, setActiveTab] = useState('overview');
  const sectionRef = useRef<HTMLDivElement>(null);

  const supplyChainServices = [
    {
      id: 'logistics-optimization',
      icon: <Truck className="w-6 h-6" />,
      title: 'Logistics Network Optimization',
      description: 'Advanced transportation and delivery network optimization for maximum efficiency',
      features: [
        'Route optimization algorithms',
        'Fleet management systems',
        'Last-mile delivery solutions',
        'Cross-border logistics',
        'Real-time tracking systems',
        'Carrier relationship management'
      ],
      benefits: ['40% cost reduction', '60% faster delivery', '99.8% on-time performance'],
      trackRecord: '500+ networks optimized',
      efficiency: '40% cost reduction',
      timeline: '8-12 weeks',
      industries: ['Retail', 'E-Commerce', 'Manufacturing', 'Healthcare']
    },
    {
      id: 'warehouse-management',
      icon: <Warehouse className="w-6 h-6" />,
      title: 'Warehouse & Inventory Management',
      description: 'Smart warehousing and inventory optimization with automation integration',
      features: [
        'Warehouse automation systems',
        'Inventory optimization algorithms',
        'Space utilization planning',
        'Order fulfillment optimization',
        'RFID and IoT integration',
        'Labor management systems'
      ],
      benefits: ['60% space improvement', '50% labor savings', '99.9% inventory accuracy'],
      trackRecord: '200+ warehouses transformed',
      efficiency: '60% space improvement',
      timeline: '12-16 weeks',
      industries: ['Retail', 'Manufacturing', '3PL', 'Distribution']
    },
    {
      id: 'procurement-strategy',
      icon: <Package className="w-6 h-6" />,
      title: 'Strategic Procurement & Sourcing',
      description: 'Data-driven procurement strategies and supplier relationship management',
      features: [
        'Strategic sourcing programs',
        'Supplier relationship management',
        'Procurement automation',
        'Cost analysis and optimization',
        'Risk management systems',
        'Sustainability compliance'
      ],
      benefits: ['25% cost savings', '80% process automation', '100% supplier compliance'],
      trackRecord: '$10B+ procurement spend managed',
      efficiency: '25% cost savings',
      timeline: '6-10 weeks',
      industries: ['Manufacturing', 'Construction', 'Healthcare', 'Government']
    },
    {
      id: 'network-design',
      icon: <Route className="w-6 h-6" />,
      title: 'Supply Chain Network Design',
      description: 'Strategic network architecture and facility location optimization',
      features: [
        'Network modeling and simulation',
        'Facility location optimization',
        'Capacity planning systems',
        'Scenario analysis tools',
        'Multi-criteria decision analysis',
        'Digital twin technology'
      ],
      benefits: ['35% efficiency gain', '20% capacity utilization', '50% faster decision-making'],
      trackRecord: '100+ networks redesigned',
      efficiency: '35% efficiency gain',
      timeline: '10-14 weeks',
      industries: ['Logistics', 'Manufacturing', 'Retail', 'Energy']
    }
  ];

  const enterpriseCapabilities = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'AI-powered supply chain analytics and predictive modeling',
      highlight: 'Machine learning algorithms for demand forecasting'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Digital Integration',
      description: 'Seamless integration with ERP, WMS, and TMS systems',
      highlight: 'API-first architecture with 100+ system connectors'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Automation Solutions',
      description: 'Robotics and automation for warehouse and fulfillment operations',
      highlight: 'Industry 4.0 compliant automation systems'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Global Network',
      description: 'Extensive partner network across 50+ countries',
      highlight: 'Strategic partnerships with leading logistics providers'
    }
  ];

  const caseStudies = [
    {
      company: 'Retail Empire Ltd',
      industry: 'Retail & E-Commerce',
      revenue: '$5B+',
      employees: '50000+',
      challenge: 'Inefficient logistics across 15 African countries with high costs and delays',
      solution: 'End-to-end supply chain transformation with network optimization and technology integration',
      results: ['45% cost reduction', '70% faster delivery', '99% order accuracy', 'Expanded to 20 countries'],
      testimonial: 'FEMSA transformed our supply chain into a competitive advantage that drives our growth.',
      metrics: {
        costs: '45% reduction',
        delivery: '70% faster',
        accuracy: '99% order',
        expansion: '20 countries'
      },
      image: 'RE'
    },
    {
      company: 'Manufacturing Pro',
      industry: 'Industrial Manufacturing',
      revenue: '$3B+',
      employees: '25000+',
      challenge: 'High inventory costs, frequent stockouts, and inefficient warehouse operations',
      solution: 'Advanced warehouse management and inventory optimization with automation',
      results: ['50% inventory reduction', 'Zero stockouts', '30% space efficiency', '25% labor savings'],
      testimonial: 'The warehouse transformation exceeded our expectations and delivered massive ROI.',
      metrics: {
        inventory: '50% reduction',
        stockouts: 'Zero incidents',
        efficiency: '30% space',
        labor: '25% savings'
      },
      image: 'MP'
    },
    {
      company: 'E-Commerce Giant',
      industry: 'E-Commerce & Marketplace',
      revenue: '$10B+',
      employees: '100000+',
      challenge: 'Last-mile delivery challenges in urban areas with high customer expectations',
      solution: 'Smart logistics optimization with delivery network redesign',
      results: ['60% faster delivery', '40% cost reduction', '95% customer satisfaction', 'Expanded delivery coverage'],
      testimonial: 'Their logistics expertise helped us achieve industry-leading delivery performance.',
      metrics: {
        delivery: '60% faster',
        costs: '40% reduction',
        satisfaction: '95% score',
        coverage: 'Expanded network'
      },
      image: 'EC'
    }
  ];

  const stats = [
    { value: 500, label: 'Supply Chain Projects', description: 'Successfully optimized', icon: <Package className="w-5 h-5" /> },
    { value: 45, label: 'Average Cost Savings', description: 'Across all projects', icon: <TrendingUp className="w-5 h-5" /> },
    { value: 25, label: 'Countries', description: 'With optimized networks', icon: <Globe className="w-5 h-5" /> },
    { value: 99.5, label: 'Order Accuracy', description: 'Achieved for clients', icon: <Target className="w-5 h-5" /> }
  ];

  const technologies = [
    {
      name: 'AI-Powered Analytics',
      description: 'Machine learning for demand forecasting and optimization',
      benefits: ['95% forecast accuracy', 'Real-time insights', 'Predictive analytics'],
      implementation: '2-4 weeks'
    },
    {
      name: 'IoT Integration',
      description: 'Smart sensors and real-time tracking systems',
      benefits: ['Live tracking', 'Condition monitoring', 'Automated alerts'],
      implementation: '4-6 weeks'
    },
    {
      name: 'Blockchain Supply Chain',
      description: 'Transparent and secure transaction recording',
      benefits: ['Full traceability', 'Enhanced security', 'Smart contracts'],
      implementation: '6-8 weeks'
    },
    {
      name: 'Robotics & Automation',
      description: 'Automated warehouse and fulfillment systems',
      benefits: ['24/7 operation', 'Error reduction', 'Speed improvement'],
      implementation: '8-12 weeks'
    }
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
          setCount(Math.floor(current * 10) / 10);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [target, started]);

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
            backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=2000&q=80')"
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Truck className="w-4 h-4 text-blue-300 mr-2" />
              <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">Supply Chain Excellence</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
              Optimize Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                {" "}Supply Chain
              </span>
            </h1>
            
            <p className={`text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
              Advanced supply chain solutions that reduce costs by up to 45%, improve efficiency by 60%, and enhance customer satisfaction 
              across your entire network. Trusted by Fortune 500 companies and leading enterprises.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25">
                <Phone className="w-5 h-5" />
                <span>Free Supply Chain Audit</span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                <span>Download Case Studies</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap justify-center gap-8 text-blue-100 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">500+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">45% Average Savings</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">99.5% Order Accuracy</span>
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
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.label.includes('Savings') || stat.label.includes('Accuracy') ? '%' : '+'} />
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enterprise Supply Chain Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced technologies and methodologies for modern supply chains</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseCapabilities.map((capability, index) => (
              <div key={capability.title} className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1.2 + index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-orange-600">{capability.highlight}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Supply Chain Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">End-to-end solutions for every supply chain challenge</p>
          </div>

          <div className="space-y-8">
            {supplyChainServices.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${1.4 + index * 0.1}s` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-orange-100 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span className="text-sm">{service.efficiency}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span className="text-sm">{service.trackRecord}</span>
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
                              <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
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
                              <TrendingUp className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Target Industries</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.industries.map((industry, idx) => (
                              <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                                {industry}
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

      {/* Enhanced Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Supply Chain Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Cutting-edge solutions for modern supply chains</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={tech.name} className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1.6 + index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits</h4>
                    <ul className="space-y-1">
                      {tech.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm font-semibold text-orange-600">Implementation: {tech.implementation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Supply Chain Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real transformations, measurable impact</p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={study.company} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1.8 + index * 0.1}s` }}>
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
                      {study.image}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                    <div className="text-orange-200 mb-2">{study.industry}</div>
                    <div className="text-orange-100 text-sm mb-2">Revenue: {study.revenue}</div>
                    <div className="text-orange-100 text-sm mb-4">Employees: {study.employees}</div>
                    <blockquote className="text-orange-100 italic text-sm">
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
                            <li key={idx} className="flex items-center gap-2 text-sm text-orange-600 font-medium">
                              <ArrowUpRight className="w-4 h-4" />
                              {result}
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="font-semibold text-gray-900 mb-4">Key Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-lg font-bold text-orange-600">{value}</div>
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

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Supply Chain?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Let our supply chain experts help you achieve operational excellence and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg">
              <Phone className="w-5 h-5" />
              <span>Free Optimization Assessment</span>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">
              <Mail className="w-5 h-5 mr-2" />
              <span>Request Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupplyChain;
