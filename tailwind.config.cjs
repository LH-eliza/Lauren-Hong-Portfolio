/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        chewie: ["ChewieDEMO", "sans-serif"],
        bruskest: ["BruskestDEMO", "sans-serif"],
        libre: ['Libre Franklin', 'serif'],
      },
    },
  },
  plugins: [],
};
