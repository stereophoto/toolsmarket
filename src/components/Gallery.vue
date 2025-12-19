<template>
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
    <div class="p-6">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Галерея
      </h3>
      
      <div v-if="gallery.length > 0" class="relative">
        <!-- Main Image Display -->
        <div class="relative aspect-video bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden mb-4">
          <template v-if="currentImage.type === 'image'">
            <img
              :src="currentImage.url"
              :alt="currentImage.alt"
              class="w-full h-full object-contain transition-all duration-500"
              loading="lazy"
            />
          </template>
          
          <template v-else-if="currentImage.type === 'video'">
            <video
              class="w-full h-full object-contain rounded-xl"
              controls
              :src="currentImage.url"
              preload="metadata"
            ></video>
          </template>
          
          <!-- Navigation Arrows -->
          <button
            v-if="gallery.length > 1"
            @click="previousImage"
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            :disabled="isTransitioning"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button
            v-if="gallery.length > 1"
            @click="nextImage"
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            :disabled="isTransitioning"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <!-- Image Counter -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {{ currentIndex + 1 }} / {{ gallery.length }}
          </div>
        </div>

        <!-- Thumbnail Navigation -->
        <div v-if="gallery.length > 1" class="flex space-x-2 overflow-x-auto pb-2">
          <button
            v-for="(item, index) in gallery"
            :key="item.id"
            @click="goToImage(index)"
            class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 relative flex items-center justify-center"
            :class="[
              currentIndex === index 
                ? 'border-primary' 
                : 'border-gray-200 dark:border-gray-600'
            ]"
          >
            <!-- Image thumbnail -->
            <img
              v-if="item.type === 'image'"
              :src="item.url"
              :alt="item.alt"
              class="w-full h-full object-contain bg-white dark:bg-gray-800"
              loading="lazy"
            />

            <!-- Video thumbnail as SVG icon -->
            <div
              v-else-if="item.type === 'video'"
              class="absolute inset-0 flex items-center justify-center bg-black dark:bg-gray-900"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Фотографии временно недоступны</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { GalleryImage } from '../types'

interface Props {
  gallery: GalleryImage[]
}

const props = defineProps<Props>()

const currentIndex = ref(0)
const isTransitioning = ref(false)

const currentImage = computed(() => {
  return props.gallery[currentIndex.value] || props.gallery[0]
})

const nextImage = () => {
  if (isTransitioning.value || props.gallery.length <= 1) return
  
  isTransitioning.value = true
  currentIndex.value = (currentIndex.value + 1) % props.gallery.length
  
  setTimeout(() => {
    isTransitioning.value = false
  }, 300)
}

const previousImage = () => {
  if (isTransitioning.value || props.gallery.length <= 1) return
  
  isTransitioning.value = true
  currentIndex.value = currentIndex.value === 0 
    ? props.gallery.length - 1 
    : currentIndex.value - 1
  
  setTimeout(() => {
    isTransitioning.value = false
  }, 300)
}

const goToImage = (index: number) => {
  if (isTransitioning.value || index === currentIndex.value) return
  
  isTransitioning.value = true
  currentIndex.value = index
  
  setTimeout(() => {
    isTransitioning.value = false
  }, 300)
}

const handleKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
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
})
</script>

<style scoped>
/* Smooth transitions for image changes */
img {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Thumbnail hover effects */
button:hover img {
  transform: scale(1.05);
}

button:active img {
  transform: scale(0.95);
}

/* Disable button interactions during transition */
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Custom scrollbar for thumbnail navigation */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
