import { dark, typography, variables } from "components/Styled/Variables";
import { css } from "styled-components";

export const toRem = (value: number | undefined) => {
  if (value) {
    return `${value / 16}rem`;
  }

  return null;
};

type FontProps = {
  size?: number;
  lineHeight?: number;
  fontWeight?: 400 | 700;
  fontFamily?: typeof typography[keyof typeof typography];
};

export const Font = ({ size, lineHeight, fontWeight, fontFamily }: FontProps) => css`
  font-size: ${toRem(size) || toRem(16)};
  line-height: ${toRem(lineHeight) || toRem(20)};
  font-weight: ${fontWeight || 400};
  font-family: ${fontFamily || typography.familyBase};
`;

export const Saturated = (color: number[]) => {
  return [color[0], 20, color[2]];
};

export const Hsla = (color: number[], opacity: number = 1) => {
  const hsl = `${color[0]}, ${color[1]}%, ${color[2]}%`;
  return `hsla(${hsl}, ${opacity})`;
};

export const Transition = (property: string | string[]) => css`
  transition-timing-function: ${variables.transitionTimingFunction};
  transition-duration: ${variables.transitionDuration};
  transition-property: ${Array.isArray(property) ? property.join(", ") : property};

  @media (prefers-reduced-motion) {
    transition-duration: 0.1s;
  }
`;

type GradientProps = {
  type: "background" | "border";
  color: typeof dark[keyof typeof dark];
  fallbackColor?: typeof dark[keyof typeof dark];
  degree?: number;
};

export const Gradient = ({ type, color, fallbackColor, degree }: GradientProps) =>
  css`
    ${fallbackColor ? "background" : "background-image"}: ${type === "background"
      ? `linear-gradient(
      ${degree || 160}deg,
      ${Hsla(color)} 0%,
      ${Hsla(color, 0.4)} 32.33%,
      ${Hsla(color, 0.5)} 64.85%,
      ${Hsla(color, 0.3)} 100%
    )${fallbackColor ? `, ${Hsla(fallbackColor)}` : ""}`
      : type === "border"
      ? `linear-gradient(
      ${degree || 160}deg,
      ${Hsla(color, 0.4)} 25.4%,
      ${Hsla(color, 0.1)} 52.07%,
      ${Hsla(color, 0.4)} 78.46%
    )${fallbackColor ? `, ${Hsla(fallbackColor)}` : ""}`
      : null};
  `;

export const BoxShadow = (color: typeof dark[keyof typeof dark]) =>
  css`
    box-shadow: 0 5px 10px -10px ${Hsla(color)};
  `;
