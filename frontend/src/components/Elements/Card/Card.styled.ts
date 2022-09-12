import { Props } from "components/Elements/Card/Card";
import Heading from "components/Elements/Heading/Heading";
import { Font, Gradient, Hsla } from "components/Styled/Mixins";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div<Props>`
  padding: 20px;

  ${({ theme }) =>
    css`
      border: ${`1px solid ${Hsla(theme.accent200, 0.4)}`};
      border-radius: ${theme.borderRadius};
      ${Gradient({ type: "background", color: theme.accent800, fallbackColor: theme.accent950 })};
    `}
  & > div:not(:last-child) {
    padding-bottom: 10px;
  }

  & > div + div {
    padding-top: 10px;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

export const StyledHeading = styled(Heading)`
  ${({ theme }) => css`
    color: ${Hsla(theme.accent50)};

    ${Font({
      size: theme.h4Font,
      lineHeight: theme.h4Lh,
      fontWeight: 700,
      fontFamily: theme.familyHeading,
    })}
  `}
`;

export const StyledBody = styled.div`
  ${({ theme }) => css`
    color: ${Hsla(theme.accent50)}
    word-break: break-word;

    ${Font({
      size: theme.baseFont,
      lineHeight: theme.baseLh,
    })}
  `}
`;

export const StyledFooter = styled.div``;
