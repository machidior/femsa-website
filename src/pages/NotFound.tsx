import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <div className="min-h-screen bg-femsa-primary flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-500 rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Large 404 */}
        <div className="mb-8">
          <h1 
            className="text-8xl md:text-9xl font-display font-bold text-amber-500"
            style={{ fontFamily: 'Syne' }}
          >
            404
          </h1>
        </div>

        {/* Message */}
        <div className="mb-12 max-w-md mx-auto">
          <h2 
            className="text-2xl md:text-3xl font-display font-bold text-white mb-4"
            style={{ fontFamily: 'Syne' }}
          >
            This page does not exist
          </h2>
          <p className="text-femsa-secondary text-lg">
            — but your growth can.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-amber-500 text-femsa-primary rounded-full font-semibold transition-all duration-300 hover:bg-amber-400 hover:scale-105 flex items-center justify-center gap-2 min-h-[44px]"
            style={{ fontFamily: 'DM Sans' }}
          >
            <Home className="w-5 h-5" />
            Back to Homepage
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-16">
          <p className="text-femsa-muted text-sm mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => navigate('/#services')}
              className="px-4 py-2 border border-femsa-border text-femsa-secondary rounded-full text-sm hover:text-amber-500 hover:border-amber-500 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => navigate('/#about')}
              className="px-4 py-2 border border-femsa-border text-femsa-secondary rounded-full text-sm hover:text-amber-500 hover:border-amber-500 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => navigate('/#contact')}
              className="px-4 py-2 border border-femsa-border text-femsa-secondary rounded-full text-sm hover:text-amber-500 hover:border-amber-500 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-20px) translateX(10px); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-10px) translateX(-10px); 
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-30px) translateX(5px); 
            opacity: 0.7;
          }
        }
        `
      }} />
    </div>
  );
};

export default NotFound;
