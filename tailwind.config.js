const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // example
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
        monaco: ["Monaco", "sans-serif"],
      },
      // example
      colors: {
        lime: colors.lime,
        cyan: colors.cyan,
      },
      // example
      backgroundImage: (theme) => ({
        photo:
          "url('https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?cs=srgb&dl=pexels-hristo-fidanov-1252890.jpg&fm=jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
