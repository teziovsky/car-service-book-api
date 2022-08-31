import { Font, Hsla } from "components/Styled/Mixins";
import styled, { css } from "styled-components";

export const StyledErrorMessage = styled.span`
  ${({ theme }) => css`
    ${Font({ size: theme.smallFont, lineHeight: theme.smallLh })}
    color: ${Hsla(theme.error300)};
  `}
`;
