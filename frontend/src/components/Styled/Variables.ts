export const breakpoints = {
  minSmBreakpoint: 576,
  minMdBreakpoint: 768,
  minLgBreakpoint: 992,
  minXlBreakpoint: 1200,
  minXxlBreakpoint: 1400,
  breakpointSm: function () {
    return `(min-width: ${this.minSmBreakpoint}px)`;
  },
  breakpointMd: function () {
    return `(min-width: ${this.minMdBreakpoint}px)`;
  },
  breakpointLg: function () {
    return `(min-width: ${this.minLgBreakpoint}px)`;
  },
  breakpointXl: function () {
    return `(min-width: ${this.minXlBreakpoint}px)`;
  },
  breakpointXxl: function () {
    return `(min-width: ${this.minXxlBreakpoint}px)`;
  },
};

export const typography = {
  familyLogo: "'Bebas Neue', sans-serif",
  familyHeading: "'Cairo', sans-serif",
  familyBase: "'Overpass', sans-serif",
  h1Font: 39,
  h1Lh: 46,
  h2Font: 31,
  h2Lh: 38,
  h3Font: 25,
  h3Lh: 31,
  h4Font: 20,
  h4Lh: 26,
  h5Font: 16,
  h5Lh: 20,
  h6Font: 12,
  h6Lh: 16,

  largeFont: 20,
  largeLh: 26,
  baseFont: 16,
  baseLh: 20,

  smallFont: 12,
  smallLh: 16,
};

export const variables = {
  borderRadius: "8px",
  transitionTimingFunction: "ease-in-out",
  transitionDuration: "0.25s",
};

export const light = {
  black: [0, 0, 0],
  white: [0, 0, 100],

  accent500: [207, 94, 60.6],
  accent50: [207, 94, 60.6],
  accent950: [208, 92.3, 94.9],
  accent100: [207, 92.2, 10],
  accent200: [207, 94.1, 20],
  accent300: [207, 93.5, 30],
  accent400: [207, 94.1, 40],
  accent600: [207, 94.1, 60],
  accent700: [207, 93.5, 70],
  accent800: [207, 94.1, 80],
  accent900: [207, 92.2, 90],

  error500: [2, 72.5, 60],
  error50: [0, 69.2, 5.1],
  error950: [3, 69.2, 94.9],
  error100: [2, 72.5, 10],
  error200: [2, 72.5, 20],
  error300: [2, 72.5, 30],
  error400: [2, 72.5, 40],
  error600: [2, 72.5, 60],
  error700: [2, 72.5, 70],
  error800: [2, 72.5, 80],
  error900: [2, 72.5, 90],

  warning500: [56, 72.5, 60],
  warning50: [57, 69.2, 5.1],
  warning950: [57, 69.2, 94.9],
  warning100: [57, 72.5, 10],
  warning200: [56, 72.5, 20],
  warning300: [56, 72.5, 30],
  warning400: [56, 72.5, 40],
  warning600: [56, 72.5, 60],
  warning700: [56, 72.5, 70],
  warning800: [56, 72.5, 80],
  warning900: [57, 72.5, 90],

  success500: [130, 50.2, 51.2],
  success50: [129, 52, 4.9],
  success950: [129, 52, 95.1],
  success100: [130, 49, 10],
  success200: [130, 51, 20],
  success300: [130, 50.3, 30],
  success400: [130, 50, 40],
  success600: [130, 50, 60],
  success700: [130, 50.3, 70],
  success800: [130, 51, 80],
  success900: [130, 49, 90],

  info500: [187, 50.2, 51.2],
  info50: [185, 52, 4.9],
  info950: [189, 52, 95.1],
  info100: [187, 49, 10],
  info200: [187, 51, 20],
  info300: [187, 50.3, 30],
  info400: [187, 50, 40],
  info600: [187, 50, 60],
  info700: [187, 50.3, 70],
  info800: [187, 51, 80],
  info900: [187, 49, 90],
};

export const dark = {
  black: [0, 0, 0],
  white: [0, 0, 100],

  accent500: [207, 94, 60.6],
  accent50: [208, 92.3, 94.9],
  accent950: [208, 92.3, 5.1],
  accent100: [207, 92.2, 90],
  accent200: [207, 94.1, 80],
  accent300: [207, 93.5, 70],
  accent400: [207, 94.1, 60],
  accent600: [207, 94.1, 40],
  accent700: [207, 93.5, 30],
  accent800: [207, 94.1, 20],
  accent900: [207, 92.2, 10],

  error500: [2, 72.5, 60],
  error50: [3, 69.2, 94.9],
  error950: [0, 69.2, 5.1],
  error100: [2, 72.5, 90],
  error200: [2, 72.5, 80],
  error300: [2, 72.5, 70],
  error400: [2, 72.5, 60],
  error600: [2, 72.5, 40],
  error700: [2, 72.5, 30],
  error800: [2, 72.5, 20],
  error900: [2, 72.5, 10],

  warning500: [56, 72.5, 60],
  warning50: [57, 69.2, 94.9],
  warning950: [57, 69.2, 5.1],
  warning100: [57, 72.5, 90],
  warning200: [56, 72.5, 80],
  warning300: [56, 72.5, 70],
  warning400: [56, 72.5, 60],
  warning600: [56, 72.5, 40],
  warning700: [56, 72.5, 30],
  warning800: [56, 72.5, 20],
  warning900: [57, 72.5, 10],

  success500: [130, 50.2, 51.2],
  success50: [129, 52, 95.1],
  success950: [129, 52, 4.9],
  success100: [130, 49, 90],
  success200: [130, 51, 80],
  success300: [130, 50.3, 70],
  success400: [130, 50, 60],
  success600: [130, 50, 40],
  success700: [130, 50.3, 30],
  success800: [130, 51, 20],
  success900: [130, 49, 10],

  info500: [187, 50.2, 51.2],
  info50: [189, 52, 95.1],
  info950: [185, 52, 4.9],
  info100: [187, 49, 90],
  info200: [187, 51, 80],
  info300: [187, 50.3, 70],
  info400: [187, 50, 60],
  info600: [187, 50, 40],
  info700: [187, 50.3, 30],
  info800: [187, 51, 20],
  info900: [187, 49, 10],
};
