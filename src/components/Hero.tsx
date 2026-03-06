import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, BarChart3, Globe, Users, Shield, Zap, TrendingUp, Award, Target, Package, ChevronRight, Clock, CheckCircle } from "lucide-react";

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const enterpriseMetrics = [
    {
      value: 500,
      label: 'Industrial Partners',
      description: 'Trusted manufacturers & suppliers',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      value: 15,
      label: 'Years Excellence',
      description: 'In trading solutions',
      icon: <Award className="w-5 h-5" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      value: 94,
      label: 'Client Profitability',
      description: 'Average increase achieved',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      value: 1000,
      label: 'Products',
      description: 'Packaging & equipment solutions',
      icon: <Target className="w-5 h-5" />,
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const coreServices = [
    { icon: <Package />, title: 'Raw Materials & Packaging', description: 'PET, HDPE, PP, LDPE, preforms, caps, labels' },
    { icon: <Zap />, title: 'Equipment & Machinery', description: 'Injection machines, filling lines, quality control' },
    { icon: <Shield />, title: 'Spare Parts & Components', description: 'Electrical, mechanical, pneumatic parts' },
    { icon: <Users />, title: 'Consumables & Supplies', description: 'Lubricants, chemicals, maintenance tools' }
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % enterpriseMetrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-8">
          {/* Eyebrow */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-300 text-sm font-medium tracking-wide">INDUSTRIAL TRADING EXCELLENCE</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Your Trusted Trading
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Partner in Tanzania
              </span>
            </h1>

            <p 
              className={`text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Cost-efficient trading, reliable supply chains, and measurable profitability for 
              <span className="text-white font-semibold"> manufacturers</span> and 
              <span className="text-white font-semibold"> industrial customers</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </span>
            </button>
          </div>

          {/* Metrics Display */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            {enterpriseMetrics.map((metric, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${metric.color} bg-opacity-10 backdrop-blur-sm border border-white/10 transition-all duration-500 cursor-pointer hover:scale-105 hover:bg-opacity-20 ${
                  activeMetric === index ? 'ring-2 ring-blue-400 ring-opacity-50' : ''
                }`}
                onMouseEnter={() => setActiveMetric(index)}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {metric.value}{metric.label.includes('%') ? '%' : metric.label.includes('Years') ? '+' : '+'}
                </div>
                <div className="text-sm font-medium text-blue-200 mb-1">{metric.label}</div>
                <div className="text-xs text-blue-300/80">{metric.description}</div>
              </div>
            ))}
          </div>

          {/* Core Services Preview */}
          <div 
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Core Trading Services</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {coreServices.map((service, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="text-sm font-medium text-white text-center leading-tight">{service.title}</div>
                  <div className="text-xs text-blue-300/80 text-center mt-1">{service.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div 
            className={`flex flex-wrap justify-center items-center gap-6 text-sm text-blue-300/80 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>99% On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-400" />
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '1600ms' }}
      >
        <div className="flex flex-col items-center gap-2 text-blue-300/60">
          <ChevronRight className="w-5 h-5 animate-bounce" />
          <span className="text-xs font-medium tracking-wider">SCROLL TO EXPLORE</span>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        @keyframes animation-delay-2000 {
          0%, 80%, 100% { opacity: 0.2; }
          40% { opacity: 0.4; }
        }
        @keyframes animation-delay-4000 {
          0%, 80%, 100% { opacity: 0.2; }
          40% { opacity: 0.4; }
        }
        .animation-delay-2000 {
          animation: animation-delay-2000 4s ease-in-out infinite;
        }
        .animation-delay-4000 {
          animation: animation-delay-4000 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
