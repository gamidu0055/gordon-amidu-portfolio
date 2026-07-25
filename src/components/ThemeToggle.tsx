"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
      hover:scale-110
      transition
      "
      aria-label="Toggle dark mode"
    >

      {theme === "dark" ? (
        <FiSun />
      ) : (
        <FiMoon />
      )}

    </button>
  );
}