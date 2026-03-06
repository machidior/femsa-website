import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTextHover, setIsTextHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const outerRingRef = useRef<HTMLDivElement>(null);
  const lagPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleHoverStart = () => {
      setIsHovering(true);
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    const handleTextHoverStart = () => {
      setIsTextHover(true);
    };

    const handleTextHoverEnd = () => {
      setIsTextHover(false);
    };

    // Smooth lag animation for outer ring
    const animateLag = () => {
      const dx = position.x - lagPosition.current.x;
      const dy = position.y - lagPosition.current.y;
      
      lagPosition.current.x += dx * 0.1;
      lagPosition.current.y += dy * 0.1;

      if (outerRingRef.current) {
        outerRingRef.current.style.transform = `translate(${lagPosition.current.x}px, ${lagPosition.current.y}px) scale(${isHovering ? 1.33 : 1})`;
      }

      animationFrameId.current = requestAnimationFrame(animateLag);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    textElements.forEach(el => {
      el.addEventListener('mouseenter', handleTextHoverStart);
      el.addEventListener('mouseleave', handleTextHoverEnd);
    });

    animateLag();

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });

      textElements.forEach(el => {
        el.removeEventListener('mouseenter', handleTextHoverStart);
        el.removeEventListener('mouseleave', handleTextHoverEnd);
      });

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [position, isHovering]);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null; // Disable custom cursor on mobile
  }

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#F59E0B',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'none'
        }}
      />

      {/* Outer Ring */}
      <div
        ref={outerRingRef}
        className={`fixed pointer-events-none z-50 transition-all duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isTextHover ? 'w-0.5 h-6' : 'w-9 h-9'}`}
        style={{
          border: isTextHover ? 'none' : '2px solid #F59E0B',
          borderRadius: isTextHover ? '2px' : '50%',
          backgroundColor: isHovering ? 'rgba(245, 158, 11, 0.2)' : 'transparent',
          transform: 'translate(-50%, -50%)',
          left: '0',
          top: '0'
        }}
      />
    </>
  );
};

export default CustomCursor;
