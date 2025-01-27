import { useState } from "react";

export default function App() {
  const [color, setColor] = useState<"red" | "blue">("blue");

  return (
    <div className="tw-p-4 tw-bg-gray-100 tw-dark:bg-gray-800">
      <button
        className="tw-border tw-rounded tw-px-1"
        onClick={() => setColor((state) => (state === "blue" ? "red" : "blue"))}
      >
        toggle color
      </button>
      <h1>color: tw-bg-{color}-400</h1>
      <div className={`tw-w-full tw-h-40 tw-bg-${color}-400`}>content here</div>
    </div>
  );
}
