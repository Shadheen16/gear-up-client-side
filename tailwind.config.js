module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "rubik" : ['Rubik', 'sans-serif'],
        "oswald" : ['Oswald', 'sans-serif'],
      },
      colors: {
        'clr-primary': '#181B23',
        'clr-secondary': '#EA4444',
        'clr-accent': '#FFDE3E',
        'clr-nav': '#22232B',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
