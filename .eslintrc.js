module.exports = {
  // FIX 1: Telling the linter your code runs in a browser environment.
  // This resolves errors about undefined globals like 'document' and 'window'.
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Set up any other project-specific rules here
  },
};
