import { Props } from "components/Elements/Badge/Badge";
import Icon from "components/Elements/Icon/Icon";
import { Font, Hsla, Transition } from "components/Styled/Mixins";
import styled, { css } from "styled-components";

export const StyledBadge = styled.span<Props>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ children }) => (children ? "6px 18px 3px" : "7px")};
  gap: 4px;
  ${Transition(["background-color", "border-color", "color"])};
  ${({ theme }) => Font({ size: theme.baseFont, lineHeight: theme.baseLh, fontWeight: 700 })}

  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => Hsla(theme[`${color}900`])};
      background-color: ${({ theme }) => Hsla(theme[`${color}200`])};
    `}

  ${({ size, children }) =>
    size === "small"
      ? css`
          padding: ${children ? "4px 12px 2px" : "5px"};
          ${({ theme }) => Font({ size: theme.smallFont, lineHeight: theme.smallLh, fontWeight: 700 })}
        `
      : size === "large"
      ? css`
          padding: ${children ? "9px 27px 4.5px" : "9px"};
          ${({ theme }) => Font({ size: theme.largeFont, lineHeight: theme.largeLh, fontWeight: 700 })}
        `
      : null}
`;

export const StyledIcon = styled(Icon)``;
