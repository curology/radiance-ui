module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/shared-components/**',
    '/src/utils/**',
    '!src/**/__snapshots__/*.tsx.snap',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 66,
      lines: 74,
      statements: 74,
    },
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '\\.svg': '<rootDir>/tests/__mocks__/svgrMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>tests/setupTests.ts'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__snapshots__',
    '/dist*',
  ],
  timers: 'modern',
};
