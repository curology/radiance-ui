const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const transformTemplateForUtilLocation = require('../src/utils/svgToIconTemplate/transformTemplateForUtilLocation.js');

const UTIL_LOCATION = '../../utils/icons';

// SVGs will not load properly if we do not remove the default rule before adding our own
function removeDefaultStorybookSvgRule(config) {
  const defaultStorybookLoaderRule = config.module.rules.find((rule) =>
    rule.test.test('.svg'),
  );

  const ruleWithoutSvg = defaultStorybookLoaderRule.test
    .toString()
    .replace('svg|', '');

  // Removes forward flashes from regexp string before creating new regexp from string
  defaultStorybookLoaderRule.test = new RegExp(
    ruleWithoutSvg.substr(1, ruleWithoutSvg.length - 2),
  );
}

module.exports = (webpackSettings) => {
  // ESLint fix for `Resolve error: Cannot destructure property" `config` of 'undefined' or 'null'` in /stories/**/index.js files.
  if (!webpackSettings) return {};

  const { config } = webpackSettings;

  config.resolve = {
    modules: [path.resolve(__dirname, '..'), 'node_modules'],
    extensions: ['.js', '.md', '.ts', '.tsx'],
  };

  // SVG Rule
  removeDefaultStorybookSvgRule(config);

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      { loader: 'babel-loader', options: require('../babel.config.js') },
      {
        loader: '@svgr/webpack',
        options: {
          template: transformTemplateForUtilLocation(UTIL_LOCATION),
          expandProps: false,
          babel: false,
        },
      },
    ],
  });

  // Typescript Rule
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@babel/preset-typescript'],
        },
      },
    ],
  });

  // Storybook Index Loader Rule
  config.module.rules.push({
    test: /index\.(ts|tsx|js)?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    include: path.resolve(__dirname, '../stories'),
    enforce: 'pre',
  });

  // CircularDependencyPlugin
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

  return config;
};
