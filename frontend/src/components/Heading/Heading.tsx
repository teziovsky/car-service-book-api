import React, { ReactNode } from "react";

import styles from "./Heading.module.scss";

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: string | ReactNode | ReactNode[];
  [x: string]: any;
};

const Heading = ({ level, children, ...props }: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${styles[Tag]}`} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
