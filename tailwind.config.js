/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "8rem",
        md: "5rem",
      },
    },
    extend: {
      fontFamily: {
        ui: ["var(--font-inter)", "sans-serif"],
        primary: ["var(--font-play)", "sans-serif"],
        display: ["var(--font-comic-neue)", "cursive"],
      },
      colors: {
        surface: "rgb(var(--surface))",
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        accent: "rgb(var(--accent))",
        neon: "rgb(var(--neon))",
        light: "rgb(var(--light))",
        elight: "rgb(var(--elight))",
      },
    },
  },
  plugins: [],
};
