import {
  StyledButtonClose,
  StyledContent,
  StyledIcon,
  StyledText,
  StyledWrapper,
} from "components/Elements/Alert/Alert.styled";
import React from "react";
import * as HeroIcons from "react-icons/hi";
import { DefaultProps } from "src/main";

const icons = { ...HeroIcons };

export type Props = DefaultProps & {
  color?: "success" | "info" | "warning" | "error";
  title?: string;
  icon?: keyof typeof icons;
  notification?: boolean;
};

const Alert = ({ color = "success", title, icon, notification, children, ...props }: Props) => {
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

export default Alert;
