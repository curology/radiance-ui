module.exports = {
  '!(style|styles|test).js': ['prettier --write', 'eslint --fix'],
  '(style|styles|test).js': 'prettier --write',
  'src/**/*.{ts,tsx}': [
    'prettier --write',
    'eslint --fix',
    'yarn run tsc -p tsconfig.json',
  ],
  '*.{md,json}': 'prettier --write',
};
