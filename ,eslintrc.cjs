// .eslintrc.cjs
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  env: {
    node: true, // Enable Node.js global variables and Node.js scoping.
    es2022: true, // Add globals for ES2022+ features
  },
  parserOptions: {
    ecmaVersion: 'latest', // Use the latest ECMAScript standard
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // Add specific overrides here if needed
    // e.g., 'prettier/prettier': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow inferred return types
  },
  overrides: [
    // Configuration for test files
    {
      files: ['**/*.test.ts', '**/*.spec.ts'],
      env: {
        // Add test environment globals if needed (e.g., jest: true, vitest: true)
        // For vitest, globals are often injected, check vitest config
      },
      rules: {
        // Relax rules for test files if necessary
        // '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'coverage/',
    'docs/',
    '.eslintrc.cjs',
    'vite.config.ts',
    'vitest.config.ts',
    'tsup.config.ts',
    '*.md', // Optional: ignore markdown files
  ],
};