module.exports = {
  presets: [
    '@babel/env',
    '@babel/react',
  ],
  plugins: [
    'emotion',
    'transform-svg-import-to-string',
    '@babel/plugin-proposal-export-namespace-from',
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    ['@babel/plugin-transform-parameters', { 'loose': true }],
  ],
};
