import { Props as ButtonProps } from "components/Elements/Button/Button";
import { StyledButtonGroup } from "components/Elements/ButtonGroup/ButtonGroup.styled";
import React, { FC, ReactElement } from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  direction: "row" | "column";
  children: ReactElement<ButtonProps> | ReactElement<ButtonProps>[];
};

const ButtonGroup: FC<Props> = ({ children, ...props }) => {
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>;
};

export default ButtonGroup;
