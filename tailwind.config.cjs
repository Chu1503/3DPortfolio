/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#020302", // main bg
        secondary: "#f1f2f3",  // almost all text
        tertiary: "#252424", // cards fill
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        change: "#a90104",
        // change: "#168c21",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1F3624",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg.png')",
      // },
    },
  },
  plugins: [],
};