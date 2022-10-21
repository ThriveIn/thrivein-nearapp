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
        error: "#FF0404",
      },
      backgroundColor: {
        button: "#FF41A9",
        gray: "#7E7D7D",
        main: "rgba(240, 239, 239, 0.5)",
      },
      borderColor: {
        button: "#FF41A9",
        gray: "#7E7D7D",
        input: "#595858",
        error: "#FF0404",
      },
    },
    screens: {
      "3xl": {
        min: "1921px",
      },
      "2xl": { max: "1920px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1439px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "480px" },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
