# React App Boilerplate

## Quick Start

### `yarn && yarn start` Install and Run Storybook

## Build

### `yarn build` Build for production

### `yarn serve` Build for development

### `yarn build:storybook` Build docs

## Run Tests

### `yarn test` Run Jest on project

### `yarn test:watch` Keep Jest running

### `yarn test:coverage` Run Test Coverage

### `yarn test:size` Show bundle size

### `yarn test:lint` Lint project

### `yarn test:lint-fix` Lint project and autofix

## Features

- React v16.10.2
- Styled Components v4.4.0
- Webpack
- Babel
- ESLint
- Jest
- Hot Module Replacement

Husky Config

```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "yarn test"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss}": [
      "eslint ./src --fix",
      "git add"
    ]
  }
```
