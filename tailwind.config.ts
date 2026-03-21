// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        // Sistema de escala tipográfica profesional (ratio 1.25)
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px - CUERPO
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px - H3
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px - H2
        "5xl": ["3rem", { lineHeight: "1.2" }], // 48px - H1
        "6xl": ["3.75rem", { lineHeight: "1.2" }], // 60px
        "7xl": ["4.5rem", { lineHeight: "1.1" }], // 72px
        "8xl": ["6rem", { lineHeight: "1.1" }], // 96px
        "9xl": ["8rem", { lineHeight: "1" }], // 128px
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      colors: {
        // Primary — Deep Navy
        primary: '#06256d',
        'primary-container': '#253d84',
        'primary-fixed': '#dce1ff',
        'primary-fixed-dim': '#b5c4ff',
        'on-primary': '#ffffff',
        'on-primary-container': '#95abf9',
        'on-primary-fixed': '#00164e',
        'on-primary-fixed-variant': '#2b4289',
        'inverse-primary': '#b5c4ff',
        // Secondary — Burnt Orange
        secondary: '#ae3100',
        'secondary-container': '#fe6431',
        'secondary-fixed': '#ffdbd0',
        'secondary-fixed-dim': '#ffb59f',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#5b1500',
        'on-secondary-fixed': '#3a0a00',
        'on-secondary-fixed-variant': '#852400',
        // Tertiary — Dark Teal
        tertiary: '#182e41',
        'tertiary-container': '#2f4459',
        'tertiary-fixed': '#cfe5ff',
        'tertiary-fixed-dim': '#b3c9e2',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#9bb1ca',
        'on-tertiary-fixed': '#051d30',
        'on-tertiary-fixed-variant': '#34495e',
        // Surface scale
        background: '#fcf9f8',
        surface: '#fcf9f8',
        'surface-dim': '#dcd9d9',
        'surface-bright': '#fcf9f8',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f6f3f2',
        'surface-container': '#f0eded',
        'surface-container-high': '#eae7e7',
        'surface-container-highest': '#e5e2e1',
        'surface-variant': '#e5e2e1',
        'surface-tint': '#445aa3',
        'on-surface': '#1c1b1b',
        'on-surface-variant': '#444651',
        'on-background': '#1c1b1b',
        'inverse-surface': '#313030',
        'inverse-on-surface': '#f3f0ef',
        // Outline
        outline: '#757682',
        'outline-variant': '#c5c6d2',
        // Error
        error: '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error': '#ffffff',
        'on-error-container': '#93000a',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
