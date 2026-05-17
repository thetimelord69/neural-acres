import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#04090f',
          900: '#070f1a',
          800: '#0b1625',
          700: '#0f1e30',
          600: '#14273d',
          500: '#1a324d',
        },
        teal: {
          300: '#5ef5d4',
          400: '#2ef5c8',
          500: '#1de9b6',
          600: '#00c896',
          700: '#009e76',
        },
        cyan: {
          400: '#29edff',
          500: '#00e5ff',
          600: '#00b8d4',
        },
        gold: {
          300: '#f5df8e',
          400: '#d7b957',
          500: '#b9962e',
        },
        silver: {
          50:  '#f4f9ff',
          100: '#edf5ff',
          200: '#c8dde8',
          300: '#8ab4c8',
          400: '#4a7a8a',
          500: '#2d5363',
        },
      },
      fontFamily: {
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space)', 'var(--font-inter)', 'sans-serif'],
        mono:  ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1de9b6 0%, #00e5ff 50%, #c8dde8 100%)',
        'investor-gradient': 'linear-gradient(135deg, #d7b957 0%, #1de9b6 55%, #00e5ff 100%)',
        'card-gradient':  'linear-gradient(145deg, #0f1e30 0%, #0b1625 100%)',
      },
      boxShadow: {
        'teal-glow':   '0 0 24px rgba(29,233,182,0.25)',
        'teal-glow-lg':'0 0 48px rgba(29,233,182,0.35)',
        'card':        '0 4px 32px rgba(0,0,0,0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':      'float 6s ease-in-out infinite',
        'spin-slow':  'spin 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
