<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Navigation />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Наша продукция
        </h1>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Product Image -->
          <div class="relative aspect-square bg-gray-100 dark:bg-gray-700">
            <img
              :src="getCurrentImage(product).url"
              :alt="getCurrentImage(product).alt"
              class="w-full h-full object-cover transition-all duration-500"
              loading="lazy"
            />
            
            <!-- Color indicators -->
            <div class="absolute bottom-4 left-4 flex space-x-2">
              <div
                v-for="color in product.colors.slice(0, 4)"
                :key="color.id"
                class="w-6 h-6 rounded-full border-2 border-white shadow-lg"
                :style="{ backgroundColor: color.hex }"
              />
            </div>
          </div>

          <!-- Product Info -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {{ product.name }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ product.description }}
            </p>

            <!-- Price -->
            <div class="flex items-center justify-between mb-4">
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ formatPrice(product.price) }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ product.currency }}
              </div>
            </div>

            <!-- Color Selection -->
            <div class="mb-6">
              <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Доступные цвета
              </h4>
              <div class="flex space-x-2">
                <button
                  v-for="color in product.colors"
                  :key="color.id"
                  @click="selectProductColor(product.id, color.id)"
                  class="w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  :class="[
                    selectedColors[product.id] === color.id 
                      ? 'border-primary ring-2 ring-primary ring-offset-1' 
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                  ]"
                  :style="{ backgroundColor: color.hex }"
                  :disabled="!color.isAvailable"
                  :aria-label="`Select ${color.name} color for ${product.name}`"
                >
                  <!-- Checkmark for selected color -->

                </button>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-3">
              <router-link
                to="/contact"
                class="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-center text-sm"
              >
                Связаться с продавцом
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Section -->
      <div class="text-center mt-16">
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Больше товаров скоро появится. Следите за обновлениями!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProductsStore } from '../store/products'
import type { Product, ProductImage } from '../types'
import Navigation from '../components/Navigation.vue'

const productsStore = useProductsStore()
const products = computed(() => productsStore.products)

const selectedColors = ref<Record<string, string>>({
  '1': 'red' // Default selection
})

const getCurrentImage = (product: Product): ProductImage => {
  const selectedColor = selectedColors.value[product.id] || 'red'
  const currentImage = product.images.find(img => img.colorId === selectedColor)
  return currentImage || product.images[0]
}

const selectProductColor = (productId: string, colorId: string) => {
  selectedColors.value[productId] = colorId
}

const viewProductDetails = (product: Product) => {
  productsStore.setSelectedProduct(product)
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2
  }).format(price)
}
</script>

<style scoped>
/* Line clamp utility for text truncation */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth transitions for color selection */
button {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects */
.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
