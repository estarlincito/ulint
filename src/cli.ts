#!/usr/bin/env node
/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable no-console */

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import { delete as deleteAsync, has, set } from 'cachio';
import { askInstall } from 'pkg-scope';

// Process peer dependencies
const cacheKey = `${process.cwd()}:eslintInstalled`;
if (!has(cacheKey)) {
  const { isInstalled } = await askInstall('eslint');
  if (isInstalled) await set(cacheKey, true);
}

const getConfigPath = () =>
  ['ulint.config.mjs']
    .map((f) => path.resolve(process.cwd(), f))
    .find((f) => fs.existsSync(f));

const configPath = getConfigPath();
const args = process.argv.slice(2);

if (configPath) {
  args.unshift('--config', configPath);
}

const eslint = spawn('eslint', args, { stdio: 'inherit' });

eslint.on('exit', (code) => process.exit(code));

eslint.on('error', async (err) => {
  await deleteAsync(cacheKey);
  console.error(err);
  process.exit(1);
});
