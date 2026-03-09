import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "../styles/themeToggle.css";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      className="themeToggle"
      onClick={() => setDark((v) => !v)}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {dark ? <FiSun /> : <FiMoon />}
    </button>
  );
}