import React, { useEffect, useState } from "react";
function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="bg-gray-400 dark:bg-gray-700 px-3 py-1 rounded"
    >
      {dark ? "Light" : "Dark"} Mode
    </button>
  );
}
export default ThemeToggle;
