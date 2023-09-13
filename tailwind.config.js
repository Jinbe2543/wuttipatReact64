/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '467': '467px',
        '807': '807px',
        
      },
      widht: {
        '467': '467px',
        '807': '807px',
        '804': '804px',
      },
    },
  },
  plugins: [require("daisyui")],
}

