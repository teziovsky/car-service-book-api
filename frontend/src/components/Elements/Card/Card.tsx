import { StyledBody, StyledFooter, StyledHeader, StyledWrapper } from "components/Elements/Card/Card.styled";
import React from "react";
import { DefaultProps } from "src/main";

export type Props = DefaultProps & {};

const Card = ({ children, ...props }: Props) => {
  return <StyledWrapper {...props}>{children}</StyledWrapper>;
};

const Header = ({ children }: DefaultProps) => <StyledHeader>{children}</StyledHeader>;
Header.displayName = "Header";
Card.Header = Header;

const Body = ({ children }: DefaultProps) => <StyledBody>{children}</StyledBody>;
Body.displayName = "Body";
Card.Body = Body;

const Footer = ({ children }: DefaultProps) => <StyledFooter>{children}</StyledFooter>;
Footer.displayName = "Footer";
Card.Footer = Footer;

export default Card;
