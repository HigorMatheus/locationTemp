// react-native-linear-gradient
const esModules = [
  // 'react-native-linear-gradient',
  '@react-native-community/geolocation',
  '@react-native',
  'react-native',
  'react-native-(.*)',
  'jest-',
  '@react-native-community/(.*)',
  '@react-native-community',
].join('|');
module.exports = {
  preset: 'react-native',
  collectCoverageFrom: [
    'src/**/*.tsx',
    'src/App.tsx',
    '!src/__test__/**/*.tsx?',
    // '!src/**/*.spec.tsx',
    // '!src/**/index.ts',
  ],
  transformIgnorePatterns: [`node_modules/(?!(${esModules})/)`],
  testTimeout: 10000,
};
