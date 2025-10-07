import { defineStore } from 'pinia'
import type { Product, ColorOption } from '../types'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: '1',
        name: 'Держатель для стяжек',
        description:
          'Это удобный держатель на руку для стяжек: они не упадут и их удобно доставать во время работы на высоте.',
        price: 299.99,
        currency: 'RUB',
        category: 'tools',
        images: [
          {
            id: '1-1',
            url: '/images/1/white.png',
            alt: 'White construction tool',
            colorId: 'white'
          },
          {
            id: '1-2',
            url: '/images/1/black.png',
            alt: 'Black construction tool',
            colorId: 'black'
          }
        ],
        colors: [
          { id: 'white', name: 'White', hex: '#FFFFFF', isAvailable: true },
          { id: 'black', name: 'Black', hex: '#000000', isAvailable: true }
        ] as ColorOption[],
        specifications: [
          { name: 'Материал', value: 'Пластик' },
          { name: 'Вес', value: '100 грамм' },
          { name: 'Размеры', value: '25 x 15 x 8 см' }
        ]
      }
    ] as Product[],
    selectedColor: 'white' as string,
    selectedProduct: null as Product | null
  }),

  getters: {
    getSelectedColor: state => state.selectedColor,
    getSelectedProduct: state => state.selectedProduct
  },

  actions: {
    setSelectedColor(colorId: string) {
      this.selectedColor = colorId
    },

    setSelectedProduct(product: Product) {
      this.selectedProduct = product
    },

    getCurrentImage(product: Product) {
      const currentImage = product.images.find(
        img => img.colorId === this.selectedColor
      )
      return currentImage || product.images[0]
    }
  }
})
