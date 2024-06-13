/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f2a7b1',
        secondary: '#8b8b8b',
        orange: '#D45B13',
        green: '#2F903F',
        // foreground: '#EDF2F7',
      },
    },
  },
  plugins: [],
}
