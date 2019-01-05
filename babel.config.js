module.exports = {
  presets: [
    '@babel/env',
    '@babel/react',
  ],
  plugins: [
    'emotion',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    ['@babel/plugin-transform-parameters', { 'loose': true }],
  ],
};
