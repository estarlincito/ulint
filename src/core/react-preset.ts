import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

import { tsPreset } from './ts-preset.js';

const files = ['**/*.jsx', '**/*.tsx'];

export const reactPreset = defineConfig([
  ...tsPreset,
  { files, ...pluginReact.configs.flat.recommended },
  {
    files,
    ...pluginReactHooks.configs['recommended-latest'],
  },
  {
    files,
    rules: {
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': [
        'error',
        { children: 'never', props: 'never' },
      ],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-pascal-case': 'error',
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          ignoreCase: true,
          noSortAlphabetically: false,
          shorthandFirst: true,
        },
      ],
      'react/no-array-index-key': 'warn',
      'react/no-danger': 'error',
      'react/no-unused-state': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'warn',
    },
    settings: { react: { version: 'detect' } },
  },
]);
