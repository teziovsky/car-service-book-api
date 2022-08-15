import cx from "classnames";
import React, { FC } from "react";

import { DefaultProps } from "../../main";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import styles from "./Alert.module.scss";

type Props = DefaultProps & {
  color?: "success" | "info" | "warning" | "error";
  title?: string;
  icon?: string;
  notification?: boolean;
};

const Alert: FC<Props> = ({ color, title, icon, notification, children, className: passedClasses, ...props }) => {
  return (
    <div
      className={cx(styles.alert, passedClasses, {
        [styles.alertSuccess]: color === "success",
        [styles.alertInfo]: color === "info",
        [styles.alertWarning]: color === "warning",
        [styles.alertError]: color === "error",
        [styles.alertNotification]: notification,
      })}
      {...props}>
      {icon && <Icon className={styles.alertIcon} icon={icon} />}
      <div className={styles.alertContent}>
        {title && <span className={styles.alertTitle}>{title}</span>}
        <span className={styles.alertDescription}>{children}</span>
      </div>
      <Button color={color} className={styles.btnClose} status="tertiary" size="default" icon="HiX" />
    </div>
  );
};

Alert.defaultProps = {
  color: "success",
};

export default Alert;
