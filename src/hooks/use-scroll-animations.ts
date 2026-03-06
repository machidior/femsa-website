import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  toggleActions?: string;
  stagger?: number;
  duration?: number;
  ease?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
}

export const useScrollAnimations = () => {
  const containerRef = useRef<HTMLElement>(null);

  const animateOnScroll = (
    elements: string | HTMLElement | Element[],
    options: ScrollAnimationOptions = {}
  ) => {
    const {
      trigger,
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
      pin = false,
      markers = false,
      toggleActions = 'play none none reverse',
      stagger = 0,
      duration = 0.8,
      ease = 'power2.out',
      from = { opacity: 0, y: 50 },
      to = { opacity: 1, y: 0 }
    } = options;

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || elements,
        start,
        end,
        scrub,
        pin,
        markers,
        toggleActions,
      }
    });

    // Apply animation
    tl.fromTo(elements, from, {
      ...to,
      duration,
      ease,
      stagger
    });

    return tl;
  };

  const fadeInUp = (
    elements: string | HTMLElement | Element[],
    options: Partial<ScrollAnimationOptions> = {}
  ) => {
    return animateOnScroll(elements, {
      from: { opacity: 0, y: 60 },
      to: { opacity: 1, y: 0 },
      duration: 1,
      ease: 'power3.out',
      ...options
    });
  };

  const fadeInLeft = (
    elements: string | HTMLElement | Element[],
    options: Partial<ScrollAnimationOptions> = {}
  ) => {
    return animateOnScroll(elements, {
      from: { opacity: 0, x: -60 },
      to: { opacity: 1, x: 0 },
      duration: 1,
      ease: 'power3.out',
      ...options
    });
  };

  const fadeInRight = (
    elements: string | HTMLElement | Element[],
    options: Partial<ScrollAnimationOptions> = {}
  ) => {
    return animateOnScroll(elements, {
      from: { opacity: 0, x: 60 },
      to: { opacity: 1, x: 0 },
      duration: 1,
      ease: 'power3.out',
      ...options
    });
  };

  const scaleIn = (
    elements: string | HTMLElement | Element[],
    options: Partial<ScrollAnimationOptions> = {}
  ) => {
    return animateOnScroll(elements, {
      from: { opacity: 0, scale: 0.8 },
      to: { opacity: 1, scale: 1 },
      duration: 1.2,
      ease: 'back.out(1.7)',
      ...options
    });
  };

  const staggerReveal = (
    elements: string | HTMLElement | Element[],
    options: Partial<ScrollAnimationOptions> = {}
  ) => {
    return animateOnScroll(elements, {
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, y: 0 },
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.1,
      ...options
    });
  };

  const parallax = (
    elements: string | HTMLElement | Element[],
    speed: number = 0.5,
    options: Partial<ScrollAnimationOptions> = {}
  ) => {
    return animateOnScroll(elements, {
      from: { y: 0 },
      to: { y: -100 * speed },
      scrub: 1,
      ...options
    });
  };

  const amberGlowPulse = (
    elements: string | HTMLElement | Element[],
    options: Partial<ScrollAnimationOptions> = {}
  ) => {
    return animateOnScroll(elements, {
      from: { 
        boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)',
        scale: 0.95
      },
      to: { 
        boxShadow: '0 0 60px rgba(245, 158, 11, 0.4)',
        scale: 1
      },
      duration: 1.5,
      ease: 'power2.inOut',
      ...options
    });
  };

  // Cleanup function
  const cleanup = () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };

  useEffect(() => {
    return cleanup;
  }, []);

  return {
    containerRef,
    animateOnScroll,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerReveal,
    parallax,
    amberGlowPulse,
    cleanup
  };
};

// Utility function for intersection observer fallback
export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
) => {
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);

    return () => {
      observer.unobserve(target);
      observer.disconnect();
    };
  }, [callback, options]);

  return targetRef;
};
