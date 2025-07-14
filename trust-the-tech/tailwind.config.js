/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A3D7DE',
          light: '#A3D7DE',
          dark: '#417B96',
        },
        secondary: {
          DEFAULT: '#417B96',
        },
        accent: {
          DEFAULT: '#CC2D25',
        }
      },
      fontFamily: {
        'decorative': ['RQND Pro Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

