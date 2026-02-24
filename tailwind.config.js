/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
        },
        accent: {
          primary: '#2563eb', // blue-600
          secondary: '#06b6d4', // cyan-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'beam': 'beam 2s linear infinite',
        'beam-v': 'beamV 2s linear infinite',
        'beam-reverse': 'beamReverse 2s linear infinite',
        'beam-v-reverse': 'beamVReverse 2s linear infinite',
        'scroll': 'scroll 30s linear infinite',
        'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        beam: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        beamV: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        beamReverse: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        beamVReverse: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
