/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    screens: {
      '-sm': {'max': '700px'},
      'sm': '701px',
      '-md': {'max': '1000px'},
      'md': '1001px',
      '-lg': {'max': '1500px'},
      'lg': '1501px'
    },
  },
  plugins: [],
  important: true,
}

