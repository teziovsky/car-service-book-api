import { StyledBadge, StyledIcon } from "components/Elements/Badge/Badge.styled";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  color?: "accent" | "success" | "info" | "warning" | "error";
  size?: "small" | "default" | "large";
  icon?: string;
  iconRight?: boolean;
};

const Badge = ({ color, size, icon, iconRight, children, ...props }: Props) => {
  return (
    <StyledBadge color={color} size={size} child={children} {...props}>
      {icon && !iconRight && <StyledIcon icon={icon} />}
      {children}
      {icon && iconRight && <StyledIcon icon={icon} />}
    </StyledBadge>
  );
};

Badge.defaultProps = {
  color: "accent",
  size: "default",
  iconRight: false,
};

export default Badge;
