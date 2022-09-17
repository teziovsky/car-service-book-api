import cx from "classnames";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  size?: "small" | "default" | "large";
  tag: "input" | "select" | "textarea";
};

const Input = ({ tag, size, children, className, ...props }: Props) => {
  const Tag = tag;
  return (
    <Tag
      className={cx(
        "input",
        {
          "input--small": size === "small",
          "input--large": size === "large",
        },
        className
      )}
      {...props}>
      {children}
    </Tag>
  );
};

export default Input;
