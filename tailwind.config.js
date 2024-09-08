const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      'xs': '500px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}