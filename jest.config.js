const { defaults } = require('jest-config');

module.exports = {
  snapshotSerializers: ['jest-emotion'],
  setupFilesAfterEnv: ["<rootDir>tests/setupTests.js"],
  testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, "/lib/"],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/tests/__mocks__/svgMock.js',
  },
};
