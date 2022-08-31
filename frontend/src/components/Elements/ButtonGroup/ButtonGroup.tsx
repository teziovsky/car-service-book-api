import { Props as ButtonProps } from "components/Elements/Button/Button";
import { StyledButtonGroup } from "components/Elements/ButtonGroup/ButtonGroup.styled";
import React, { ReactElement } from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  direction: "row" | "column";
  children: ReactElement<ButtonProps> | ReactElement<ButtonProps>[];
};

const ButtonGroup = ({ children, ...props }: Props) => {
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>;
};

export default ButtonGroup;
