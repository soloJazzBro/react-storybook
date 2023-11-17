import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  staticDirs: [
    "../src/assets",
    "../src/assets/images"
  ],
  stories: [
    "../src/**/*.mdx", 
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    //"@storybook/addon-interactions",
    '@storybook/addon-docs',
    //'@storybook/addon-storysource',
    '@storybook/addon-viewport',
    'storybook-addon-jsx',
    "@whitespace/storybook-addon-html",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  // docs: {
  //   autodocs: "tag",
  //   defaultName: 'Documentation',
  // },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  }
};
export default config;
