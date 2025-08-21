/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
          frank: ['Frank Ruhl Libre', 'serif'],
      },
      container: {
        center: true, 
          DEFAULT: '5px',
        },
    },
  },
  plugins: [],
}
