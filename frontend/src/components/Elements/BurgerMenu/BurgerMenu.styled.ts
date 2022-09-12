import { Props } from "components/Elements/Button/Button";
import { Hsla, Transition } from "components/Styled/Mixins";
import styled, { css } from "styled-components";

export const StyledBar = styled.span`
  position: absolute;
  right: 8px;
  left: 8px;
  height: 2px;
  display: block;
  background-color: ${({ theme }) => Hsla(theme["accent50"])};
  ${Transition(["background-color", "transform", "top", "bottom"])};

  &:first-child {
    top: 8px;
  }

  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  &:last-child {
    bottom: 8px;
  }
`;

export const StyledBurgerMenu = styled.button<Props>`
  cursor: pointer;
  position: relative;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  padding: 8px;

  ${({ theme }) => css`
    @media only screen and ${theme.breakpointMd()} {
      display: none;
    }

    &:hover ${StyledBar}, &:focus ${StyledBar} {
      background-color: ${Hsla(theme.accent300)};
    }
  `};

  ${({ isOpen }) =>
    isOpen
      ? css`
          & ${StyledBar} {
            &:first-child {
              top: 50%;
              transform: scaleX(100%) rotate(315deg) translateY(-50%);
              transition-delay: 0.1s;
            }

            &:nth-child(2) {
              transform: translateY(-50%) scaleX(0%);
              transition-delay: 0.2s;
            }

            &:last-child {
              bottom: 50%;
              transform: scaleX(100%) rotate(-315deg) translateY(50%);
              transition-delay: 0.1s;
            }
          }

          &:hover ${StyledBar}, &:focus ${StyledBar} {
            &:first-child {
              transition-delay: 0.2s;
            }

            &:nth-child(2) {
              transition-delay: 0.1s;
            }

            &:last-child {
              transition-delay: 0.2s;
            }
          }
        `
      : css`
          & ${StyledBar} {
            &:first-child {
              transition-delay: 0.1s;
            }

            &:nth-child(2) {
              transform: translateY(-50%) scaleX(80%);
              transition-delay: 0.2s;
            }

            &:last-child {
              transform: scaleX(60%);
              transition-delay: 0.1s;
            }
          }

          &:hover ${StyledBar}, &:focus ${StyledBar} {
            &:first-child {
              transition-delay: 0.1s;
            }

            &:nth-child(2) {
              transform: translateY(-50%) scaleX(100%);
              transition-delay: 0.2s;
            }

            &:last-child {
              transform: scaleX(100%);
              transition-delay: 0.1s;
            }
          }
        `}
`;
