module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackFont: "#363F54",
        fontBlue: "#172E59",
        primaryGreen: "#08C3A8",
        primaryBlue: "#4BADEF",
      },
      backgroundImage: {
        welcome: "url(/images/welcome.png)",
      },
    },
  },
  plugins: [],
};
