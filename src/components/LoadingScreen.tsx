import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 100);

    const completeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[#04091E] z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img 
            src="/resourses/femsa group (png)-10_1 1.png" 
            alt="FEMSA Group" 
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-amber-500/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-amber-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
