/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom": "linear-gradient(45deg,#09203F , #537895)",
      },
    },
  },
  plugins: [require("daisyui")],
};

/*  rgba(130, 89, 219, 0.2), rgba(44, 192, 226, 0.2), rgba(182, 103, 181, 0.2)), linear-gradient(135deg, rgb(39, 20, 149), rgb(65, 82, 185), rgb(91, 144, 220) */
