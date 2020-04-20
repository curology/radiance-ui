module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/shared-components/**',
    '/src/utils/**',
    '!src/**/__snapshots__/*.js.snap',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 66,
      lines: 75,
      statements: 75,
    },
  },
  moduleDirectories: ['node_modules', './'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/tests/__mocks__/svgMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>tests/setupTests.js'],
  snapshotSerializers: ['jest-emotion'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/__snapshots__'],
};
