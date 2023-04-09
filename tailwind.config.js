/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      height: {
        '354': '354px',
        '300': '300px',
      },
      width: {
        '350': '350px',
        '300': '300px',
        '250': '250px',
        '1000' : '1000px'
      },
      fontSize: {
        '36': '36px',
      }
    },
  },
  plugins: [],
}

