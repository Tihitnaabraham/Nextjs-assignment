const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // your Next.js app root directory
});

/** @type {import('jest').Config} */
const customJestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // see next step
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '/node_modules/(?!(react-icons|other-esm-module)/)', // transform these esm modules if throw errors
  ],
};

module.exports = createJestConfig(customJestConfig);
