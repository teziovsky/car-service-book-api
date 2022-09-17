import { Hsla, Transition } from "components/Styled/Mixins";
import { breakpoints, dark, light, typography, variables } from "components/Styled/Variables";
import { createGlobalStyle, css } from "styled-components";

const theme = { ...breakpoints, ...dark, ...light, ...typography, ...variables };

const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
  a {
    position: relative;
    text-decoration: none;
    display: inline-block;
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

    ${({ theme }) => css`
      &:hover,
      &:focus {
        color: ${Hsla(theme.accent400)};

        &::after {
          background-color: ${Hsla(theme.accent400)};
          transform: translate(-50%, 0) scale(1);
        }
      }
    `};
  }
`;

export default GlobalStyle;
