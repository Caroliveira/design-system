import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export type ButtonProps = {
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * The `Button` component is used to trigger actions or navigate through the application. It supports multiple sizes, colors, and variants to fit different UI contexts. Besides the custom props you will see here, it also accepts any other button default props.
 */
export const Button = ({
  children,
  fullWidth,
  size = "medium",
  color = "primary",
  variant = "contained",
  className,
  type = "button",
  disabled,
  ...props
}: ButtonProps) => {
  const buttonClass = [
    styles.button,
    fullWidth ? styles[`button--fullWidth`] : "",
    styles[`button--${variant}`],
    styles[`button--${color}`],
    styles[`button--${size}`],
    className,
  ].join(" ");

  return (
    <button type={type} className={buttonClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
