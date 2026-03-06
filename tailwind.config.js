/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: "#5D3A9B",
        silver: "#C0C0C0",
        crtGreen: "#33FF00",
        terminalBg: "#0A0F0D",
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', "monospace"],
        pixel: ['"Press Start 2P"', "monospace"],
      },
      boxShadow: {
        glow: "0 0 10px #33FF00",
      },
    },
  },
  plugins: [],
};
