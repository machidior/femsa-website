import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Globe, TrendingUp, Shield, Target, Zap } from "lucide-react";

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const rotatingTexts = [
    "Global Trading Excellence",
    "Strategic Business Solutions", 
    "Supply Chain Innovation",
    "Industrial Partnership"
  ];

  const keyMetrics = [
    { value: "15+", label: "Years Excellence", icon: <TrendingUp className="w-4 h-4" /> },
    { value: "500+", label: "Industrial Partners", icon: <Globe className="w-4 h-4" /> },
    { value: "94%", label: "Client Growth", icon: <Target className="w-4 h-4" /> }
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
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with Advanced Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-pulse" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%),
                linear-gradient(-45deg, transparent 30%, rgba(147, 197, 253, 0.1) 50%, transparent 70%)
              `,
              animation: 'gradientShift 8s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Advanced Floating Orbs with Movement */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" />
        <div className="absolute top-32 right-16 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" style={{ animationDelay: '6s' }} />
        
        {/* Animated Particles System */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3 + Math.random() * 0.7
              }}
            />
          ))}
        </div>

        {/* Mouse-Following Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.4) 0%, transparent 40%)`
          }}
        />

        {/* Wave Animation at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <div 
            className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"
            style={{
              animation: 'wave 4s ease-in-out infinite'
            }}
          />
        </div>

        {/* Rotating Earth Silhouette - In Front */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div 
            className="w-32 h-32 md:w-40 md:h-40 opacity-40 animate-spin"
            style={{ 
              animationDuration: '60s',
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 10 C30 10 10 30 C10 30 10 50 C10 70 30 90 C30 90 50 90 C70 90 70 70 C90 70 90 50 C90 30 70 10 C70 10 50 10 Z" fill="%23000000"/><path d="M50 10 C70 10 80 10 C90 10 90 30 C90 50 90 70 C70 90 50 90 C30 90 10 70 C10 70 10 50 C10 30 10 10 Z" fill="%23111111"/></svg>')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-12">
          {/* Animated Badge */}
          <div 
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-300 text-sm font-medium tracking-wide">
              {rotatingTexts[textIndex]}
            </span>
          </div>

          {/* Main Headline with Gradient Animation */}
          <div className="space-y-6">
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-pulse">
                Stronger Together.
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Always Moving Forward!
              </span>
            </h1>

            <p 
              className={`text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Femsa Group Limited empowers businesses with innovative solutions, strategic guidance, and resources, driving sustainable growth, trust, and long-term success.
            </p>
          </div>

          {/* Key Metrics with Animated Numbers */}
          <div 
            className={`flex flex-wrap justify-center items-center gap-8 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {keyMetrics.map((metric, index) => (
              <div
                key={index}
                className="group relative px-6 py-4 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-700/20 backdrop-blur-sm border border-blue-500/30 transition-all duration-500 hover:scale-105 hover:bg-blue-600/30"
                style={{ transitionDelay: `${1000 + index * 200}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    {metric.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-sm text-blue-300">{metric.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
              <span className="flex items-center gap-3">
                <Zap className="w-5 h-5" />
                Start Trading
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
              <span className="flex items-center gap-3">
                <Shield className="w-5 h-5" />
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-10px) translateY(5px); }
          50% { transform: translateX(5px) translateY(-10px); }
          75% { transform: translateX(-5px) translateY(5px); }
        }

        @keyframes blob {
          0%, 100% { 
            transform: translate(0px, 0px) scale(1); 
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          34% { 
            transform: translate(30px, -50px) scale(1.1); 
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          68% { 
            transform: translate(-20px, 20px) scale(0.9); 
            border-radius: 70% 30% 40% 60% / 30% 70% 60% 40%;
          }
        }

        @keyframes float {
          0% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0;
          }
          10% { 
            opacity: 1;
          }
          90% { 
            opacity: 1;
          }
          100% { 
            transform: translateY(-100vh) translateX(50px); 
            opacity: 0;
          }
        }

        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
