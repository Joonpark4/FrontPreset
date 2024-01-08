import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */ // Tailwind CSS의 설정 타입을 import합니다.
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: "bold",
          margin: theme("margin.2"),
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: "bold",
          margin: theme("margin.2"),
        },
        h3: {
          fontSize: theme("fontSize.xl"),
          fontWeight: "bold",
          margin: theme("margin.2"),
        },
        h4: {
          fontSize: theme("fontSize.lg"),
          fontWeight: "bold",
          margin: theme("margin.2"),
        },
        h5: {
          fontSize: theme("fontSize.base"),
          fontWeight: "bold",
          margin: theme("margin.2"),
        },
        h6: {
          fontSize: theme("fontSize.sm"),
          fontWeight: "bold",
          margin: theme("margin.2"),
        },
      });
    }),
  ],
};
