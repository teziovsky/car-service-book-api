import { Font, Hsla } from "components/Styled/Mixins";
import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
`;

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  grid-gap: 4px;
`;

export const StyledText = styled.p`
  ${({ theme }) =>
    css`
      ${Font({ size: theme.smallFont, lineHeight: theme.smallLh })};
      color: ${Hsla(theme.accent50)};
    `}
`;
