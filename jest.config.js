module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/shared-components/**',
    '/src/utils/**',
    '!src/**/__snapshots__/*.tsx.snap',
  ],
  coverageThreshold: {
    global: {
      branches: 47,
      functions: 66,
      lines: 70,
      statements: 69,
    },
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '\\.svg': '<rootDir>/tests/__mocks__/svgrMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>tests/setupTests.ts'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/__snapshots__'],
};
