const safelistPlugin = require("./safelist-plugin.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  plugins: [safelistPlugin],
};
