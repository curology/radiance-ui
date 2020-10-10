import type { StorybookConfig } from '@storybook/core/types';

module.exports = {
  /**
   * Storybook convention is to include "stories" in the filename, but it is also
   * a requirement for Storybook default configuration to work correctly
   */
  stories: ['../stories/**/*.stories.@(tsx|mdx)'],
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
        sourceLoaderOptions: null,
      },
    },
  ],
  typescript: {
    check: true,
    checkOptions: {},
  },
} as StorybookConfig;
