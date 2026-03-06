import React, { useState, useEffect } from 'react';
import femsaGroupLogo from "../../resourses/femsa group (png)-10_1 1.png";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logoScale, setLogoScale] = useState(0.8);
  const [logoOpacity, setLogoOpacity] = useState(0);

  useEffect(() => {
    // Logo entrance animation
    const logoTimer = setTimeout(() => {
      setLogoScale(1);
      setLogoOpacity(1);
    }, 100);

    // Progress bar animation
    const progressTimer = setTimeout(() => {
      setProgress(100);
    }, 800);

    // Complete loading
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(progressTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 z-[9999] flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12">
        {/* Logo container with animations */}
        <div 
          className="relative transition-all duration-1000 ease-out"
          style={{
            transform: `scale(${logoScale})`,
            opacity: logoOpacity,
          }}
        >
          {/* Glow effect behind logo */}
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 scale-150 animate-pulse"></div>
          
          {/* Main logo */}
          <img 
            src={femsaGroupLogo} 
            alt="FEMSA Group" 
            className="relative w-80 h-80 md:w-96 md:h-96 object-contain filter drop-shadow-2xl"
          />
          
          {/* Rotating ring around logo */}
          <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-spin opacity-30 scale-110"></div>
          <div className="absolute inset-0 border border-orange-400 rounded-full animate-spin opacity-20 scale-125" style={{ animationDirection: 'reverse' }}></div>
        </div>

        {/* Loading text */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white animate-pulse">
            FEMSA Global Trading
          </h2>
          <p className="text-blue-200 text-sm md:text-base animate-pulse" style={{ animationDelay: '0.5s' }}>
            Empowering Global Trade Solutions
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-80 h-2 bg-blue-800/30 rounded-full overflow-hidden backdrop-blur-sm border border-blue-400/20">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 to-orange-400 rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Loading percentage */}
        <div className="text-blue-300 text-sm font-medium animate-pulse">
          {progress}%
        </div>

        {/* Bottom decorative elements */}
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
