# vue-vite-genesis
a vue project starter based off [vue3-realworld-example-app](https://github.com/mutoe/vue3-realworld-example-app) but with a simpler setup and some other mods

## setup

```shell script
yarn install

# Development
yarn dev

# Build dist
yarn build

# Run unit tests
yarn test:unit

# Run E2E tests
yarn cypress open # with GUI
yarn test:e2e # headless
```
## dependencies
  - [vue](https://v3.vuejs.org/) :: v3
  - [vue-router](https://router.vuejs.org/) :: official Vue router
  - [vite](https://github.com/vitejs/vite) :: no-bundler alternative to webpack
  - [harlem](https://madewithvuejs.com/harlem) :: simple state management (1KB)
  - [insane](https://www.npmjs.com/package/insane) :: html sanitizer
  - [marked](https://github.com/markedjs/marked) :: markdown parser
  - [jest](https://jestjs.io/) :: testing framework
  - [cypress](https://docs.cypress.io/guides/overview/why-cypress) :: next-gen testing tool
