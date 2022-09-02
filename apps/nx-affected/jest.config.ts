module.exports = {
  displayName: 'nx-affected-nx-affected',
  preset: 'react-native',
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  moduleNameMapper: {
    '.svg': '@nrwl/react-native/plugins/jest/svg-mock',
  },
};
