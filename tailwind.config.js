/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // container: {
      //   padding: {
      //     DEFAULT: "1rem",
      //     sm: "1.5rem",
      //     lg: "2.5rem",
      //     xl: "5rem",
      //     "2xl": "7rem",
      //   },
      // },
      fontFamily: {
        geometria: ["var(--font-geometria)"],
        bowler: ["var(--font-bowler)"],
      },
      colors: {
        dark: "#485059",
        blue: "#80C6F3",
        darkBlue: "#80C6F3",
        gray: "#F7F7F9",
      },
    },
  },
  plugins: [],
};
