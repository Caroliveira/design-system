import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { ColorType } from "../../utils/types";
import styles from "./Switch.module.css";

export type SwitchProps = {
  color: ColorType;
  offIcon?: string;
  onIcon?: string;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * The `Switch` component represents a physical switch that allows users to toggle between two states, such as on/off or enabled/disabled. It's commonly used for settings that affect the current state of an application or page. Besides the custom props you will see here, it also accepts any other input default props.
 */
export const Switch = ({
  className = "",
  color = "primary",
  style,
  onIcon,
  offIcon,
  checked,
  defaultChecked,
  onChange,
  ...props
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked);

  const onIconUrl = onIcon ? `url(${onIcon})` : undefined;
  const offIconUrl = offIcon ? `url(${offIcon})` : undefined;
  const switchClass = [
    styles.switch,
    styles[`switch--${color}`],
    className,
  ].join(" ");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(evt.target.checked);
    onChange?.(evt);
  };

  return (
    <label className={switchClass} style={style}>
      <input
        {...props}
        role="switch"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={styles.switch__input}
      />
      <div
        className={styles.switch__indicator}
        style={{ maskImage: isChecked ? onIconUrl : offIconUrl }}
      />
      <span className={styles.switch__slider} />
    </label>
  );
};
