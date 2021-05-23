import { createApp } from 'vue'
import App from './App.vue'

import Harlem from '@harlem/core'

import { router } from './router'

import registerGlobalComponents from './plugins/global-components'

const app = createApp(App)
app.use(router)
app.use(Harlem)

registerGlobalComponents(app)

app.mount('#app')
