# vue-vite-genesis
my own spin on a minimal vue project starter based off [vue3-realworld-example-app](https://github.com/mutoe/vue3-realworld-example-app) 

## setup

```zsh
```shell script
pnpm install

# Development
pnpm dev

# Build dist
pnpm build

# Run unit tests
pnpm test:unit
pnpm test:unit:ci

# Run E2E tests
pnpm test:e2e
pnpm test:e2e:ci

```

## main features
- [x] [Vite](https://github.com/vitejs/vite)
- [x] [Composition API](https://composition-api.vuejs.org/)
- [x] [SFC \<script setup> sugar](https://v3.vuejs.org/api/sfc-script-setup.html)
- [x] [Suspense](https://v3.vuejs.org/guide/component-dynamic-async.html#using-with-suspense) (Experimental)
- [x] [Vue router](https://next.router.vuejs.org/)
- [x] [Pinia](https://pinia.vuejs.org/) for state management
- [x] [TypeScript](https://www.typescriptlang.org/) and [Vue tsc](https://github.com/johnsoncodehk/volar/tree/master/vue-language-tools/vue-tsc) for static analysis
- [x] [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api) for auto generate interface from swagger
- [x] [ESLint](https://eslint.vuejs.org/) and [@mutoe/eslint-config](https://github.com/mutoe/eslint-config) for linting and styling (based on [@anthony/eslint-config](https://github.com/anthony/eslint-config))
- [x] [Vitest](https://vitest.dev/) for unit testing
- [x] [Testing Library](https://testing-library.com/docs/vue-testing-library/intro/) for component testing
- [x] [Cypress](https://docs.cypress.io) for E2E testing
- [x] [GitHub Actions](https://docs.github.com/en/actions) CI/CD
## dependencies
  - [vue](https://v3.vuejs.org/) (^3.3.4) :: Progressive JavaScript framework
  - [vue-router](https://router.vuejs.org/) (^4.2.2) :: Official Vue router

## devDependencies
  - [@babel/core](https://babeljs.io/) (^7.22.5) :: JavaScript compiler core
  - [@types/jest](https://jestjs.io/) (^29.5.2) :: TypeScript definitions for Jest
  - [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/) (^5.59.11) :: TypeScript ESLint plugin
  - [@typescript-eslint/parser](https://typescript-eslint.io/) (^5.59.11) :: TypeScript ESLint parser
  - [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue) (^4.2.3) :: Vue 3 plugin for Vite
  - [@vue/compiler-sfc](https://github.com/vuejs/core/tree/main/packages/compiler-sfc) (^3.3.4) :: Vue 3 SFC compiler
  - [@vue/test-utils](https://test-utils.vuejs.org/) (^2.3.2) :: Vue.js testing utilities
  - [babel-jest](https://github.com/facebook/jest) (^29.5.0) :: Jest plugin for Babel
  - [concurrently](https://github.com/open-cli-tools/concurrently) (^8.2.0) :: Run multiple commands concurrently
  - [eslint](https://eslint.org/) (^8.42.0) :: JavaScript linter
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) (^8.8.0) :: ESLint config for Prettier
  - [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript) (^35.0.0) :: TypeScript ESLint config
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) (^2.27.5) :: ESLint plugin for import/export syntax
  - [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) (^11.1.0) :: ESLint plugin for Node.js
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) (^4.2.1) :: ESLint plugin for Prettier
  - [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise) (^6.1.1) :: ESLint plugin for promises
  - [eslint-plugin-vue](https://eslint.vuejs.org/) (^9.14.1) :: ESLint plugin for Vue.js
  - [jest](https://jestjs.io/) (^29.5.0) :: JavaScript testing framework
  - [jsdom](https://github.com/jsdom/jsdom) (^22.1.0) :: JavaScript implementation of web standards
  - [lint-staged](https://github.com/okonet/lint-staged) (^13.2.2) :: Run linters on git staged files
  - [prettier](https://prettier.io/) (^2.8.8) :: Code formatter
  - [prettier-eslint](https://github.com/prettier/prettier-eslint) (^15.0.1) :: Prettier and ESLint integration
  - [rollup-plugin-analyzer](https://github.com/doesdev/rollup-plugin-analyzer) (^4.0.0) :: Rollup bundle analyzer
  - [ts-jest](https://kulshekhar.github.io/ts-jest) (^29.1.0) :: TypeScript preprocessor for Jest
  - [typescript](https://www.typescriptlang.org/) (^5.1.3) :: TypeScript language
  - [vite](https://vitejs.dev/) (^4.3.9) :: Next-generation frontend tooling
  - [vue-jest](https://github.com/vuejs/vue-jest) (^5.0.0-alpha.10) :: Jest transformer for Vue components
  - [vue-tsc](https://github.com/johnsoncodehk/volar/tree/master/packages/vue-tsc) (^1.6.5) :: TypeScript compiler for Vue
