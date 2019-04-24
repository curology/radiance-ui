const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const transformTemplateForUtilLocation = require('../src/utils/svgToIconTemplate/transformTemplateForUtilLocation.js');

const UTIL_LOCATION = '../../utils/icons';

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, '..'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            options: require('../babel.config.js'),
          },
          {
            loader: '@svgr/webpack',
            options: {
              template: transformTemplateForUtilLocation(UTIL_LOCATION),
              expandProps: false,
              babel: false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
      allowAsyncCycles: false,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    }),
  ],
};
