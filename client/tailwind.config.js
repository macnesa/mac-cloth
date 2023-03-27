/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'raleway': ['Raleway'],
      'rubik': ['Rubik'],
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      // addVariant('child-hover', '& > *:hover');
    },
    require('flowbite/plugin')
  ],
} 
 