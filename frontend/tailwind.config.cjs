/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      sm: ["0.875rem", "1.125rem"],
      base: ["1rem", "1.25rem"],
      md: ["1.125rem", "1.375rem"],
      lg: ["1.25rem", "1.625rem"],
      xl: ["1.5625rem", "1.9375rem"],
      "2xl": ["1.9375rem", "2.375rem"],
      "3xl": ["2.4375rem", "2.875rem"],
    },
    extend: {
      fontFamily: {
        logo: ["Bebas Neue", "sans-serif"],
        heading: ["Cairo", "sans-serif"],
        base: ["Overpass", "sans-serif"],
      },
      backgroundImage: {
        "chevron-right": "url('/assets/images/chevron-right.svg')",
        "chevron-up-down": "url('/assets/images/chevron-up-down.svg')",
      },
    },
  },
  plugins: [],
};
