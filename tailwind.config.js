/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          350: '#FF9A5A'
        }
      },
      fontFamily: {
        Inter: "Inter"
      }
    },
  },
  plugins: [],
}

