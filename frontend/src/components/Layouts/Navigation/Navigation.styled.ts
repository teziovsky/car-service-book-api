import { Hsla, Transition } from "components/Styled/Mixins";
import styled, { css } from "styled-components";

export const StyledNav = styled.nav<{ isMobile: boolean; isOpen: boolean }>`
  position: absolute;
  z-index: 11;
  top: 80px;
  left: 16px;
  width: calc(100% - 32px);
  opacity: 0;
  visibility: hidden;

  ${({ theme }) => css`
    background-color: ${Hsla(theme.accent900)};
    border-radius: ${theme.borderRadius};

    @media only screen and ${theme.breakpointSm()} {
      width: calc(50% - 32px);
    }

    @media only screen and ${theme.breakpointMd()} {
      position: static;
      width: unset;
      opacity: 1;
      visibility: visible;
      background: none;
    }
  `};

  ${({ isMobile }) =>
    isMobile &&
    css`
      ${Transition(["opacity", "visibility", "transform"])};
      padding: 16px 0;
      transform: translateY(20px) scale(0.8);
      transition-delay: 0.5s;
    `};

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    `};
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  ${({ theme }) => css`
    @media only screen and ${theme.breakpointMd()} {
      flex-direction: row;
    }
  `};
`;

export const StyledItem = styled.li`
  width: 50%;
  text-align: center;

  ${({ theme }) => css`
    @media only screen and ${theme.breakpointMd()} {
      width: unset;
    }
  `};
`;

export const StyledLink = styled.a`
  width: 100%;
  display: block;
  text-decoration: none;
  padding: 10px 0;

  ${({ theme }) => css`
    color: ${Hsla(theme.accent50)};
    ${Transition("color")};

    @media only screen and ${theme.breakpointMd()} {
      width: unset;
      display: inline-block;
      padding: 8px;
    }

    &.active {
      color: ${Hsla(theme.accent200)};

      &:hover,
      &:focus {
        color: ${Hsla(theme.accent400)};
      }
    }
  `};
`;
