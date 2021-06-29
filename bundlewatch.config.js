module.exports = {
  files: [
    // cjs
    {
      path: `dist/shared-components/!(typography)/**/index.cjs`,
      maxSize: '20kB',
      compression: 'none',
    },
    {
      path: `dist/shared-components/typography/index.cjs`,
      maxSize: '100kB',
      compression: 'none',
    },
    // esm
    {
      path: `dist/shared-components/!(typography)/**/index.js`,
      maxSize: '20kB',
      compression: 'none',
    },
    {
      path: `dist/shared-components/typography/index.js`,
      maxSize: '100kB',
      compression: 'none',
    },
  ],
};
