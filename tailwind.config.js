/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      greenPrimary: "#8FCEA2",
      bluePrimary: "#04B4E4",
      yellow: "#FFF500",
      gray: "#AFAFAF",
      black: "#000",
      background: {
        backgroundDark: "#161616",
        backgroundLight: "#1C1C1C",
      },
      white: "#FFF",
    },
    extend: {
      animation: {
        width: "width 0.5s ease-in-out",
      },
      transitionProperty: {
        width: "width",
        display: "display",
      },
      keyframes: {
        width: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
  darkMode: "class",
};
