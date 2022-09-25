# Next-JS boilerplate

This is a boilerplate template for scalable Next-JS projects with configurations for manageable workflows and developer productivity. The configuration setup includes tools such as:

- **Husky:** pre-commit git hooks
- **GitHub Actions:** run tests for PRs and merges (CI)
- **Commit-lint:** consistent git commit format enforcing
- **Custom Vscode configs**
- **Storybook**
- **Custom Storybook configs specificlly for Next-JS**
- **Sass**
- **Import aliases**
- **React Context**
- **Bulk component exports**
- **Custom Hooks**
- **Typescript**
- **React Testing Library** - [Unit testing]
- **Playwright** - [End-to-end testing]
- **Engine and NPM version locking**
- **Authentication** **_[soon]_**
- and much more...

Optionally, you can opt to remove React Context and drop in Redux or any other state management library, add Axios or GraphQL, Tailwind, Cypress instead of Playwright, etc, and you would have a production ready NextJS app that can easily scale, and easy to work on by many developers. This is just a highly opinionated setup for my ideal workflow.

### Directory structure

```bash
|
|
|- Husky      [pre-commit configs]
|- Vscode     [vscode configs]
|
| - __mocks__
| - __test__
|
|- Storybook
|- Stories
|
| - context
| - custom_hooks
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

Open `http://localhost:3000` with your browser to see the result.
