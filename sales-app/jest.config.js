const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', 
});

/** @type {import('jest').Config} */
const customJestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '/node_modules/(?!(react-icons|other-esm-module)/)', 
  ],
};

module.exports = createJestConfig(customJestConfig);
