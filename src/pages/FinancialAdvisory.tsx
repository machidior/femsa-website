import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, DollarSign, Shield, PieChart, BarChart3, Award, FileText, Phone, Mail, CheckCircle2, Star, Target, Calculator, Briefcase, Building, Globe, Clock, ArrowUpRight, CreditCard, PiggyBank, TrendingDown, Users, Building2, Lightbulb } from 'lucide-react';

const FinancialAdvisory: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(true); // Start as true for immediate visibility
  const [activeTab, setActiveTab] = useState('overview');
  const sectionRef = useRef<HTMLDivElement>(null);

  const financialServices = [
    {
      id: 'capital-raising',
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Capital Raising & Funding',
      description: 'Strategic funding solutions for growth, expansion, and transformation initiatives',
      features: [
        'Equity financing (Series A to IPO)',
        'Debt structuring & syndication',
        'Private placements & venture capital',
        'Mezzanine financing solutions',
        'IPO preparation & execution',
        'Cross-border fund raising'
      ],
      benefits: ['95% funding success rate', '40% better terms vs market', 'Access to 500+ global investors'],
      trackRecord: '$2.5B+ raised across 150+ deals',
      minAmount: '$500K',
      timeframe: '3-6 months',
      industries: ['Technology', 'Healthcare', 'FinTech', 'Energy', 'Real Estate']
    },
    {
      id: 'investment-strategy',
      icon: <PieChart className="w-6 h-6" />,
      title: 'Investment Strategy & Portfolio Management',
      description: 'Data-driven investment planning and portfolio optimization for maximum returns',
      features: [
        'Portfolio construction & optimization',
        'Risk-adjusted return strategies',
        'Asset allocation modeling',
        'Performance tracking & reporting',
        'Market timing strategies',
        'Alternative investment solutions'
      ],
      benefits: ['35% average annual returns', '40% lower volatility', 'Customized risk profiles'],
      trackRecord: '$5B+ AUM managed',
      minAmount: '$100K',
      timeframe: 'Ongoing',
      industries: ['High Net Worth', 'Family Offices', 'Institutions', 'Pension Funds']
    },
    {
      id: 'risk-management',
      icon: <Shield className="w-6 h-6" />,
      title: 'Risk Management & Compliance',
      description: 'Comprehensive financial risk mitigation and regulatory compliance solutions',
      features: [
        'Enterprise risk assessment',
        'Hedging strategies & derivatives',
        'Regulatory compliance management',
        'Internal controls design',
        'Fraud prevention systems',
        'Cybersecurity risk assessment'
      ],
      benefits: ['90% risk reduction', '100% compliance record', 'Zero regulatory penalties'],
      trackRecord: '500+ risk assessments completed',
      minAmount: 'Custom',
      timeframe: '4-8 weeks',
      industries: ['Banking', 'Insurance', 'Asset Management', 'Corporates']
    },
    {
      id: 'ma-advisory',
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Mergers & Acquisitions Advisory',
      description: 'End-to-end M&A support from strategy to post-merger integration',
      features: [
        'Target identification & screening',
        'Comprehensive due diligence',
        'Business valuation & modeling',
        'Deal structuring & negotiation',
        'Post-merger integration',
        'Divestiture advisory'
      ],
      benefits: ['50% higher success rate', '25% better valuations', '90% integration success'],
      trackRecord: '$50B+ in M&A transactions',
      minAmount: '$1M+',
      timeframe: '6-12 months',
      industries: ['Technology', 'Healthcare', 'Industrial', 'Consumer Goods']
    }
  ];

  const enterpriseCapabilities = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Global Network',
      description: 'Access to 500+ institutional investors and financial partners worldwide',
      highlight: 'Direct relationships with sovereign wealth funds and pension funds'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'AI-powered financial modeling and predictive analytics',
      highlight: 'Machine learning algorithms for market prediction'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Former investment bankers and seasoned financial professionals',
      highlight: 'Average 15+ years experience per team member'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Performance Track Record',
      description: 'Proven success across market cycles and economic conditions',
      highlight: 'Consistent outperformance vs market benchmarks'
    }
  ];

  const caseStudies = [
    {
      company: 'AfriFintech Solutions',
      industry: 'Financial Technology',
      revenue: '$100M+',
      employees: '500+',
      challenge: 'Needed $10M Series A funding for Pan-African expansion and product development',
      solution: 'Comprehensive capital raising strategy with investor relations and roadshow management',
      results: ['$15M raised (50% oversubscribed)', '3 strategic investors added', 'Valuation 2.5x higher', 'Expanded to 5 new markets'],
      testimonial: 'FEMSA\'s capital raising expertise exceeded our expectations and delivered exceptional terms.',
      metrics: {
        funding: '$15M raised',
        valuation: '2.5x higher',
        investors: '3 strategic',
        expansion: '5 markets'
      },
      image: 'AF'
    },
    {
      company: 'Manufacturing Corp',
      industry: 'Industrial Manufacturing',
      revenue: '$2B+',
      employees: '10000+',
      challenge: 'Complex $50M acquisition with multiple stakeholders and financing requirements',
      solution: 'Full M&A advisory from target screening to post-merger integration',
      results: ['$50M acquisition completed', '20% synergies realized in year 1', 'Zero integration issues', 'Market leader position'],
      testimonial: 'Their M&A expertise was crucial in navigating this complex transaction successfully.',
      metrics: {
        acquisition: '$50M completed',
        synergies: '20% Y1',
        integration: 'Zero issues',
        position: 'Market leader'
      },
      image: 'MC'
    },
    {
      company: 'Real Estate Investment Trust',
      industry: 'Real Estate & REITs',
      revenue: '$500M+',
      employees: '200+',
      challenge: 'Portfolio optimization and risk management in volatile market conditions',
      solution: 'Advanced investment strategy with risk mitigation and hedging programs',
      results: ['25% portfolio returns', '40% risk reduction', '8 new properties acquired', 'AAA rating achieved'],
      testimonial: 'Their investment strategy helped us outperform the market while significantly reducing risk.',
      metrics: {
        returns: '25% annually',
        risk: '40% reduction',
        properties: '8 new',
        rating: 'AAA achieved'
      },
      image: 'RE'
    }
  ];

  const stats = [
    { value: 2.5, label: 'Billion Raised', description: 'In client funding', icon: <PiggyBank className="w-5 h-5" /> },
    { value: 150, label: 'Deals Completed', description: 'Successfully executed', icon: <Briefcase className="w-5 h-5" /> },
    { value: 92, label: 'Success Rate', description: 'Of funding rounds', icon: <Target className="w-5 h-5" /> },
    { value: 35, label: 'Average ROI', description: 'For client investments', icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const expertise = [
    {
      area: 'Capital Markets',
      description: 'Deep understanding of African and global capital markets',
      services: ['Equity markets', 'Debt markets', 'Private equity', 'Venture capital', 'Hedge funds'],
      experience: '20+ years combined experience'
    },
    {
      area: 'Financial Modeling',
      description: 'Advanced financial analysis and modeling capabilities',
      services: ['DCF valuation', 'LBO modeling', 'M&A modeling', 'Scenario analysis', 'Risk modeling'],
      experience: '1000+ models built'
    },
    {
      area: 'Regulatory Compliance',
      description: 'Expert navigation of complex financial regulations',
      services: ['SEC compliance', 'Banking regulations', 'Tax optimization', 'Cross-border rules', 'AML/KYC'],
      experience: 'Zero compliance issues'
    },
    {
      area: 'Industry Expertise',
      description: 'Specialized knowledge across key sectors',
      services: ['Technology', 'Healthcare', 'Manufacturing', 'Real Estate', 'Financial Services'],
      experience: '15+ industries served'
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

  const AnimatedCounter = ({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) => {
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

    return <>{prefix}{count.toLocaleString()}{suffix}</>;
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
            backgroundImage: "url('https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=2000&q=80')"
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <DollarSign className="w-4 h-4 text-blue-300 mr-2" />
              <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">Financial Advisory Excellence</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
              Strategic Financial
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                {" "}Partnership
              </span>
            </h1>
            
            <p className={`text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
              Expert financial guidance that drives growth, manages risk, and maximizes value for your business in complex African markets. 
              Trusted by Fortune 500 companies and leading institutions with $2.5B+ in successful transactions.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25">
                <Phone className="w-5 h-5" />
                <span>Schedule Financial Consultation</span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                <span>View Track Record</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap justify-center gap-8 text-blue-100 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">$2.5B+ Raised</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">92% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">500+ Global Investors</span>
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
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.label.includes('Billion') ? 'B+' : stat.label.includes('Rate') || stat.label.includes('ROI') ? '%' : '+'} prefix={stat.label.includes('Billion') ? '$' : ''} />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enterprise Financial Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced financial solutions for complex business challenges</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseCapabilities.map((capability, index) => (
              <div key={capability.title} className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1.2 + index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-green-600">{capability.highlight}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Financial Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">End-to-end financial solutions for every business stage</p>
          </div>

          <div className="space-y-8">
            {financialServices.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${1.4 + index * 0.1}s` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-teal-600 p-8 text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-green-100 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.timeframe}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span className="text-sm">From {service.minAmount}</span>
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
                              <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Target Industries</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.industries.map((industry, idx) => (
                              <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
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

      {/* Enhanced Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Financial Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Deep domain knowledge across financial disciplines</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((exp, index) => (
              <div key={exp.area} className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1.6 + index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  <Calculator className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.area}</h3>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Services</h4>
                    <ul className="space-y-1">
                      {exp.services.map((service, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm font-semibold text-green-600">{exp.experience}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Financial Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Proven results in complex financial transactions</p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={study.company} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1.8 + index * 0.1}s` }}>
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-teal-600 p-8 text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
                      {study.image}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                    <div className="text-green-200 mb-2">{study.industry}</div>
                    <div className="text-green-100 text-sm mb-2">Revenue: {study.revenue}</div>
                    <div className="text-green-100 text-sm mb-4">Employees: {study.employees}</div>
                    <blockquote className="text-green-100 italic text-sm">
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
                              <div className="text-lg font-bold text-green-600">{value}</div>
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Accelerate Your Financial Growth?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Let our expert financial advisors help you navigate complex challenges and seize growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg">
              <Phone className="w-5 h-5" />
              <span>Free Financial Assessment</span>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-green-600 transition-all duration-300">
              <Mail className="w-5 h-5 mr-2" />
              <span>Request Proposal</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialAdvisory;
