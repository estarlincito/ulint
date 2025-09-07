import parser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';
import * as ts from 'typescript-eslint';

import { jsPreset } from './js-preset.js';

const files = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'];

const tseslintRecommended = ts.configs.recommended.flatMap((cfg) => ({
  files,
  ...cfg,
}));

const tseslintStrict = ts.configs.strict.flatMap((cfg) => ({
  files,
  ...cfg,
}));

export const tsPreset = defineConfig([
  ...jsPreset,
  ...tseslintRecommended,
  ...tseslintStrict,
  {
    files,
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        project: true,
        sourceType: 'module',
        tsconfigRootDir: process.cwd(),
      },
    },

    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-base-to-string': 'warn',
      '@typescript-eslint/no-duplicate-type-constituents': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-meaningless-void-operator': 'warn',
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/prefer-find': 'warn',
      '@typescript-eslint/prefer-includes': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/prefer-readonly': 'warn',
      '@typescript-eslint/require-array-sort-compare': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['**/*.ts'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: true,
        },
      },
    },
  },
]);
