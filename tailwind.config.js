/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "14px",
      base: "16px",
      md: "20px",
      lg: "24px",
      heading: "128px",
    },
    extend: {
      colors: {
        primary: "#191D29",
        secondary: "#9DFE00",
        accent: "#14D9E5",
      },
      fontFamily: {
        tttravels: ["TTTravels"],
        "tttravels-thin": ["TTTravels-thin"],
        "tttravels-light": ["TTTravels-light"],
        "tttravels-bold": ["TTTravels-bold"],
        "tttravels-semibold": ["TTTravels-semibold"],
        "tttravels-extrabold": ["TTTravels-extrabold"],
      },
    },
  },
  plugins: [],
}
