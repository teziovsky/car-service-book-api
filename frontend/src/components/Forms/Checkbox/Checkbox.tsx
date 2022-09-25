import cx from "classnames";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  size?: "small" | "default" | "large";
  name: string;
  register: Function;
  label?: string;
};

const Checkbox = ({ size, label, name, register, children, className, ...props }: Props) => {
  return (
    <>
      {label && <span className="label">{label}</span>}
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
          {...register(name)}
          type="checkbox"
          {...props}
        />
        {children}
      </label>
    </>
  );
};

export default Checkbox;
