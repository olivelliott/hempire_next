/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-oswald)']
      }
    },
  },
  plugins: [
    require("daisyui"),

  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#131313",
          secondary: "#ff7f01",
          accent: "#4cbb17",
          neutral: "#292933",
          tertiary: "#E6EFF4",
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
