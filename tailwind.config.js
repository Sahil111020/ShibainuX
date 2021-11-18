module.exports = {
  mode: "jit",
  purge: ["./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: "#FF2D60",
      secondary: "#ffffff",
      discord: "#7289DA",
      twitter: "#1DA1F2",
    },
    backgroundColor: (theme) => ({
      primary: "#434343",
      secondary: "#FF2D60",
      bg0: "rgba(243, 244, 246)",
      bg1: "#FFB798",
      bg2: "#FFCCBE",
      bg3: "#EA7DEA",
      bg31: "#0CCBFF",
      bg41: "#96FFF0",
      bg5: "#F98E71",
      bg51: "#82B3FF",
    }),
    extend: {
      fontFamily: {
        Modak: ["Modak", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
