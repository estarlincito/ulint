#!/usr/bin/env node
/* eslint-disable no-console */

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

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

eslint.on('error', (err) => {
  console.error(err);
  process.exit(1);
});
