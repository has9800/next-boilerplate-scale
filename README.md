# Next-JS boilerplate

This is a boilerplate template for scalable Next-JS projects with configurations for manageable workflows and developer productivity. The configuration setup includes tools such as:

- **Husky:** pre-commit git hooks
- **Commit-lint:** consistent git commit format enforcing
- **Custom Vscode configs**
- **Storybook**
- **Custom Storybook configs specificlly for Next-JS**
- **Sass**
- **Typescript**
- **Engine and NPM version locking**
- **Authentication** **_[soon]_**
- **Import aliases\***
- **React Context\***
- **Bulk component exports\***
- \*\*Custom Hooks\*\*
- and much more...

### Directory structure

```bash
|
|
|- Husky      [pre-commit configs]
|- Vscode     [vscode configs]
|
|
|- Storybook
|- Stories
|
|- Components
|- Lib
|- Pages
|- Public
|- Styles
|
|
|- prettierrc
|- prettierignore
|- commitlint.config
|- package.json

```

### Commit formats

- **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci:** Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs:** Documentation only changes
- **feat:** A new feature
- **fix:** A bug fix
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test:** Adding missing tests or correcting existing tests

### Steps:

First, install node_modules and dependencies:

```bash
npm install
# or
yarn add
```

Second, run the dev server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
