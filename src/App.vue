<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
	<div>
		<div class="flex justify-center items-center gap-8">
			<img alt="Vue logo" src="./assets/vue-vite-icon.webp" class="w-32 h-32" />
		</div>
		<h1 class="text-center mt-2 mb-2">Vue Vite Genesis</h1>
		<HelloWorld
			msg="A simple starter project for Vue 3, TypeScript, Tailwind CSS, and Vite."
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
