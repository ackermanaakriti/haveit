/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        logoGreen: "#205900",
        faintGreen: "#D3E1C5",
        dark: "#1E293B"
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

