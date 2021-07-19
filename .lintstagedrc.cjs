module.exports = {
  '*.svg': ['node ./scripts/imagemin.mjs'],
  'src/**/*.{ts,tsx}': [
    'eslint --fix',
    () => 'tsc -p tsconfig.json --noEmit --emitDeclarationOnly false',
  ],
  'stories/**/*.{ts,tsx}': [
    'eslint --fix',
    () => 'tsc -p stories/tsconfig.json --noEmit',
  ],
  '*.json': 'prettier --write',
  '*.yml': 'prettier --write',
  'yarn.lock': 'yarn run yarn-deduplicate',
};
