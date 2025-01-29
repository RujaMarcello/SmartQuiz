module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['prettier'],
  extends: ['airbnb', 'prettier'],

  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'prettier/prettier': 'error',
  },
};
