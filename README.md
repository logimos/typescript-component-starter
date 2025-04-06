# <Your Library Name> (`@<your-github-username>/<your-repo-name>`)

[![CI Status](https://github.com/<your-github-username>/<your-repo-name>/actions/workflows/ci.yml/badge.svg)](https://github.com/<your-github-username>/<your-repo-name>/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/<your-github-username>/<your-repo-name>/graph/badge.svg?token=YOUR_CODECOV_TOKEN_HERE)](https://codecov.io/gh/<your-github-username>/<your-repo-name>)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/<your-github-username>/<your-repo-name>?label=GitHub%20Package)](https://github.com/<your-github-username>/<your-repo-name>/pkgs/npm/<your-repo-name>)

Brief description of your module. What problem does it solve?

## Features

- Modern TypeScript codebase
- Dual CJS/ESM builds using `tsup`
- Unit tested with Vitest
- Code coverage via Codecov
- Linting and formatting with ESLint & Prettier
- Pre-commit hooks with Husky & lint-staged
- Nix environment for reproducible setup
- CI/CD via GitHub Actions
- Published exclusively to GitHub Packages
- Vite-powered playground for easy testing
- Auto-generated documentation with Typedoc

## Installation

This package is published to GitHub Packages. You need to configure your `.npmrc` file to install it.

1.  **Authenticate with GitHub Packages:**
    Ensure you have a Personal Access Token (PAT) with `read:packages` scope. Refer to [GitHub Docs](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token).

2.  **Configure `.npmrc`:**
    Create or edit `.npmrc` in your project's root (or your user home directory `~/.npmrc`):

    ```
    @<your-github-username>:registry=[https://npm.pkg.github.com/](https://npm.pkg.github.com/)
    //[npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT](https://www.google.com/search?q=https://npm.pkg.github.com/:_authToken%3DYOUR_GITHUB_PAT)
    ```

    Replace `<your-github-username>` and `YOUR_GITHUB_PAT`.

3.  **Install the package:**

    ```bash
    npm install @<your-github-username>/<your-repo-name>
    # or
    yarn add @<your-github-username>/<your-repo-name>
    # or
    pnpm add @<your-github-username>/<your-repo-name>
    ```

## Usage

````typescript
// ESM Import
import { someFunction } from '@<your-github-username>/<your-repo-name>';

// CommonJS Require
// const { someFunction } = require('@<your-github-username>/<your-repo-name>');

const result = someFunction('World');
console.log(result); // Output based on your function

## Development Setup

1. Clone the repository:

```Bash
git clone [https://github.com/](https://github.com/)<your-github-username>/<your-repo-name>.git
cd <your-repo-name>
````

2. Enter the nix shell (optional but recommended):

```Bash
nix-shell
```

3. Install nodejs alternative:

```bash
nvm install 22
nvm use 22
# Or check .nvmrc
nvm use
```

4. Install dependencies:

```bash
pnpm install
```

## Developer Workflow

- Run the playground: Start the Vite development server for interactive development.

```bash
pnpm dev:playground
```

- Run the example app (optional):

```bash
pnpm dev:example
```

- Check linting and formatting:

```bash
pnpm lint
```

- Format code:

```bash
pnpm format
```

- Run tests:

```bash
pnpm test
```

- Run tests with coverage:

```bash
pnpm test:coverage
```

- Run tests in watch mode:

```bash
pnpm test:watch
```

- Create production CJS/ESM builds in the `dist` directory:

```bash
pnpm build
```

- Generate Documentation: in the `docs` directory:

```bash
pnpm docs
```

## Publishing

Publishing is handled automatically by the `release.yml` GitHub Actions workflow when a new release is published on GitHub.

### Manual Publishing

1. Ensure you are logged in to GitHub Packages via `npm login`.

```bash
npm login --registry=[https://npm.pkg.github.com](https://npm.pkg.github.com) --scope=@<your-github-username>
```

2. Increment the version in `package.json` according to [semver](https://semver.org/).

3. Build the package:

```bash
pnpm build
```

4. Create a new release on GitHub.

```bash
pnpm publish --access public (or --access restricted)
```

## Playground

The `playground` directory is a Vite-powered development environment for testing and showcasing your library.

- Running the Playground

```bash
pnpm dev:playground
```

- Local Development `http://localhost:3000`

- Usage: Modify the `src/main.ts` file to test changes to the library. Should trigger a hot module reload.

## Contributing

Please refer to `CONTRIBUTING.md` (if available) for guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Important Notes

1. **Important:** Replace placeholders (`<your-github-username>`, `<your-repo-name>`, `<Your Library Name>`, `YOUR_CODECOV_TOKEN_HERE`) in the `README.md`.
2. Create a 'LICENSE' file in the root of the project. Create a `LICENSE` file and paste the contents of the MIT license (you can easily find templates online, e.g., [choosealicense.com](https://choosealicense.com/licenses/mit/)).
