import "../src/main.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
  backgrounds: {
    default: 'blue',
    values: [
      {
        name: 'blue',
        value: '#021C31',
      },
    ],
  },
};