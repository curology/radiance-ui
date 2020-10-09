import type { StorybookConfig } from '@storybook/core/types';

module.exports = {
  stories: [
    '../stories/**/index.@(ts|tsx|js)',
    '../stories/**/*.stories.@(tsx|mdx)',
  ],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
  ],
  typescript: {
    check: true,
    checkOptions: {},
  },
} as StorybookConfig;
