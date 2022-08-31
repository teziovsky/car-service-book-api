import { Props } from "components/Forms/Input/Input";
import { Font, Hsla, Saturated, Transition } from "components/Styled/Mixins";
import styled, { css } from "styled-components";

export const StyledInput = styled.input<Props>`
  ${({ theme }) => css`
    color: ${Hsla(theme.accent50)};
    background-color: ${Hsla(theme.accent950)};
    border: 1px solid ${Hsla(theme.accent50)};
    border-radius: ${theme.borderRadius};
    ${Transition(["border-color", "color"])};

    &:hover,
    &:focus {
      border-color: ${Hsla(theme.accent300)};
    }

    &:disabled {
      border-color: ${Hsla(Saturated(theme.accent500))};
      color: ${Hsla(Saturated(theme.accent600))};
      pointer-events: none;
    }

    &::placeholder {
      color: ${Hsla(Saturated(theme.accent600))};
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: ${Hsla(Saturated(theme.accent600))};
      opacity: 1;
    }

    &::-ms-input-placeholder {
      color: ${Hsla(Saturated(theme.accent600))};
      opacity: 1;
    }
  `}

  ${({ theme, inputSize }) =>
    inputSize === "small"
      ? css`
          padding: 8px 8px 6px;
          ${Font({ size: theme.smallFont, lineHeight: theme.smallLh })}
        `
      : inputSize === "large"
      ? css`
          padding: 12px 12px 10px;
          ${Font({ size: theme.largeFont, lineHeight: theme.largeLh })}
        `
      : css`
          padding: 10px 10px 8px;
          ${Font({ size: theme.baseFont, lineHeight: theme.baseLh })}
        `}
`;
