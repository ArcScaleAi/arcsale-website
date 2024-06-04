/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#8648ef',
        'faq-primary': 'rgba(134,72,239,0.11)'
      },
      keyframes: {
        "alert": {
          '0%': {transform: "translateY(-100px)"},
          '5%': {transform: "translateY(0)"},
          '90%': {opacity: 1},
          '100%': {opacity: 0}
        }
      },
      animation: {
        "alert-animate": "alert 4s ease-out forwards"
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
}

