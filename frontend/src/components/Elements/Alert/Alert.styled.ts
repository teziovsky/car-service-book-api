import { Props } from "components/Elements/Alert/Alert";
import Button from "components/Elements/Button/Button";
import Icon from "components/Elements/Icon/Icon";
import { Font, Gradient, Hsla } from "components/Styled/Mixins";
import styled, { css } from "styled-components";

export const StyledWrapper = styled.div<Props>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 16px 10px;
  gap: 8px;
  max-width: ${({ notification }) => (notification ? "400px" : null)};

  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => Hsla(theme[`${color}50`])};
      border: ${({ theme }) => `1px solid ${Hsla(theme[`${color}200`], 0.4)}`};
      ${({ theme }) => Gradient({ type: "background", color: theme[`${color}900`] })};

      ${StyledIcon} {
        color: ${({ theme }) => Hsla(theme[`${color}400`])};
      }

      ${StyledButtonClose} {
        color: ${({ theme }) => Hsla(theme[`${color}400`])};
      }
    `}
`;

export const StyledIcon = styled(Icon)`
  width: 22px;
  height: 22px;
  align-self: flex-start;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 32px;
`;

export const StyledText = styled.span<Props>`
  ${({ theme, title }) =>
    title
      ? Font({ size: theme.h5Font, lineHeight: theme.h5Lh, fontWeight: 700, fontFamily: theme.familyHeading })
      : Font({ size: theme.smallFont, lineHeight: theme.smallLh, fontWeight: 400 })};
  word-break: break-word;
`;

export const StyledButtonClose = styled(Button)<Props>`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 10px;
  display: flex;
  background: none;
  padding: 2px;
  place-items: center;
`;
