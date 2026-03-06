import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        navy: {
          DEFAULT: "hsl(var(--navy))",
          light: "hsl(var(--navy-light))",
          dark: "hsl(var(--navy-dark))",
        },
        orange: {
          DEFAULT: "hsl(var(--orange))",
          light: "hsl(var(--orange-light))",
          dark: "hsl(var(--orange-dark))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        femsa: {
          primary: "hsl(var(--femsa-primary-bg))",
          secondary: "hsl(var(--femsa-secondary-bg))",
          surface: "hsl(var(--femsa-surface))",
          accent: "hsl(var(--femsa-accent-primary))",
          "accent-secondary": "hsl(var(--femsa-accent-secondary))",
          "text-primary": "hsl(var(--femsa-text-primary))",
          "text-secondary": "hsl(var(--femsa-text-secondary))",
          "text-muted": "hsl(var(--femsa-text-muted))",
          "border-subtle": "hsl(var(--femsa-border-subtle))",
          "border-accent": "hsl(var(--femsa-border-accent))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "stagger-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "amber-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(245, 158, 11, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(245, 158, 11, 0.4)" },
        },
        "dropdown-slide": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "stagger-in": "stagger-in 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "amber-glow": "amber-glow 3s ease-in-out infinite",
        "dropdown-slide": "dropdown-slide 0.2s ease-out",
      },
      spacing: {
        'femsa-1': 'var(--femsa-space-1)',
        'femsa-2': 'var(--femsa-space-2)',
        'femsa-3': 'var(--femsa-space-3)',
        'femsa-4': 'var(--femsa-space-4)',
        'femsa-6': 'var(--femsa-space-6)',
        'femsa-8': 'var(--femsa-space-8)',
        'femsa-12': 'var(--femsa-space-12)',
        'femsa-16': 'var(--femsa-space-16)',
        'femsa-24': 'var(--femsa-space-24)',
        'femsa-32': 'var(--femsa-space-32)',
        'femsa-40': 'var(--femsa-space-40)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
