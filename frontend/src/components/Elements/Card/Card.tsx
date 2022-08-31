import {
  StyledAvatar,
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledHeading,
  StyledWrapper,
} from "components/Elements/Card/Card.styled";
import React, { ReactNode } from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {
  title?: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  avatar?: string;
  footer?: ReactNode | ReactNode[];
};

const Card = ({ title, titleLevel, avatar, footer, children, ...props }: Props) => {
  return (
    <StyledWrapper {...props}>
      {(title || avatar) && (
        <StyledHeader>
          {avatar && <StyledAvatar src={avatar} alt="" />}
          {title && <StyledHeading level={titleLevel}>{title}</StyledHeading>}
        </StyledHeader>
      )}
      <StyledBody>{children}</StyledBody>
      {footer && <StyledFooter>{footer}</StyledFooter>}
    </StyledWrapper>
  );
};

Card.defaultProps = {};

export default Card;
