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
      className={cx(
        "heading",
        {
          "heading-bold": bold,
          "heading-logo": level === 1,
          "heading-2": level === 2,
          "heading-3": level === 3,
          "heading-4": level === 4,
          "heading-5": level === 5,
          "heading-6": level === 6,
        },
        className
      )}
      {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
