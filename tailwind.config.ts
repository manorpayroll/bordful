import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'var(--font-geist-sans)',
          'system-ui',
          'sans-serif',
        ],
        serif: [
          'var(--font-cormorant)',
          'var(--font-ibm-plex-serif)',
          'Georgia',
          'Times New Roman',
          'serif',
        ],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        brand: {
          ivory: '#FAFAF7',
          'warm-white': '#F5F3EE',
          cream: '#EDE9E0',
          gold: '#B8956A',
          'gold-hover': '#A07D55',
          charcoal: '#1A1A1A',
          dark: '#2C2C2C',
          medium: '#6B6B6B',
          'light-text': '#9A9A9A',
          border: '#E5E1D8',
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1100px',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    typography,
    // ... other plugins
  ],
};

export default config;
