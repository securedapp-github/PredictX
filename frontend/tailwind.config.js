/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'mybg': '#0d006b',
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}