module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      orange: "#F2994A",
      black: "#000000",
      gray1: "#333333",
      gray2: "#4F4F4F",
      gray3: "#828282",
      gray4: "#BDBDBD",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },

    extend: {},
  },
  plugins: [],
};
