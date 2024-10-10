<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
	<div>
		<h1>home</h1>
		<img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld
			msg="vue-vite-genesis :: Vue 3 + TypeScript + Tailwind + Vite"
		/>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
:root {
	--color-primary: #959595; /* Fallback primary color */
	--color-secondary: #6b7280; /* Fallback secondary color */
}
</style>
