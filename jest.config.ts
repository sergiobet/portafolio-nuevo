module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};