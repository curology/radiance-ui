module.exports = {
  presets: ['@babel/env', '@babel/react', '@emotion/babel-preset-css-prop'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-parameters', { loose: true }],
  ],
};
