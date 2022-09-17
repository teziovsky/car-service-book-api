/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    fontSize: {
      sm: ["0.875rem", "1.125rem"],
      base: ["1rem", "1.25rem"],
      lg: ["1.125rem", "1.375rem"],
      xl: ["1.25rem", "1.625rem"],
    },
    extend: {
      fontFamily: {
        logo: ["Bebas Neue", "sans-serif"],
        heading: ["Cairo", "sans-serif"],
        base: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
