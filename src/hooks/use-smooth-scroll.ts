import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollOptions {
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
}

export const useSmoothScroll = (options: SmoothScrollOptions = {}) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const defaultOptions: SmoothScrollOptions = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
      normalizeWheel: true,
      syncTouch: false,
      ...options
    };

    // Initialize Lenis
    lenisRef.current = new Lenis(defaultOptions);

    // Connect to GSAP ScrollTrigger
    const updateScrollTrigger = (time: number) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
    };

    gsap.ticker.add(updateScrollTrigger);
    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      gsap.ticker.remove(updateScrollTrigger);
    };
  }, []);

  const scrollTo = (
    target: string | number | HTMLElement,
    options?: {
      offset?: number;
      duration?: number;
      easing?: (t: number) => number;
      immediate?: boolean;
      lock?: boolean;
      onComplete?: () => void;
    }
  ) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  };

  const scrollToTop = (options?: { duration?: number; immediate?: boolean }) => {
    scrollTo(0, options);
  };

  const scrollToElement = (
    selector: string,
    options?: {
      offset?: number;
      duration?: number;
      immediate?: boolean;
    }
  ) => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      scrollTo(element, options);
    }
  };

  const stop = () => {
    if (lenisRef.current) {
      lenisRef.current.stop();
    }
  };

  const start = () => {
    if (lenisRef.current) {
      lenisRef.current.start();
    }
  };

  const destroy = () => {
    if (lenisRef.current) {
      lenisRef.current.destroy();
      lenisRef.current = null;
    }
  };

  return {
    lenis: lenisRef.current,
    scrollTo,
    scrollToTop,
    scrollToElement,
    stop,
    start,
    destroy
  };
};

// Import gsap for ScrollTrigger integration
import { gsap } from 'gsap';
