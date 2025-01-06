/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          100: "#D9C6B0", // Beige claro
          200: "#B59F89", // Tono medio
          300: "#8E735D", // Marrón suave
          600: "#4F2A1D", // Marrón oscuro
          700: "#3E2317", // Más oscuro
          800: "#2C1A11", // Casi negro
        },
        brown: {
          600: "#5C4033", // Base cálida
          700: "#4B322A", // Más cálido
          800: "#3A271F", // Oscuro
        },
      },
    },
  },
  plugins: [],
};
