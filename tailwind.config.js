module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      screens: {
        "-md": { max: "767px" },
        "-sm": { max: "639px" },
      },
      colors: {
        "regal-blue": "#313743",
        "royal-grey": "#363A46",
        "card-grey": "#3E4956",
        "card-blue": "#88BFCF",
        "icon-grey": "#5E606F",
        "light-black": "#1F2328",
        "dark-royal-grey": "#3A404B",
        "lightish-orange": "#F1662A",
        "glow-blue": "#699BF7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
