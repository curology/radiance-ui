import type { StorybookConfig } from '@storybook/core/types';
const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const babelConfig = require('../babel.config');

const toPath = (_path) => path.join(process.cwd(), _path);

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
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
      },
    },
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        controls: false,
        docs: false, // Uses custom config above
      },
    },
  ],
  typescript: {
    check: true,
    checkOptions: {},
  },
  babel: babelConfig,
  webpackFinal: (config, { configType }) => {
    // Allow resolving absolute paths within `/stories`, e.g. import * from 'stories/utils';
    config.resolve.modules.push(path.resolve(__dirname, '..'));

    if (configType === 'DEVELOPMENT') {
      config.plugins.push(
        new CircularDependencyPlugin({
          exclude: /node_modules/,
          // add errors to webpack instead of warnings
          failOnError: true,
          allowAsyncCycles: false,
          // set the current working directory for displaying module paths
          cwd: process.cwd(),
        }),
      );
    }

    const emotion11CompatibleConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };

    // Return the altered config
    return emotion11CompatibleConfig;
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
} as StorybookConfig;
