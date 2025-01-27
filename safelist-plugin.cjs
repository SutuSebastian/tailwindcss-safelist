const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  // plugin
  () => null,
  // config
  {
    darkMode: "class",
    safelist: ["bg-red-400", "bg-blue-400"],
  }
);
