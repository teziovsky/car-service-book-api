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
        "alert",
        {
          "alert-notification": notification,
          "alert-success": color === "success",
          "alert-info": color === "info",
          "alert-warning": color === "warning",
          "alert-error": color === "error",
        },
        className
      )}
      {...props}>
      {icon && (
        <Icon
          className={cx("alert-icon", {
            "alert-icon-success": color === "success",
            "alert-icon-info": color === "info",
            "alert-icon-warning": color === "warning",
            "alert-icon-error": color === "error",
          })}
          icon={icon}
        />
      )}
      <div className="alert-body">
        {children && <span className="alert-title">{children}</span>}
        {description && <span className="alert-description">{description}</span>}
      </div>
    </div>
  );
};

export default Alert;
