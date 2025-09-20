module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['prettier'],
  ignores: ['dist/*', 'node_modules/*', 'android/*', 'ios/*'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'eol-last': ['error', 'never'],
  },
}
