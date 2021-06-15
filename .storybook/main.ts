import type { StorybookConfig } from '@storybook/react/types';

const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const babelConfig = require('../babel.config');

const toPath = (_path: string) => path.join(process.cwd(), _path);

/**
 * Storybook's types are as of this commit not up to date.
 * We extend the Config option based on their documentation.
 *
 * {@link https://storybook.js.org/docs/ember/configure/overview#configure-your-storybook-project Configure your storybook project}
 *
 * {@link https://github.com/storybookjs/storybook/blob/b3c4a8a4fd846977ef777d0e9f4aa5c77b0796e7/lib/core-common/src/types.ts#L224 June 2021 `next` types}
 */
interface CustomStorybookConfig extends StorybookConfig {
  logLevel?: string;
  babel?: Record<string, unknown>;
}

const config: CustomStorybookConfig = {
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

    /**
     * Until Storybook migrates its own internal @emotion usage from
     * v10 to v11, this allows us to maintain compatibility
     */
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
};

module.exports = config;
