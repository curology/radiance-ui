const cjsBundle = {
  path: 'dist/bundle.js',
  maxSize: '100kB',
};

const modulePath = 'dist/bundle-es';

const babelHelpers = {
  path: `${modulePath}/_virtual/**/*.js`,
  maxSize: '3kB',
};

const constants = {
  path: `${modulePath}/constants/**/*.js`,
  maxSize: '5kB',
};

const icons = {
  path: `${modulePath}/icons/**/*.js`,
  maxSize: '5kB',
};

const components = {
  path: `${modulePath}/shared-components/**/*.js`,
  maxSize: '10kB',
};

const utils = {
  path: `${modulePath}/utils/**/*.js`,
  maxSize: '5kB',
};

module.exports = {
  files: [cjsBundle, babelHelpers, constants, icons, components, utils],
};
