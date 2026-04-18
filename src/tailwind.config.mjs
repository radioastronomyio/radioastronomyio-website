/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          steel: '#5B8FAE',
          navy: '#2C3E50',
          coral: '#E8A87C',
          cream: '#F5F5F0',
          grid: '#E0DDD5',
          gray: '#6C757D',
        },
        dark: {
          bg: '#1A1A2E',
          surface: '#16213E',
          text: '#E8E8E8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
