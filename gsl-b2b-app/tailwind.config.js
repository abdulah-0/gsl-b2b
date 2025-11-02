/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#00E5E5",
        gold: "#FFD700",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to right, #0f172a, #1e293b, #334155)",
      },
    },
  },
  plugins: [],
}

