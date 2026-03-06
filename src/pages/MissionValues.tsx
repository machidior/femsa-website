import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Target, Heart, Brain, Shield, Users, Globe, Award, TrendingUp, Building2, Clock, Star, Lightbulb, Handshake, FileText, Phone, Mail, CheckCircle2, Zap, ArrowUpRight, Briefcase, BarChart3, Rocket, Eye, Compass, Mountain, TreePine, Sparkles } from 'lucide-react';

const MissionValues: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [activeValue, setActiveValue] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const missionStatement = {
    title: "Our Mission",
    description: "To empower businesses across Africa and emerging markets with world-class integrated solutions that drive sustainable growth, foster innovation, and create lasting value for all stakeholders.",
    vision: "To be the most trusted and innovative business solutions partner in Africa, setting global standards for excellence and impact.",
    purpose: "Transforming businesses, empowering communities, and shaping the future of African enterprise."
  };

  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity First',
      description: 'We operate with unwavering ethical standards, complete transparency, and accountability in all our actions.',
      principles: [
        'Always act with honesty and transparency',
        'Take responsibility for our actions',
        'Maintain the highest ethical standards',
        'Build trust through consistent behavior'
      ],
      color: 'from-red-500 to-pink-600',
      examples: ['Zero tolerance for corruption', 'Transparent pricing', 'Ethical sourcing', 'Fair business practices']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation Driven',
      description: 'We continuously push boundaries with cutting-edge solutions, creative thinking, and transformative technologies.',
      principles: [
        'Embrace change and new ideas',
        'Challenge the status quo',
        'Invest in research and development',
        'Learn from both success and failure'
      ],
      color: 'from-purple-500 to-indigo-600',
      examples: ['AI-powered solutions', 'Blockchain integration', 'Digital transformation', 'Process automation']
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Partnership Focus',
      description: 'We build lasting relationships based on trust, mutual success, and shared value with all stakeholders.',
      principles: [
        'Listen to understand, not just respond',
        'Create win-win solutions',
        'Build long-term relationships',
        'Collaborate for greater impact'
      ],
      color: 'from-blue-500 to-cyan-600',
      examples: ['Client success programs', 'Strategic alliances', 'Community partnerships', 'Stakeholder engagement']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Excellence Commitment',
      description: 'We deliver exceptional results that exceed expectations through continuous improvement and world-class execution.',
      principles: [
        'Set ambitious goals and achieve them',
        'Never compromise on quality',
        'Continuously improve processes',
        'Celebrate and learn from success'
      ],
      color: 'from-green-500 to-emerald-600',
      examples: ['ISO certifications', 'Quality management', 'Performance metrics', 'Continuous improvement']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'People Centric',
      description: 'We invest in our team, foster inclusive culture, and empower every individual to reach their full potential.',
      principles: [
        'Respect and value diversity',
        'Invest in development and growth',
        'Create an inclusive environment',
        'Lead with empathy and compassion'
      ],
      color: 'from-orange-500 to-amber-600',
      examples: ['Training programs', 'Diversity initiatives', 'Employee wellness', 'Career development']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Sustainable Impact',
      description: 'We create positive environmental and social impact while delivering exceptional business results.',
      principles: [
        'Consider long-term impact',
        'Protect the environment',
        'Contribute to social development',
        'Build sustainable business models'
      ],
      color: 'from-teal-500 to-cyan-600',
      examples: ['ESG initiatives', 'Carbon neutrality', 'Community development', 'Sustainable supply chains']
    }
  ];

  const strategicPillars = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Market Leadership',
      description: 'Maintain our position as the leading integrated business solutions provider in Africa',
      kpis: ['50% market share', '#1 brand recognition', '15% annual growth'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation Excellence',
      description: 'Lead the industry in technological innovation and solution development',
      kpis: ['10+ new solutions yearly', 'AI-first approach', 'Digital transformation leader'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Success',
      description: 'Deliver exceptional value and measurable results for every client',
      kpis: ['95% client retention', '300% average ROI', '500+ success stories'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Expansion',
      description: 'Expand our footprint and influence across emerging markets globally',
      kpis: ['75 countries by 2025', '5 new regions', 'Global partnerships'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const cultureElements = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Innovation Culture',
      description: 'Fostering creativity and forward-thinking across all levels',
      activities: ['Innovation labs', 'Hackathons', 'Idea incubation', 'R&D investment']
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Growth Mindset',
      description: 'Embracing challenges as opportunities for development',
      activities: ['Learning programs', 'Mentorship', 'Skill development', 'Career progression']
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: 'Wellness Focus',
      description: 'Supporting holistic well-being of our team members',
      activities: ['Health programs', 'Work-life balance', 'Mental health support', 'Fitness initiatives']
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Purpose Driven',
      description: 'Connecting daily work to our larger mission and impact',
      activities: ['Purpose workshops', 'Impact measurement', 'Community service', 'Storytelling']
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
            backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80')"
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full mb-6 transition-all duration-700 opacity-100 translate-y-0`}>
              <Target className="w-4 h-4 text-blue-300 mr-2" />
              <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">Mission & Values</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 opacity-100 translate-y-0">
              Guided by Purpose
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                {" "}Driven by Values
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-700 opacity-100 translate-y-0">
              Our mission and values are the foundation of everything we do, guiding our decisions, 
              shaping our culture, and defining our commitment to excellence and impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 opacity-100 translate-y-0">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25">
                <Eye className="w-5 h-5" />
                <span>Learn Our Story</span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                <span>Download Values Guide</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-blue-100 transition-all duration-700 opacity-100 translate-y-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">15 Years Impact</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Value Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Purpose Led</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{missionStatement.title}</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{missionStatement.description}</p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{missionStatement.vision}</p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Purpose</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{missionStatement.purpose}</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white mb-6">
                <Target className="w-12 h-12" />
              </div>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5000+</div>
                  <div className="text-gray-600">Lives Impacted Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Countries Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$10B+</div>
                  <div className="text-gray-600">Economic Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values That Guide Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six fundamental principles that shape our culture, decisions, and relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onMouseEnter={() => setActiveValue(index)}
              >
                <div className={`bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full ${
                  activeValue === index ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} text-white mb-6 group-hover:scale-110 transition-all duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{value.description}</p>
                  
                  {/* Principles */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Our Principles</h4>
                    <ul className="space-y-2">
                      {value.principles.map((principle, principleIndex) => (
                        <li key={principleIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {principle}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples */}
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">In Action</h4>
                    <div className="flex flex-wrap gap-2">
                      {value.examples.map((example, exampleIndex) => (
                        <span key={exampleIndex} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-lg">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Pillars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four key pillars that support our mission and drive our strategic direction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategicPillars.map((pillar, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${pillar.color} text-white mb-6 group-hover:scale-110 transition-all duration-300`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>
                <div className="space-y-2">
                  {pillar.kpis.map((kpi, kpiIndex) => (
                    <div key={kpiIndex} className="px-3 py-2 bg-gray-50 rounded-lg text-sm font-medium text-gray-700">
                      {kpi}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we bring our values to life through daily practices and initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureElements.map((element, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white mb-6">
                  {element.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{element.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{element.description}</p>
                <div className="space-y-2">
                  {element.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission-Driven Team</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Be part of a team that's making a real difference in businesses and communities across Africa
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

export default MissionValues;
