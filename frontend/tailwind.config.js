/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        logo: "#192839;",
        radient: "",
        eclipse2: "#FFE4C3",
        eclipse3: "#FFA451",
        logosec: "#FFDBB7",
        trust: "#FFEFD0",
        smallEclipse: "#FFBF44",
        verySmallEclipse: "#FF6E00",
      },
      fontFamily: {
        railway: ["Raleway", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      textColor: {
        logo: "#FFF",
        navbar: "#192839",
      },
      backgroundImage: {
        footer: "url('/footer.png')",
      },
    },
  },
  plugins: [],
};
