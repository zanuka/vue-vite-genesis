import '@testing-library/jest-dom';
import '@testing-library/jest-dom/vitest';
import { configure } from '@testing-library/vue';
import ResizeObserver from 'resize-observer-polyfill';
global.ResizeObserver = ResizeObserver;

configure({
	testIdAttribute: 'data-test-id'
});
