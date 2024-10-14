# vue-vite-genesis
my own spin on a minimal vue project starter based on mutoe's [vue3-realworld-example-app](https://github.com/mutoe/vue3-realworld-example-app) 

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
- [Vite](https://github.com/vitejs/vite)
- [Composition API](https://composition-api.vuejs.org/)
- [SFC \<script setup> sugar](https://v3.vuejs.org/api/sfc-script-setup.html)
- [Suspense](https://v3.vuejs.org/guide/component-dynamic-async.html#using-with-suspense) (Experimental)
- [Vue router](https://next.router.vuejs.org/)
- [Axios](https://axios-http.com/) with middleware pattern for API requests
- [Pinia](https://pinia.vuejs.org/) for state management
- [TypeScript](https://www.typescriptlang.org/) and [Vue tsc](https://github.com/johnsoncodehk/volar/tree/master/vue-language-tools/vue-tsc) for static analysis
- [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api) for auto generate interface from swagger
- [ESLint](https://eslint.vuejs.org/) and [@mutoe/eslint-config](https://github.com/mutoe/eslint-config) for linting and styling (based on [@anthony/eslint-config](https://github.com/anthony/eslint-config))
- [Vitest](https://vitest.dev/) for unit testing
- [Testing Library](https://testing-library.com/docs/vue-testing-library/intro/) for component testing
- [Cypress](https://docs.cypress.io) for E2E testing
- [GitHub Actions](https://docs.github.com/en/actions) CI/CD

