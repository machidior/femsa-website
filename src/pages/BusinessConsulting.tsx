import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, BarChart3, Target, TrendingUp, Users, Lightbulb, Shield, Award, FileText, Phone, Mail, CheckCircle2, Star, Brain, PieChart, Zap, Building2, Globe, Briefcase, Clock, ArrowUpRight, Lightbulb as StrategyIcon, BarChart3 as AnalyticsIcon, Rocket } from 'lucide-react';

const BusinessConsulting: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(true); // Start as true for immediate visibility
  const [activeTab, setActiveTab] = useState('strategy');
  const sectionRef = useRef<HTMLDivElement>(null);

  const consultingServices = [
    {
      id: 'strategic-planning',
      icon: <Brain className="w-6 h-6" />,
      title: 'Strategic Planning & Execution',
      description: 'Comprehensive business strategy development with data-driven execution frameworks',
      features: [
        'Market analysis & competitive intelligence',
        'Growth strategy development',
        'Digital transformation roadmap',
        'Performance metrics & KPI design',
        'Strategic partnership development',
        'Change management frameworks'
      ],
      benefits: ['300% average revenue growth', '45% market share increase', '90% strategy execution success'],
      methodology: '6-phase strategic framework',
      duration: '4-12 weeks',
      complexity: 'High',
      industries: ['Technology', 'Healthcare', 'Financial Services', 'Manufacturing']
    },
    {
      id: 'financial-advisory',
      icon: <PieChart className="w-6 h-6" />,
      title: 'Financial Advisory Services',
      description: 'Expert financial guidance for sustainable growth and value creation',
      features: [
        'Financial modeling & forecasting',
        'Investment strategy & capital raising',
        'Risk assessment & mitigation',
        'Cost optimization & efficiency',
        'M&A due diligence',
        'Financial restructuring'
      ],
      benefits: ['85% average ROI', '40% cost reduction', '2.5x valuation increase'],
      methodology: 'Value-based financial framework',
      duration: '6-16 weeks',
      complexity: 'High',
      industries: ['Private Equity', 'Venture Capital', 'Corporate Finance', 'Real Estate']
    },
    {
      id: 'operational-excellence',
      icon: <Users className="w-6 h-6" />,
      title: 'Operational Excellence',
      description: 'Streamline processes and improve efficiency across the organization',
      features: [
        'Process optimization & automation',
        'Quality management systems',
        'Supply chain improvement',
        'Lean transformation',
        'Performance measurement',
        'Continuous improvement programs'
      ],
      benefits: ['60% efficiency improvement', '50% cost reduction', '99% quality compliance'],
      methodology: 'Lean Six Sigma methodology',
      duration: '8-24 weeks',
      complexity: 'Medium',
      industries: ['Manufacturing', 'Logistics', 'Retail', 'Healthcare']
    },
    {
      id: 'digital-transformation',
      icon: <Zap className="w-6 h-6" />,
      title: 'Digital Transformation',
      description: 'Leverage technology for competitive advantage and growth',
      features: [
        'Digital strategy development',
        'Technology roadmap planning',
        'Cloud migration & modernization',
        'AI & automation implementation',
        'Digital customer experience',
        'Cybersecurity transformation'
      ],
      benefits: ['200% digital adoption', '80% process automation', '95% customer satisfaction'],
      methodology: 'Agile digital framework',
      duration: '12-36 weeks',
      complexity: 'High',
      industries: ['Technology', 'Financial Services', 'Retail', 'Healthcare']
    }
  ];

  const enterpriseCapabilities = [
    {
      icon: <StrategyIcon className="w-8 h-8" />,
      title: 'Strategic Intelligence',
      description: 'Advanced market analysis and competitive positioning',
      highlight: 'AI-powered insights and predictive analytics'
    },
    {
      icon: <AnalyticsIcon className="w-8 h-8" />,
      title: 'Data-Driven Decisions',
      description: 'Business intelligence and analytics for informed choices',
      highlight: 'Real-time dashboards and performance metrics'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Growth Acceleration',
      description: 'Proven frameworks for rapid business scaling',
      highlight: 'Average 3x growth within 18 months'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Enterprise Integration',
      description: 'Seamless integration with existing systems',
      highlight: 'API-first architecture and microservices'
    }
  ];

  const caseStudies = [
    {
      company: 'TechStart Africa',
      industry: 'Technology & SaaS',
      revenue: '$500M+',
      employees: '1000+',
      challenge: 'Rapid growth without scalable processes and systems',
      solution: 'Implemented comprehensive operational framework with digital transformation',
      results: ['300% revenue growth', '50% cost reduction', 'Expanded to 8 countries', 'Series B funding $50M'],
      testimonial: 'FEMSA transformed our startup into an enterprise-ready organization with scalable processes.',
      metrics: {
        revenue: '300% growth',
        efficiency: '50% improvement',
        scaling: '8 countries',
        funding: '$50M Series B'
      },
      image: 'TS'
    },
    {
      company: 'Manufacturing Pro Ltd',
      industry: 'Industrial Manufacturing',
      revenue: '$2B+',
      employees: '5000+',
      challenge: 'Declining market share and operational inefficiencies',
      solution: 'Complete business transformation with operational excellence and digital strategy',
      results: ['45% market share increase', '60% efficiency improvement', '2 new product lines', 'Industry leader position'],
      testimonial: 'The transformation positioned us as the market leader with unprecedented efficiency.',
      metrics: {
        market: '45% share increase',
        efficiency: '60% improvement',
        products: '2 new lines',
        position: 'Market leader'
      },
      image: 'MP'
    },
    {
      company: 'Financial Services Group',
      industry: 'Banking & Finance',
      revenue: '$5B+',
      employees: '10000+',
      challenge: 'Digital disruption and changing customer expectations',
      solution: 'Digital transformation and customer experience redesign',
      results: ['200% customer satisfaction', '80% digital adoption', 'Reduced costs by 40%', 'NPS score 75'],
      testimonial: 'Our digital transformation exceeded all expectations and revolutionized customer experience.',
      metrics: {
        satisfaction: '200% increase',
        adoption: '80% digital',
        costs: '40% reduction',
        nps: 'Score 75'
      },
      image: 'FS'
    }
  ];

  const stats = [
    { value: 500, label: 'Consulting Projects', description: 'Successfully completed', icon: <Briefcase className="w-5 h-5" /> },
    { value: 85, label: 'Average ROI', description: 'Return on investment', icon: <TrendingUp className="w-5 h-5" /> },
    { value: 15, label: 'Industries Served', description: 'Across multiple sectors', icon: <Globe className="w-5 h-5" /> },
    { value: 98, label: 'Client Satisfaction', description: 'Based on feedback', icon: <Star className="w-5 h-5" /> }
  ];

  const methodology = [
    {
      phase: 'Discovery & Analysis',
      description: 'Deep dive into business challenges, opportunities, and market positioning',
      duration: '1-2 weeks',
      deliverables: ['Current state analysis', 'Stakeholder interviews', 'Market assessment', 'Gap analysis'],
      activities: ['Workshops', 'Data collection', 'Process mapping', 'Competitive analysis']
    },
    {
      phase: 'Strategy Development',
      description: 'Develop comprehensive solutions with clear roadmap and success metrics',
      duration: '2-4 weeks',
      deliverables: ['Strategic roadmap', 'Implementation plan', 'Resource requirements', 'Risk assessment'],
      activities: ['Strategy sessions', 'Modeling', 'Scenario planning', 'Stakeholder alignment']
    },
    {
      phase: 'Implementation & Execution',
      description: 'Execute strategy with measurable milestones and continuous monitoring',
      duration: '4-24 weeks',
      deliverables: ['Progress reports', 'KPI tracking', 'Adjustment recommendations', 'Training programs'],
      activities: ['Project management', 'Change management', 'Training', 'Performance monitoring']
    },
    {
      phase: 'Optimization & Scale',
      description: 'Fine-tune successful initiatives and scale across the organization',
      duration: 'Ongoing',
      deliverables: ['Performance reviews', 'Optimization plans', 'Scaling strategies', 'Continuous improvement'],
      activities: ['Performance analysis', 'Process optimization', 'Scale planning', 'Knowledge transfer']
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
          setCount(Math.floor(current));
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
            backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80')"
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <BarChart3 className="w-4 h-4 text-blue-300 mr-2" />
              <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">Business Consulting Excellence</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
              Transform Your Business
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                {" "}With Strategic Excellence
              </span>
            </h1>
            
            <p className={`text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
              World-class consulting services that deliver measurable results, optimize operations, and position your business 
              for sustainable growth. Trusted by Fortune 500 companies and industry leaders across 15 sectors.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25">
                <Phone className="w-5 h-5" />
                <span>Free Strategic Assessment</span>
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
                <span className="text-sm font-medium">Fortune 500 Trusted</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">85% Average ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">500+ Projects Delivered</span>
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
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.label.includes('ROI') || stat.label.includes('Satisfaction') ? '%' : '+'} />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enterprise Consulting Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced frameworks and methodologies for transformation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseCapabilities.map((capability, index) => (
              <div key={capability.title} className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1.2 + index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-purple-600">{capability.highlight}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">End-to-end solutions for every business challenge</p>
          </div>

          <div className="space-y-8">
            {consultingServices.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${1.4 + index * 0.1}s` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-purple-500 to-indigo-600 p-8 text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-purple-100 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span className="text-sm">{service.methodology}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm">{service.complexity} Complexity</span>
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
                              <TrendingUp className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Target Industries</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.industries.map((industry, idx) => (
                              <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
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

      {/* Enhanced Methodology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Consulting Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A proven approach that delivers consistent results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((phase, index) => (
              <div key={phase.phase} className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1.6 + index * 0.1}s` }}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white text-2xl font-bold ${
                  index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-purple-500' : index === 2 ? 'bg-indigo-500' : 'bg-green-500'
                }`}>
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <div className="text-sm text-purple-600 font-medium mb-2">{phase.duration}</div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Key Deliverables</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Activities</h4>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enterprise Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real transformation, measurable results</p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={study.company} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1.8 + index * 0.1}s` }}>
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-purple-500 to-indigo-600 p-8 text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
                      {study.image}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                    <div className="text-purple-200 mb-2">{study.industry}</div>
                    <div className="text-purple-100 text-sm mb-2">Revenue: {study.revenue}</div>
                    <div className="text-purple-100 text-sm mb-4">Employees: {study.employees}</div>
                    <blockquote className="text-purple-100 italic text-sm">
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
                              <ArrowUpRight className="w-4 h-4" />
                              {result}
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="font-semibold text-gray-900 mb-4">Key Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-lg font-bold text-purple-600">{value}</div>
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let our expert consultants help you achieve your business goals with proven strategies and methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg">
              <Phone className="w-5 h-5" />
              <span>Start Free Assessment</span>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300">
              <Mail className="w-5 h-5 mr-2" />
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsulting;
