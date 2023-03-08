/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#30323D",
        "spanish-gray": "#9A9A9A",
        "secondary-background": "rgba(154, 154, 154, 0.1)",
        "medium-sea-green": "#37B76C",
        "pacific-blue": "#2BB8D6",
        "paradise-pink": "#EA526F",
      },
      boxShadow: {
        "download-file-shadow":
          "2px 1px 1px rgba(0, 0, 0, 0.01), 1px 1px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.09), 0px 0px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
        "avatar-shadow":
          "0px 0px 0px 1px rgba(24, 24, 27, 0.05), 0px 10px 15px -3px rgba(39, 39, 42, 0.05), 0px 4px 6px -4px rgba(39, 39, 42, 0.05)",
      },
    },
    fontFamily: {
      horndon: ["Horndon Becker"],
      urbanist: ["Urbanist", "sans-serif"],
    },
  },
  plugins: [],
};
