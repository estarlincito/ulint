import { defineConfig as config } from 'eslint/config';

import { jsPreset } from './core/js-preset.js';
import { nextPreset } from './core/next-preset.js';
import { reactPreset } from './core/react-preset.js';
import { tsPreset } from './core/ts-preset.js';

export type ConfigWithExtendsArray = Parameters<typeof config>;
export type Config = ReturnType<typeof config>[number];
export type Preset = 'js' | 'ts' | 'react' | 'next';

export interface ConfigWithPreset extends Config {
  /**
   * Apply a predefined preset of ESLint rules.
   *
   * - `js`: js rules for any JS project.
   * - `ts`: ts rules for any TS project.
   * - `react`: React-specific rules.
   * - `next`: Next.js-specific rules.
   */
  preset?: Preset;
}

export type ConfigWithExtendsArrayWithPreset = (
  | ConfigWithPreset
  | ConfigWithPreset[]
)[];

const presets: Record<string, Config[]> = {
  js: jsPreset,
  next: nextPreset,
  react: reactPreset,
  ts: tsPreset,
};

/**
 * Custom wrapper for ESLint `defineConfig`.
 *
 * Allows the user to pass a `preset` to automatically include predefined rule sets.
 *
 * @example
 * ```ts
 * import { defineConfig } from "ulint";
 *
 * export default defineConfig({
 *   preset: "react",
 *   rules: {
 *     "no-console": "warn",
 *   },
 * });
 * ```
 *
 * @param {...ConfigWithExtendsArrayWithPreset} args - One or more ESLint config objects, optionally with a `preset`.
 * @returns {Config[]} Final merged ESLint configuration array.
 */
export const defineConfig = (
  ...args: ConfigWithExtendsArrayWithPreset
): Config[] => {
  const configArray = args.flat();
  const expandedConfigs: Config[] = [];

  for (const conf of configArray) {
    const { preset, ...rest } = conf;

    if (preset) {
      const presetConfigs = presets[preset];

      if (presetConfigs) {
        // Flatten the preset configs and add them to the result
        expandedConfigs.push(...presetConfigs.flat());
      }

      // Add the original config without the preset property
      if (Object.keys(rest).length > 0) {
        expandedConfigs.push(rest);
      }
    } else {
      expandedConfigs.push(rest);
    }
  }

  return config(expandedConfigs);
};
