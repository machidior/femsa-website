# FEMSA Group Design System

## Overview

A professional design system for FEMSA Group's website redesign, featuring a dark-navy/slate foundation with electric amber accents. The design embodies sophistication, authority, and African-global influence - think McKinsey meets Accenture with warmth and humanity.

## Color Palette

### Primary Colors
- **Primary Background**: `#04091E` - Deep navy almost black
- **Secondary Background**: `#0A1628` - Dark navy  
- **Surface/Card**: `#0F1F3D` - Elevated navy

### Accent Colors
- **Accent Primary**: `#F59E0B` - Electric amber
- **Accent Secondary**: `#FBBF24` - Warm gold
- **Accent Glow**: `rgba(245, 158, 11, 0.15)` - Amber glow effect

### Text Colors
- **Text Primary**: `#F8FAFC` - Near white
- **Text Secondary**: `#94A3B8` - Slate
- **Text Muted**: `#475569` - Muted slate

### Border Colors
- **Border Subtle**: `rgba(148, 163, 184, 0.1)` - Subtle borders
- **Border Accent**: `rgba(245, 158, 11, 0.3)` - Accent borders

## Typography

### Font Families
- **Display**: 'Syne' - Bold, geometric, editorial headlines
- **Body**: 'DM Sans' - Clean, modern, readable content
- **Mono**: 'JetBrains Mono' - Numbers, stats, code

### Font Sizes (4px base unit scale)
- **xs**: 12px
- **sm**: 14px
- **base**: 16px
- **lg**: 18px
- **xl**: 20px
- **2xl**: 24px
- **3xl**: 30px
- **4xl**: 36px
- **5xl**: 48px
- **6xl**: 60px
- **7xl**: 72px
- **8xl**: 96px
- **9xl**: 128px

## Spacing System

Based on a 4px base unit:
- **1**: 4px
- **2**: 8px
- **3**: 12px
- **4**: 16px
- **6**: 24px
- **8**: 32px
- **12**: 48px
- **16**: 64px
- **24**: 96px
- **32**: 128px
- **40**: 160px

## Effects & Visual Elements

### Glass Morphism
```css
background: rgba(15, 31, 61, 0.8);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(148, 163, 184, 0.1);
```

### Shadows
- **Amber Glow**: `0 0 40px rgba(245, 158, 11, 0.2)`
- **Elevation**: `0 4px 24px rgba(0, 0, 0, 0.4)`
- **Subtle**: `0 2px 8px rgba(0, 0, 0, 0.1)`

### Gradients
- **Text Gradient**: `linear-gradient(135deg, #F59E0B, #FBBF24)`
- **Mesh Gradient**: `radial-gradient(at 20% 80%, #04091E 0%, #0A1628 25%, #0F1F3D 50%, rgba(245, 158, 11, 0.1) 100%)`
- **Hero Gradient**: `linear-gradient(135deg, #04091E 0%, #0A1628 50%, #0F1F3D 100%)`

## Animation System

### Timing Functions
- **Ease In-Out**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Ease Out**: `cubic-bezier(0.4, 0, 1, 1)`
- **Ease In**: `cubic-bezier(0, 0, 0.2, 1)`
- **Bounce**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- **Elastic**: `cubic-bezier(0.68, -0.6, 0.32, 1.6)`

### Durations
- **Fast**: 200ms
- **Medium**: 400ms
- **Slow**: 700ms
- **Slower**: 1000ms

### Stagger Delays
- **Base**: 100ms
- **Fast**: 50ms
- **Slow**: 150ms

## Animation Utilities

### Available Animations
- **fadeInUp**: Fade in with upward movement
- **fadeInLeft**: Fade in from left
- **fadeInRight**: Fade in from right
- **scaleIn**: Scale up from 0.8 to 1
- **staggerReveal**: Staggered reveal for multiple elements
- **parallax**: Parallax scrolling effect
- **amberGlowPulse**: Pulsing amber glow effect

### Usage Examples

