/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Sunset'],
        // 'display': ['Helvetica Neue'],
        'hero': ['Shadows Into Light']
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}