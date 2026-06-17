import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1728c5",
          darkblue: "#1f1a80",
          green: "#96ff00",
          white: "#ffffff",
        },
      },
      fontFamily: {
        // Wired to next/font CSS variables in app/layout.tsx
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Consistent type scale
        hero: ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        section: ["clamp(2rem, 4vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1728c5 0%, #1f1a80 100%)",
        "brand-gradient-alt": "linear-gradient(160deg, #1728c5 0%, #1f1a80 100%)",
        "brand-gradient-soft": "linear-gradient(110deg, #1f1a80 0%, #1728c5 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(150, 255, 0, 0.35)",
        "glow-sm": "0 0 16px rgba(150, 255, 0, 0.25)",
        "glow-lg": "0 0 60px rgba(150, 255, 0, 0.4)",
        card: "0 20px 45px -20px rgba(0, 0, 0, 0.55)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
