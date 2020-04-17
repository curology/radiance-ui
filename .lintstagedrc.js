module.exports = {
  '!(style|styles|test).js': ['prettier --write', 'eslint --fix'],
  '(style|styles|test).js': 'prettier --write',
  'src/**/*.{ts,tsx}': [
    'prettier --write',
    'eslint --fix',
    () => 'tsc -p tsconfig.json --noEmit --emitDeclarationOnly false',
  ],
  '*.{md,json}': 'prettier --write',
};
