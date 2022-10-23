/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0E1111",
          secondary: "#ff7400",
          accent: "#4cbb17",
          neutral: "#292933",
          white: "#E6EFF4",
          info: "#2454E5",
          success: "#159D5E",
          warning: "#F6C56A",
          error: "#E82C5E",
        },
      },
    ],
    darkTheme: "dark",
  },
};
