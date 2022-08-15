import cx from "classnames";
import React, { FC, ReactNode } from "react";

import Icon from "../Icon/Icon";
import styles from "./Button.module.scss";

type Props = {
  status?: "primary" | "secondary" | "tertiary";
  color?: "accent" | "success" | "info" | "warning" | "error";
  size?: "small" | "default" | "large";
  icon?: string;
  iconRight?: boolean;
  children?: string | ReactNode;
  className?: any;
  [x: string]: any;
};

const Button: FC<Props> = ({ className: passedClasses, ...props }) => {
  return (
    <button
      className={cx(styles.btn, passedClasses, {
        [styles.btnPrimary]: props.status === "primary",
        [styles.btnSecondary]: props.status === "secondary",
        [styles.btnTertiary]: props.status === "tertiary",
        [styles.btnSuccess]: props.color === "success",
        [styles.btnInfo]: props.color === "info",
        [styles.btnWarning]: props.color === "warning",
        [styles.btnError]: props.color === "error",
        [styles.btnSmall]: props.size === "small",
        [styles.btnLarge]: props.size === "large",
        [styles.btnOnlyIcon]: !props.children,
      })}
      {...props}>
      <>
        {props.icon && !props.iconRight && <Icon className={styles.btnIcon} icon={props.icon} />}
        {props.children}
        {props.icon && props.iconRight && <Icon className={styles.btnIcon} icon={props.icon} />}
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
