/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: '#f9f9f9',
        textSecondary: '#5918df'
      },
      backgroundColor: {
        primaryBg: '#100e17',
        secondaryBg: '#0e7292'
      }
    },
  },
  plugins: [],
}