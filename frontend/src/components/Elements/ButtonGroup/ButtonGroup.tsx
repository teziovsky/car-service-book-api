import cx from "classnames";
import { Props as ButtonProps } from "components/Elements/Button/Button";
import React, { ReactElement } from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  direction: "row" | "column";
  children: ReactElement<ButtonProps> | ReactElement<ButtonProps>[];
};

const ButtonGroup = ({ direction, children, ...props }: Props) => {
  return (
    <div
      className={cx("btn-group", {
        "btn-group-row": direction === "row",
        "btn-group-col": direction === "column",
      })}
      {...props}>
      {children}
    </div>
  );
};

export default ButtonGroup;
