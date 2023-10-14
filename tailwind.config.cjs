const starlightPlugin = require("@astrojs/starlight-tailwind");

const accent = {
  200: "#9BCDE0",
  600: "#0876A0",
  900: "#003B3B",
  950: "#002a2b",
};
const gray = {
  100: "#f5f6f9",
  200: "#ebeef3",
  300: "#bfc2c9",
  400: "#878b98",
  500: "#545864",
  700: "#343843",
  800: "#232631",
  900: "#16181d",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent,
        gray,
      },
    },
  },
  plugins: [starlightPlugin()],
};
