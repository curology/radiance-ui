module.exports = {
  '!(style|styles|test).js': filenames => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint --fix ${filenames.join(' ')}`,
    `git add ${filenames.join(' ')}`,
  ],
  '(style|styles|test).js': filenames => [
    `prettier --write ${filenames.join(' ')}`,
    `git add ${filenames.join(' ')}`,
  ],
  'src/**/*.{ts,tsx}': filenames => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint --fix ${filenames.join(' ')}`,
    'yarn run tsc -p tsconfig.json',
    `git add ${filenames.join(' ')}`,
  ],
  '*.{md,json}': filenames => [
    `prettier --write ${filenames.join(' ')}`,
    `git add ${filenames.join(' ')}`,
  ],
};
