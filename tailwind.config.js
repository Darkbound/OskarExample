module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        "paragraph-gray": "#cccccd",
      },
      letterSpacing: {
        "tiny-wide": "0.004em",
        "semi-tight": "-0.015em",
      },
      lineHeight: {
        1.04167: 1.04167,
        "semi-tight": 1.125,
      },
      fontSize: {
        "7.5xl": "5.25rem",
      },
      transitionDuration: {
        3000: "3000ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
