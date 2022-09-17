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
        "text-sky-50",
        {
          "font-bold": bold,
          "font-logo": level === 1,
          "font-heading": level !== 1,
          "text-base": level === 6,
          "text-md": level === 5,
          "text-lg": level === 4,
          "text-xl": level === 3,
          "text-2xl": level === 2,
          "text-3xl": level === 1,
        },
        className
      )}
      {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
