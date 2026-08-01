/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030614',
          900: '#060b1f',
          800: '#0a1230',
          700: '#101b45',
          600: '#16255c'
        },
        electric: {
          400: '#4f7cff',
          500: '#3b5fff',
          600: '#2f4fe6'
        },
        cyan: {
          glow: '#22d3ee',
          soft: '#67e8f9'
        },
        mist: {
          100: '#f4f7ff',
          200: '#dfe7f8',
          300: '#c2cee8',
          400: '#8d9cc4',
          500: '#66729a',
          600: '#4a5578'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'glow-blue': '0 0 40px -8px rgba(79,124,255,0.55)',
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.5)',
        'glass': '0 8px 32px rgba(3,6,20,0.45)',
        'card': '0 20px 60px -15px rgba(2,6,23,0.8)',
        'lift': '0 30px 80px -20px rgba(2,6,23,0.9)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'aurora': 'conic-gradient(from 180deg at 50% 50%, #4f7cff 0deg, #22d3ee 90deg, #7c3aed 180deg, #4f7cff 270deg, #22d3ee 360deg)'
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'aurora-drift': 'auroraDrift 18s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'marquee': 'marquee 30s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' }
        },
        auroraDrift: {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '100%': { transform: 'translate(6%, -6%) rotate(8deg) scale(1.15)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      letterSpacing: {
        tightest: '-0.045em'
      }
    }
  },
  plugins: []
}
