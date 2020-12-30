module.exports = {
  files: [
    {
      path: 'dist/bundle.js',
      maxSize: '1000kB',
      compression: 'none',
    },
    {
      path: `dist/bundle-es/shared-components/!(typography)/index.js`,
      maxSize: '20kB',
      compression: 'none',
    },
    {
      path: `dist/bundle-es/shared-components/typography/index.js`,
      maxSize: '100kB',
      compression: 'none',
    },
  ],
};
