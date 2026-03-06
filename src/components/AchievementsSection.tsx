import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

const AchievementsSection = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const stats = useMemo(() => [
    { number: 5000, suffix: '+', label: 'Services and Products Delivered' },
    { number: 90, suffix: '%', label: 'Government and Partners Satisfaction Rate' },
    { number: 85.88, suffix: '%', label: 'Client Retention Rate' },
    { number: 5000, suffix: '+', label: 'Clients Inside and Outside the Country' }
  ], []);

  const milestones = useMemo(() => [
    { year: '2018', event: 'FEMSA Group Founded', description: 'Started with a vision to transform business solutions' },
    { year: '2020', event: 'First Major Expansion', description: 'Expanded operations to 5 new countries' },
    { year: '2022', event: '1000+ Clients Milestone', description: 'Reached significant client base milestone' },
    { year: '2023', event: 'Global Partnership', description: 'Established strategic international partnerships' },
    { year: '2024', event: 'Industry Recognition', description: 'Awarded excellence in business innovation' }
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsVisible) {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [statsVisible]);

  useEffect(() => {
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate timeline items sequentially
            milestones.forEach((_, index) => {
              setTimeout(() => {
                setActiveMilestone(index);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentTimelineRef = timelineRef.current;
    if (currentTimelineRef) {
      timelineObserver.observe(currentTimelineRef);
    }

    return () => {
      if (currentTimelineRef) {
        timelineObserver.unobserve(currentTimelineRef);
      }
    };
  }, [milestones]);

  const AnimatedCounter = ({ target, suffix = '', decimal = false }: { target: number; suffix?: string; decimal?: boolean }) => {
    const [current, setCurrent] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
      if (!statsVisible || started) return;
      setStarted(true);

      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const animate = () => {
        current += increment;
        if (current >= target) {
          setCurrent(target);
        } else {
          setCurrent(decimal ? parseFloat(current.toFixed(2)) : Math.floor(current));
          requestAnimationFrame(animate);
        }
      };

      const timer = setTimeout(() => {
        requestAnimationFrame(animate);
      }, 100);

      return () => clearTimeout(timer);
    }, [target, decimal, started]);

    return (
      <span>
        {decimal ? current.toFixed(2) : Math.floor(current)}{suffix}
      </span>
    );
  };

  return (
    <section className="relative bg-[#04091E] overflow-hidden">
      {/* Diagonal Top Edge */}
      <div className="relative" style={{
        clipPath: 'polygon(0 0, 100% 60px, 100% 100%, 0 100%)'
      }}>
        <div className="pt-[160px] pb-[120px] relative">
          
          {/* Background Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large Hexagon */}
            <div className="absolute top-20 left-10 w-96 h-96 opacity-5"
                 style={{ animation: 'drift 30s ease-in-out infinite' }}>
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <polygon
                  points="100,20 170,60 170,140 100,180 30,140 30,60"
                  fill="rgba(245, 158, 11, 0.3)"
                />
              </svg>
            </div>
            
            {/* Overlapping Circles */}
            <div className="absolute top-40 right-20 w-80 h-80 rounded-full opacity-3"
                 style={{ 
                   background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
                   animation: 'drift 25s ease-in-out infinite reverse'
                 }} />
            
            <div className="absolute bottom-20 left-1/2 w-64 h-64 rounded-full opacity-4"
                 style={{ 
                   background: 'radial-gradient(circle, rgba(4, 9, 30, 0.3) 0%, transparent 70%)',
                   animation: 'drift 35s ease-in-out infinite'
                 }} />
          </div>

          {/* SECTION HEADER */}
          <div className="text-center mb-20 relative z-10">
            <div className="font-mono text-amber-500 text-xs tracking-widest uppercase mb-4">
              OUR IMPACT
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
              <span className="text-white">Numbers That Tell</span><br />
              <span className="text-amber-500">Our Story</span>
            </h2>
            <p className="text-femsa-secondary text-lg max-w-3xl mx-auto font-body">
              A track record of excellence built through consistency, dedication, and results.
            </p>
          </div>

          {/* STAT CARDS ROW */}
          <div ref={statsRef} className="max-w-7xl mx-auto px-4 lg:px-8 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-8 text-center border-t-3 border-amber-500"
                  style={{
                    background: 'rgba(10, 22, 40, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderTop: '3px solid #F59E0B',
                    animation: statsVisible ? `scaleIn 0.6s ease-out ${index * 0.15}s both` : 'none'
                  }}
                >
                  {/* Large Number */}
                  <div className="mb-4">
                    <span className="font-display font-bold text-amber-500"
                          style={{ 
                            fontSize: '80px',
                            fontFamily: 'Syne',
                            fontWeight: 800
                          }}>
                      <AnimatedCounter 
                        target={stat.number} 
                        suffix={stat.suffix} 
                        decimal={stat.number % 1 !== 0}
                      />
                    </span>
                  </div>

                  {/* Amber Line */}
                  <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-4" />

                  {/* Label */}
                  <div className="font-body text-femsa-secondary text-sm uppercase tracking-wider"
                       style={{ fontFamily: 'DM Sans' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE ROW */}
          <div ref={timelineRef} className="max-w-7xl mx-auto px-4 lg:px-8 mb-20">
            <div className="text-center mb-12">
              <h3 className="font-display font-bold text-3xl text-white mb-2">Our Journey</h3>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-amber-500/30" />
              
              {/* Timeline Items */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="text-center"
                    style={{
                      animation: `slideInLeft 0.6s ease-out ${index * 0.3}s both`
                    }}
                  >
                    {/* Milestone Dot */}
                    <div className={`relative mb-6 ${
                      activeMilestone >= index ? 'scale-150' : 'scale-100'
                    } transition-all duration-300`}>
                      <div className={`w-4 h-4 rounded-full mx-auto transition-all duration-300 ${
                        activeMilestone >= index 
                          ? 'bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]' 
                          : 'bg-amber-500/50'
                      }`} />
                    </div>
                    
                    {/* Year */}
                    <div className="font-display font-bold text-xl text-white mb-2"
                         style={{ fontFamily: 'Syne' }}>
                      {milestone.year}
                    </div>
                    
                    {/* Event */}
                    <div className="font-display font-semibold text-amber-500 text-sm mb-2"
                         style={{ fontFamily: 'Syne' }}>
                      {milestone.event}
                    </div>
                    
                    {/* Description */}
                    <div className="font-body text-femsa-secondary text-xs leading-relaxed"
                         style={{ fontFamily: 'DM Sans' }}>
                      {milestone.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM HIGHLIGHT BAND */}
      <div className="relative bg-amber-500 py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
          <div>
            <h3 className="font-display font-bold text-2xl text-femsa-primary"
                style={{ fontFamily: 'Syne' }}>
              Ready to be part of our next milestone?
            </h3>
          </div>
          
          <button className="group px-8 py-3 border-2 border-white text-white rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-amber-500 hover:scale-105"
                  style={{ fontFamily: 'DM Sans' }}>
            Partner With Us
            <ArrowRight className="inline-block w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes drift {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          25% { 
            transform: translate(20px, -10px) rotate(2deg); 
          }
          50% { 
            transform: translate(-10px, 20px) rotate(-1deg); 
          }
          75% { 
            transform: translate(15px, 15px) rotate(1deg); 
          }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from { 
            opacity: 0;
            transform: translateX(-30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .border-t-3 {
          border-top-width: 3px;
        }
        `
      }} />
    </section>
  );
};

export default AchievementsSection;
