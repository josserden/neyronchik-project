module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'next',
    'plugin:react/recommended',
  ],
  env: {
    node: true,
    browser: true,
  },
  globals: {
    REACT_APP_ENV: true,
  },
  rules: {
    'import/no-anonymous-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/prop-types': 'off',
    eqeqeq: 'off',
  },
};
