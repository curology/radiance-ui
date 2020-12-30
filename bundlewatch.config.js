module.exports = {
  files: [
    {
      path: 'dist/bundle.js',
      maxSize: '100kB',
    },
    {
      path: `dist/bundle-es/shared-components/**/index.js`,
      maxSize: '5kB',
    },
  ],
};
