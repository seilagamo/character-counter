// @ts-check

import eslint from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.{js,mjs}'],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      // turn off other type-aware rules
      'other-plugin/typed-rule': 'off',

      // turn off rules that don't apply to JS code
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: pluginReact,
    },
  },
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
    },
  },
  eslintConfigPrettier
);
