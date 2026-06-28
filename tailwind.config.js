/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#0B1020",
        panel: "#11172A",
        line: "#24304A",
        accent: "#7C3AED",
        cyan: "#22D3EE"
      },
      boxShadow: {
        glow: "0 0 60px rgba(124, 58, 237, 0.24)"
      }
    }
  },
  plugins: []
};
