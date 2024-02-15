import { useState, useEffect, ReactNode, createContext } from "react";
import { defaultColors } from "../utils/constants";

type ThemeContextType = {
  setTheme: (theme: string) => void;
  theme: string;
};

const defaultThemeContext: ThemeContextType = {
  setTheme: () => null,
  theme: "dark",
};

export const ThemeContext = createContext(defaultThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
  colors?: typeof defaultColors;
};

export const ThemeProvider = ({ children, colors }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("dark");

  const setThemeColor = (name: string, color: string, isVar = true) => {
    const docStyle = document.documentElement.style;
    docStyle.setProperty(name, isVar ? `var(${color})` : color);
  };

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = localStorage.getItem("design_system_theme");
    setTheme(savedTheme ? savedTheme : systemTheme.media);
  }, []);

  useEffect(() => {
    const themeColors = { ...defaultColors, ...colors };
    setThemeColor("--light-shades-color", themeColors.lightShades, false);
    setThemeColor("--light-accent-color", themeColors.lightAccent, false);
    setThemeColor("--brand-color", themeColors.brandColor, false);
    setThemeColor("--dark-accent-color", themeColors.darkAccent, false);
    setThemeColor("--dark-shades-color", themeColors.darkShades, false);
    setThemeColor("--success-color", themeColors.success, false);
    setThemeColor("--warning-color", themeColors.warning, false);
    setThemeColor("--danger-color", themeColors.danger, false);
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
