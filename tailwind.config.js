module.exports = {
  content: ["./pages/**/*.{jsx,js}", "./components/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        blue: {
          xdark: "#030F4B",
          dark: "#335DFF",
          light: "#91A7FF",
          xlight: "#F0F3FF",
        },
        red: {
          dark: "#FD4455",
          light: "#FD7F92",
          xlight: "#FCEDEF",
        },
      },
      boxShadow: {
        btn: " 0px 10px 35px -3px rgba(253, 68, 85, 0.35), 0px 4px 6px rgba(253, 68, 85, 0.25)",
      },
    },
  },
  plugins: [],
};
