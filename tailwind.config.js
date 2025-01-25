/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#221F1F",
        bg_primary: "#407CE2",
        stroke:{
          DEFAULT:"#2121F1F1",
          10: 'rgba(34, 31, 31, 0.1)',
          40: 'rgba(34, 31, 31, 0.4)',
        },line:{
          DEFAULT:"#407CE2",
          13: 'rgba(64, 124, 226, 0.13)',
        }
      },fontFamily:{
        "poppins_reg": ["Poppins_400Regular"],
        "poppins_bold":["Poppins_700Bold"]
      }
    
  }
  },
  plugins: [],
};
