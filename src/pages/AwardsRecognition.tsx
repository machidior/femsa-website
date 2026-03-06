import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, Trophy, Star, Target, TrendingUp, Building2, Clock, Lightbulb, Heart, Handshake, FileText, Phone, Mail, CheckCircle2, Shield, Zap, ArrowUpRight, Briefcase, BarChart3, Brain, Rocket, Globe, Medal, Crown, Gem, Flag, Users, Calendar, MapPin, FileCheck } from 'lucide-react';

const AwardsRecognition: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedAward, setSelectedAward] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const majorAwards = [
    {
      id: 1,
      name: 'Africa Business Excellence Award',
      organization: 'African Business Forum',
      year: '2024',
      category: 'Excellence',
      description: 'Recognized as the best integrated business solutions provider in Africa for outstanding performance and innovation.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80',
      icon: <Trophy className="w-6 h-6" />,
      significance: 'Industry recognition for market leadership and innovation excellence',
      impact: 'Enhanced brand credibility and client trust across 50+ countries'
    },
    {
      id: 2,
      name: 'Global Supply Chain Innovation Award',
      organization: 'International Supply Chain Council',
      year: '2023',
      category: 'Innovation',
      description: 'Awarded for pioneering AI-powered supply chain solutions that reduced operational costs by 40%.',
      image: 'https://images.unsplash.com/photo-1605007635686-4c246e28e06?auto=format&fit=crop&w=400&q=80',
      icon: <Lightbulb className="w-6 h-6" />,
      significance: 'Recognition for technological innovation and process optimization',
      impact: 'Positioned us as leaders in digital transformation for supply chain'
    },
    {
      id: 3,
      name: 'Sustainable Business Leadership Award',
      organization: 'Global Sustainability Forum',
      year: '2023',
      category: 'Sustainability',
      description: 'Honored for commitment to ESG principles and sustainable business practices across all operations.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d744875260?auto=format&fit=crop&w=400&q=80',
      icon: <Globe className="w-6 h-6" />,
      significance: 'Recognition for environmental and social responsibility',
      impact: 'Attracted sustainability-focused clients and investors'
    },
    {
      id: 4,
      name: 'Best Financial Advisory Firm Africa',
      organization: 'African Financial Services Association',
      year: '2022',
      category: 'Financial Services',
      description: 'Recognized for exceptional financial advisory services and successful capital raising initiatives.',
      image: 'https://images.unsplash.com/photo-1556712046-fd58aa4461d?auto=format&fit=crop&w=400&q=80',
      icon: <TrendingUp className="w-6 h-6" />,
      significance: 'Industry validation of financial expertise and success rate',
      impact: 'Increased client portfolio by 60% in financial services'
    },
    {
      id: 5,
      name: 'Digital Transformation Excellence Award',
      organization: 'World Business Awards',
      year: '2022',
      category: 'Technology',
      description: 'Awarded for successful digital transformation projects that modernized 100+ businesses.',
      image: 'https://images.unsplash.com/photo-1551288801-7d3644a5ad9c?auto=format&fit=crop&w=400&q=80',
      icon: <Brain className="w-6 h-6" />,
      significance: 'Recognition for technology leadership and innovation',
      impact: 'Established us as digital transformation experts'
    },
    {
      id: 6,
      name: 'Customer Choice Award',
      organization: 'Global Business Review',
      year: '2021',
      category: 'Customer Service',
      description: 'Voted #1 by clients for exceptional service quality and customer satisfaction.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80',
      icon: <Heart className="w-6 h-6" />,
      significance: 'Client recognition for service excellence',
      impact: '95% client retention rate and referral growth'
    }
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015',
      organization: 'International Organization for Standardization',
      description: 'Quality management systems certification',
      icon: <Shield className="w-8 h-8" />,
      validUntil: '2025',
      scope: 'All business operations and service delivery'
    },
    {
      name: 'ISO 27001:2022',
      organization: 'International Organization for Standardization',
      description: 'Information security management systems',
      icon: <Shield className="w-8 h-8" />,
      validUntil: '2025',
      scope: 'Data protection and cybersecurity'
    },
    {
      name: 'ISO 14001:2015',
      organization: 'International Organization for Standardization',
      description: 'Environmental management systems',
      icon: <Globe className="w-8 h-8" />,
      validUntil: '2025',
      scope: 'Environmental impact and sustainability'
    },
    {
      name: 'SOC 2 Type II',
      organization: 'AICPA',
      description: 'Security, availability, processing, integrity, confidentiality, privacy',
      icon: <FileCheck className="w-8 h-8" />,
      validUntil: '2024',
      scope: 'Cloud services and data processing'
    }
  ];

  const recognitionStats = [
    {
      icon: <Trophy className="w-8 h-8" />,
      number: '150+',
      label: 'Awards Won',
      description: 'Industry recognition across all service areas'
    },
    {
      icon: <Medal className="w-8 h-8" />,
      number: '25+',
      label: 'Countries',
      description: 'International recognition and awards'
    },
    {
      icon: <Crown className="w-8 h-8" />,
      number: '50+',
      label: 'Organizations',
      description: 'Prestigious awarding bodies and institutions'
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: '15',
      label: 'Years',
      description: 'Consistent excellence and innovation'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Awards', icon: <Award className="w-4 h-4" /> },
    { id: 'excellence', name: 'Excellence', icon: <Trophy className="w-4 h-4" /> },
    { id: 'innovation', name: 'Innovation', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'sustainability', name: 'Sustainability', icon: <Globe className="w-4 h-4" /> },
    { id: 'financial', name: 'Financial', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'technology', name: 'Technology', icon: <Brain className="w-4 h-4" /> },
    { id: 'service', name: 'Service', icon: <Heart className="w-4 h-4" /> }
  ];

  const filteredAwards = activeCategory === 'all' 
    ? majorAwards 
    : majorAwards.filter(award => award.category.toLowerCase().includes(activeCategory));

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
            backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=2000&q=80')"
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full mb-6 transition-all duration-700 opacity-100 translate-y-0`}>
              <Trophy className="w-4 h-4 text-blue-300 mr-2" />
              <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">Awards & Recognition</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 opacity-100 translate-y-0">
              Excellence
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                {" "}Recognized
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-700 opacity-100 translate-y-0">
              Celebrating 150+ awards and recognitions that validate our commitment to excellence, 
              innovation, and outstanding service delivery across global markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 opacity-100 translate-y-0">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25">
                <Award className="w-5 h-5" />
                <span>View All Awards</span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                <span>Download Awards PDF</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-blue-100 transition-all duration-700 opacity-100 translate-y-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">150+ Awards</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Global Recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Industry Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitionStats.map((stat, index) => (
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

      {/* Awards Filter Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Prestigious Awards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition from leading organizations worldwide for our excellence and innovation
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAwards.map((award, index) => (
              <div 
                key={award.id}
                className="group cursor-pointer"
                onMouseEnter={() => setSelectedAward(index)}
              >
                <div className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 ${
                  selectedAward === index ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}>
                  {/* Award Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={award.image} 
                      alt={award.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm">
                        {award.icon}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-lg font-medium">
                          {award.category}
                        </span>
                        <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs rounded-lg font-medium">
                          {award.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{award.name}</h3>
                    </div>
                  </div>

                  {/* Award Details */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{award.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Awarded By</p>
                      <p className="text-sm text-gray-600">{award.organization}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Significance</p>
                      <p className="text-sm text-gray-600">{award.significance}</p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Business Impact</p>
                      <p className="text-sm text-gray-600">{award.impact}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Internationally recognized certifications that validate our commitment to quality and standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white mb-6">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cert.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{cert.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Issued By:</span>
                    <span className="text-gray-900 font-medium">{cert.organization}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Valid Until:</span>
                    <span className="text-gray-900 font-medium">{cert.validUntil}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-gray-600 text-xs">{cert.scope}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our path of excellence marked by continuous achievement and industry recognition
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-500 to-blue-200"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {[
                { year: '2021', title: 'Customer Choice Award', description: 'Voted #1 by clients for exceptional service' },
                { year: '2022', title: 'Digital Transformation Excellence', description: 'Recognized for successful digital transformation projects' },
                { year: '2023', title: 'Global Supply Chain Innovation', description: 'Awarded for pioneering AI-powered solutions' },
                { year: '2024', title: 'Africa Business Excellence', description: 'Best integrated business solutions provider in Africa' }
              ].map((event, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                          <Trophy className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-blue-600">{event.year}</div>
                          <div className="text-lg font-semibold text-gray-900">{event.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-600">{event.description}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Partner With an Award-Winning Team</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Experience the excellence that has earned us 150+ awards and global recognition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/25">
              <Phone className="w-5 h-5" />
              <span>Get Started Today</span>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              <span>Download Awards Portfolio</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardsRecognition;
