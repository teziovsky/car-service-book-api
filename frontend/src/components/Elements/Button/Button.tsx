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
        "pointer relative flex items-center rounded-lg gap-1 border border-solid border-transparent break-all transition-colors font-bold font-base disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-400",
        {
          "enabled:bg-sky-900 enabled:text-sky-50 enabled:hover:bg-sky-700 enabled:active:bg-sky-600":
            color === "accent" && status === "primary",
          "enabled:bg-green-900 enabled:text-green-50 enabled:hover:bg-green-700 enabled:active:bg-green-600":
            color === "success" && status === "primary",
          "enabled:bg-cyan-900 enabled:text-cyan-50 enabled:hover:bg-cyan-700 enabled:active:bg-cyan-600":
            color === "info" && status === "primary",
          "enabled:bg-yellow-600 enabled:text-yellow-50 enabled:hover:bg-yellow-700 enabled:active:bg-yellow-600":
            color === "warning" && status === "primary",
          "enabled:bg-red-900 enabled:text-red-50 enabled:hover:bg-red-700 enabled:active:bg-red-600":
            color === "error" && status === "primary",

          "enabled:bg-slate-900 enabled:text-sky-50 enabled:border-sky-300 enabled:hover:bg-sky-900 enabled:active:bg-sky-800":
            color === "accent" && status === "secondary",
          "enabled:bg-slate-900 enabled:text-green-50 enabled:border-green-300 enabled:hover:bg-green-900 enabled:active:bg-green-800":
            color === "success" && status === "secondary",
          "enabled:bg-slate-900 enabled:text-cyan-50 enabled:border-cyan-300 enabled:hover:bg-cyan-900 enabled:active:bg-cyan-800":
            color === "info" && status === "secondary",
          "enabled:bg-slate-900 enabled:text-yellow-50 enabled:border-yellow-300 enabled:hover:bg-yellow-900 enabled:active:bg-yellow-800":
            color === "warning" && status === "secondary",
          "enabled:bg-slate-900 enabled:text-red-50 enabled:border-red-300 enabled:hover:bg-red-900 enabled:active:bg-red-800":
            color === "error" && status === "secondary",

          "enabled:bg-transparent enabled:text-sky-200 enabled:hover:bg-sky-700/20 enabled:hover:border-sky-500 enabled:active:bg-sky-900":
            color === "accent" && status === "tertiary",
          "enabled:bg-transparent enabled:text-green-200 enabled:hover:bg-green-700/20 enabled:hover:border-green-500 enabled:active:bg-green-900":
            color === "success" && status === "tertiary",
          "enabled:bg-transparent enabled:text-cyan-200 enabled:hover:bg-cyan-700/20 enabled:hover:border-cyan-500 enabled:active:bg-cyan-900":
            color === "info" && status === "tertiary",
          "enabled:bg-transparent enabled:text-yellow-200 enabled:hover:bg-yellow-700/20 enabled:hover:border-yellow-500 enabled:active:bg-yellow-900":
            color === "warning" && status === "tertiary",
          "enabled:bg-transparent enabled:text-red-200 enabled:hover:bg-red-700/20 enabled:hover:border-red-500 enabled:active:bg-red-900":
            color === "error" && status === "tertiary",

          "p-[4px_12px_2px]": children && size === "small",
          "p-[6px_18px_3px]": children && size === "default",
          "p-[8px_24px_4px]": children && size === "large",
          "p-[5px]": !children && size === "small",
          "p-[7px]": !children && size === "default",
          "p-[9px]": !children && size === "large",
          "text-sm": size === "small",
          "text-base": size === "default",
          "text-md": size === "large",
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
