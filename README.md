# uLint ⚡

> _“Lint smarter. Keep your code consistent.”_

**uLint** is a modern **ESLint wrapper** that provides ready-to-use presets for JS, TS, React, and Next.js, while keeping full ESLint flexibility. Perfect for ESM-only projects, monorepos, or any team that wants consistent code without complex config files.

---

## Features

- 🛠 **Presets**: JS, TypeScript, React, Next.js
- ⚡ **Flat Config compatible**: leverage ESLint’s new config system
- 🧩 **Fully customizable**: combine presets and custom rules
- 🌐 **Supports all common file types**: JS, TS, JSX, TSX, MTS, CTS
- 🚀 **ESM-only package**: modern, clean, and tree-shakeable

---

## Installation

```bash
npm install -g ulint
# or
yarn global add ulint
# or
pnpm add -g ulint
```

---

## Basic Usage

```bash
# Lint all files in the project
ulint .
# Lint specific files with auto-fix
ulint src/**/*.{ts,js} --fix
```

> uLint automatically loads configuration from `ulint.config.mjs`.

---

## Configuration

uLint only supports **ESM config files**: `ulint.config.mjs`.

Example `ulint.config.mjs`:

```ts
import { defineConfig } from 'ulint';

export default defineConfig([
  { preset: 'js' }, // Base JS rules
  {
    rules: {
      'no-console': 'warn', // Custom rules
    },
  },
]);
```

- 🎯 **`preset` is optional**: `'js' | 'ts' | 'react' | 'next'`
- 🛠 **Multiple presets and custom rules** can be combined
- ✏️ You can also pass **custom rules** alongside presets
- 📂 Each preset internally applies its rules to the **appropriate file types**
- 🔗 **Higher-level presets automatically include lower-level ones**
  - For example: `react` includes `ts` and `js`

---

### Using ESLint CLI Flags

uLint supports **all standard ESLint CLI flags**:

```bash
ulint src --fix --max-warnings=0
```

---

## License

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
