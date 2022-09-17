import cx from "classnames";
import Icon from "components/Elements/Icon/Icon";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  status?: "primary" | "secondary" | "tertiary";
  color?: "accent" | "success" | "info" | "warning" | "error";
  size?: "small" | "default" | "large";
  icon?: string;
  iconRight?: boolean;
};

const Button = ({
  status = "primary",
  color = "accent",
  size = "default",
  icon,
  iconRight = false,
  className,
  children,
  ...props
}: Props) => {
  return (
    <button
      className={cx(
        "btn",
        {
          "btn-primary-accent": color === "accent" && status === "primary",
          "btn-primary-success": color === "success" && status === "primary",
          "btn-primary-info": color === "info" && status === "primary",
          "btn-primary-warning": color === "warning" && status === "primary",
          "btn-primary-error": color === "error" && status === "primary",

          "btn-secondary-accent": color === "accent" && status === "secondary",
          "btn-secondary-success": color === "success" && status === "secondary",
          "btn-secondary-info": color === "info" && status === "secondary",
          "btn-secondary-warning": color === "warning" && status === "secondary",
          "btn-secondary-error": color === "error" && status === "secondary",

          "btn-tertiary-accent": color === "accent" && status === "tertiary",
          "btn-tertiary-success": color === "success" && status === "tertiary",
          "btn-tertiary-info": color === "info" && status === "tertiary",
          "btn-tertiary-warning": color === "warning" && status === "tertiary",
          "btn-tertiary-error": color === "error" && status === "tertiary",

          "btn-sm": children && size === "small",
          "btn-lg": children && size === "large",
          "btn-icon-sm": !children && size === "small",
          "btn-icon": !children && size === "default",
          "btn-icon-lg": !children && size === "large",
        },
        className
      )}
      {...props}>
      {icon && !iconRight && <Icon icon={icon} />}
      {children}
      {icon && iconRight && <Icon icon={icon} />}
    </button>
  );
};

export default Button;
