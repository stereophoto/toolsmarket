<template>
  <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
    <!-- Product Image -->
    <div class="relative aspect-square bg-gray-100 dark:bg-gray-800">
      <img
        :src="currentImage.url"
        :alt="currentImage.alt"
        class="w-full h-full object-cover transition-all duration-500"
        loading="lazy"
      />
    </div>

    <!-- Product Details -->
    <div class="p-6">
      <!-- Price -->
      <div class="flex items-center justify-between mb-4">
        <div class="text-3xl font-bold text-gray-900 dark:text-white">
          {{ formatPrice(product.price) }}
        </div>
        <div class="text-sm text-gray-500 dark:text-gray-400">
          {{ product.currency }}
        </div>
      </div>

      <!-- Color Selection -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Доступные цвета
        </h4>
        <div class="flex space-x-3">
          <button
            v-for="color in product.colors"
            :key="color.id"
            @click="selectColor(color.id)"
            class="relative w-12 h-12 rounded-full border-2 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            :class="[
              selectedColor === color.id 
                ? 'border-primary ring-2 ring-primary ring-offset-2' 
                : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
            ]"
            :style="{ backgroundColor: color.hex }"
            :disabled="!color.isAvailable"
            :aria-label="`Select ${color.name} color`"
          >
          </button>
        </div>
      </div>

      <!-- Specifications -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Спецификация
        </h4>
        <div class="grid grid-cols-2 gap-3">
          <div
            v-for="spec in product.specifications"
            :key="spec.name"
            class="bg-gray-50 dark:bg-gray-800 rounded-lg p-3"
          >
            <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
              {{ spec.name }}
            </div>
            <div class="text-sm font-semibold text-gray-900 dark:text-white">
              {{ spec.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductsStore } from '../store/products'
import type { Product } from '../types'

interface Props {
  product: Product
}

const props = defineProps<Props>()

const productsStore = useProductsStore()

const selectedColor = computed(() => productsStore.getSelectedColor)

const currentImage = computed(() => {
  return productsStore.getCurrentImage(props.product)
})

const selectColor = (colorId: string) => {
  productsStore.setSelectedColor(colorId)
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
/* Smooth transitions for color selection */
button {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects */
button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

button:active {
  transform: translateY(0);
}
</style>
