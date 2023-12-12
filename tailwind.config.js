/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      fontFamily: {
        Popin: ["Poppins",'sans-serif'],
        Poping: ["PopinBlack",'sans-serif'],
      },
    },
  },
  plugins: [],
}

