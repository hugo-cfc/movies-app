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
    screens: {
      'tablet': "767px",
      "notebook": "1024px",
      lg: "992px",
      xl: "1200px",
    },
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
        fadeImage: "fade 0.5s ease-in-out",
      },
      transitionProperty: {
        width: "width",
        display: "display",
      },
      keyframes: (theme) => ({
        width: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
      }),
      dropShadow: {
        carouselDetails: "0px 4px 4px rgba(0, 0, 0, 0.4)",
      },
      blur: {
        carouselBackground: "9px",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
  darkMode: "class",
};
