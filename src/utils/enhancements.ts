// Global Enhancement Utilities

// Initialize all enhancements
export function initializeEnhancements() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--transition-duration', '0.01ms');
    return;
  }
  
  // Initialize smooth scroll
  initializeSmoothScroll();
  
  // Initialize reveal animations
  initializeRevealAnimations();
  
  // Initialize parallax
  initializeParallax();
  
  // Initialize active navigation
  initializeActiveNavigation();
  
  // Initialize magnetic buttons
  initializeMagneticButtons();
  
  // Initialize ripple effects
  initializeRippleEffects();
  
  // Initialize accordions
  initializeAccordions();
  
  // Initialize accessibility
  initializeAccessibility();
  
  // Initialize performance monitoring (development only)
  if (process.env.NODE_ENV === 'development') {
    initializePerformanceMonitoring();
  }
}

// Smooth Scroll with Lenis
function initializeSmoothScroll() {
  // Check if Lenis is available
  if (typeof window !== 'undefined' && (window as any).Lenis) {
    const lenis = new (window as any).Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    // Handle anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (link as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            const targetY = target.getBoundingClientRect().top + window.scrollY - 76; // Offset for sticky nav
            lenis.scrollTo(targetY);
          }
        }
      });
    });
  }
}

// Reveal Animations
function initializeRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const direction = element.dataset.reveal || 'up';
          const delay = parseFloat(element.dataset.delay || '0');
          
          setTimeout(() => {
            element.classList.remove('reveal-hidden');
            element.classList.add('reveal-visible');
            
            // Trigger count-up if element has count-up class
            if (element.classList.contains('count-up')) {
              const end = parseFloat(element.dataset.end || '0');
              const start = parseFloat(element.dataset.start || '0');
              const duration = parseFloat(element.dataset.duration || '2000');
              const suffix = element.dataset.suffix || '';
              
              startCountUp(element, start, end, duration, suffix);
            }
          }, delay * 1000);
          
          observer.unobserve(element);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '-60px 0px'
    }
  );
  
  document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
  });
}

// Number Count-Up Animation
function startCountUp(element: HTMLElement, start: number, end: number, duration = 2000, suffix = '') {
  let startTime: number | null = null;
  let rafId: number | null = null;
  
  function easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }
  
  function formatNumber(num: number): string {
    return num.toLocaleString();
  }
  
  function animate(currentTime: number) {
    if (startTime === null) {
      startTime = currentTime;
    }
    
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const current = start + (end - start) * easeOutExpo(progress);
    element.textContent = formatNumber(Math.floor(current)) + suffix;
    
    if (progress < 1) {
      rafId = requestAnimationFrame(animate);
    } else {
      element.textContent = formatNumber(end) + suffix;
    }
  }
  
  rafId = requestAnimationFrame(animate);
}

