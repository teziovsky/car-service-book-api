import { Props } from "components/Elements/Heading/Heading";
import { Font, Hsla } from "components/Styled/Mixins";
import styled, { css } from "styled-components";

export const StyledHeading = styled.div<Props>`
  ${({ theme, level, bold }) => css`
    ${Font({
      size: theme[`h${level}Font`],
      lineHeight: theme[`h${level}Lh`],
      fontWeight: bold ? 700 : 400,
      fontFamily: level === 1 ? theme.familyLogo : theme.familyHeading,
    })}
    color: ${Hsla(theme.accent50)}
  `}}
`;
