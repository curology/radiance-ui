module.exports = {
  files: [
    // cjs
    {
      path: `dist/cjs/shared-components/!(typography)/**/index.cjs`,
      maxSize: '20kB',
      compression: 'none',
    },
    {
      path: `dist/cjs/shared-components/typography/index.cjs`,
      maxSize: '100kB',
      compression: 'none',
    },
    // esm
    {
      path: `dist/esm/shared-components/!(typography)/**/index.js`,
      maxSize: '20kB',
      compression: 'none',
    },
    {
      path: `dist/esm/shared-components/typography/index.js`,
      maxSize: '100kB',
      compression: 'none',
    },
  ],
};
