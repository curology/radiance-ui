module.exports = {
  'src/**/*.{ts,tsx}': [
    'eslint --fix',
    () => 'tsc -p tsconfig.json --noEmit --emitDeclarationOnly false',
  ],
  'stories/**/*.{ts,tsx}': [
    'eslint --fix',
    () => 'tsc -p stories/tsconfig.json --noEmit',
  ],
  '*.json': 'prettier --write',
};
