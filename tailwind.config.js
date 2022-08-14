/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/spinner.{svg}",
  ],
  theme: {
    extend: {
      colors: {
        primary2: "#570DF8",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
