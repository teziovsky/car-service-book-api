import { Font, Hsla, Transition } from "components/Styled/Mixins";
import ResetStyle from "components/Styled/Reset";
import { breakpoints, dark, light, typography, variables } from "components/Styled/Variables";
import { createGlobalStyle } from "styled-components";

const theme = { ...breakpoints, ...dark, ...light, ...typography, ...variables };

const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
  ${ResetStyle}
  body {
    ${({ theme }) => Font({ size: theme.h1Font })};
    font-size: 16px;
    color: ${({ theme }) => Hsla(theme.accent50)};
    background-color: ${({ theme }) => Hsla(theme.accent950)};
  }

  .layout {
    min-height: calc(100vh - 68px);
  }

  a[href],
  area[href] input:not(:disabled),
  select:not(:disabled),
  textarea:not(:disabled),
  button:not(:disabled),
  iframe,
  [tabindex],
  [contentEditable="true"] {
    &:not([tabindex="-1"]) {
      &:focus-visible {
        outline: ${({ theme }) => `${Hsla(theme.accent50)} dashed 2px`};
        outline-offset: 3px;
      }
    }
  }

  a {
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => Hsla(theme.accent200)};

    ${Transition("color")}
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 50%;
      height: 1px;
      background-color: transparent;
      transform: translate(-50%, -10px) scale(0);
      ${Transition(["background-color", "transform"])}
    }

    &:hover,
    &:focus {
      color: ${({ theme }) => Hsla(theme.accent400)};

      &::after {
        background-color: ${({ theme }) => Hsla(theme.accent400)};
        transform: translate(-50%, 0) scale(1);
      }
    }
  }
`;

export default GlobalStyle;
