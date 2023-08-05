/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '500px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        'main-background': 'rgb(var(--main-background) / <alpha-value>)',
        'main-accent': '#E50914',
        'main-secondary': '#71767B',
        'main-border': '#2F3336',
        'accent-red': '#F4212E',
      }
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('inner', '& > *');
    }
  ],
}
