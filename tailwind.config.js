/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2.5rem",
          xl: "5rem",
          "2xl": "7rem",
        },
      },
      fontFamily: {
        michroma: ["var(--font-michroma)"],
        roboto: ["var(--font-roboto)"]
      },
      colors: {
        blue: "#498CA8",
        gray: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
