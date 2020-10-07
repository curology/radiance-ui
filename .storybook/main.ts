import type { StorybookConfig } from '@storybook/core/types';

module.exports = {
  stories: ['../stories/*/index.@(ts|tsx|js)'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
  ],
  typescript: {
    check: true,
    checkOptions: {},
  },
} as StorybookConfig;
