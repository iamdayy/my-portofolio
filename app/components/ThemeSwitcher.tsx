"use client";

import { Moon, Palette, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const themes = [
  { name: "light", bg: "bg-gray-50", text: "text-gray-900" },
  { name: "dark", bg: "bg-gray-900", text: "text-gray-50" },
  { name: "blue", bg: "bg-blue-900", text: "text-blue-50" },
  { name: "green", bg: "bg-green-900", text: "text-green-50" },
];

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      document.body.classList.remove("dark");
    }
    document.body.className = `${themes.find((t) => t.name === theme)?.bg} ${
      themes.find((t) => t.name === theme)?.text
    }`;
  }, [theme]);

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
      </button>
      <button
        onClick={() =>
          setTheme(
            themes[
              (themes.findIndex((t) => t.name === theme) + 1) % themes.length
            ].name
          )
        }
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ml-2"
      >
        <Palette size={24} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
