/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        ice: '#F2F7FA',
        midnight: '#17334C',
        deepblue: '#255C81',
        iceblue: '#DDECF5',
        teal: '#3B8F91',
        amber: '#E3A13C',
        coral: '#C95650',
        slate: '#687A88',
        border: '#DDE6EC',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-plex-mono)'],
      },
    },
  },
  plugins: [],
};
