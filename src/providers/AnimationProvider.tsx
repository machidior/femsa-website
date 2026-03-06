import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useScrollAnimations } from '@/hooks/use-scroll-animations';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

interface AnimationContextType {
  // Scroll animations
  fadeInUp: (elements: string | HTMLElement | Element[], options?: any) => void;
  fadeInLeft: (elements: string | HTMLElement | Element[], options?: any) => void;
  fadeInRight: (elements: string | HTMLElement | Element[], options?: any) => void;
  scaleIn: (elements: string | HTMLElement | Element[], options?: any) => void;
  staggerReveal: (elements: string | HTMLElement | Element[], options?: any) => void;
  parallax: (elements: string | HTMLElement | Element[], speed?: number, options?: any) => void;
  amberGlowPulse: (elements: string | HTMLElement | Element[], options?: any) => void;
  
  // Smooth scroll
  scrollTo: (target: string | number | HTMLElement, options?: any) => void;
  scrollToTop: (options?: any) => void;
  scrollToElement: (selector: string, options?: any) => void;
  
  // Cleanup
  cleanup: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};

interface AnimationProviderProps {
  children: React.ReactNode;
  smoothScrollOptions?: {
    duration?: number;
    easing?: (t: number) => number;
    direction?: 'vertical' | 'horizontal';
    gestureDirection?: 'vertical' | 'horizontal' | 'both';
    smooth?: boolean;
    mouseMultiplier?: number;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    infinite?: boolean;
    autoResize?: boolean;
    content?: HTMLElement;
    wrapper?: HTMLElement;
    wheelEventsTarget?: HTMLElement | Window;
    touchEventsTarget?: HTMLElement | Window;
    normalizeWheel?: boolean;
    syncTouch?: boolean;
  };
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ 
  children, 
  smoothScrollOptions 
}) => {
  const scrollAnimations = useScrollAnimations();
  const smoothScroll = useSmoothScroll(smoothScrollOptions || {});

  const contextValue: AnimationContextType = {
    // Scroll animations
    fadeInUp: scrollAnimations.fadeInUp,
    fadeInLeft: scrollAnimations.fadeInLeft,
    fadeInRight: scrollAnimations.fadeInRight,
    scaleIn: scrollAnimations.scaleIn,
    staggerReveal: scrollAnimations.staggerReveal,
    parallax: scrollAnimations.parallax,
    amberGlowPulse: scrollAnimations.amberGlowPulse,
    
    // Smooth scroll
    scrollTo: smoothScroll.scrollTo,
    scrollToTop: smoothScroll.scrollToTop,
    scrollToElement: smoothScroll.scrollToElement,
    
    // Cleanup
    cleanup: () => {
      scrollAnimations.cleanup();
      smoothScroll.destroy();
    }
  };

  useEffect(() => {
    // Set dark theme by default
    document.documentElement.classList.add('dark');
    
    return () => {
      contextValue.cleanup();
    };
  }, []);

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  );
};

// Utility component for scroll-triggered animations
interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { fadeInUp, fadeInLeft, fadeInRight, scaleIn } = useAnimation();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationMap = {
              fadeInUp: () => fadeInUp(element, { delay, duration }),
              fadeInLeft: () => fadeInLeft(element, { delay, duration }),
              fadeInRight: () => fadeInRight(element, { delay, duration }),
              scaleIn: () => scaleIn(element, { delay, duration }),
            };

            animationMap[animation]();
            observer.unobserve(element);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animation, delay, duration, threshold, rootMargin]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

// Stagger animation component for lists
interface StaggerRevealProps {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const StaggerReveal: React.FC<StaggerRevealProps> = ({
  children,
  stagger = 0.1,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { staggerReveal } = useAnimation();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = container.children;
            staggerReveal(Array.from(children), { stagger });
            observer.unobserve(container);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [stagger, threshold, rootMargin]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
