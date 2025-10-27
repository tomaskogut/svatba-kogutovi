/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        alexbrush: ['"Alex Brush"', 'cursive'],
        sans: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
