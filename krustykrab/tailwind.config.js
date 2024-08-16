/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: '"Matemasie", sans-serif;',
    },
    extend: {
      backgroundImage: {
        imageBg: "url('./assets/KrustyKrabStock.jpg')",
      },
    },
  },
  plugins: [],
}