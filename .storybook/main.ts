import type { StorybookConfig } from '@storybook/core/types';

module.exports = {
  stories: ['../stories/*/index.@(ts|tsx|js)'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    //     '@storybook/addon-essentials',
    //     '@storybook/addon-controls',
    //     '@storybook/addon-storysource',
    //     {
    //       name: '@storybook/addon-docs',
    //       options: {
    //         sourceLoaderOptions: {
    //           parser: 'typescript',
    //           injectStoryParameters: false,
    //         },
    //       },
    //     },
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
} as StorybookConfig;
