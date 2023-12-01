/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#00FF1A",
      },
      fontFamily: {
        'Manrope-Regular': "Manrope-Regular",
        'Manrope-bold': "Manrope-bold",
        "Manrope-extralight": "Manrope-ExtraLight",
        "Manrope-light": "Manrope-light",
        "Manrope-medium": "Manrope-medium",
        "Manrope-semiBold": "Manrope-semiBold",
        "Manrope-extraBold": "Manrope-extraBold",
      },
    },
  },
  plugins: [],
};
