/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.6s",
        fadeInQuick: "fadeIn 0.4s",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
      fontFamily: {
        light: ["light", "-apple-system", "system-ui", "sans-serif"],
        regular: ["regular", "-apple-system", "system-ui", "sans-serif"],
        bold: ["bold", "-apple-system", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
