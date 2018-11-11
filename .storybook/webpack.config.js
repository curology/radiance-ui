const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, '..'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
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
