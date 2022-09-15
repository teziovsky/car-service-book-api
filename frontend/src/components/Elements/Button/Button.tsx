import { StyledButton, StyledIcon } from "components/Elements/Button/Button.styled";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  status?: "primary" | "secondary" | "tertiary";
  color?: "accent" | "success" | "info" | "warning" | "error";
  size?: "small" | "default" | "large";
  icon?: string;
  iconRight?: boolean;
};

const Button = ({
  status = "primary",
  color = "accent",
  size = "default",
  icon,
  iconRight = false,
  children,
  ...props
}: Props) => {
  return (
    <StyledButton status={status} color={color} size={size} child={children} {...props}>
      {icon && !iconRight && <StyledIcon icon={icon} />}
      {children}
      {icon && iconRight && <StyledIcon icon={icon} />}
    </StyledButton>
  );
};

export default Button;
