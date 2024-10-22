/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Sesuaikan dengan struktur folder proyek Anda
  ],
  theme: {
    extend: {
      fontFamily : {
        poppins: ['Poppins-Regular', 'sans-serif'],
      }, 
      colors : {
        focused : '#55CB95',
        isFocused : '#C8C8C8',
        primary : '#E0F7EF'
      }
    },
  },
  plugins: [],
}
