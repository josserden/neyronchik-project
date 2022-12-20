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
      container: {
        center: true,
        padding: {
          DEFAULT: '0.75rem',
        },
      },

      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        adigiana: ['Adigiana'],
      },

      letterSpacing: {
        thick: '-0.019em',
      },

      dropShadow: {
        h1: ['4px 1px 0px #171717'],
        h2: ['2px 1px 0px #171717'],
        h3: ['2px 2px 0px #000000'],
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-capitalize-first-letter'),
  ],
};
