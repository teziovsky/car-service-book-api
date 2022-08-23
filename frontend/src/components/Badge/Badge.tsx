import cx from "classnames";
import React, { FC } from "react";

import { DefaultProps } from "../../main";
import Icon from "../Icon/Icon";
import styles from "./Badge.module.scss";

type Props = DefaultProps & {
  color?: "accent" | "success" | "info" | "warning" | "error";
  size?: "small" | "default" | "large";
  icon?: string;
  iconRight?: boolean;
};

const Badge: FC<Props> = ({ color, size, icon, iconRight, children, className: passedClasses, ...props }) => {
  return (
    <span
      className={cx(styles.badge, passedClasses, {
        [styles.badgeSuccess]: color === "success",
        [styles.badgeInfo]: color === "info",
        [styles.badgeWarning]: color === "warning",
        [styles.badgeError]: color === "error",
        [styles.badgeSmall]: size === "small",
        [styles.badgeLarge]: size === "large",
        [styles.badgeOnlyIcon]: !children,
      })}
      {...props}>
      <>
        {icon && !iconRight && <Icon className={styles.badgeIcon} icon={icon} />}
        {children}
        {icon && iconRight && <Icon className={styles.badgeIcon} icon={icon} />}
      </>
    </span>
  );
};

Badge.defaultProps = {
  color: "accent",
  size: "default",
  iconRight: false,
};

export default Badge;
