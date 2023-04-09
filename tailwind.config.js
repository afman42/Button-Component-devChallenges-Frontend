/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ubuntu-mono": ["Ubuntu Mono", "monospace"],
        "noto-sans-jp": ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
