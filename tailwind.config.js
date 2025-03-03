/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          'black':'#000',
          'white':'#fff',
          'orange':'#FF5C00',
          'red':'#EB574C',
          'blue':'#38A5FF',
          'yellowish':'#DDA844', 
          'bg-th':'#D2D6DC',
          'grayish':'#E3E5E7',
          'gray':'#c6cdd573',
          'blackish':'#828487',
          'bg':'#EAEBEC',
          'grey':'rgb(177, 177, 177);',
          'greyishWhite':'#f1f1f1',
          'manage':'#19191c88'
        }
      }
    },
    screens:{
      'sm':'640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

