var { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cubano: ["var(--font-cubano)", ...fontFamily.sans],
        urbanist: ["var(--font-urbanist)", ...fontFamily.sans],
        head: ["var(--font-cubano)", ...fontFamily.sans],
        body: ["var(--font-urbanist)", ...fontFamily.sans],
      },
      colors: {
        primary: "#F53B3B",
        bg: "#0C0C0C",
        card: "#4D4D4D",
        text1: "#FFFFFF",
        text2: "#E7E7E7",
      },
    },
  },
  plugins: [],
};
