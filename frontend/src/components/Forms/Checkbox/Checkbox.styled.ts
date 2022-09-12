import { Props } from "components/Forms/Checkbox/Checkbox";
import { Font, Hsla, Saturated, Transition } from "components/Styled/Mixins";
import styled, { css } from "styled-components";

export const StyledLabel = styled.label<Props>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => Hsla(theme.accent50)};

  ${({ theme }) => css`
    ${Font({ size: theme.smallFont, lineHeight: theme.smallLh })}
  `}

  ${({ theme, inputSize }) =>
    inputSize === "small"
      ? css`
          ${Font({ size: theme.smallFont, lineHeight: theme.smallLh })}
        `
      : inputSize === "large"
      ? css`
          ${Font({ size: theme.largeFont, lineHeight: theme.largeLh })}
        `
      : css`
          ${Font({ size: theme.baseFont, lineHeight: theme.baseLh })}
        `}
`;

export const StyledCheckbox = styled.input<Props>`
  ${({ theme }) => css`
    appearance: none;
    background-color: ${Hsla(theme.accent950)};
    margin: 0;

    cursor: pointer;
    border: 1px solid ${Hsla(theme.accent200)};
    border-radius: ${theme.borderRadius};
    display: grid;
    place-content: center;
    overflow: hidden;
    ${Transition("background-color")};

    &::before {
      content: "";
      margin-top: -4px;
      border-bottom: 2px solid ${Hsla(theme.accent200)};
      border-right: 2px solid ${Hsla(theme.accent200)};
      ${Transition("transform")};
    }

    &:checked::before {
      transform: translateY(0) rotate(45deg);
    }

    &:hover,
    &:focus {
      background-color: ${Hsla(theme.accent400, 0.2)};
    }

    &:disabled {
      background-color: ${Hsla(Saturated(theme.accent400), 0.2)};
      border-color: ${Hsla(Saturated(theme.accent300))};
      pointer-events: none;

      &::before {
        border-color: ${Hsla(Saturated(theme.accent300))};
      }
    }
  `}

  ${({ inputSize }) =>
    inputSize === "small"
      ? css`
          width: 24px;
          height: 24px;

          &::before {
            width: 6px;
            height: 12px;
            transform: translateY(34px) rotate(180deg);
          }
        `
      : inputSize === "large"
      ? css`
          width: 36px;
          height: 36px;

          &::before {
            width: 9px;
            height: 18px;
            transform: translateY(58px) rotate(180deg);
          }
        `
      : css`
          width: 32px;
          height: 32px;

          &::before {
            width: 8px;
            height: 16px;
            transform: translateY(42px) rotate(180deg);
          }
        `}
`;
