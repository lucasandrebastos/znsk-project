"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="btn btn-outline btn-icon rounded-md"
        aria-label="Toggle theme"
      >
        <Sun
          className={`h-[1.2rem] w-[1.2rem] ${
            theme !== "dark" ? "block" : "hidden"
          }`}
        />
        <Moon
          className={`h-[1.2rem] w-[1.2rem] ${
            theme === "dark" ? "block" : "hidden"
          }`}
        />
        <span className="sr-only">Toggle theme</span>
      </button>
      <div className="dropdown-menu">
        <button
          onClick={() => setTheme("light")}
          className={`dropdown-item ${theme === "light" ? "active" : ""}`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`dropdown-item ${theme === "dark" ? "active" : ""}`}
        >
          Dark
        </button>
        <button
          onClick={() => setTheme("system")}
          className={`dropdown-item ${theme === "system" ? "active" : ""}`}
        >
          System
        </button>
      </div>
    </div>
  );
}
