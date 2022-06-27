/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["*.{html,}"],
  theme: {
    extend: {
      fontFamily: {
        'comf': ['comfortaa', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'nun': ['Nunito', 'sans-serif'],
        'libre':['Libre Baskerville', 'serif'],
        'monte': ['montserrat', 'sans-serif'],
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
