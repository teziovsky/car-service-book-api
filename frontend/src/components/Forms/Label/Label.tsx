import { StyledLabel } from "components/Forms/Label/Label.styled";
import React from "react";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {};

const Label = ({ children, ...props }: Props) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;
