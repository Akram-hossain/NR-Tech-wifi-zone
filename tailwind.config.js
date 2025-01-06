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
      },
      backgroundImage: {
        'nav-drop': "url('/assets/images/nav-drop-bg.svg')", 
      },
      fontFamily: {
        'inter': ['Inter', 'serif'], 
        'fira': ['Fira Sans', 'serif'], 
      },
      backgroundColor: {
        'first': '#F53838', 
        'dark': '#2A2A2A', 
        'pink': '#FFE8E8', 
      },
      borderColor: {
        'first' : '#FFFAFA', 
      },
      colors: {
        'black': '#2A2A2A', 
      },
    },
  },
  plugins: [],
}

