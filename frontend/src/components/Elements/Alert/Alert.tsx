import {
  StyledButtonClose,
  StyledContent,
  StyledIcon,
  StyledText,
  StyledWrapper,
} from "components/Elements/Alert/Alert.styled";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  color?: "success" | "info" | "warning" | "error";
  title?: string;
  icon?: string;
  notification?: boolean;
};

const Alert = ({ color, title, icon, notification, children, ...props }: Props) => {
  return (
    <StyledWrapper notification={notification} color={color} {...props}>
      {icon && <StyledIcon icon={icon} />}
      <StyledContent>
        {title && <StyledText title>{title}</StyledText>}
        <StyledText>{children}</StyledText>
      </StyledContent>
      <StyledButtonClose color={color} status="tertiary" size="default" icon="HiX" />
    </StyledWrapper>
  );
};

Alert.defaultProps = {
  color: "success",
};

export default Alert;
