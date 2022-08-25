import { StyledBadge, StyledIcon } from "components/Elements/Badge/Badge.styled";
import React, { FC } from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  color?: "accent" | "success" | "info" | "warning" | "error";
  size?: "small" | "default" | "large";
  icon?: string;
  iconRight?: boolean;
};

const Badge: FC<Props> = ({ color, size, icon, iconRight, children, ...props }) => {
  return (
    <StyledBadge color={color} size={size} {...props}>
      <>
        {icon && !iconRight && <StyledIcon icon={icon} />}
        {children}
        {icon && iconRight && <StyledIcon icon={icon} />}
      </>
    </StyledBadge>
  );
};

Badge.defaultProps = {
  color: "accent",
  size: "default",
  iconRight: false,
};

export default Badge;
