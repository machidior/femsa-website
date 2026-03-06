import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', ...props }) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleIdCounter = useRef(0);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;

      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;
      
      // Limit the maximum offset to 6px
      const maxOffset = 6;
      const limitedX = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
      const limitedY = Math.max(-maxOffset, Math.min(maxOffset, deltaY));

      setMousePos({ x: limitedX, y: limitedY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePos({ x: 0, y: 0 });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      x,
      y,
      id: rippleIdCounter.current++
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 400);
  };

  return (
    <>
      <button
        ref={buttonRef}
        className={`relative transition-transform duration-200 ease-out ${className}`}
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
        }}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>

      {/* Ripple Effects */}
      {typeof window !== 'undefined' && createPortal(
        <div className="fixed inset-0 pointer-events-none z-50">
          {ripples.map(ripple => (
            <div
              key={ripple.id}
              className="absolute rounded-full bg-amber-500 opacity-30"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: '0px',
                height: '0px',
                transform: 'translate(-50%, -50%)',
                animation: 'rippleExpand 400ms ease-out forwards'
              }}
            />
          ))}
        </div>,
        document.body
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes rippleExpand {
          to {
            width: 100px;
            height: 100px;
            opacity: 0;
          }
        }
        `
      }} />
    </>
  );
};

export default MagneticButton;
