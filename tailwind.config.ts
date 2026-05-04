import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#131319",
        "tertiary-fixed": "#ff8eac",
        "surface-container": "#19191f",
        "on-tertiary-container": "#000000",
        "on-secondary-container": "#fff5ff",
        "primary-dim": "#00deec",
        "on-surface": "#f9f5fd",
        "primary-container": "#00eefc",
        "error": "#ff716c",
        "background": "#0e0e13",
        "error-dim": "#d7383b",
        "tertiary-container": "#fc0078",
        "on-background": "#f9f5fd",
        "inverse-primary": "#006a71",
        "on-primary-container": "#005359",
        "tertiary-dim": "#e4006c",
        "on-primary": "#005d63",
        "surface": "#0e0e13",
        "on-tertiary-fixed-variant": "#760035",
        "on-secondary-fixed-variant": "#7900c6",
        "tertiary": "#ff6b98",
        "primary": "#8ff5ff",
        "on-secondary": "#340059",
        "surface-container-highest": "#25252d",
        "on-error-container": "#ffa8a3",
        "secondary-fixed-dim": "#ddb3ff",
        "on-tertiary-fixed": "#380015",
        "on-secondary-fixed": "#500086",
        "outline": "#76747b",
        "on-tertiary": "#47001d",
        "surface-variant": "#25252d",
        "primary-fixed": "#00eefc",
        "on-error": "#490006",
        "surface-container-lowest": "#000000",
        "inverse-on-surface": "#55545b",
        "surface-tint": "#8ff5ff",
        "secondary-container": "#8c00e5",
        "on-surface-variant": "#acaab1",
        "tertiary-fixed-dim": "#ff769e",
        "surface-container-high": "#1f1f26",
        "surface-bright": "#2c2b33",
        "surface-dim": "#0e0e13",
        "on-primary-fixed": "#003f43",
        "secondary-fixed": "#e7c5ff",
        "primary-fixed-dim": "#00deec",
        "inverse-surface": "#fcf8ff",
        "on-primary-fixed-variant": "#005e64",
        "secondary-dim": "#a533ff",
        "error-container": "#9f0519",
        "outline-variant": "#48474d",
        "secondary": "#c47fff",
        "void": "#0B0B10",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        scanlines:
          "repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(0, 238, 252, 0.05) 4px, rgba(0, 238, 252, 0.05) 4.5px)",
        "primary-gradient":
          "linear-gradient(135deg, #8ff5ff 0%, #00eefc 100%)",
        "mixed-gradient":
          "linear-gradient(135deg, #8ff5ff 0%, #c47fff 100%)",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.1" },
          "50%": { transform: "translateY(-20px)", opacity: "0.4" },
        },
      },
      animation: {
        "glitch-hover": "glitch 0.3s ease-in-out infinite",
        "scan-line": "scan 3s linear infinite",
        "reveal-text": "reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "float-particle": "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;