import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        ink: {
          950: '#0A0A0B',
          900: '#111113',
          800: '#1A1A1D',
          700: '#242427',
          600: '#3A3A3F',
          500: '#57575C',
          400: '#8A8A8F',
          300: '#B5B5BA',
          200: '#D4D4D8',
          100: '#EDEDF0',
        },
        lime: {
          DEFAULT: '#C5F23E',
          500: '#C5F23E',
          400: '#D4F76C',
          600: '#A8D81E',
          700: '#86AE14',
        },
        bone: '#F4F1EA',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'blink': 'blink 1s steps(2) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.95)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
