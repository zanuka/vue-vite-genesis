/* eslint-disable @typescript-eslint/ban-types */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMeta {
  env: {
    BASE_URL: string
    VITE_API_HOST: string
  }
}
