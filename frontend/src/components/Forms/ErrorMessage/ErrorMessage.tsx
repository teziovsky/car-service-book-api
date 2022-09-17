import cx from "classnames";
import React from "react";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {
  message: string;
};

const ErrorMessage = ({ message, className, ...props }: Props) => {
  return (
    <>
      {message && (
        <span className={cx("error-message", className)} {...props}>
          {message}
        </span>
      )}
    </>
  );
};

export default ErrorMessage;
