import { Font, Hsla } from "components/Styled/Mixins";
import styled, { css } from "styled-components";

export const StyledLabel = styled.label`
  ${({ theme }) => css`
    ${Font({ size: theme.smallFont, lineHeight: theme.smallLh })}
    color: ${Hsla(theme.accent50)};
  `}
`;
