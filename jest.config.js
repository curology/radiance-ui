module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/shared-components/**', '/src/utils/**', '!src/**/__snapshots__/**.js.snap'],
  snapshotSerializers: ['jest-emotion'],
  setupFilesAfterEnv: ['<rootDir>tests/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/__snapshots__'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/tests/__mocks__/svgMock.js',
  },
};
