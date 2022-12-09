module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      robot: ["Roboto Slab", "sans-serif"],
      titillium: ["Titillium Web", "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
