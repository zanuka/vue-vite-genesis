import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld', () => {
	it('should display header text', () => {
		const msg = 'Hello Vue 3';
		const wrapper = mount(HelloWorld, { props: { msg } });

		expect(wrapper.find('h1').text()).toEqual(msg);
	});

	it('should increment count when button is clicked', async () => {
		const wrapper = mount(HelloWorld, {
			props: { msg: 'Test Message' }
		});

		// Get initial count value (should be 0)
		const button = wrapper.find('button');
		expect(button.text()).toContain('count is: 0');

		// Click the button
		await button.trigger('click');

		// Check if count has been incremented
		expect(button.text()).toContain('count is: 1');

		// Click again and verify
		await button.trigger('click');
		expect(button.text()).toContain('count is: 2');
	});
});
