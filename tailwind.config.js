/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ["Catamaran"],
      },
      colors: {
        royalBlue: "#3772FF",
        coolWhite: "#F4FDFF",
        dark: "#080708",
      },
    },
  },
  plugins: [],
};
