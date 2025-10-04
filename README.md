# uLint ⚡

[![NPM version](https://img.shields.io/npm/v/ulint.svg?style=flat)](https://npmjs.org/package/ulint)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

> _“Lint smarter. Keep your code consistent.”_

---

## Features ✨

- 🔍 Automatically detects and uses `ulint.config.mjs` for ESLint configuration.
- ⚡ **Flat Config compatible**: leverage ESLint’s new config system
- 🔗 Seamlessly integrates with ESLint CLI, passing through all arguments.
- ⚡ Lightweight and fast for linting in Node.js environments.

---

## Installation 📲

Get started quickly! Install `ulint` with your favorite package manager:

```bash
npm install ulint
# or
pnpm add ulint
# or
yarn add ulint
```

> Note: `ulint` requires `eslint` as a peer dependency. It will prompt to install `eslint` if not found in your project.

---

## Usage 🎉

Use `ulint` to lint your code with ease, either via CLI or programmatically.

### API

uLint only supports **ESM config files**: `ulint.config.mjs`.

- **`defineConfig`** (function)  
  📝 Helper to define ESLint configurations with type safety.

  ```typescript
  // ulint.config.mjs
  import { defineConfig } from 'ulint';

  export default defineConfig({
    rules: {
      'no-console': 'warn',
    },
  });
  ```

### CLI

uLint supports **all standard ESLint CLI flags**:

```bash
# Lint all JavaScript and TypeScript files
ulint . --ext .js,.ts

# Lint specific directories
ulint src/ --fix
```

---

## License

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
