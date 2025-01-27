import { useState } from "react";

export default function App() {
  const [color, setColor] = useState<"red" | "blue">("blue");

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800">
      <button
        className="border rounded px-1"
        onClick={() => setColor((state) => (state === "blue" ? "red" : "blue"))}
      >
        toggle color
      </button>
      <h1>color: bg-{color}-400</h1>
      <div className={`w-full h-40 bg-${color}-400`}>content here</div>
    </div>
  );
}
