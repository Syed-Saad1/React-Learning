import React from "react";
import { useTheme } from "../Context/theme.jsx";

export default function ThemeBtn() {
  const { themeMode, toggleTheme } = useTheme(); // ✅ darkTheme / lightTheme remove

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={themeMode === "dark"}
        onChange={toggleTheme} // ✅ toggleTheme use
      />
      <div
        className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600
                      peer-checked:after:translate-x-full after:absolute after:top-2px after:left-2px
                      after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all"
      ></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
        Toggle Theme
      </span>
    </label>
  );
}
