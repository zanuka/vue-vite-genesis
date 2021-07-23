declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>>
  export default component
}

interface ImportMeta {
  env: {
    BASE_URL: string
    VITE_API_HOST: string
  }
}
