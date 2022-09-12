import { Font, Hsla, Saturated } from "components/Styled/Mixins";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import HiChevronRight from "/assets/images/chevron-right.svg";

export const StyledBreadcrumbs = styled.nav`
  padding: 0 16px;
  width: 100%;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  ${({ theme }) =>
    css`
      ${Font({ size: theme.h6Font, lineHeight: theme.h6Lh, fontFamily: theme.familyHeading })};
      color: ${Hsla(Saturated(theme.accent500))};
      padding: 8px;
      white-space: nowrap;
    `}
`;

export const StyledItem = styled.li`
  position: relative;

  &:not(:first-of-type) {
    ${StyledNavLink} {
      &:before {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -9px;
        content: "";
        background-image: url("${HiChevronRight}");
        width: 10px;
        height: 10px;
        filter: brightness(0) invert(1);
      }
    }
  }

  &:last-of-type {
    ${StyledNavLink} {
      cursor: default;
      pointer-events: none;
      color: ${({ theme }) => Hsla(theme.accent50)};
    }
  }
`;
