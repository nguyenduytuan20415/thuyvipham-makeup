/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        cream: '#F4EEE5',
        champagne: '#E8DCC8',
        nude: '#D9C3A9',
        beige: '#C9B291',
        mocha: '#8A6F55',
        espresso: '#2B2118',
        ink: '#17120D',
        gold: '#B9975B',
        goldlight: '#D8C39A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Jost"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        mega: '0.32em',
      },
    },
  },
  plugins: [],
}
