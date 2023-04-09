/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      height: {
        '354': '354px',
      },
      width: {
        '350': '350px',
        '300': '300px',
        '250': '250px',
      },
      fontSize: {
        '36': '36px',
      }
    },
  },
  plugins: [],
}

