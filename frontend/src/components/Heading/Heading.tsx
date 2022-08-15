import React, { ReactNode } from "react";

import styles from "./Heading.module.scss";

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
  children: string | ReactNode | ReactNode[];
  [x: string]: any;
};

const Heading = (props: Props) => {
  const Tag = `h${props.level}` as keyof JSX.IntrinsicElements;
  const Class = props.bold ? `${Tag}-bold` : `${Tag}`;

  return (
    <Tag className={`${styles[Class]}`} {...props}>
      {props.children}
    </Tag>
  );
};

Heading.defaultProps = {
  bold: false,
};

export default Heading;
