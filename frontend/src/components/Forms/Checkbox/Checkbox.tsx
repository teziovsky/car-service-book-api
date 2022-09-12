import { StyledCheckbox, StyledLabel } from "components/Forms/Checkbox/Checkbox.styled";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  inputSize?: "small" | "default" | "large";
};

const Checkbox = ({ inputSize, children, ...props }: Props) => {
  return (
    <StyledLabel inputSize={inputSize}>
      <StyledCheckbox inputSize={inputSize} type="checkbox" {...props} />
      {children}
    </StyledLabel>
  );
};

export default Checkbox;
