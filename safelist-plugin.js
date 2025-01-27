import plugin from "tailwindcss/plugin";

export default plugin(
  // plugin
  () => null,
  // config
  {
    darkMode: "class",
    safelist: ["bg-red-400", "bg-blue-400"],
  }
);
