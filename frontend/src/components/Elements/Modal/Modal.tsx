import cx from "classnames";
import Button from "components/Elements/Button/Button";
import Heading from "components/Elements/Heading/Heading";
import React, { FC, ReactNode } from "react";
import { DefaultProps } from "src/main";

import styles from "./Modal.module.scss";

type Props = DefaultProps & {
  title?: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  wide?: boolean;
  showClose?: boolean;
  footer?: ReactNode | ReactNode[];
};

const Modal: FC<Props> = ({
  title,
  titleLevel,
  wide,
  showClose,
  footer,
  children,
  className: passedClasses,
  ...props
}) => {
  return (
    <>
      <div className={styles.modalBackdrop}></div>
      <div
        className={cx(styles.modal, passedClasses, {
          [styles.wide]: wide,
        })}
        {...props}>
        {showClose && <Button className={styles.modalClose} status="tertiary" size="default" icon="HiX" />}
        {title && (
          <div className={cx(styles.modalHeader)}>
            <Heading className={cx(styles.modalTitle)} level={titleLevel}>
              {title}
            </Heading>
          </div>
        )}
        <div className={cx(styles.modalBody)}>{children}</div>
        {footer}
      </div>
    </>
  );
};

Modal.defaultProps = {
  titleLevel: 5,
  wide: false,
  showClose: false,
};

export default Modal;
