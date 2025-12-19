<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Navigation />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Связаться с нами
        </h1>
      </div>

      <!-- Sellers Grid -->
      <div
        class="grid gap-8 mb-16"
        :class="{
          'grid-cols-1 justify-items-center': sellers.length === 1,
          'grid-cols-1 lg:grid-cols-2': sellers.length > 1
        }"
      >
        <div
          v-for="seller in sellers"
          :key="seller.id"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-xl"
        >
          <!-- Contact Information -->
          <div class="p-6 space-y-4">
            <!-- Phone -->
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Телефон</p>
                <a :href="`tel:${seller.phone}`" class="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors">
                  {{ seller.phone }}
                </a>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Почта</p>
                <a :href="`mailto:${seller.email}`" class="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors">
                  {{ seller.email }}
                </a>
              </div>
            </div>

            <!-- Address -->
            <div class="flex items-start space-x-3">
              <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Адрес</p>
                <p class="text-lg font-semibold text-gray-900 dark:text-white">
                  {{ seller.address }}
                </p>
              </div>
            </div>

            <!-- Working Hours -->
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Часы работы</p>
                <p class="text-lg font-semibold text-gray-900 dark:text-white">
                  {{ seller.workingHours }}
                </p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-3 pt-4">
              <a :href="`tel:${seller.phone}`" class="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-center">
                Позвонить
              </a>
              <a :href="`mailto:${seller.email}`" class="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-center">
                Написать на почту
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Секция карты -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Найдите нас на карте
          </h2>
        </div>
        <div class="w-full h-[420px] bg-gray-100 dark:bg-gray-700 flex items-center justify-center relative">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aec46d85da31486a6b7580e3f5bdbd607faf35a3247b480ffdf6a5357a54295b5&amp;source=constructor"
            class="w-full h-full rounded-b-2xl"
            frameborder="0"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useSellersStore } from '../store/sellers'
import Navigation from '../components/Navigation.vue'

const sellersStore = useSellersStore()
const sellers = sellersStore.sellers

onMounted(() => {
  // Initialize map or any other contact page specific logic
})
</script>

<style scoped>
/* Smooth hover transitions */
.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Focus states for accessibility */
a:focus,
button:focus {
  outline: none;
}
</style>
