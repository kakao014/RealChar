/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gainsboro: "#d9d9d9",
        darkcyan: "#319795",
        white: "#fff",
        whitesmoke: "#ececec",
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq768: {
        raw: "screen and (max-width: 768px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
