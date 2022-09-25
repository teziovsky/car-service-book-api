import cx from "classnames";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
};

const Heading = ({ level = 6, bold = false, className, children, ...props }: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cx("heading", className, {
        "heading-bold": bold,
        "heading-logo": level === 1,
        "heading-h2": level === 2,
        "heading-h3": level === 3,
        "heading-h4": level === 4,
        "heading-h5": level === 5,
        "heading-h6": level === 6,
      })}
      {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
