// FEMSA Group Design System
// Professional website with dark-navy/slate foundation and electric amber accents

export const FEMSA_COLORS = {
  // Primary color palette
  primary: {
    bg: '#04091E',      // Deep navy almost black
    secondary: '#0A1628', // Dark navy
    surface: '#0F1F3D',   // Elevated navy
  },
  
  // Accent colors
  accent: {
    primary: '#F59E0B',     // Electric amber
    secondary: '#FBBF24',   // Warm gold
    glow: 'rgba(245, 158, 11, 0.15)', // Amber glow
  },
  
  // Text colors
  text: {
    primary: '#F8FAFC',     // Near white
    secondary: '#94A3B8',   // Slate
    muted: '#475569',       // Muted slate
  },
  
  // Border colors
  border: {
    subtle: 'rgba(148, 163, 184, 0.1)', // Subtle border
    accent: 'rgba(245, 158, 11, 0.3)',   // Accent border
  }
} as const;

export const FEMSA_TYPOGRAPHY = {
  fonts: {
    display: 'Syne',           // Bold, geometric, editorial
    body: 'DM Sans',           // Clean, modern, readable
    mono: 'JetBrains Mono',    // For numbers/stats
  },
  
  sizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
    '8xl': '6rem',     // 96px
    '9xl': '8rem',     // 128px
  },
  
  weights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  
  lineHeights: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  }
} as const;

export const FEMSA_SPACING = {
  // 4px base unit scale
  1: '4px',     // 4px
  2: '8px',     // 8px
  3: '12px',    // 12px
  4: '16px',    // 16px
  5: '20px',    // 20px
  6: '24px',    // 24px
  8: '32px',    // 32px
  10: '40px',   // 40px
  12: '48px',   // 48px
  16: '64px',   // 64px
  20: '80px',   // 80px
  24: '96px',   // 96px
  32: '128px',  // 128px
  40: '160px',  // 160px
  48: '192px',  // 192px
  56: '224px',  // 224px
  64: '256px',  // 256px
} as const;

export const FEMSA_EFFECTS = {
  // Glass morphism
  glass: {
    background: 'rgba(15, 31, 61, 0.8)',
    backdropFilter: 'blur(20px)',
    webkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(148, 163, 184, 0.1)',
  },
  
  // Shadows
  shadows: {
    amberGlow: '0 0 40px rgba(245, 158, 11, 0.2)',
    elevation: '0 4px 24px rgba(0, 0, 0, 0.4)',
    subtle: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.2)',
    strong: '0 8px 32px rgba(0, 0, 0, 0.4)',
  },
  
  // Gradients
  gradients: {
    text: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    mesh: 'radial-gradient(at 20% 80%, #04091E 0%, #0A1628 25%, #0F1F3D 50%, rgba(245, 158, 11, 0.1) 100%)',
    hero: 'linear-gradient(135deg, #04091E 0%, #0A1628 50%, #0F1F3D 100%)',
    accent: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #F59E0B 100%)',
  }
} as const;

export const FEMSA_ANIMATION = {
  // Timing functions
  easing: {
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    out: 'cubic-bezier(0.4, 0, 1, 1)',
    in: 'cubic-bezier(0, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
  },
  
  // Durations
  duration: {
    fast: '200ms',
    medium: '400ms',
    slow: '700ms',
    slower: '1000ms',
  },
  
  // Stagger delays
  stagger: {
    base: '100ms',
    fast: '50ms',
    slow: '150ms',
  },
  
  // Keyframes
  keyframes: {
    fadeInUp: {
      '0%': { opacity: 0, transform: 'translateY(30px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    fadeInLeft: {
      '0%': { opacity: 0, transform: 'translateX(-30px)' },
      '100%': { opacity: 1, transform: 'translateX(0)' },
    },
    fadeInRight: {
      '0%': { opacity: 0, transform: 'translateX(30px)' },
      '100%': { opacity: 1, transform: 'translateX(0)' },
    },
    scaleIn: {
      '0%': { opacity: 0, transform: 'scale(0.8)' },
      '100%': { opacity: 1, transform: 'scale(1)' },
    },
    amberGlow: {
      '0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)' },
      '50%': { boxShadow: '0 0 40px rgba(245, 158, 11, 0.4)' },
    },
    slideUp: {
      '0%': { transform: 'translateY(100%)' },
      '100%': { transform: 'translateY(0)' },
    },
    pulse: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 },
    },
  }
} as const;

export const FEMSA_BREAKPOINTS = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const FEMSA_BORDER_RADIUS = {
  none: '0px',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// Utility functions for design system
export const getFemsaColor = (path: string): string => {
  const keys = path.split('.');
  let value: any = FEMSA_COLORS;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) return '';
  }
  
  return value as string;
};

export const getFemsaGradient = (type: keyof typeof FEMSA_EFFECTS.gradients): string => {
  return FEMSA_EFFECTS.gradients[type];
};

export const getFemsaShadow = (type: keyof typeof FEMSA_EFFECTS.shadows): string => {
  return FEMSA_EFFECTS.shadows[type];
};

// CSS custom properties generator
export const generateFemsaCSS = (): string => {
  return `
    :root {
      /* Colors */
      --femsa-primary-bg: ${FEMSA_COLORS.primary.bg};
      --femsa-secondary-bg: ${FEMSA_COLORS.primary.secondary};
      --femsa-surface: ${FEMSA_COLORS.primary.surface};
      --femsa-accent-primary: ${FEMSA_COLORS.accent.primary};
      --femsa-accent-secondary: ${FEMSA_COLORS.accent.secondary};
      --femsa-accent-glow: ${FEMSA_COLORS.accent.glow};
      --femsa-text-primary: ${FEMSA_COLORS.text.primary};
      --femsa-text-secondary: ${FEMSA_COLORS.text.secondary};
      --femsa-text-muted: ${FEMSA_COLORS.text.muted};
      --femsa-border-subtle: ${FEMSA_COLORS.border.subtle};
      --femsa-border-accent: ${FEMSA_COLORS.border.accent};
      
      /* Effects */
      --femsa-glass-bg: ${FEMSA_EFFECTS.glass.background};
      --femsa-amber-glow: ${FEMSA_EFFECTS.shadows.amberGlow};
      --femsa-elevation: ${FEMSA_EFFECTS.shadows.elevation};
      --femsa-gradient-text: ${FEMSA_EFFECTS.gradients.text};
      --femsa-mesh-gradient: ${FEMSA_EFFECTS.gradients.mesh};
      
      /* Animation */
      --femsa-ease-in-out: ${FEMSA_ANIMATION.easing.inOut};
      --femsa-duration-fast: ${FEMSA_ANIMATION.duration.fast};
      --femsa-duration-medium: ${FEMSA_ANIMATION.duration.medium};
      --femsa-duration-slow: ${FEMSA_ANIMATION.duration.slow};
      --femsa-stagger-delay: ${FEMSA_ANIMATION.stagger.base};
    }
  `;
};

export default {
  COLORS: FEMSA_COLORS,
  TYPOGRAPHY: FEMSA_TYPOGRAPHY,
  SPACING: FEMSA_SPACING,
  EFFECTS: FEMSA_EFFECTS,
  ANIMATION: FEMSA_ANIMATION,
  BREAKPOINTS: FEMSA_BREAKPOINTS,
  BORDER_RADIUS: FEMSA_BORDER_RADIUS,
  getFemsaColor,
  getFemsaGradient,
  getFemsaShadow,
  generateFemsaCSS,
};
