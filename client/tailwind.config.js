/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ["Helvetica", "sans-serif"],
        custom: ["Helvetica", "sans-serif"],       
      },
    },
  },
  variants: {},
  plugins: [],
};