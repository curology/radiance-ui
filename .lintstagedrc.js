module.exports = {
  'src/**/*.{js,ts,tsx}': [
    'prettier --write',
    'eslint --fix',
    () => 'tsc -p tsconfig.json --noEmit --emitDeclarationOnly false',
  ],
  'stories/**/*.{ts,tsx}': [
    'prettier --write',
    'eslint --fix',
    () => 'tsc -p stories/tsconfig.json --noEmit',
  ],
  '*.json': 'prettier --write',
};
