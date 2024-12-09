/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg:"8rem",
        md:"5rem",
      },
    },
    extend: {
      fontFamily: {
        fira: ['"Fira Mono", monospace'],
        poppins: ["'Poppins', sans-serif"],
      },
      colors: {
        primary: "#64ffda",
        neon: "#0A192F",
        light: "#ccd6f6",
        elight: "#8892B0",
      },
      screens: {
        lg:"1140", // Custom breakpoint between md and lg
      },
    },
  },
  plugins: [],
};
