module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"]
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      webpack: { config: path.join(__dirname, '/webpack.config.js') },
      typescript: {
        project: './tsconfig.json'
      }
    },
  }
}
