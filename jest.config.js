export default {
   transform: {
      '^.+\\.[tj]sx?$': '@swc/jest',
   },
   setupFilesAfterEnv: [
      '<rootDir>/jest.setup.js',
      '@testing-library/jest-dom'
   ],
   transformIgnorePatterns: [
      '/node_modules/(?!color|color-string)/', // Transform ESM dependencies
   ],
   testEnvironment: 'jsdom',
   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
   testPathIgnorePatterns: ['node_modules', 'build'],
};