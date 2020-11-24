/**
 *
 * @param {false | 'auto'} modules
 * @see https://babeljs.io/docs/en/babel-preset-env#modules
 */
const presets = (modules) => [
  [
    '@babel/env',
    {
      modules,
    },
  ],
  '@babel/react',
  '@babel/preset-typescript',
  '@emotion/babel-preset-css-prop',
];

module.exports = {
  presets: presets(false),
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-parameters', { loose: true }],
  ],
  env: {
    test: {
      presets: presets('auto'),
    },
  },
};
