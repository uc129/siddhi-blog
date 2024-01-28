/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: ['5rem', '1.2'],
        h2: ['3rem', '1.2'],
        h3: ['2rem', '1.2'],
        h4: ['1.5rem', '1.2'],
        h5: ['1.25rem', '1.2'],
        h6: ['1rem', '1.2'],
        p: ['1rem', '1.2'],

      },
      fontFamily: {
        'logo': ['Sunset'],
        'hero': ['Shadows Into Light'],
        'roboto': ['Roboto'],
        'nunito': ['Nunito'],
        'bebas': ['Bebas Neue'],
        'chakra': ['Chakra Petch'],
        'climate': ['Climate Crisis'],
        'grape': ['Grape Nuts'],
        'ibm': ['IBM Plex Sans Devanagari'],
        'lemon': ['Lemon'],
        'noto': ['Noto Sans Devanagari'],
        'pacifico': ['Pacifico'],
        'rajdhani': ['Rajdhani'],
        'garamond': ['Garamond'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
      animationDuration: {
        '300': '300ms',
        '900': '900ms',
        '4000': '4000ms',

      },
      animationDelay: {
        '300': '300ms',
        '900': '900ms',
        '2000': '2000ms',
        '4000': '4000ms',
      },
    },
  },
  plugins: [],
}




// @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

// @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Chakra+Petch:wght@300&family=Climate+Crisis&family=Grape+Nuts&family=IBM+Plex+Sans+Devanagari:wght@300&family=Lemon&family=Noto+Sans+Devanagari:wght@100&family=Nunito:wght@300&family=Pacifico&family=Rajdhani:wght@300&family=Roboto:wght@300&display=swap');