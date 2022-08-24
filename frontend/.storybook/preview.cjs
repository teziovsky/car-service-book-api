import { withRouter } from "storybook-addon-react-router-v6";
import "../src/main.scss";

export const decorators = [withRouter];

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