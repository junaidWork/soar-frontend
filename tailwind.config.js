/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#343C6A',
        secondary: '#718EBF',
        light_gray: '#B1B1B1'
      },
      backgroundImage: {
        'linear-gradient-primary': 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)',
        'linear-gradient-secondary':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)'
      },
      screens: {
        xs: '470px'
      }
    }
  },
  plugins: []
};
