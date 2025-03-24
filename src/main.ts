import { createApp, type App as VueApp } from 'vue';
import App from './App.vue';
import './index.css';

import { router } from './router';
import { getAxiosInstance } from './utils/api';

import registerGlobalComponents from './plugins/global-components';

// Extend the ComponentCustomProperties interface
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: ReturnType<typeof getAxiosInstance>
  }
}

const app = createApp(App);
app.use(router);

registerGlobalComponents(app);

app.provide('$axios', getAxiosInstance());
app.mount('#app');
