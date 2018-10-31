const { defaults } = require('jest-config');

module.exports = {
  setupTestFrameworkScriptFile: "<rootDir>tests/setupTests.js",
  testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, "/lib/"],
};
