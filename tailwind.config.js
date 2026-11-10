/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#090909',
        surface: '#111111',
        raised: '#171717',
        line: '#262626',
        paper: '#F2EFEB',
        muted: '#A09C97',
        crimson: '#E32B3C',
        blood: '#8E1420',
        coral: '#E5535F',
      },
      fontFamily: {
        display: ['Anton', 'Impact', '"Arial Narrow"', 'sans-serif'],
        script: ['"Caveat Brush"', '"Segoe Script"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.18em',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'wipe-out': {
          '0%': { transform: 'scaleX(1)', transformOrigin: 'right' },
          '100%': { transform: 'scaleX(0)', transformOrigin: 'right' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.9' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        'bleed-in': {
          '0%': { transform: 'scale(1.12)', filter: 'saturate(0.2) contrast(1.1)' },
          '100%': { transform: 'scale(1)', filter: 'saturate(1) contrast(1)' },
        },
        'block-in': {
          '0%': { transform: 'translate(-40px, -40px)', opacity: '0' },
          '100%': { transform: 'translate(0, 0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--r, 0deg))' },
          '50%': { transform: 'translateY(-18px) rotate(calc(var(--r, 0deg) + 3deg))' },
        },
      },
      animation: {
        ticker: 'ticker 28s linear infinite',
        'wipe-out': 'wipe-out 1.1s cubic-bezier(0.77, 0, 0.18, 1) 0.15s both',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        scan: 'scan 1.6s ease-in-out infinite',
        'bleed-in': 'bleed-in 2.4s cubic-bezier(0.22, 1, 0.36, 1) both',
        'block-in': 'block-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both',
        float: 'float 11s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
