import cx from "classnames";
import Icon from "components/Elements/Icon/Icon";
import React, { FC } from "react";
import { DefaultProps } from "src/main";

import styles from "./Button.module.scss";

type Props = DefaultProps & {
  status?: "primary" | "secondary" | "tertiary";
  color?: "accent" | "success" | "info" | "warning" | "error";
  size?: "small" | "default" | "large";
  icon?: string;
  iconRight?: boolean;
};

const Button: FC<Props> = ({ status, color, size, icon, iconRight, children, className: passedClasses, ...props }) => {
  return (
    <button
      className={cx(styles.btn, passedClasses, {
        [styles.btnPrimary]: status === "primary",
        [styles.btnSecondary]: status === "secondary",
        [styles.btnTertiary]: status === "tertiary",
        [styles.btnSuccess]: color === "success",
        [styles.btnInfo]: color === "info",
        [styles.btnWarning]: color === "warning",
        [styles.btnError]: color === "error",
        [styles.btnSmall]: size === "small",
        [styles.btnLarge]: size === "large",
        [styles.btnOnlyIcon]: !children,
      })}
      {...props}>
      <>
        {icon && !iconRight && <Icon className={styles.btnIcon} icon={icon} />}
        {children}
        {icon && iconRight && <Icon className={styles.btnIcon} icon={icon} />}
      </>
    </button>
  );
};

Button.defaultProps = {
  status: "primary",
  color: "accent",
  size: "default",
  iconRight: false,
};

export default Button;
