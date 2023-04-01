/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}',],
  darkMode:'class',
  theme: {
    fontFamily:{
      sans:['Kumbh Sans', 'sans-serif']
    },
    colors:{
      'violet':'#5964e0',
      'light-violet':'#939bf4',
      'dark-blue':'#19202d',
      'midnight':'#121721',
      'gray':'#9daec2',
      'dark-gray':"#6e8089",
      'light-gray':"#f4f6f8",
      'white':'#ffffff'
    },
  },
  plugins: [],
}
