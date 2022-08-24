import cx from "classnames";
import Heading from "components/Elements/Heading/Heading";
import React, { FC, ReactNode } from "react";
import { DefaultProps } from "src/main";

import styles from "./Card.module.scss";

type Props = DefaultProps & {
  title?: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  avatar?: string;
  footer?: ReactNode | ReactNode[];
};

const Card: FC<Props> = ({ title, titleLevel, avatar, footer, children, className: passedClasses, ...props }) => {
  return (
    <div className={cx(styles.card, passedClasses, {})} {...props}>
      {(title || avatar) && (
        <div className={cx(styles.cardHeader)}>
          {avatar && <img className={cx(styles.cardAvatar)} src={avatar} alt="" />}
          {title && (
            <Heading className={cx(styles.cardTitle)} level={titleLevel}>
              {title}
            </Heading>
          )}
        </div>
      )}
      <div className={cx(styles.cardBody)}>{children}</div>
      {footer && <div className={cx(styles.cardFooter)}>{footer}</div>}
    </div>
  );
};

Card.defaultProps = {};

export default Card;
