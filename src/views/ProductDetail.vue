<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Navigation />
    
    <div v-if="product" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="flex mb-8" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li>
            <div class="flex items-center">
              <router-link to="/products" class="ml-1 text-gray-700 hover:text-primary md:ml-2 dark:text-gray-300 dark:hover:text-primary">
                Продукция
              </router-link>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="ml-1 text-gray-500 md:ml-2 dark:text-gray-400">{{ product.name }}</span>
            </div>
          </li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Gallery -->
        <div class="space-y-4">
          <ProductGallery :product="product" />
        </div>

        <!-- Product Info -->
        <div class="space-y-8">
          <!-- Title and Price -->
          <div>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {{ product.name }}
            </h1>
            <div class="flex items-center space-x-4 mb-6">
              <span class="text-4xl font-bold text-primary">{{ formatPrice(product.price) }}</span>
              <span class="text-lg text-gray-500 dark:text-gray-400">{{ product.currency }}</span>
            </div>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ product.description }}
            </p>
          </div>

          <!-- Color Selection -->
        

          <!-- Specifications -->
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Спецификация
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="spec in product.specifications"
                :key="spec.name"
                class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
              >
                <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  {{ spec.name }}
                </div>
                <div class="text-lg font-semibold text-gray-900 dark:text-white">
                  {{ spec.value }}
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link
              to="/contact"
              class="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-center"
            >
              Связаться с продавцом
            </router-link>
          </div>
        </div>
      </div>

      <!-- Gallery Section -->
      <div v-if="product && product.gallery.length > 0" class="mt-16">
        <Gallery :gallery="product.gallery" />
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="text-center">
        <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
        <p class="mt-4 text-gray-600 dark:text-gray-400">Загрузка товара...</p>
      </div>
    </div>

    <!-- 404 State -->
    <div v-if="!product && !loading" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Товар не найден</h1>
        <p class="text-gray-600 dark:text-gray-400 mb-8">Извините, запрашиваемый товар не существует.</p>
        <router-link
          to="/products"
          class="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
        >
          Вернуться к каталогу
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '../store/products'
import type { Product } from '../types'
import Navigation from '../components/Navigation.vue'
import ProductGallery from '../components/ProductGallery.vue'
import Gallery from '../components/Gallery.vue'

const route = useRoute()
const productsStore = useProductsStore()
const loading = ref(true)
const selectedColor = ref('white')

const product = computed(() => {
  const productId = route.params.id as string
  return productsStore.getProductById(productId) || null
})

const selectColor = (colorId: string) => {
  selectedColor.value = colorId
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2
  }).format(price)
}

onMounted(() => {
  // Simulate loading
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<style scoped>
/* Smooth transitions for color selection */
button {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

button:active {
  transform: translateY(0);
}
</style>
