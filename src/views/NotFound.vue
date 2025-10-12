<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
    <div class="max-w-md mx-auto text-center px-4">
      <!-- 404 Icon -->
      <div class="mb-8">
        <div class="relative">
          <!-- Large 404 Text -->
          <h1 class="text-9xl font-bold text-gray-200 dark:text-gray-700 select-none">
            404
          </h1>
          
          <!-- Floating Tool Icon -->
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Страница не найдена
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          К сожалению, запрашиваемая страница не существует или была перемещена.
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-4">
        <router-link
          to="/"
          class="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-105"
        >
          <div class="flex items-center justify-center space-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span>На главную</span>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Background Decoration -->
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
      <div class="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-accent/10 rounded-full animate-pulse" style="animation-delay: 4s;"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from '../components/Navigation.vue'
</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(1deg);
  }
  50% {
    transform: translateY(-15px) rotate(-1deg);
  }
  75% {
    transform: translateY(-10px) rotate(1deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Smooth hover effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
