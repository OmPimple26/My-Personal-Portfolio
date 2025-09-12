/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#ec4899", // Tailwind pink-500
        primary: "#A855F7", // Tailwind purple-500
        // primary: "#8B5CF6", // Tailwind violet-500
        dark: "#0f0f0f",    // Deep black
      },
    },
  },
  plugins: [],
}