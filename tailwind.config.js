/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/pages/*.html"],
  theme: {
    extend: {
      fontFamily: {
        signika: ["Signika", "sans - serif"],
        yellowtail: ["Yellowtail", "cursive"],
        julee: ["Julee", "cursive"],
      },
    },
  },
  plugins: [],
};
