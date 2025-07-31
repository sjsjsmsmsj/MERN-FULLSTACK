/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // 👈 quét file flowbite để Tailwind xử lý

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // 👈 dùng plugin chính thức của flowbite
  ],
}
