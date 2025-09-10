/* eslint-disable @typescript-eslint/ban-ts-comment */
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import Import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
// @ts-expect-error
import pluginPromise from 'eslint-plugin-promise';
import safeguard from 'eslint-plugin-safeguard';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
// @ts-expect-error
import sortKeys from 'eslint-plugin-sort-keys-fix';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

export const jsPreset = defineConfig([
  Import.flatConfigs.recommended,
  eslint.configs.recommended,
  eslintConfigPrettier,
  pluginPromise.configs['flat/recommended'],
  { ignores: ['**/node_modules/**', '**/dist/**', '**/temp/**', '**/tpm/**'] },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
      sourceType: 'module',
    },
    plugins: {
      prettier,
      safeguard,
      'simple-import-sort': simpleImportSort,
      'sort-keys-fix': sortKeys,
      'unused-imports': unusedImports,
    },

    rules: {
      'arrow-body-style': ['warn', 'as-needed'],
      'consistent-return': 'error',
      eqeqeq: 'error',
      'import/no-cycle': [
        'error',
        {
          allowUnsafeDynamicCyclicDependency: false,
          ignoreExternal: true,
          maxDepth: 2,
        },
      ],
      'import/no-unresolved': 'error',
      'max-len': ['off', { code: 80 }],
      'no-await-in-loop': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-implicit-coercion': 'warn',
      'no-labels': 'error',
      'no-lonely-if': 'warn',
      'no-nested-ternary': 'warn',
      'no-new-func': 'error',
      'no-param-reassign': ['warn', { props: true }],
      'no-plusplus': 'warn',
      'no-redeclare': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['**/../*'],
              message: 'Use absolute imports with @alias aliases instead',
            },
          ],
        },
      ],
      'no-return-await': 'error',
      'no-shadow': 'error',
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-unused-labels': 'error',
      'no-useless-constructor': 'warn',
      'no-var': 'error',
      'object-shorthand': 'error',
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', next: 'return', prev: 'block' },
        { blankLine: 'always', next: 'return', prev: 'const' },
        { blankLine: 'always', next: 'function', prev: '*' },
      ],
      'prefer-arrow-callback': 'error',
      'prefer-destructuring': [
        'warn',
        {
          array: false,
          object: true,
        },
      ],
      'prefer-template': 'error',
      'prettier/prettier': 'error',
      'promise/always-return': 'error',
      'promise/catch-or-return': 'error',
      'safeguard/no-raw-error': 'warn',
      'safeguard/no-self-assignments': 'error',
      'safeguard/trycatch-ensurer': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'sort-keys': 'off',
      //       'no-restricted-imports': [
      //         'error',
      //         {
      //           patterns: [
      //             {
      //               group: ['**/../*'],
      //               message: 'Use absolute imports with @alias aliases instead',
      //             },
      //           ],
      //         },
      //       ],
      'sort-keys-fix/sort-keys-fix': [
        'warn',
        'asc',
        { caseSensitive: false, natural: true },
      ],

      'spaced-comment': ['warn', 'always'],

      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },
    settings: {
      'import/resolver': {
        node: true,
      },
    },
  },
]);
