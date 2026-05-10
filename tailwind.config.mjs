/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F53838",
          50: "#FFF1F1",
          100: "#FFE0E0",
          200: "#FFC2C2",
          300: "#FF9595",
          400: "#FF5F5F",
          500: "#F53838",
          600: "#E11616",
          700: "#BD0F0F",
          800: "#9C1010",
          900: "#811414",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "var(--font-hind)", "sans-serif"],
        bn: ["var(--font-hind)", "sans-serif"],
        en: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(245, 56, 56, 0.55)",
        "glow-lg": "0 0 80px -15px rgba(245, 56, 56, 0.65)",
        soft: "0 10px 30px -12px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
        marquee: "marquee 40s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        shine: "shine 2.5s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shine: {
          "0%": { "background-position": "200% center" },
          "100%": { "background-position": "-200% center" },
        },
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
