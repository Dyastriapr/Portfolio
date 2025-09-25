/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kronaOne: ["Krona One", "sans-serif"],
      },
      textStrokeWidth: {
        DEFAULT: "1px",
        2: "2px",
      },
      textStrokeColor: {
        black: "#000",
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
