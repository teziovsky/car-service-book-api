import cx from "classnames";
import ErrorMessage from "components/Forms/ErrorMessage/ErrorMessage";
import Label from "components/Forms/Label/Label";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  size?: "small" | "default" | "large";
  name: string;
  label: string;
  message: string | undefined;
  register: Function;
  tag: "input" | "select" | "textarea";
};

const Input = ({ tag, name, label, message, size, register, children, className, ...props }: Props) => {
  const Tag = tag;

  return (
    <div className="input-wrapper">
      <Label htmlFor={name}>{label}</Label>
      <Tag
        id={name}
        {...register(name)}
        className={cx(
          "input",
          {
            "input--small": size === "small",
            "input--large": size === "large",
            "input--select": tag === "select",
          },
          className
        )}
        {...props}>
        {children}
      </Tag>
      {message && <ErrorMessage message={message} />}
    </div>
  );
};

export default Input;
