/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505', // Deep cinematic black
        surface: '#0f0f11',    // Slightly lighter gray for cards/sections
        accent: '#ffffff',     // Crisp white for high-contrast typography
        muted: '#707075',      // Subdued gray for body copy and metadata
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean typography matching the video
      },
    },
  },
  plugins: [],
}
