import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Globe, Users, Award, Target, TrendingUp, Building2, Clock, Star, Lightbulb, Heart, Handshake, FileText, Phone, Mail, CheckCircle2, Shield, Zap, ArrowUpRight, Briefcase, BarChart3, Brain, Rocket } from 'lucide-react';

const OurStory: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const timelineEvents = [
    {
      year: '2009',
      title: 'The Beginning',
      description: 'Founded with a vision to connect African businesses to global markets',
      icon: <Lightbulb className="w-6 h-6" />,
      highlight: 'Started with 3 employees in a small office in Nairobi'
    },
    {
      year: '2012',
      title: 'First Major Breakthrough',
      description: 'Secured landmark trade deal worth $50M between East Africa and Europe',
      icon: <TrendingUp className="w-6 h-6" />,
      highlight: 'Expanded to 15 countries across Africa'
    },
    {
      year: '2015',
      title: 'Strategic Expansion',
      description: 'Launched consulting and financial advisory divisions',
      icon: <Rocket className="w-6 h-6" />,
      highlight: 'Achieved ISO 9001:2015 certification'
    },
    {
      year: '2018',
      title: 'Digital Transformation',
      description: 'Implemented AI-powered supply chain solutions',
      icon: <Brain className="w-6 h-6" />,
      highlight: 'Reached 500+ global clients'
    },
    {
      year: '2021',
      title: 'Market Leadership',
      description: 'Became Africa\'s leading integrated business solutions provider',
      icon: <Award className="w-6 h-6" />,
      highlight: 'Surpassed $1B in total transaction value'
    },
    {
      year: '2024',
      title: 'Future Ready',
      description: 'Launched sustainable supply chain and ESG consulting services',
      icon: <Globe className="w-6 h-6" />,
      highlight: 'Operating in 50+ countries with 5,000+ employees'
    }
  ];

  const milestones = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '5000+',
      label: 'Global Clients',
      description: 'Fortune 500 companies and leading enterprises'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: '50+',
      label: 'Countries',
      description: 'Global presence across 5 continents'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: '$10B+',
      label: 'Transaction Value',
      description: 'Total value of facilitated transactions'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: '200+',
      label: 'Industry Awards',
      description: 'Recognition for excellence and innovation'
    }
  ];

  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity First',
      description: 'We operate with unwavering ethical standards and transparency',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation Driven',
      description: 'We continuously push boundaries with cutting-edge solutions',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Partnership Focus',
      description: 'We build lasting relationships based on trust and mutual success',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Excellence Commitment',
      description: 'We deliver exceptional results that exceed expectations',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const AnimatedCounter = ({ target, suffix = '' }: { target: string; suffix?: string }) => {
    return <>{target}{suffix}</>;
  };

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
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')"
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full mb-6 transition-all duration-700 opacity-100 translate-y-0`}>
              <Calendar className="w-4 h-4 text-blue-300 mr-2" />
              <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">Our Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 opacity-100 translate-y-0">
              15 Years of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                {" "}Excellence
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-700 opacity-100 translate-y-0">
              From a small startup in Nairobi to Africa\'s leading integrated business solutions provider. 
              Our story is one of perseverance, innovation, and unwavering commitment to client success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 opacity-100 translate-y-0">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25">
                <Phone className="w-5 h-5" />
                <span>Join Our Journey</span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                <span>Download Company Profile</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-blue-100 transition-all duration-700 opacity-100 translate-y-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">15 Years Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Industry Leader</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white mb-4 group-hover:scale-110 transition-all duration-300`}>
                  {milestone.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{milestone.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{milestone.label}</div>
                <div className="text-sm text-gray-600">{milestone.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey Through Time</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our evolution and defined our success
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-500 to-blue-200"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  onMouseEnter={() => setActiveTimeline(index)}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 ${
                      activeTimeline === index ? 'ring-2 ring-blue-500 scale-105' : ''
                    }`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white`}>
                          {event.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-blue-600">{event.year}</div>
                          <div className="text-lg font-semibold text-gray-900">{event.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <div className="text-sm font-medium text-blue-600 bg-blue-50 rounded-lg px-3 py-2">
                        {event.highlight}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values That Guide Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that have been our compass through 15 years of growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} text-white mb-6 group-hover:scale-110 transition-all duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Be Part of Our Next Chapter</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join us as we continue to innovate, expand, and transform businesses across Africa and beyond
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/25">
              <Briefcase className="w-5 h-5" />
              <span>Career Opportunities</span>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Handshake className="w-5 h-5" />
              <span>Partner With Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
