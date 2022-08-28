import { Props } from "components/Elements/Button/Button";
import Icon from "components/Elements/Icon/Icon";
import { Font, Gradient, Hsla, Saturated, Transition } from "components/Styled/Mixins";
import styled, { css } from "styled-components";

export const StyledButton = styled.button<Props>`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid transparent;
  padding: ${({ child }) => (child ? "10px 20px 8px" : "7px")};
  gap: 4px;
  word-break: break-word;
  ${Transition(["background-color", "border-color", "color"])};

  ${({ theme }) => Font({ size: theme.baseFont, lineHeight: theme.baseLh, fontWeight: 700 })}
  &:disabled {
    cursor: not-allowed;
  }

  ${({ theme, status, color }) =>
    status === "primary"
      ? css`
          color: ${Hsla(theme[`${color}50`])};
          background-color: ${Hsla(theme[`${color}800`])};
          border-color: transparent;

          &:not(:disabled):hover {
            background-color: ${Hsla(theme[`${color}700`])};
          }

          &:not(:disabled):active {
            background-color: ${Hsla(theme[`${color}600`])};
          }

          &:disabled {
            color: ${Hsla(Saturated(theme[`${color}400`]))};
            background-color: ${Hsla(Saturated(theme[`${color}800`]))};
          }
        `
      : status === "secondary"
      ? css`
          color: ${Hsla(theme[`${color}50`])};
          background-color: ${Hsla(theme[`${color}900`])};
          border: none;

          &::before {
            content: "";
            position: absolute;
            z-index: -1;
            border-radius: ${theme.borderRadius};
            inset: -1px;
            ${Gradient({ type: "border", color: theme[`${color}300`] })};
            ${Transition("background-image")};
          }

          &:not(:disabled):hover {
            background-color: ${Hsla(theme[`${color}800`])};
          }

          &:not(:disabled):active {
            background-color: ${Hsla(theme[`${color}700`])};
          }

          &:disabled {
            color: ${Hsla(Saturated(theme[`${color}400`]))};
            background-color: ${Hsla(Saturated(theme[`${color}900`]))};

            &::before {
              ${Gradient({ type: "border", color: Saturated(theme[`${color}300`]) })};
            }
          }
        `
      : status === "tertiary"
      ? css`
          color: ${Hsla(theme[`${color}200`])};
          background-color: transparent;
          border-color: transparent;

          &:not(:disabled):hover {
            background-color: ${Hsla(theme[`${color}200`], 0.2)};
            border-color: ${Hsla(theme[`${color}200`])};
          }

          &:not(:disabled):active {
            background-color: ${Hsla(theme[`${color}900`])};
          }

          &:disabled {
            color: ${Hsla(Saturated(theme[`${color}400`]))};
            background-color: ${Hsla(Saturated(theme[`${color}900`]))};
          }
        `
      : null}

  ${({ theme, size, child }) =>
    size === "small"
      ? css`
          padding: ${child ? "7.5px 15px 6px" : "5px"};
          ${Font({ size: theme.smallFont, lineHeight: theme.smallLh, fontWeight: 700 })}
        `
      : size === "large"
      ? css`
          padding: ${child ? "15px 35px 12px" : "9px"};
          ${Font({ size: theme.largeFont, lineHeight: theme.largeLh, fontWeight: 700 })}
        `
      : null}
`;

export const StyledIcon = styled(Icon)``;
