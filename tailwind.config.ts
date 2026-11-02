import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#050811',
          900: '#090e1c',
          850: '#0e1528',
          800: '#15203b',
          700: '#1e2d52',
        },
        aurora: {
          cyan: '#38bdf8',
          teal: '#2dd4bf',
          violet: '#a855f7',
          indigo: '#818cf8',
          blue: '#60a5fa',
          emerald: '#34d399',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        aurora: 'aurora 18s ease infinite alternate',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatRev 9s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translate(0%, 0%) scale(1)' },
          '50%': { transform: 'translate(6%, 8%) scale(1.08)' },
          '100%': { transform: 'translate(-4%, -4%) scale(0.96)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(56, 189, 248, 0.22)',
        'glow-violet': '0 0 35px -5px rgba(168, 85, 247, 0.22)',
        glass: '0 20px 50px -15px rgba(0, 0, 0, 0.45)',
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
};

export default config;
