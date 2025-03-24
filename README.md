# vue-vite-genesis

my version of a minimal vue + vite + tailwind project starter based on mutoe's [vue3-realworld-example-app](https://github.com/mutoe/vue3-realworld-example-app) 

## Features

- 🎨 **Modern UI with Tailwind CSS**
  - Clean, responsive design
  - Beautiful component styling
  - Dark mode support
  - Custom animations and transitions

- 🛠️ **Development Tools**
  - [Vite](https://github.com/vitejs/vite) for lightning-fast development
  - [TypeScript](https://www.typescriptlang.org/) for type safety
  - [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
  - [ESLint](https://eslint.vuejs.org/) and [Prettier](https://prettier.io/) for code quality
  - [Vitest](https://vitest.dev/) for unit testing
  - [Cypress](https://docs.cypress.io) for E2E testing

- 📦 **Core Dependencies**
  - [Vue 3](https://v3.vuejs.org/) with Composition API
  - [Vue Router](https://next.router.vuejs.org/) for routing
  - [Pinia](https://pinia.vuejs.org/) for state management
  - [Axios](https://axios-http.com/) for API requests
  - [@vueuse/core](https://vueuse.org/) for composables

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm serve

# Run tests
pnpm test
```

## Development Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm serve` - Preview production build
- `pnpm test` - Run all tests
- `pnpm test:unit` - Run unit tests
- `pnpm test:unit:vitest:ui` - Run unit tests with UI
- `pnpm lint` - Run linting
- `pnpm clean:cache` - Clean cache
- `pnpm clean:lib` - Clean dependencies

## Project Structure

```
src/
├── assets/        # Static assets
├── components/    # Vue components
├── composables/   # Vue composables
├── layouts/       # Layout components
├── router/        # Vue Router configuration
├── stores/        # Pinia stores
├── styles/        # Global styles
├── types/         # TypeScript types
└── views/         # Page components
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

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

