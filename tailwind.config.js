/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#9333EA', // Example secondary color
        accent: '#F59E0B', // Example accent color
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Set Roboto as the primary font
        serif: ['Merriweather', 'serif'], // Optional: Keep Merriweather for serif text
      },
      spacing: {
        128: '32rem', // Example custom spacing
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem', // Example custom border radius
      },
    },
  },
  plugins: [],
};
