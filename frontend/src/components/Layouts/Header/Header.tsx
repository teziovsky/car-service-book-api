import BurgerMenu from "components/Elements/BurgerMenu/BurgerMenu";
import {
  StyledButton,
  StyledHeader,
  StyledLogo,
  StyledTitle,
  StyledTitleHeading,
  StyledTitleSubheading,
} from "components/Layouts/Header/Header.styled";
import Navigation, { LinkType } from "components/Layouts/Navigation/Navigation";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {
  type: "Home" | "App";
  links: LinkType[];
};

const Header: FC<Props> = ({ type, links, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const route = useNavigate();

  return (
    <StyledHeader {...props}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {!!links.length && <Navigation isOpen={isOpen} links={links} />}
      <StyledLogo to="/">
        <StyledTitle level={1}>
          <StyledTitleHeading>Vehicle</StyledTitleHeading>
          <StyledTitleSubheading>Service Book</StyledTitleSubheading>
        </StyledTitle>
      </StyledLogo>
      {type === "Home" && (
        <StyledButton onClick={() => route("/app")} color="accent" status="secondary" size="small">
          Go to app
        </StyledButton>
      )}
    </StyledHeader>
  );
};

Header.defaultProps = {
  type: "Home",
};

export default Header;
