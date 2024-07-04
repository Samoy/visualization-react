module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': [2, 'first'],
    'react/jsx-props-no-multi-spaces': ['error']
  },
}
