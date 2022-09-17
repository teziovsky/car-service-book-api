import cx from "classnames";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  size?: "small" | "default" | "large";
};

const Checkbox = ({ size, children, className, ...props }: Props) => {
  return (
    <label
      className={cx(
        "checkbox",
        {
          "checkbox--small": size === "small",
          "checkbox--large": size === "large",
        },
        className
      )}>
      <input
        className={cx("checkbox-input", {
          "checkbox-input--small": size === "small",
          "checkbox-input--large": size === "large",
        })}
        type="checkbox"
        {...props}
      />
      {children}
    </label>
  );
};

export default Checkbox;
