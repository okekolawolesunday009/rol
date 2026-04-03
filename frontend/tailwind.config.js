/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#ffffff",
        "surface": "#f8fafc",
        "surface-variant": "#f1f5f9",
        "on-surface": "#ffffff",
        "on-surface-variant": "#64748b",
        "primary": "#3b82f6",
        "primary-container": "#dbeafe",
        "on-primary": "#ffffff",
        "secondary": "#64748b",
        "secondary-container": "#f1f5f9",
        "tertiary": "#3b82f6",
        "tertiary-container": "#fef3c7",
        "error": "#ef4444",
        "error-container": "#fef2f2",
        "outline": "#e2e8f0",
        "outline-variant": "#cbd5e1",
        "inverse-surface": "#1e293b",
        "inverse-on-surface": "#f8fafc",
        "surface-tint": "#3b82f6",
      },
      fontFamily: {
        "headline": ["Newsreader", "serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem",
      },
    },
  },
  plugins: [],
}
