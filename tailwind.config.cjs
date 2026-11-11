/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#DE4343',
      },
      fontFamily: {
        castoro: ['Castoro', 'Georgia', 'serif'],
        vietnam: ['"Be Vietnam Pro"', 'Helvetica', 'Arial', 'sans-serif'],
        chewie: ['ChewieDEMO', 'sans-serif'],
        bruskest: ['BruskestDEMO', 'sans-serif'],
        libre: ['Libre Franklin', 'serif'],
      },
    },
  },
  plugins: [],
};
