/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1312px'
    },
    container: {
      center: true, 
      padding: {
        DEFAULT: '1.75rem',    
        sm: '2rem',           
        md: '2.5rem',          
        lg: '2.75rem',             
        xl: '1.5rem',      
      }
    },
    extend: {
      boxShadow: {  
        'first': '0px 4px 10px 0px #00000040',  
        'second': '0px 2px 10px 0px #ED289140',  
        'three': '-10px 20px 30px 0px #F5383866',  
        'four': '0px 10.2px 15.29px 0px #F5383840',  
        'five': '0px 100px 80px 0px #3131311A',  
      },
      backgroundImage: {
        'nav-drop': "url('/assets/images/nav-drop-bg.svg')", 
      },
      fontFamily: {
        'inter': ['Inter', 'serif'], 
        'rubik': ['Rubik', 'serif'], 
      },
      backgroundColor: {
        'first': '#F53838', 
        'dark': '#2A2A2A', 
        'pink': '#FFE8E8', 
        'pink-2': '#FFF5F5', 
      },
      borderColor: {
        'first' : '#FFFAFA', 
        'deep' : '#F53838', 
      },
      colors: {
        'black': '#2A2A2A', 
        'deep': '#F53838', 
      },
    },
  },
  plugins: [],
}

