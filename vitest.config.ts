import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config.mjs';

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			setupFiles: ['./test/vitest-setup.ts'],
			includeSource: ['src/**/*.ts'],
			environment: 'jsdom',
			include: [
				'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
				'test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
			],
			coverage: {
				provider: 'v8',
				reporter: ['text', 'json', 'html'],
				reportsDirectory: './coverage'
			},
			exclude: ['node_modules', 'dist', '.idea', '.git', '.cache', 'e2e/*']
		}
	})
);
