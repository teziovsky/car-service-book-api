import React, { FC, ReactNode } from "react";

import Icon from "../Icon/Icon";
import styles from "./Button.module.scss";

type Props = {
  secondary?: boolean;
  small?: boolean;
  large?: boolean;
  icon?: string;
  iconRight?: boolean;
  children?: string | ReactNode;
  [x: string]: any;
};

const Button: FC<Props> = ({ icon, iconRight, children }) => {
  return (
    <button className={`${styles.btn} ${styles.btnPrimary}`}>
      <>
        {icon && !iconRight && <Icon icon="HiPlus" />}
        {children}
        {icon && iconRight && <Icon icon={icon} />}
      </>
    </button>
  );
};

export default Button;
