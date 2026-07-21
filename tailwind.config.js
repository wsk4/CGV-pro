/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Fondo principal oscuro negro-azulado
          black:   "#0A0D14",
          // Fondo de cards/secciones secundarias (slate oscuro)
          card:    "#161B26",
          // Texto principal
          white:   "#FFFFFF",
          // Rojo terracota del logo y CTA
          red:     "#B83228",
          // Rojo terracota más oscuro (hover, variante)
          redDark: "#8F2620",
          // Bordes finos de cards
          gray:    "#334155",
          // Superficie suave (si se usa algún fondo claro)
          soft:    "#1E2433",
        },
      },
    },
  },
  plugins: [],
};