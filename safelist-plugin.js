import plugin from "tailwindcss/plugin";

export default plugin(
  // plugin
  () => null,
  // config
  {
    prefix: "tw-",
    darkMode: "class",
    safelist: ["tw-bg-red-400", "tw-bg-blue-400"],
  }
);
