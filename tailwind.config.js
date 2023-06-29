/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        light: ["light", "-apple-system", "system-ui", "sans-serif"],
        regular: ["regular", "-apple-system", "system-ui", "sans-serif"],
        bold: ["bold", "-apple-system", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
