/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        background: '#BEFBFF',
        bblue: '#305ABE',
        card:'#D0E4EA',
        card2:'#303030',
        footer:"#080F1B",
      },
      fontFamily: {
        Inter: ["Inter","san-serif"],
       },
    },
  },
  plugins: [],
}