// Parallax Scrolling
function initializeParallax() {
  const parallaxElements: { element: HTMLElement; speed: number }[] = [];
  let rafId: number | null = null;
  
  function handleScroll() {
    if (rafId) return;
    
    rafId = requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      
      parallaxElements.forEach(({ element, speed }) => {
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
      
      rafId = null;
    });
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Add parallax elements
  document.querySelectorAll('.parallax-element').forEach(element => {
    const speed = parseFloat((element as HTMLElement).dataset.speed || '0.5');
    parallaxElements.push({ element: element as HTMLElement, speed });
    (element as HTMLElement).style.willChange = 'transform';
  });
}

// Active Navigation
function initializeActiveNavigation() {
  const sections: { id: string; element: HTMLElement }[] = [];
  const navLinks: { id: string; link: HTMLElement }[] = [];
  let currentActive: string | null = null;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id && id !== currentActive) {
            setActiveLink(id);
            currentActive = id;
          }
        }
      });
    },
    {
      threshold: 0.4,
      rootMargin: '-76px 0px -76px 0px' // Account for sticky nav
    }
  );
  
  function setActiveLink(activeId: string) {
    navLinks.forEach(({ id, link }) => {
      if (id === activeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  // Add sections
  document.querySelectorAll('section[id]').forEach(section => {
    sections.push({ id: section.id, element: section as HTMLElement });
    observer.observe(section);
  });
  
  // Add nav links
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    const href = (link as HTMLAnchorElement).getAttribute('href');
    if (href) {
      const id = href.substring(1);
      navLinks.push({ id, link: link as HTMLElement });
    }
  });
}

// Magnetic Buttons
function initializeMagneticButtons() {
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
  
  buttons.forEach(button => {
    const btn = button as HTMLElement;
    let isHovering = false;
    let bounds: DOMRect;
    
    function handleMouseEnter() {
      isHovering = true;
      bounds = btn.getBoundingClientRect();
    }
    
    function handleMouseMove(e: MouseEvent) {
      if (!isHovering) return;
      
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      
      const deltaX = (e.clientX - centerX) / 4;
      const deltaY = (e.clientY - centerY) / 4;
      
      const maxOffset = 8;
      const offsetX = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
      const offsetY = Math.max(-maxOffset, Math.min(maxOffset, deltaY));
      
      btn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
    
    function handleMouseLeave() {
      isHovering = false;
      btn.style.transform = '';
    }
    
    btn.addEventListener('mouseenter', handleMouseEnter);
    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
  });
}

// Ripple Effects
function initializeRippleEffects() {
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
  
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const btn = button as HTMLElement;
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = (e as MouseEvent).clientX - rect.left - size / 2;
      const y = (e as MouseEvent).clientY - rect.top - size / 2;
      
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      
      btn.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 500);
    });
  });
}

// Accordions
function initializeAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header') as HTMLElement;
    const content = item.querySelector('.accordion-content') as HTMLElement;
    const icon = item.querySelector('.accordion-icon') as HTMLElement;
    
    if (header && content) {
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        
        // Close all other items
        accordionItems.forEach(otherItem => {
          const otherContent = otherItem.querySelector('.accordion-content') as HTMLElement;
          const otherIcon = otherItem.querySelector('.accordion-icon') as HTMLElement;
          
          otherContent.style.maxHeight = '0';
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          otherItem.classList.remove('open');
        });
        
        // Open clicked item if it was closed
        if (!isOpen) {
          item.classList.add('open');
          
          // Set max-height to actual content height
          content.style.maxHeight = content.scrollHeight + 'px';
          
          if (icon) {
            icon.style.transform = 'rotate(45deg)';
          }
          
          // Remove max-height after transition
          setTimeout(() => {
            content.style.maxHeight = 'none';
          }, 300);
        }
      });
    }
  });
}

// Accessibility
function initializeAccessibility() {
  // Setup skip links
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to main content';
  
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Setup keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      // Ensure focus stays within modal when open
      const modal = document.querySelector('.modal[open]');
      if (modal) {
        trapFocus(modal as HTMLElement);
      }
    }
    
    if (e.key === 'Enter' && e.target instanceof HTMLElement) {
      const target = e.target;
      
      // Trigger click on cards when Enter is pressed
      if (target.classList.contains('card-base') && !target.matches('button, a, input, select, textarea')) {
        target.click();
      }
    }
  });
}

function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  if (document.activeElement === lastElement) {
    firstElement.focus();
  }
}

// Performance Monitoring
function initializePerformanceMonitoring() {
  let frameCount = 0;
  let lastTime = performance.now();
  
  function measureFPS() {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime >= lastTime + 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      frameCount = 0;
      lastTime = currentTime;
      
      // Log FPS if it drops below 30
      if (fps < 30) {
        console.warn(`Low FPS detected: ${fps}`);
      }
    }
    
    requestAnimationFrame(measureFPS);
  }
  
  function measureMemory() {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const usedMemory = Math.round(memory.usedJSHeapSize / 1048576); // MB
      
      // Log memory usage if it's high
      if (usedMemory > 100) {
        console.warn(`High memory usage: ${usedMemory}MB`);
      }
    }
    
    setTimeout(measureMemory, 5000);
  }
  
  measureFPS();
  measureMemory();
}

// Export utility functions for use in components
export { startCountUp };
