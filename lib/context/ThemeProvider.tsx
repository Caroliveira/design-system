import { useState, useEffect, ReactNode } from "react";
import { defaultColors } from "../utils/constants";
import { ThemeContext } from "./ThemeContext";
import "../assets/main.css";

export type ColorsType = Partial<typeof defaultColors>

export type ThemeProviderProps = {
  children: ReactNode;
  colors?: ColorsType;
  fixedTheme?: "dark" | "light";
};

export const ThemeProvider = ({
  children,
  colors = {},
  fixedTheme,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (fixedTheme) setTheme(fixedTheme);
    else {
      const darkSystem = window.matchMedia("(prefers-color-scheme: dark)");
      const isSystemDark = darkSystem.matches;
      const savedTheme = localStorage.getItem("design_system_theme");
      setTheme(savedTheme ? savedTheme : isSystemDark ? "dark" : "light");
    }
  }, [fixedTheme]);

  useEffect(() => {
    const docStyle = document.documentElement.style;
    const themeColors = { ...defaultColors, ...colors };
    docStyle.setProperty("--light-shades-color", themeColors.lightShades);
    docStyle.setProperty("--light-accent-color", themeColors.lightAccent);
    docStyle.setProperty("--brand-color", themeColors.brandColor);
    docStyle.setProperty("--brand-accent-color", themeColors.brandAccent);
    docStyle.setProperty("--dark-accent-color", themeColors.darkAccent);
    docStyle.setProperty("--dark-shades-color", themeColors.darkShades);
    docStyle.setProperty("--success-color", themeColors.success);
    docStyle.setProperty("--warning-color", themeColors.warning);
    docStyle.setProperty("--danger-color", themeColors.danger);
  }, [colors]);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("design_system_theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
