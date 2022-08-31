import { StyledItem, StyledLink, StyledList, StyledNav } from "components/Layouts/Navigation/Navigation.styled";
import useBreakpoint from "hooks/useBreakpoint";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DefaultProps } from "src/main";

export type LinkType = {
  path: string;
  name: string;
  anchor?: boolean;
};

export type Props = DefaultProps & {
  links: LinkType[];
  isOpen: boolean;
};

const Navigation = ({ links, isOpen }: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const breakpoint = useBreakpoint();

  useEffect(() => {
    setIsMobile(breakpoint === "sm" || breakpoint === "md");
  }, [breakpoint]);

  return (
    <StyledNav isMobile={isMobile} isOpen={isOpen}>
      <StyledList>
        {links.map((link) => (
          <StyledItem key={link.path}>
            {link.anchor ? (
              <StyledLink href={link.path}>{link.name}</StyledLink>
            ) : (
              <StyledLink as={NavLink} to={link.path}>
                {link.name}
              </StyledLink>
            )}
          </StyledItem>
        ))}
      </StyledList>
    </StyledNav>
  );
};

Navigation.defaultProps = {
  anchor: false,
};

export default Navigation;
