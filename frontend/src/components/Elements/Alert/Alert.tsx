import cx from "classnames";
import Icon from "components/Elements/Icon/Icon";
import React from "react";
import * as HeroIcons from "react-icons/hi";
import { DefaultProps } from "src/main";

const icons = { ...HeroIcons };

export type Props = DefaultProps & {
  color?: "success" | "info" | "warning" | "error";
  description?: string;
  icon?: keyof typeof icons;
  notification?: boolean;
};

const Alert = ({ color = "success", description, icon, notification, className, children, ...props }: Props) => {
  return (
    <div
      className={cx(
        "relative w-full border-solid border gap-2 flex items-center rounded-lg px-4 py-3",
        {
          "max-w-[400px]": notification,
          "bg-green-900 border-green-600 text-green-50": color === "success",
          "bg-cyan-900 border-cyan-600 text-cyan-50": color === "info",
          "bg-yellow-600 border-yellow-600 text-yellow-50": color === "warning",
          "bg-red-900 border-red-600 text-red-50": color === "error",
        },
        className
      )}
      {...props}>
      {icon && (
        <Icon
          className={cx("self-start w-[22px] h-[22px] min-w-[22px] min-h-[22px]", {
            "text-green-200": color === "success",
            "text-cyan-200": color === "info",
            "text-yellow-200": color === "warning",
            "text-red-200": color === "error",
          })}
          icon={icon}
        />
      )}
      <div className="flex flex-col gap-3 pr-8">
        {children && <span className="text-base font-bold break-all font-heading">{children}</span>}
        {description && <span className="text-sm break-all">{description}</span>}
      </div>
    </div>
  );
};

export default Alert;
