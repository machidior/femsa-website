/* =============================================
   FEMSA GROUP GLOBAL UTILITIES
   Enterprise Business Solutions Platform
   ============================================ */

/**
 * Lenis Smooth Scroll Configuration
 * Modern smooth scrolling with better performance
 */
export const initSmoothScroll = () => {
  if (typeof window !== 'undefined' && window.lenis) {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
    });

    // Connect Lenis to requestAnimationFrame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return lenis;
  }
  return null;
};

/**
 * Intersection Observer for Reveal Animations
 * Handles scroll-triggered animations with staggered delays
 */
export const initRevealAnimations = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (revealElements.length === 0) return;

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -60px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const delay = element.dataset.delay || 0;
        
        setTimeout(() => {
          element.classList.add('active');
        }, parseFloat(delay) * 1000);
      }
    });
  }, observerOptions);

  revealElements.forEach(element => {
    observer.observe(element);
  });

  return observer;
};

/**
 * Staggered Animation Utility
 * Applies staggered delays to a NodeList of elements
 */
export const staggerAnimation = (elements, baseDelay = 0.08) => {
  if (!elements || elements.length === 0) return;
  
  Array.from(elements).forEach((element, index) => {
    const delay = baseDelay * index;
    element.style.transitionDelay = `${delay}s`;
    
    if (element.dataset.delay === undefined) {
      element.dataset.delay = delay.toString();
    }
  });
};

/**
 * Counter Animation Utility
 * Animates numbers counting up from 0 to target
 */
export const animateCounter = (element, target, duration = 2000, suffix = '') => {
  if (!element) return;
  
  const startTime = performance.now();
  const startValue = 0;
  
  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out cubic)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    
    const currentValue = Math.floor(startValue + (target - startValue) * easeOut);
    element.textContent = `${currentValue}${suffix}`;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = `${target}${suffix}`;
    }
  };
  
  requestAnimationFrame(updateCounter);
};

/**
 * Button Ripple Effect
 * Creates material design ripple effect on button clicks
 */
export const createRipple = (event) => {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  const ripple = document.createElement('span');
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  // Add ripple to button
  button.appendChild(ripple);
  
  // Remove ripple after animation
  setTimeout(() => {
    ripple.remove();
  }, 600);
};

/**
 * Add ripple effect to all buttons
 */
export const initRippleEffects = () => {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', createRipple);
  });
};

/**
 * Form Validation Utility
 * Basic form validation with visual feedback
 */
export const validateForm = (formElement) => {
  const inputs = formElement.querySelectorAll('input, textarea, select');
  let isValid = true;
  
  inputs.forEach(input => {
    const errorMsg = input.parentElement.querySelector('.error-message');
    
    // Remove existing error states
    input.classList.remove('error');
    if (errorMsg) {
      errorMsg.remove();
    }
    
    // Basic validation
    if (input.hasAttribute('required') && !input.value.trim()) {
      showError(input, 'This field is required');
      isValid = false;
    } else if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        showError(input, 'Please enter a valid email address');
        isValid = false;
      }
    }
  });
  
  return isValid;
};

/**
 * Show error message for form field
 */
const showError = (input, message) => {
  input.classList.add('error');
  
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  errorElement.style.cssText = `
    color: var(--color-secondary);
    font-size: var(--text-xs);
    margin-top: var(--space-1);
  `;
  
  input.parentElement.appendChild(errorElement);
};

/**
 * Smooth scroll to element with offset
 */
export const scrollToElement = (element, offset = 80) => {
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Debounce utility for performance
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle utility for performance
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Check if device is touch-enabled
 */
export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Initialize all global utilities
 */
export const initGlobalUtilities = () => {
  // Initialize smooth scroll
  initSmoothScroll();
  
  // Initialize reveal animations
  initRevealAnimations();
  
  // Initialize ripple effects
  initRippleEffects();
  
  // Add loaded class to body
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
};

/**
 * Page load complete handler
 */
export const onPageLoad = (callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
};
