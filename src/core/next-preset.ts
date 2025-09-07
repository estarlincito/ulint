import pluginNext from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';

import type { Config } from '@/config.js';

import { reactPreset } from './react-preset.js';

export const nextPreset = defineConfig([
  ...reactPreset,

  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      '@next/next': pluginNext,
    },

    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
] as Config[]);
