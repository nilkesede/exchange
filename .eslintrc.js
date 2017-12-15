module.exports = {
  extends: [
    'xo-react/space',
    'xo-space/esnext',
    'plugin:unicorn/recommended'
  ],
  plugins: [
    'unicorn'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
};
