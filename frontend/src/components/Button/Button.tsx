import cx from "classnames";
import React, { FC, ReactNode } from "react";

import Icon from "../Icon/Icon";
import styles from "./Button.module.scss";

type Props = {
  status: "primary" | "secondary" | "tertiary";
  size?: "small" | "large";
  icon?: string;
  iconRight?: boolean;
  children?: string | ReactNode;
  [x: string]: any;
};

const Button: FC<Props> = ({ status, size, icon, iconRight, children }) => {
  return (
    <button
      className={cx(styles.btn, {
        [styles.btnPrimary]: status === "primary",
        [styles.btnSecondary]: status === "secondary",
        [styles.btnTertiary]: status === "tertiary",
        [styles.btnSmall]: size === "small",
        [styles.btnLarge]: size === "large",
      })}>
      <>
        {icon && !iconRight && <Icon icon="HiPlus" />}
        {children}
        {icon && iconRight && <Icon icon={icon} />}
      </>
    </button>
  );
};

export default Button;
