/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geometria: ["var(--font-geometria)"],
        bowler: ["var(--font-bowler)"],
      },
      colors: {
        dark: "#485059",
        blue: "#80C6F3",
        darkBlue: "#0D1054",
        gray: "#F7F7F9",
      },
    },
  },
  plugins: [],
};
