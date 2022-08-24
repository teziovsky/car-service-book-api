const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "components",
            replacement: path.resolve(__dirname, "../src/components"),
          },
          {
            find: "layouts",
            replacement: path.resolve(__dirname, "../src/layouts"),
          },
          {
            find: "routes",
            replacement: path.resolve(__dirname, "../src/routes"),
          },
          {
            find: "views",
            replacement: path.resolve(__dirname, "../src/views"),
          },
        ],
      },
    };
  },
};