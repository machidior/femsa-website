# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# FEMSA Group Enterprise Website

> Premier African business solutions company that empowers businesses with innovative solutions, strategic guidance, and resources, driving sustainable growth, trust, and long-term success.

## 🏗️ Technical Architecture

This enterprise website is built with a comprehensive design system and modern technical foundations:

### **Core Technologies**
- **React 18+** - Modern component-based architecture
- **TypeScript** - Type-safe development
- **Vite** - Fast development and building
- **Tailwind CSS** - Utility-first styling (customized)
- **Custom Design System** - Comprehensive CSS architecture
- **Lenis** - Smooth scrolling performance
- **GSAP** - Advanced animations (optional)

### **Design System Foundation**
- **Color Palette**: Deep Royal Blue (#032177) + Vibrant Orange (#F96419)
- **Typography**: Plus Jakarta Sans (display), Inter (body), Barlow Condensed (accent)
- **Spacing**: 4px base system with consistent scale
- **Components**: Reusable button, card, and utility systems
- **Animations**: Intersection Observer + CSS keyframes
- **Responsive**: Mobile-first approach with defined breakpoints

## 🎨 Brand Identity

### **Primary Colors**
- `--color-primary`: #032177 (Deep Royal Blue — authority, trust, professionalism)
- `--color-secondary`: #F96419 (Vibrant Orange — energy, action, warmth)

### **Typography Scale**
```css
--text-xs:    11px  / line-height 1.4 / letter-spacing 0.08em
--text-sm:    13px  / line-height 1.5
--text-base:  15px  / line-height 1.7
--text-md:    17px  / line-height 1.7
--text-lg:    20px  / line-height 1.6
--text-xl:    24px  / line-height 1.4
--text-2xl:   32px  / line-height 1.3
--text-3xl:   42px  / line-height 1.2
--text-4xl:   54px  / line-height 1.1
--text-5xl:   68px  / line-height 1.05
--text-6xl:   84px  / line-height 1.0
```

### **Font Families**
- **Display**: Plus Jakarta Sans (700, 800) - Headlines and branding
- **Body**: Inter (400, 500, 600) - Content and UI
- **Accent**: Barlow Condensed (600, 700) - Labels and stats

## 🛠️ Component System

### **Button Variants**
- `.btn-primary` - Orange CTA with hover effects
- `.btn-secondary` - Blue outlined button
- `.btn-ghost` - Transparent text-only button
- Sizes: `.btn-sm`, `.btn-lg`
- Ripple effects on click (Material Design)

### **Card System**
- `.card` - White background with subtle shadow
- `.card-blue` - Primary blue background
- `.card-orange` - Secondary orange background
- `.card-glass` - Frosted glass effect

### **Animation System**
- **Reveal Animations**: Scroll-triggered with Intersection Observer
- **Stagger Effects**: Sequential animation delays
- **Counter Animations**: Number counting effects
- **Smooth Scrolling**: Lenis for performance
- **Reduced Motion**: Accessibility support

## 📱 Responsive Design

### **Breakpoint System**
- **Mobile**: < 640px (iPhone SE and small phones)
- **Tablet**: 640px - 1024px (iPad and tablets)
- **Desktop**: 1024px - 1280px (laptops and desktops)
- **Large**: 1280px+ (large desktop monitors)

### **Mobile-First Approach**
- Base styles target mobile devices
- Progressive enhancement for larger screens
- Touch-friendly interactions (44px minimum targets)
- Optimized typography and spacing for small screens

## 🚀 Performance Features

### **Optimization Strategies**
- **Resource Hints**: Preconnect, preload, DNS prefetch
- **Lazy Loading**: Images and components below fold
- **Smooth Scrolling**: Hardware-accelerated with Lenis
- **Debouncing**: Performance-optimized event handlers
- **CSS Transitions**: GPU-accelerated animations

### **Accessibility**
- **WCAG AA Compliance**: Color contrast ratios
- **Keyboard Navigation**: Logical tab order and focus management
- **Screen Reader**: Semantic HTML and ARIA labels
- **Reduced Motion**: `prefers-reduced-motion` support
- **Touch Targets**: Minimum 44×44px for all interactive elements

## 📁 File Structure

```bash
src/
├── styles/
│   └── design-system.css          # Complete design system
├── js/
│   └── global-utilities.js       # Global JavaScript utilities
├── components/
│   ├── PageLoader.tsx          # Full-page preloader
│   ├── Button.tsx              # Button component system
│   ├── Card.tsx                # Card component system
│   └── [other components...]
├── pages/
│   ├── Index.tsx               # Homepage
│   └── NotFound.tsx            # 404 page
├── assets/
│   ├── images/                 # Optimized images
│   └── icons/                  # SVG icons
└── styles/
    ├── globals.css              # Global styles
    └── components.css          # Component styles
```

## 🎯 Key Features

### **Enterprise-Ready**
- **SEO Optimized**: Complete structured data and meta tags
- **Performance**: 90+ Lighthouse score achievable
- **Accessibility**: Full WCAG AA compliance
- **Responsive**: Flawless mobile experience
- **Brand Consistency**: Unified design system

### **Business Solutions Focus**
- **Professional Trading**: Global commerce solutions
- **Strategic Consulting**: Business optimization guidance
- **Financial Advisory**: Growth and risk management
- **Supply Chain**: End-to-end logistics optimization
- **Market Expansion**: Global reach strategies
- **Risk Management**: Compliance and protection frameworks

## 🛠️ Development Setup

### **Prerequisites**
- Node.js 18+
- npm or yarn package manager
- Modern web browser with ES6+ support

### **Installation**
```bash
# Clone the repository
git clone https://github.com/femsagroup/website.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### **Environment Variables**
```env
# API endpoints
VITE_API_URL=https://api.femsagroup.com

# Analytics (optional)
VITE_GA_ID=G-XXXXXXXXXX

# Social media links
VITE_TWITTER_HANDLE=femsagroup
VITE_LINKEDIN_URL=https://linkedin.com/company/femsagroup
```

## 📊 Performance Metrics

### **Core Web Vitals Targets**
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **TTI**: < 3.8s (Time to Interactive)

### **Bundle Size Goals**
- **JavaScript**: < 250KB (gzipped)
- **CSS**: < 50KB (gzipped)
- **Images**: WebP format with fallbacks
- **Fonts**: Subset and WOFF2 format

## 🔧 Customization

### **Theme Customization**
The design system is built for easy customization:

```css
:root {
  /* Override primary brand colors */
  --color-primary: #your-blue;
  --color-secondary: #your-orange;
  
  /* Adjust typography scale */
  --text-base: 16px; /* Increase base font size */
  
  /* Modify spacing */
  --space-4: 20px; /* Adjust base spacing unit */
}
```

### **Component Variants**
```jsx
// Custom button with design system
<Button 
  variant="primary" 
  size="lg"
  onClick={handleAction}
>
  Get Started
</Button>

// Card with glass effect
<Card variant="glass" hover>
  <CardContent />
</Card>
```

## 🌐 Deployment

### **Production Build**
```bash
# Build optimized production bundle
npm run build

# Preview build locally
npm run preview

# Analyze bundle size
npm run analyze
```

### **Environment Configuration**
- **Development**: `npm run dev` - Hot reload with Vite
- **Staging**: `npm run build && npm run preview`
- **Production**: Optimized build with CDN deployment

## 📈 Analytics & Monitoring

### **Performance Monitoring**
- **Core Web Vitals**: Automatic tracking
- **User Analytics**: Google Analytics 4 integration
- **Error Tracking**: Global error boundary handling
- **Performance Budget**: Automated bundle size monitoring

### **SEO Monitoring**
- **Search Console**: Google Search Console integration
- **Structured Data**: Rich snippet testing
- **Page Speed**: Continuous monitoring
- **Mobile Usability**: Regular testing

## 🤝 Contributing

### **Design System Guidelines**
1. **Always use CSS custom properties** from design system
2. **Follow mobile-first responsive approach**
3. **Maintain accessibility standards** (WCAG AA)
4. **Use semantic HTML5** elements
5. **Optimize for performance** at all times

### **Code Standards**
- **TypeScript**: Strict type checking enabled
- **ESLint**: Consistent code formatting
- **Prettier**: Automated code formatting
- **Husky**: Pre-commit hooks for quality

### **Testing Requirements**
- **Unit Tests**: Component testing with Vitest
- **E2E Tests**: User flow testing with Playwright
- **Accessibility**: axe-core automated testing
- **Performance**: Lighthouse CI integration

## 📞 Browser Support

### **Modern Browsers** (Full Support)
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### **Legacy Browsers** (Basic Support)
- Internet Explorer 11 (limited features)
- Chrome 80+ (reduced animations)
- Firefox 75+ (basic functionality)

## 📄 License

© 2024 FEMSA Group Limited. All rights reserved.

This enterprise website represents the pinnacle of modern web development for African business solutions, combining cutting-edge technology with timeless design principles to deliver exceptional user experiences across all devices and platforms.