```tsx
import { ScrollReveal, StaggerReveal } from '@/providers/AnimationProvider';

// Single element animation
<ScrollReveal animation="fadeInUp" delay={0.2}>
  <h1 className="text-4xl font-display gradient-text">
    Welcome to FEMSA Group
  </h1>
</ScrollReveal>

// Staggered animation for multiple elements
<StaggerReveal stagger={0.1}>
  <div className="glass-card p-6">Card 1</div>
  <div className="glass-card p-6">Card 2</div>
  <div className="glass-card p-6">Card 3</div>
</StaggerReveal>
```

## CSS Utility Classes

### Background Colors
- `.bg-femsa-primary` - Primary background
- `.bg-femsa-secondary` - Secondary background
- `.bg-femsa-surface` - Surface background

### Text Colors
- `.text-femsa-primary` - Primary text
- `.text-femsa-secondary` - Secondary text
- `.text-femsa-muted` - Muted text

### Border Colors
- `.border-femsa-subtle` - Subtle borders
- `.border-femsa-accent` - Accent borders

### Special Effects
- `.glass-card` - Glass morphism effect
- `.amber-glow` - Amber glow shadow
- `.gradient-text` - Gradient text effect
- `.mesh-gradient-bg` - Mesh gradient background

### Animation Classes
- `.fade-in-up` - Fade up animation
- `.stagger-children` - Stagger animation container

## Component Structure

### AnimationProvider
Wraps the entire application and provides animation context.

```tsx
import { AnimationProvider } from '@/providers/AnimationProvider';

<AnimationProvider smoothScrollOptions={{ duration: 1.2 }}>
  <App />
</AnimationProvider>
```

### useAnimation Hook
Access animation utilities throughout the app.

```tsx
import { useAnimation } from '@/providers/AnimationProvider';

const { fadeInUp, scrollToTop } = useAnimation();

// Trigger animations
useEffect(() => {
  fadeInUp('.hero-title');
}, []);
```

## Smooth Scrolling

The design system includes Lenis smooth scrolling with GSAP integration.

### Features
- Butter-smooth scrolling
- GSAP ScrollTrigger integration
- Customizable duration and easing
- Touch device support
- Performance optimized

### Usage
```tsx
import { useAnimation } from '@/providers/AnimationProvider';

const { scrollTo, scrollToElement, scrollToTop } = useAnimation();

// Scroll to element
scrollToElement('#about-section', { offset: 100 });

// Scroll to top
scrollToTop({ duration: 0.8 });
```

## Responsive Design

### Breakpoints
- **xs**: 0px
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Backdrop-filter support with fallbacks
- Smooth scrolling with touch support

## Performance Considerations

- GSAP for hardware-accelerated animations
- Intersection Observer for efficient scroll triggers
- CSS custom properties for dynamic theming
- Optimized font loading with preconnect
- Lazy loading for images and components

## SEO & Accessibility

- Semantic HTML5 structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility
- Structured data markup

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install gsap @studio-freight/lenis
   ```

2. **Wrap App with AnimationProvider**
   ```tsx
   <AnimationProvider>
     <App />
   </AnimationProvider>
   ```

3. **Use Design System Classes**
   ```tsx
   <div className="bg-femsa-primary text-femsa-primary">
     <h1 className="font-display text-6xl gradient-text">
       FEMSA Group
     </h1>
   </div>
   ```

4. **Add Animations**
   ```tsx
   <ScrollReveal animation="fadeInUp">
     <div className="glass-card p-8">
       Content here
     </div>
   </ScrollReveal>
   ```

## Design Philosophy

The FEMSA design system emphasizes:
- **Authority**: Dark navy foundation conveys professionalism
- **Innovation**: Electric amber accents represent forward-thinking
- **Humanity**: Warm tones and smooth animations create approachability
- **Global Reach**: Clean typography and structured layouts
- **Performance**: Optimized animations and efficient code

Every element is designed to feel intentional, animated, and premium while maintaining excellent performance and accessibility standards.
