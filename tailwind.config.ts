import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0e",
        neon: "#00FF9F",
        violet: "#B700FF",
        foreground: "#e1e3e6",
        card: "rgba(255,255,255,0.02)",
        border: "rgba(255,255,255,0.10)"
      },
      boxShadow: {
        neon: "0 0 18px rgba(0,255,159,0.35)",
        violet: "0 0 18px rgba(183,0,255,0.30)"
      },
      borderRadius: { xl: "12px" },
      keyframes: {
        fadeIn: { "0%": {opacity:"0", transform:"translateY(8px)"}, "100%": {opacity:"1", transform:"translateY(0)"} },
        ticker: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } }
      },
      animation: {
        fadeIn: "fadeIn .6s ease forwards",
        ticker: "ticker 30s linear infinite"
      }
    }
  },
  plugins: [],
};
export default config;
