/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'media',
  mode: 'jit',

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      boxShadow: {
        blueBtn:
          '0px 20px 25px -5px rgba(0, 69, 108, 0.1), 0px 8px 10px -6px rgba(0, 69, 108, 0.1)',
        redBtn:
          '0px 20px 25px -5px rgba(108, 0, 0, 0.1), 0px 8px 10px -6px rgba(92, 0, 0, 0.1), inset -4px -4px 12px rgba(255, 255, 255, 0.25), inset 4px 4px 12px rgba(255, 255, 255, 0.25)',
        postCard:
          '0px 25px 50px -12px rgba(0, 0, 0, 0.15), inset -5px -4px 13px #DAE9EF, inset 5px 4px 13px #DAE9EF',
        postButton:
          '0px 20px 25px -5px rgba(108, 0, 0, 0.1), 0px 8px 10px -6px rgba(92, 0, 0, 0.1), inset -4px -4px 12px rgba(255, 255, 255, 0.25), inset 4px 4px 12px rgba(255, 255, 255, 0.25)',
        postButtonHover:
          '0px 20px 25px -5px rgba(108, 0, 0, 0.1), 0px 8px 10px -6px rgba(92, 0, 0, 0.1)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.75rem',
        },
      },
      colors: {
        contactInfo: ['rgba(250, 250, 250, 0.8)'],
      },
      dropShadow: {
        h1: ['4px 1px 0px #171717'],
        h2: ['2px 1px 0px #171717'],
        h3: ['2px 2px 0px #000000'],
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        adigiana: ['Adigiana'],
      },
      letterSpacing: {
        thick: '-0.019em',
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
};
