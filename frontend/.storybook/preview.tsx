import { DecoratorFn } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/components/Styled/Global";
import useTheme from "../src/hooks/useTheme";

const withTheme: DecoratorFn = (StoryFn) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  );
};

export const decorators = [withRouter, withTheme];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  layout: "centered",
  options: {
    storySort: {
      method: "alphabetical",
    },
  },
  reactRouter: {
    routePath: "/",
  },
};
