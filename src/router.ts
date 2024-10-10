import { createRouter, createWebHashHistory, RouteParams } from 'vue-router';
import HomePage from './pages/HomePage.vue';

export type AppRouteNames = 'Home';

export const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			name: 'Home',
			path: '/',
			component: HomePage
		}
	]
});

export function routerPush(
	name: AppRouteNames,
	params?: RouteParams
): ReturnType<typeof router.push> {
	if (params !== undefined) {
		return router.push({
			name,
			params
		});
	} else {
		return router.push({ name });
	}
}
