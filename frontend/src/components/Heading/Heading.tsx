import cx from "classnames";
import React, { FC } from "react";

import { DefaultProps } from "../../main";
import styles from "./Heading.module.scss";

type Props = DefaultProps & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
};

const Heading: FC<Props> = ({ level, bold, children, className: passedClasses, ...props }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const Class = bold ? `${Tag}-bold` : `${Tag}`;

  return (
    <Tag className={cx(styles[Class], passedClasses)} {...props}>
      {children}
    </Tag>
  );
};

Heading.defaultProps = {
  bold: false,
  level: 6,
};

export default Heading;
