/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar'
import flowbite from "flowbite-react/tailwind";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
        'xxs': '350px',
        'xm': '900px',
      },
    },
  },
  plugins: [
    scrollbar,
  ],
  safelist: [
    '-translate-x-full',
    'translate-x-0',
  ],
}

