"use client";

import * as React from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext =
  React.createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  attribute = "class",
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React.useState<Theme>("light");

  // Initialize theme
  React.useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (defaultTheme !== "system") {
      setTheme(defaultTheme);
    } else if (enableSystem) {
      setTheme("system");
    }
  }, [defaultTheme, enableSystem]);

  // Update localStorage and attribute when theme changes
  React.useEffect(() => {
    const root = window.document.documentElement;

    if (disableTransitionOnChange) {
      root.classList.add("disable-transitions");
      window.setTimeout(() => {
        root.classList.remove("disable-transitions");
      }, 0);
    }

    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setResolvedTheme(systemTheme);

      if (attribute === "class") {
        root.classList.remove("light", "dark");
        root.classList.add(systemTheme);
      } else {
        root.setAttribute(attribute, systemTheme);
      }
    } else {
      setResolvedTheme(theme);

      if (attribute === "class") {
        root.classList.remove("light", "dark");
        root.classList.add(theme);
      } else {
        root.setAttribute(attribute, theme);
      }
    }

    localStorage.setItem("theme", theme);
  }, [theme, attribute, enableSystem, disableTransitionOnChange]);

  // Listen for system theme changes
  React.useEffect(() => {
    if (!enableSystem) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        setResolvedTheme(systemTheme);

        const root = window.document.documentElement;
        if (attribute === "class") {
          root.classList.remove("light", "dark");
          root.classList.add(systemTheme);
        } else {
          root.setAttribute(attribute, systemTheme);
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, attribute, enableSystem]);

  const value = React.useMemo(
    () => ({
      theme,
      setTheme: (newTheme: Theme) => {
        setTheme(newTheme);
      },
    }),
    [theme]
  );

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

// Add CSS for transition disabling
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    .disable-transitions * {
      transition: none !important;
    }
  `;
  document.head.appendChild(style);
}
