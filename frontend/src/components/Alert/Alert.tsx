import cx from "classnames";
import React, { FC, ReactNode } from "react";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import styles from "./Alert.module.scss";

type Props = {
  color?: "success" | "info" | "warning" | "error";
  title?: string;
  icon?: string;
  children?: string | ReactNode;
  [x: string]: any;
};

const Alert: FC<Props> = (props) => {
  return (
    <div
      className={cx(styles.alert, {
        [styles.alertSuccess]: props.color === "success",
        [styles.alertInfo]: props.color === "info",
        [styles.alertWarning]: props.color === "warning",
        [styles.alertError]: props.color === "error",
      })}>
      {props.icon && <Icon className={styles.alertIcon} icon={props.icon} />}
      <div className={styles.alertContent}>
        {props.title && <span className={styles.alertTitle}>{props.title}</span>}
        <span className={styles.alertDescription}>{props.children}</span>
      </div>
      <Button color={props.color} className={styles.btnClose} status="tertiary" size="default" icon="HiX" />
    </div>
  );
};

Alert.defaultProps = {
  color: "success",
};

export default Alert;
