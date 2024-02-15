import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./ThemeToggle.module.css";

type ThemeToggleProps = {
  enableDarkThemeLabel?: string;
  enableLightThemeLabel?: string;
};

export const ThemeToggle = ({
  enableDarkThemeLabel = "Enable dark theme",
  enableLightThemeLabel = "Enable light theme",
}: ThemeToggleProps) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <label className={styles.toggle}>
      <input
        role="switch"
        type="checkbox"
        checked={isDarkMode}
        onChange={() => setTheme(isDarkMode ? "light" : "dark")}
        aria-label={isDarkMode ? enableDarkThemeLabel : enableLightThemeLabel}
      />
      <span className={styles.toggle__slider} />
    </label>
  );
};
