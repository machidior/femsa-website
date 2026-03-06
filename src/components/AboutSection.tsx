import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Target, 
  Eye, 
  Star, 
  Globe, 
  Handshake, 
  Award,
  TrendingUp,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
  stats?: { label: string; value: string; description: string }[];
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  type: 'founding' | 'expansion' | 'achievement' | 'innovation';
}

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const AboutSection: React.FC = () => {
  const [activePanel, setActivePanel] = useState('mission');
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const accordionItems: AccordionItem[] = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: <Target className="w-6 h-6" />,
      content: 'To be the trusted global trading partner that helps clients unlock higher profits by delivering cost-efficient, timely, and reliable solutions tailored to their unique needs. We exist to help businesses minimize costs, reduce waste, shorten lead times, and ultimately maximize profitability.',
      stats: [
        { label: 'Client Profitability', value: '94%', description: 'Average increase achieved' },
        { label: 'Cost Reduction', value: '30%', description: 'Average savings for clients' },
        { label: 'Supply Reliability', value: '99%', description: 'On-time delivery rate' }
      ]
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: <Eye className="w-6 h-6" />,
      content: 'To become a world-class trading company recognized for driving value, building lasting relationships, and consistently exceeding client expectations. We envision becoming the preferred partner for industrial manufacturers and customers seeking reliable, cost-effective trading solutions.',
      stats: [
        { label: 'Industrial Partners', value: '500+', description: 'Trusted manufacturers & suppliers' },
        { label: 'Product Range', value: '1000+', description: 'Packaging & equipment solutions' },
        { label: 'Market Coverage', value: 'East Africa', description: 'Primary service region' }
      ]
    },
    {
      id: 'values',
      title: 'Our Values',
      icon: <Star className="w-6 h-6" />,
      content: 'Our core values guide every trading decision, partnership, and client interaction. They form the foundation of our trading excellence and long-term relationships.',
      stats: [
        { label: 'Integrity', value: '100%', description: 'Honesty and transparency in all dealings' },
        { label: 'Customer Success', value: '94%', description: 'Client profitability focus' },
        { label: 'Efficiency', value: '40%', description: 'Average operational improvement' }
      ]
    }
  ];

  const milestones: Milestone[] = [
    {
      year: '2009',
      title: 'FEMSA Founded',
      description: 'Established as trading company with focus on industrial supplies',
      type: 'founding'
    },
    {
      year: '2012',
      title: 'Packaging Division Launch',
      description: 'Expanded into raw materials and packaging supplies',
      type: 'expansion'
    },
    {
      year: '2015',
      title: 'Equipment Division',
      description: 'Added machinery and equipment trading services',
      type: 'achievement'
    },
    {
      year: '2018',
      title: 'Strategic Partnerships',
      description: 'Secured partnerships with 100+ global manufacturers',
      type: 'innovation'
    },
    {
      year: '2021',
      title: 'Regional Expansion',
      description: 'Opened offices in Mwanza, Arusha, and Zanzibar',
      type: 'expansion'
    },
    {
      year: '2024',
      title: 'Digital Trading Platform',
      description: 'Launched online procurement system for industrial clients',
      type: 'innovation'
    }
  ];

  const values: Value[] = [
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and respect in all our trading relationships.',
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: 'green'
    },
    {
      title: 'Customer Success',
      description: 'We measure our success by the value and profit our clients gain through our trading solutions.',
      icon: <Award className="w-8 h-8" />,
      color: 'blue'
    },
    {
      title: 'Efficiency',
      description: 'We are committed to eliminating waste, reducing costs, and improving speed to market.',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'purple'
    },
    {
      title: 'Innovation',
      description: 'We embrace smart solutions and advanced systems to enhance trading service delivery.',
      icon: <Star className="w-8 h-8" />,
      color: 'orange'
    },
    {
      title: 'Partnership',
      description: 'We focus on building long-term relationships based on trust and shared growth.',
      icon: <Handshake className="w-8 h-8" />,
      color: 'indigo'
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

  const toggleAccordion = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const getValueColor = (color: string) => {
    switch (color) {
      case 'green': return 'from-green-500 to-green-600';
      case 'blue': return 'from-blue-500 to-blue-600';
      case 'purple': return 'from-purple-500 to-purple-600';
      case 'orange': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center px-4 py-2 bg-orange-50 rounded-full mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Star className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-semibold text-orange-700 tracking-wide uppercase">Who We Are</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.1s' }}>
            Building Africa's
            <span className="text-orange-500"> Future</span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.2s' }}>
            For over 15 years, FEMSA Group has been the trusted partner for businesses seeking growth, 
            innovation, and competitive advantage across African markets and beyond.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Left Column - Accordion */}
          <div className="lg:col-span-2">
            <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Foundation</h3>
              
              <div className="space-y-4">
                {accordionItems.map((item) => (
                  <div 
                    key={item.id}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          activePanel === item.id ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                        } transition-colors duration-300`}>
                          {item.icon}
                        </div>
                        <span className="font-semibold text-gray-900">{item.title}</span>
                      </div>
                      {expandedSection === item.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    
                    {/* Accordion Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedSection === item.id ? 'max-h-96' : 'max-h-0'
                    }`}>
                      <div className="p-6 bg-white">
                        <p className="text-gray-700 leading-relaxed mb-6">{item.content}</p>
                        
                        {item.stats && (
                          <div className="grid grid-cols-3 gap-4">
                            {item.stats.map((stat, index) => (
                              <div key={index} className="text-center">
                                <div className="text-2xl font-bold text-orange-500 mb-1">{stat.value}</div>
                                <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
                                <div className="text-xs text-gray-500">{stat.description}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div>
            <div className={`bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.5s' }}>
              <h3 className="text-2xl font-bold mb-8">Core Values</h3>
              
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div 
                    key={value.title}
                    className={`group transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                    style={{ transitionDelay: `${0.7 + index * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getValueColor(value.color)} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">{value.title}</h4>
                    <p className="text-gray-300 leading-relaxed text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={`mb-20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.1s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              15+ years of excellence, innovation, and growth
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-600 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center gap-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} 
                  style={{ transitionDelay: `${1.3 + index * 0.15}s` }}
                >
                  {/* Timeline Node */}
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full border-4 border-white ${
                      milestone.type === 'founding' ? 'bg-green-500' :
                      milestone.type === 'expansion' ? 'bg-blue-500' :
                      milestone.type === 'achievement' ? 'bg-orange-500' :
                      'bg-purple-500'
                    }`}></div>
                    
                    {/* Pulse Effect */}
                    <div className={`absolute inset-0 rounded-full animate-ping ${
                      milestone.type === 'founding' ? 'bg-green-500/20' :
                      milestone.type === 'expansion' ? 'bg-blue-500/20' :
                      milestone.type === 'achievement' ? 'bg-orange-500/20' :
                      'bg-purple-500/20'
                    }`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-bold text-gray-900">{milestone.year}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          milestone.type === 'founding' ? 'bg-green-100 text-green-700' :
                          milestone.type === 'expansion' ? 'bg-blue-100 text-blue-700' :
                          milestone.type === 'achievement' ? 'bg-orange-100 text-orange-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {milestone.type}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '2s' }}>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Partner with Excellence?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join 5,000+ businesses that trust FEMSA Group for their growth journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                      const offsetPosition = elementPosition - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Start Partnership
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">
                  Download Company Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
