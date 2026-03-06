import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Award, Target, TrendingUp, Building2, Star, Lightbulb, Heart, Handshake, FileText, Phone, Mail, CheckCircle2, Shield, Zap, ArrowUpRight, Briefcase, BarChart3, Brain, Rocket, Globe, Twitter, Linkedin, Mail as MailIcon, User, GraduationCap, Trophy } from 'lucide-react';

const Leadership: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [activeLeader, setActiveLeader] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const leadershipTeam = [
    {
      name: 'Dr. Amina Kofi',
      position: 'Chief Executive Officer',
      bio: 'Visionary leader with 20+ years of experience in international trade and business strategy. PhD in International Business from Harvard Business School.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c2c4?auto=format&fit=crop&w=400&q=80',
      expertise: ['Strategic Planning', 'Global Markets', 'M&A Advisory'],
      achievements: ['Led $2B+ in transactions', 'Expanded to 50+ countries', 'Fortune 500 partnerships'],
      social: { twitter: '#', linkedin: '#', email: '#' },
      icon: <Trophy className="w-6 h-6" />
    },
    {
      name: 'James Chen',
      position: 'Chief Operating Officer',
      bio: 'Operations expert with 18+ years in supply chain optimization and digital transformation. MBA from Stanford Graduate School of Business.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      expertise: ['Supply Chain', 'Digital Transformation', 'Process Optimization'],
      achievements: ['Reduced operational costs by 40%', 'Implemented AI solutions', 'ISO certification'],
      social: { twitter: '#', linkedin: '#', email: '#' },
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Sarah Williams',
      position: 'Chief Financial Officer',
      bio: 'Financial strategist with 15+ years in investment banking and corporate finance. CPA and CFA certified with expertise in emerging markets.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      expertise: ['Financial Strategy', 'Risk Management', 'Capital Raising'],
      achievements: ['Managed $5B+ portfolio', '92% success rate', '500+ investor network'],
      social: { twitter: '#', linkedin: '#', email: '#' },
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      name: 'Michael Okonkwo',
      position: 'Chief Technology Officer',
      bio: 'Technology innovator with 12+ years in AI, blockchain, and enterprise software development. MIT graduate with multiple patents.',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=400&q=80',
      expertise: ['AI & Machine Learning', 'Blockchain', 'Enterprise Architecture'],
      achievements: ['10+ patents filed', 'AI platform development', 'Digital transformation leader'],
      social: { twitter: '#', linkedin: '#', email: '#' },
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      name: 'Elena Rodriguez',
      position: 'Chief Marketing Officer',
      bio: 'Marketing powerhouse with 14+ years in global brand management and digital marketing. MBA from INSEAD with extensive emerging markets experience.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      expertise: ['Brand Strategy', 'Digital Marketing', 'Market Expansion'],
      achievements: ['300% brand growth', '50+ market entries', 'Award-winning campaigns'],
      social: { twitter: '#', linkedin: '#', email: '#' },
      icon: <Rocket className="w-6 h-6" />
    },
    {
      name: 'David Kim',
      position: 'Chief Legal Officer',
      bio: 'Legal expert with 16+ years in international trade law, compliance, and corporate governance. Harvard Law School graduate with bar admissions in 5 jurisdictions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      expertise: ['International Law', 'Compliance', 'Corporate Governance'],
      achievements: ['100% compliance record', 'Multi-jurisdiction expertise', 'Risk mitigation leader'],
      social: { twitter: '#', linkedin: '#', email: '#' },
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const boardMembers = [
    {
      name: 'Prof. Robert Thompson',
      position: 'Chairman of the Board',
      bio: 'Distinguished academic and business leader with 30+ years experience in corporate governance and international business.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Maria Santos',
      position: 'Independent Director',
      bio: 'Renowned economist and policy advisor with expertise in emerging markets and sustainable development.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c2c4?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Ahmed Hassan',
      position: 'Independent Director',
      bio: 'Experienced banker and investment expert with deep knowledge of African financial markets.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const leadershipStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '150+',
      label: 'Leadership Team',
      description: 'Experienced professionals across all departments'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: '85%',
      label: 'Advanced Degrees',
      description: 'Masters, PhDs, and professional certifications'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: '25+',
      label: 'Nationalities',
      description: 'Diverse leadership from around the world'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: '100+',
      label: 'Industry Awards',
      description: 'Recognition for leadership excellence'
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
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80')"
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full mb-6 transition-all duration-700 opacity-100 translate-y-0`}>
              <Users className="w-4 h-4 text-blue-300 mr-2" />
              <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">Leadership Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 opacity-100 translate-y-0">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                {" "}Visionary Leaders
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-700 opacity-100 translate-y-0">
              World-class leadership team with diverse expertise and a shared commitment to excellence, 
              innovation, and sustainable growth across global markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 opacity-100 translate-y-0">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25">
                <Handshake className="w-5 h-5" />
                <span>Join Our Team</span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                <span>Leadership Report</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-blue-100 transition-all duration-700 opacity-100 translate-y-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">150+ Leaders</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Global Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Industry Recognized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white mb-4 group-hover:scale-110 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The strategic minds driving our vision and operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onMouseEnter={() => setActiveLeader(index)}
              >
                <div className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 ${
                  activeLeader === index ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}>
                  {/* Leader Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500 text-white">
                          {leader.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                      </div>
                      <p className="text-blue-100 font-medium">{leader.position}</p>
                    </div>
                  </div>

                  {/* Leader Details */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{leader.bio}</p>
                    
                    {/* Expertise */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-lg font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {leader.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-xs text-gray-600 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <a href={leader.social.twitter} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href={leader.social.linkedin} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={leader.social.email} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                        <MailIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Board of Directors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Independent oversight and strategic guidance from industry veterans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      <User className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our leadership and organizational culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-pink-600 text-white mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lead with Integrity</h3>
              <p className="text-gray-600">Ethical leadership and transparency in all our decisions and actions</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white mb-6">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation First</h3>
              <p className="text-gray-600">Embracing new ideas and technologies to stay ahead of the curve</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">People Centric</h3>
              <p className="text-gray-600">Investing in our team and fostering a culture of growth and development</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Results Driven</h3>
              <p className="text-gray-600">Focus on delivering exceptional outcomes for our clients and stakeholders</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Leadership Team</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            We're always looking for talented leaders who share our vision and values
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/25">
              <Briefcase className="w-5 h-5" />
              <span>View Open Positions</span>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              <span>Contact Leadership</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
