/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7ebe7",
        sand: "#d8b0aa",
        ink: "#6b1220",
        taupe: "#8f5c5f",
        mist: "#f5f0ef"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        soft: "0 15px 35px rgba(17,17,17,0.08)"
      }
    }
  },
  plugins: []
};
