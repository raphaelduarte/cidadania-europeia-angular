/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray': '#202024',
      },
      borderColor: {
        'custom-gray': '#202024',
      }
    },
    plugins: [],
  }
}

