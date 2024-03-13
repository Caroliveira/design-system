import { InputHTMLAttributes } from "react";
import { ColorType } from "../../utils/types";
import styles from "./Switch.module.css";

export type SwitchProps = {
  color: ColorType;
  // offIcon?: string;
  // onIcon?: string;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * The `Switch` component represents a physical switch that allows users to toggle between two states, such as on/off or enabled/disabled. It's commonly used for settings that affect the current state of an application or page. Besides the custom props you will see here, it also accepts any other input default props.
 */
export const Switch = ({
  className = "",
  color = "primary",
  style,
  ...props
}: SwitchProps) => {
  const switchClass = [
    styles.switch,
    styles[`switch--${color}`],
    className,
  ].join(" ");

  return (
    <label className={switchClass} style={style}>
      <input
        {...props}
        role="switch"
        type="checkbox"
        className={styles.switch__input}
      />
      <span className={styles.switch__slider} />
    </label>
  );
};
