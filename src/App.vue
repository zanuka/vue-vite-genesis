<template>
  <AppHeader />
  <div>
    <h1>home</h1>
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <HelloWorld msg="vue-vite-genesis :: Vue 3 + TypeScript + Vite" />
  </div>
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HelloWorld from './components/HelloWorld.vue'
import AppFooter from './components/AppFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    HelloWorld,
    AppFooter,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
