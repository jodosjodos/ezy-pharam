/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#221F1F",
        bg_primary: "#407CE2",
      },fontFamily:{
        "poppins_reg": ["Poppins_400Regular"],
        "poppins_bold":["Poppins_700Bold"]
      }
    
  }
  },
  plugins: [],
};
