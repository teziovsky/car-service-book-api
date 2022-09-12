import { StyledInput } from "components/Forms/Input/Input.styled";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  inputSize?: "small" | "default" | "large";
  tag: "input" | "select" | "textarea";
};

const Input = ({ tag, inputSize, children, ...props }: Props) => {
  return (
    <StyledInput as={tag} inputSize={inputSize} {...props}>
      {children}
    </StyledInput>
  );
};

export default Input;
