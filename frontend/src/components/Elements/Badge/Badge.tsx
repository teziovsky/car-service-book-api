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
        "flex relative items-center rounded-lg gap-1 break-all transition-colors font-bold font-base",
        {
          "bg-blue-300 text-blue-900": color === "accent",
          "bg-green-300 text-green-900": color === "success",
          "bg-cyan-300 text-cyan-900": color === "info",
          "bg-yellow-300 text-yellow-900": color === "warning",
          "bg-red-300 text-red-900": color === "error",
          "p-[4px_12px_2px]": children && size === "small",
          "p-[6px_18px_3px]": children && size === "default",
          "p-[8px_24px_4px]": children && size === "large",
          "p-[5px]": !children && size === "small",
          "p-[7px]": !children && size === "default",
          "p-[9px]": !children && size === "large",
          "text-sm": size === "small",
          "text-base": size === "default",
          "text-lg": size === "large",
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
