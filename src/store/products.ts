import { defineStore } from 'pinia'
import type { Product, ColorOption, GalleryImage } from '../types'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: '1',
        name: 'Держатель для стяжек',
        description:
          'Это удобный держатель на руку для стяжек: они не упадут и их удобно доставать во время работы на высоте.',
        price: 450,
        currency: 'RUB',
        category: 'tools',
        images: [
          {
            id: '1-1',
            url: '/images/1/grey.png',
            alt: 'Gray construction tool',
            colorId: 'gray'
          },
          {
            id: '1-2',
            url: '/images/1/white.jpg',
            alt: 'White construction tool',
            colorId: 'white'
          },
          {
            id: '1-3',
            url: '/images/1/black.jpg',
            alt: 'Black construction tool',
            colorId: 'black'
          }
        ],
        gallery: [
          { id: 'gallery-1', url: '/images/1/gallery/1.jpg', alt: 'Держатель для стяжек - вид спереди' },
          { id: 'gallery-2', url: '/images/1/gallery/2.jpg', alt: 'Держатель для стяжек - вид сбоку' },
          { id: 'gallery-3', url: '/images/1/gallery/3.jpg', alt: 'Держатель для стяжек - в использовании' },
          { id: 'gallery-4', url: '/images/1/gallery/4.jpg', alt: 'Держатель для стяжек - детали' },
          { id: 'gallery-5', url: '/images/1/gallery/5.jpg', alt: 'Держатель для стяжек - использование' }
        ] as GalleryImage[],
        colors: [
          { id: 'gray', name: 'Серый', hex: '#2A2E35', isAvailable: true },
          { id: 'white', name: 'Белый', hex: '#FFFFFF', isAvailable: true },
          { id: 'black', name: 'Черный', hex: '#000000', isAvailable: true },
        ] as ColorOption[],
        specifications: [
          { name: 'Материал', value: 'Пластик' },
          { name: 'Вес', value: '44 грамма' },
          { name: 'Размеры', value: '80 x 50 x 10 мм' }
        ]
      }
    ] as Product[],
    selectedColor: 'gray' as string,
    selectedProduct: null as Product | null
  }),

  getters: {
    getSelectedColor: state => state.selectedColor,
    getSelectedProduct: state => state.selectedProduct,
    getProductById: state => (id: string) => state.products.find(product => product.id === id)
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
