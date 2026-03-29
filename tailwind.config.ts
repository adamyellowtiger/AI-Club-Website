import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#dbeeff',
          500: '#1f87ff',
          600: '#136de1',
          700: '#0f56b2'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 86, 178, 0.12)'
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top right, rgba(31, 135, 255, 0.24), transparent 45%), radial-gradient(circle at 10% 10%, rgba(112, 197, 255, 0.24), transparent 35%)'
      }
    }
  },
  plugins: []
} satisfies Config;
