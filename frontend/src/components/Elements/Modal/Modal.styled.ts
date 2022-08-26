import Button from "components/Elements/Button/Button";
import Heading from "components/Elements/Heading/Heading";
import { Props } from "components/Elements/Modal/Modal";
import { BoxShadow, Font, Gradient, Hsla } from "components/Styled/Mixins";
import styled, { css } from "styled-components";

export const StyledBackdrop = styled.div`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => Hsla(theme.black, 0.3)};
  transform: translate(-50%, -50%);
`;

export const StyledWrapper = styled.div<Props>`
  ${({ theme, wide }) =>
    css`
      position: fixed;
      top: 50%;
      left: 50%;
      min-width: 300px;
      max-width: ${wide ? "90%" : "500px"};
      width: ${wide ? "90%" : null};
      border: ${`1px solid ${Hsla(theme.accent200, 0.4)}`};
      border-radius: ${theme.borderRadius};
      padding: 20px;
      box-shadow: var(--box-shadow-50);
      transform: translate(-50%, -50%);
      ${Gradient({ type: "background", color: theme.accent800, fallbackColor: theme.accent950 })};
      ${BoxShadow(theme.accent50)};
    `}
  & > div:not(:last-child) {
    padding-bottom: 10px;
  }

  & > div:first-of-type.modalBody {
    padding-top: 5px;
  }

  & > div + div {
    padding-top: 10px;
  }
`;

export const StyledButtonClose = styled(Button)`
  position: absolute;
  top: 21px;
  right: 15px;
  padding: 2px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHeading = styled(Heading)`
  ${({ theme }) => css`
    color: ${Hsla(theme.accent50)};
    ${Font({
      size: theme.h4Font,
      lineHeight: theme.h4Lh,
      fontWeight: 700,
      fontFamily: theme.familyHeading,
    })};
  `}
}
`;

export const StyledBody = styled.div`
  ${({ theme }) => css`
    display: flex;
    word-break: break-word;
    justify-content: center;
    align-items: center;
    color: ${Hsla(theme.accent50)};
    ${Font({
      size: theme.smallFont,
      lineHeight: theme.smallLh,
    })};
  `}
}`;
