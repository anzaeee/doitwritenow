/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#001122", // Adding primary color
        secondary: "#333333",
      },
    },
  },
  plugins: [],
};
