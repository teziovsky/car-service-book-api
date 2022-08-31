import { StyledInput } from "components/Forms/Input/Input.styled";
import React from "react";

export type Props = {
  inputSize?: "small" | "default" | "large";
};

const Input = ({ inputSize, ...props }: Props) => {
  return <StyledInput inputSize={inputSize} {...props} />;
};

export default Input;
