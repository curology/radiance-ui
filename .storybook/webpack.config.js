const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = (webpackSettings) => {
  const { config } = webpackSettings;

  // Allow resolving absolute paths within `/stories`, e.g. import * from 'stories/utils';
  config.resolve.modules.push(path.resolve(__dirname, '..'));

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
