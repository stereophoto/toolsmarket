<template>
  <nav class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 relative">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center">
              <img
                src="/images/logo.svg"
                alt="ToolMarket Logo"
              />
            </div>
            <span class="text-xl font-semibold text-gray-900 dark:text-white">
              3dTools
            </span>
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:block absolute left-1/2 -translate-x-1/2 transform">
          <div class="flex items-baseline space-x-8">
            <router-link
              to="/"
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === '/' }"
            >
              Главная
            </router-link>
            <router-link
              to="/products"
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === '/products' }"
            >
              Продукция
            </router-link>
            <router-link
              to="/contact"
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === '/contact' }"
            >
              Контакты
            </router-link>
          </div>
        </div>

        <!-- Theme Toggle and WhatsApp -->
        <div class="flex items-center space-x-4">
          <!-- WhatsApp Link -->
          <a
            href="https://t.me/victordigitizes"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-md text-green-600 hover:text-green-700 hover:bg-green-50 dark:text-green-400 dark:hover:text-green-300 dark:hover:bg-green-900/20 transition-colors duration-200"
            title="Связаться через Telegram"
          >
            <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 240 240">
              <path d="M120 0C53.73 0 0 53.73 0 120s53.73 120 120 120 120-53.73 120-120S186.27 0 120 0zm58.42 81.43l-18.77 88.53c-1.41 6.23-5.1 7.77-10.33 4.85l-28.5-21.04-13.74 13.21c-1.52 1.52-2.8 2.8-5.74 2.8l2.06-29.2 53.25-48.16c2.32-2.32-.51-3.64-3.57-1.32l-65.83 41.37-28.38-8.87c-6.15-1.9-6.27-6.15 1.28-9.12l108.86-41.96c5.04-1.9 9.46 1.32 7.36 9.12z"/>
            </svg>
          </a>
          <ThemeToggle />
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="mobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200/20 dark:border-gray-700/20">
        <router-link
          to="/"
          class="mobile-nav-link"
          :class="{ 'mobile-nav-link-active': $route.path === '/' }"
          @click="mobileMenuOpen = false"
        >
          Главная
        </router-link>
        <router-link
          to="/products"
          class="mobile-nav-link"
          :class="{ 'mobile-nav-link-active': $route.path === '/products' }"
          @click="mobileMenuOpen = false"
        >
          Продукция
        </router-link>
        <router-link
          to="/contact"
          class="mobile-nav-link"
          :class="{ 'mobile-nav-link-active': $route.path === '/contact' }"
          @click="mobileMenuOpen = false"
        >
          Контакты
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.nav-link {
  @apply px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200;
}

.nav-link-active {
  @apply text-primary bg-primary/10;
}

.mobile-nav-link {
  @apply block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200;
}

.mobile-nav-link-active {
  @apply text-primary bg-primary/10;
}
</style>
