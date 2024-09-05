/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'contrast': '#1b4332',
        'background': '#d8f3dc',
        'primary': '#40916c',
        'secondary-bolder': '#52b788',
        'secondary-lighter': '#74c69d',
        'text-color': '#081c15'
      }
    },
  },
  plugins: [],
}

