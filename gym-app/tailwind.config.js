/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': {
          100: '#57a264',
        },
        'scheme1':{
          100: '#54162B',
          200: '#B4182D',
          300: '#FDA481',
          400: '#37415C',
          500: '#242E49',
          600: '#181A2F',
          700: '#8f9bbc',
          800: '#cfd4e2',
          900: '#dfe3ec',
          950: '#1d202f'
        }
      },
  }
    
  },

  plugins: [],
}
