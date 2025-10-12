<template>
  <div class="space-y-4">
    <!-- Main Image -->
    <div class="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
      <img
        :src="currentImage.url"
        :alt="currentImage.alt"
        class="w-full h-full object-cover transition-all duration-500 cursor-pointer"
        @click="openLightbox"
        loading="lazy"
      />
      
      <!-- Zoom indicator -->
      <div class="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
        </svg>
      </div>
    </div>

    <!-- Thumbnail Gallery -->
    <div v-if="product.images.length > 1" class="grid grid-cols-4 gap-2">
      <button
        v-for="(image, index) in product.images"
        :key="image.id"
        @click="selectImage(index)"
        class="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        :class="[
          selectedImageIndex === index 
            ? 'border-primary ring-2 ring-primary ring-offset-1' 
            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
        ]"
      >
        <img
          :src="image.url"
          :alt="image.alt"
          class="w-full h-full object-cover transition-all duration-200"
          loading="lazy"
        />
        
        <!-- Color label -->
        <div class="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
          {{ getColorName(image.colorId) }}
        </div>
      </button>
    </div>

    <!-- Lightbox Modal -->
    <div
      v-if="showLightbox"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <div class="relative max-w-4xl max-h-full">
        <!-- Close button -->
        <button
          @click="closeLightbox"
          class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Navigation arrows -->
        <button
          v-if="product.images.length > 1"
          @click.stop="previousImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          v-if="product.images.length > 1"
          @click.stop="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Main lightbox image -->
        <img
          :src="currentLightboxImage.url"
          :alt="currentLightboxImage.alt"
          class="max-w-full max-h-full object-contain rounded-lg"
          @click.stop
        />

        <!-- Image counter -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {{ selectedImageIndex + 1 }} / {{ product.images.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { Product, ProductImage } from '../types'

interface Props {
  product: Product
}

const props = defineProps<Props>()

const selectedImageIndex = ref(0)
const showLightbox = ref(false)

const currentImage = computed(() => {
  return props.product.images[selectedImageIndex.value] || props.product.images[0]
})

const currentLightboxImage = computed(() => {
  return props.product.images[selectedImageIndex.value] || props.product.images[0]
})

const selectImage = (index: number) => {
  selectedImageIndex.value = index
}

const openLightbox = () => {
  showLightbox.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  showLightbox.value = false
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  selectedImageIndex.value = (selectedImageIndex.value + 1) % props.product.images.length
}

const previousImage = () => {
  selectedImageIndex.value = selectedImageIndex.value === 0 
    ? props.product.images.length - 1 
    : selectedImageIndex.value - 1
}

const getColorName = (colorId: string) => {
  const color = props.product.colors.find(c => c.id === colorId)
  return color?.name || colorId
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!showLightbox.value) return
  
  switch (event.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      previousImage()
      break
    case 'ArrowRight':
      nextImage()
      break
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
/* Smooth transitions for image changes */
img {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Lightbox animations */
.fixed {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Thumbnail hover effects */
button:hover img {
  transform: scale(1.05);
}

button:active img {
  transform: scale(0.95);
}
</style>