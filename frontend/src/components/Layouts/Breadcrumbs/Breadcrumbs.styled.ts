import { Font, Hsla, Saturated } from "components/Styled/Mixins";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledBreadcrumbs = styled.ul`
  display: flex;
  padding: 0 16px;
  gap: 8px;
`;

export const StyledNavLink = styled(NavLink)`
  ${({ theme }) =>
    css`
      ${Font({ size: theme.h6Font, lineHeight: theme.h6Lh, fontFamily: theme.familyHeading })};
      color: ${Hsla(Saturated(theme.accent500))};
      padding: 8px;
    `}
`;

export const StyledItem = styled.li`
  position: relative;

  &:last-of-type {
    ${StyledNavLink} {
      cursor: default;
      pointer-events: none;
      color: ${({ theme }) => Hsla(theme.accent50)};
    }
  }
`;
