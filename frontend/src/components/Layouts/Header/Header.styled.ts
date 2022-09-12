import Button from "components/Elements/Button/Button";
import Heading from "components/Elements/Heading/Heading";
import { Font, Hsla, Transition } from "components/Styled/Mixins";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  ${({ theme }) =>
    css`
      background-color: ${Hsla(theme.accent950)};
    `}
`;

export const StyledLogo = styled(Link)`
  position: absolute;
  z-index: 11;
  top: 55%;
  left: 50%;
  text-decoration: none;
  transform: translate(-50%, -50%);

  ${({ theme }) =>
    css`
      border-radius: ${theme.borderRadius};

      &:hover,
      &:focus {
        .headerTitle {
          color: ${Hsla(theme.accent400)};
        }
      }
    `}
`;

export const StyledTitle = styled(Heading)`
  display: flex;
  flex-direction: column;
  ${Transition("color")};

  ${({ theme }) =>
    css`
      color: ${Hsla(theme.accent200)}; ;
    `}
`;

export const StyledTitleHeading = styled.span`
  ${({ theme }) =>
    css`
      ${Font({ size: 28, lineHeight: 32, fontFamily: theme.familyLogo })};

      letter-spacing: 0.02em;
    `}
`;

export const StyledTitleSubheading = styled.span`
  ${({ theme }) =>
    css`
      ${Font({ size: 18, lineHeight: 22, fontFamily: theme.familyLogo })};

      letter-spacing: -0.02em;
      margin-top: -8px;
    `}
`;

export const StyledButton = styled(Button)``;
