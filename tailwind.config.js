module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mybrown':'#926239;',
        'themeblue': '#00afd7;',
      },
      backgroundImage: theme => ({
        'mainImage': "url('http://traversymedia.com/downloads/assets/beachshowcase.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
