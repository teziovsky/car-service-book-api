import { StyledErrorMessage } from "components/Forms/ErrorMessage/ErrorMessage.styled";
import React from "react";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {
  message: string;
};

const ErrorMessage = ({ message, ...props }: Props) => {
  return <StyledErrorMessage {...props}>{message}</StyledErrorMessage>;
};

export default ErrorMessage;
