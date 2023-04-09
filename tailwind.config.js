/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      height: {
        '500': '500px',
        '450': '450px',
        '400': '400px',
        '370': '370px',
        '354': '354px',
        '300': '300px',
        '250': '250px',
      },
      width: {
        '350': '350px',
        '300': '300px',
        '250': '250px',
        '200': '200px',
        '1000' : '1000px'
      },
      fontSize: {
        '36': '36px',
      }
    },
  },
  plugins: [],
}

