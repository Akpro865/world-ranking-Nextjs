/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
  	"./pages/index.js",
  	"./components/Navbar/Navbar.js",
  	"./components/Search/Search.js",
    "./components/Countries/Countries.js",
    "./pages/country/[id].js"
  ],
  theme: {
    extend: {
      colors: {
        "text-secondary": "var(--text-secondary)",
        "background-color-dark": "var(--background-color-dark)",
        "background-color-light": "var(--background-color-light)",
        "box-shadow": "var(--box-shadow)"
      },
      screens: {
        "xs": "320px"
      }
    },
  },
  plugins: [],
}
