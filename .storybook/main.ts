import type { StorybookConfig } from '@storybook/core/types';

module.exports = {
  stories: [
    '../stories/*/index.@(ts|tsx|js|mdx)',
    '../stories/*/*.stories.mdx',
  ],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  typescript: {
    check: true,
    checkOptions: {},
  },
} as StorybookConfig;
