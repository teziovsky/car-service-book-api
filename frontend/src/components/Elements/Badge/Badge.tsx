import cx from "classnames";
import Icon from "components/Elements/Icon/Icon";
import React from "react";
import * as HeroIcons from "react-icons/hi";
import { DefaultProps } from "src/main";

const icons = { ...HeroIcons };

export type Props = DefaultProps & {
  color?: "accent" | "success" | "info" | "warning" | "error";
  size?: "small" | "default" | "large";
  icon?: keyof typeof icons;
  iconRight?: boolean;
};

const Badge = ({
  color = "accent",
  size = "default",
  icon,
  iconRight = false,
  className,
  children,
  ...props
}: Props) => {
  return (
    <span
      className={cx(
        "badge",
        {
          "badge-accent": color === "accent",
          "badge-success": color === "success",
          "badge-info": color === "info",
          "badge-warning": color === "warning",
          "badge-error": color === "error",

          "badge-sm": children && size === "small",
          "badge-lg": children && size === "large",
          "badge-icon-sm": !children && size === "small",
          "badge-icon": !children && size === "default",
          "badge-icon-lg": !children && size === "large",
        },
        className
      )}
      {...props}>
      {icon && !iconRight && <Icon icon={icon} />}
      {children}
      {icon && iconRight && <Icon icon={icon} />}
    </span>
  );
};

export default Badge;
