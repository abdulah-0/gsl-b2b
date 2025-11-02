/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        "brand-pink": "#E11D48",
        "brand-cyan": "#00BFA5",
        gold: "#FFD700",
        "bg-neutral": "#F8FAFC",
        "text-dark": "#0F172A",
        muted: "#94A3B8",
        cyan: "#00E5E5", // keep existing token if referenced
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to right, #0f172a, #1e293b, #334155)",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
}
