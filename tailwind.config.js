/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // Include Flowbite's JS files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),        // DaisyUI plugin
    require('flowbite/plugin') // Flowbite plugin
  ],
};
