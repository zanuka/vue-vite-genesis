import { mergeConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';
import viteConfig from './vite.config.mjs';

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			setupFiles: ['./test/vitest-setup.ts'],
			includeSource: ['src/**/*.ts'],
			environment: 'jsdom',
			coverage: {
				provider: 'v8',
				reporter: ['text', 'json', 'html'],
				reportsDirectory: './coverage'
			},
			exclude: [...configDefaults.exclude, 'e2e/*']
		}
	})
);
