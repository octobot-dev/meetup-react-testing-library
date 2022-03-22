
module.exports = async () => ({
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  resetMocks: false,
});
