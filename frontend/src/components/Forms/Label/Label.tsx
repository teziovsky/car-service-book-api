import cx from "classnames";
import React from "react";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {};

const Label = ({ children, className, ...props }: Props) => {
  return (
    <label className={cx("label", className)} {...props}>
      {children}
    </label>
  );
};

export default Label;
