import React, { useEffect, useRef } from 'react';

interface ScrollAnimationsProps {
  children: React.ReactNode;
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({ children }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Add simple fade classes only
      const animateElements = document.querySelectorAll('[data-animate]');
      animateElements.forEach(el => {
        const element = el as HTMLElement;
        element.classList.add('animate-fade-simple');
      });
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          
          if (entry.isIntersecting) {
            const animationType = element.dataset.animate;
            const delay = element.dataset.delay || '0';
            
            // Add animation classes based on data attribute
            switch (animationType) {
              case 'fade-up':
                element.classList.add('animate-fade-up');
                break;
              case 'fade-left':
                element.classList.add('animate-fade-left');
                break;
              case 'fade-right':
                element.classList.add('animate-fade-right');
                break;
              case 'scale-in':
                element.classList.add('animate-scale-in');
                break;
              case 'ken-burns':
                element.classList.add('animate-ken-burns');
                break;
              case 'split-text':
                element.classList.add('animate-split-text');
                break;
              case 'count-up':
                element.classList.add('animate-count-up');
                break;
              default:
                element.classList.add('animate-fade-up');
            }

            element.style.animationDelay = `${delay}ms`;
            
            // Remove observer after animation starts
            observerRef.current?.unobserve(element);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with data-animate attribute
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    // Handle split text animations
    const splitTextElements = document.querySelectorAll('[data-split-text]');
    splitTextElements.forEach(element => {
      const el = element as HTMLElement;
      const text = el.textContent || '';
      const words = text.split(' ');
      
      el.innerHTML = '';
      el.style.overflow = 'hidden';
      
      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.className = 'inline-block';
        span.style.animationDelay = `${index * 100}ms`;
        span.classList.add('word-animate');
        el.appendChild(span);
      });
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollAnimations;
