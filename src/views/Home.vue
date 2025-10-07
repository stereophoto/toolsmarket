<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Navigation />
    
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-secondary/10 dark:from-primary/20 dark:via-gray-900 dark:to-secondary/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Аксессуары
            <span class="text-primary">для монтажников</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Удобные аксессуары для монтажных работ — чтобы сделать вашу работу проще и комфортнее.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/products"
              class="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-105"
            >
              Продукция
            </router-link>
            <router-link
              to="/contact"
              class="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-4 px-8 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Связаться с продавцом
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div class="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-accent/20 rounded-full animate-float" style="animation-delay: 4s;"></div>
    </section>

    <!-- Секция с избранным товаром -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Лучшее для монтажников
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Аксессуары, которые делают вашу работу удобнее и быстрее
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Галерея товара -->
          <div class="order-2 lg:order-1">
            <ProductGallery :product="featuredProduct" />
          </div>

          <!-- Информация о товаре -->
          <div class="order-1 lg:order-2 space-y-8">
            <div>
              <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {{ featuredProduct.name }}
              </h3>
              <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ featuredProduct.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductsStore } from '../store/products'
import Navigation from '../components/Navigation.vue'
import ProductGallery from '../components/ProductGallery.vue'

const productsStore = useProductsStore()

const featuredProduct = computed(() => productsStore.products[0])

const features = [
  {
    title: 'Professional Quality',
    description: 'Built to withstand the toughest job site conditions with premium materials and construction.',
    icon: 'div' // You can replace with actual icon components
  },
  {
    title: 'Color Customization',
    description: 'Choose from multiple color options to match your brand or personal preference.',
    icon: 'div'
  },
  {
    title: 'Expert Support',
    description: 'Get personalized assistance from our professional dealers and technical experts.',
    icon: 'div'
  }
]
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
