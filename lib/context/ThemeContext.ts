import { createContext, useContext } from "react";
import "../assets/main.css";

type ThemeContextType = {
  setTheme: (theme: string) => void;
  theme: string;
};

const defaultThemeContext: ThemeContextType = {
  setTheme: () => null,
  theme: "dark",
};

export const ThemeContext = createContext(defaultThemeContext);
ThemeContext.displayName = "ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must bu used within a ThemeProvider");
  }
  return context;
};
