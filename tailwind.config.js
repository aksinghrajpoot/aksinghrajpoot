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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        neon: "var(--neon)",
        light: "var(--light)",
        elight: "var(--elight)",
      },
    },
  },
  plugins: [],
};
