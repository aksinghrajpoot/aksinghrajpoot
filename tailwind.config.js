/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["pages/**/*.{js,jsx,ts,tsx}", "components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg:"10rem",
        md:"5rem",
      },
    },
    extend: {
      fontFamily: {
        fira: ['"Fira Mono", monospace'],
      },
      colors: {
        primary: "#64ffda",
        neon: "#0A192F",
        light: "#ccd6f6",
        elight: "#8892B0",
      },
    },
  },
  plugins: [],
};
