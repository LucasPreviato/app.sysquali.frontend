/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}","./index.html"],
  theme: {
    extend: {
      colors:{
        brand: {
          300: '#996DFF',
          500: '#8257e6'
        },
        sysquali: {
          600 : '#2F3136',
          900 : '#202225'
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
}
