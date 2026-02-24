/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        serif: ["Inter", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
