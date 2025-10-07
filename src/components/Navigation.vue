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
              ToolMarket
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

        <!-- Theme Toggle -->
        <div class="flex items-center space-x-4">
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
