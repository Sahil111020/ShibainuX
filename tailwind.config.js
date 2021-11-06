module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.jsx"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#FF2D60',
      'secondary': '#ffffff',
      'discord': '#7289DA',
      'twitter': '#1DA1F2'
    },
    extend: {
      fontFamily: {
        Modak: ['Modak', 'cursive'],
        Poppins: ['Poppins', 'sans-serif'],
        Lato: ['Lato', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
