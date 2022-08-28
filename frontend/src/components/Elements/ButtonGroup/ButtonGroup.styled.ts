import { StyledButton } from "components/Elements/Button/Button.styled";
import { Props } from "components/Elements/ButtonGroup/ButtonGroup";
import styled, { css } from "styled-components";

export const StyledButtonGroup = styled.div<Props>`
  display: flex;
  align-items: center;

  ${({ direction }) =>
    direction === "row"
      ? css`
          flex-direction: row;

          & > ${StyledButton}:not(:last-child) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }

          & > ${StyledButton} + ${StyledButton} {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
        `
      : direction === "column"
      ? css`
          flex-direction: column;

          & > ${StyledButton} {
            width: 100%;
            justify-content: center;
          }

          & > ${StyledButton}:not(:last-child) {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }

          & > ${StyledButton} + ${StyledButton} {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
        `
      : null}
`;
