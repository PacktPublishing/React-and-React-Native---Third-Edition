module.exports = {
  extends: [
    'fbjs/strict',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  plugins: ['babel', 'prettier', 'react'],
  rules: {
    'no-console': 'off',
    'one-var': 'off'
  },
  settings: {
    react: {
      version: '16.8.1',
    }
  },
};
