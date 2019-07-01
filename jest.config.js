module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/shared-components/**',
    '/src/utils/**',
    '!src/**/__snapshots__/**.js.snap',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/tests/__mocks__/svgMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>tests/setupTests.js'],
  snapshotSerializers: ['jest-emotion'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/__snapshots__'],
};
