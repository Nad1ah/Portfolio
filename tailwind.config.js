/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9F00", // Amarelo/laranja para destaque
        secondary: "#9C27B0", // Roxo para elementos secundários
        dark: "#1E1E1E", // Fundo escuro
        light: "#f8f9fa", // Texto claro
        accent: "#FF4081", // Cor de destaque para botões
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
