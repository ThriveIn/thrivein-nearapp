/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        button: "#FF41A9",
        gray: "#7E7D7D",
        input: "#595858",
      },
      backgroundColor: {
        button: "#FF41A9",
        gray: "#7E7D7D",
      },
      borderColor: {
        button: "#FF41A9",
        gray: "#7E7D7D",
        input: "#595858",
      },
    },
  },
  plugins: [],
};
