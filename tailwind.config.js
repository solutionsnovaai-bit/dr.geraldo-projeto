/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidiana: "#000000",
        carvao: "#0B0A08",
        superficie: "#141210",
        superficie2: "#1B1813",
        ouro: "#C9922B",
        "ouro-claro": "#F3DFA8",
        "ouro-profundo": "#7A5410",
        marfim: "#EDE9DF",
        neutro: "#8C857A",
      },
      fontFamily: {
        display: ["Cinzel", "Georgia", "serif"],
        numero: ["'Cormorant Garamond'", "Georgia", "serif"],
        corpo: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: { faixa: "1180px" },
    },
  },
  plugins: [],
};
