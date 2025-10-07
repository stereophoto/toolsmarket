<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore } from './store/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
@import './assets/tailwind.css';

html {
  scroll-behavior: smooth;
}
</style>
