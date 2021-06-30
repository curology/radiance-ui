const presets = [
  '@babel/preset-env',
  '@babel/react',
  '@babel/preset-typescript',
  [
    '@emotion/babel-preset-css-prop',
    {
      autoLabel: 'always',
      labelFormat: '[local]',
      useBuiltIns: false,
      throwIfNamespace: true,
    },
  ],
];

const plugins = [
  '@babel/plugin-transform-runtime',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-export-default-from',
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  ['@babel/plugin-transform-parameters', { loose: true }],
  ['@babel/plugin-proposal-private-methods', { loose: true }],
  ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
];

module.exports = {
  presets,
  plugins,
};
