import { defineStore } from 'pinia'
import type { Product, ColorOption, GalleryImage } from '../types'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: '1',
        name: 'Держатель для стяжек',
        description:
          'Это удобный держатель на руку для стяжек-хомутов. Удобство в работе и хранении.',
        longDescription: `
          Держатель для стяжек-хомутов — удобный и практичный аксессуар, который всегда под рукой.

          Предназначен для эффективной работы и хранения кабельных стяжек (хомутов). Обеспечивает быстрый доступ к расходным материалам и позволяет производить загрузку стяжек одной рукой благодаря простому и надёжному фиксатору.

          Комплектуется ремнём с двумя пластиковыми пряжками — разъёмной и регулирующей. Это позволяет быстро и надёжно закрепить держатель на руке, поверх одежды, на поясном ремне, стремянке, вышке-туре и других элементах рабочей зоны.

          Небольшой вес не мешает работе, а конструкция предотвращает рассыпание и выпадение стяжек при использовании и хранении. Яркие цвета делают держатель хорошо заметным в сумке с инструментами.

          Особенно удобен при работе на высоте или в стеснённых условиях. Предусмотрена возможность нанесения маркировки или логотипа для персонализации.

          Изображения товара могут содержать водяной знак (логотип).
          `,
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
          { id: 'gallery-preview', url: '/videos/1/preview.mp4', alt: '', type: 'video' },
          { id: 'gallery-1', url: '/images/1/gallery/1.jpg', alt: '', type: 'image' },
          { id: 'gallery-2', url: '/images/1/gallery/2.jpg', alt: '', type: 'image' },
          { id: 'gallery-3', url: '/images/1/gallery/3.jpg', alt: '', type: 'image' },
          { id: 'gallery-4', url: '/images/1/gallery/4.jpg', alt: '', type: 'image' },
          { id: 'gallery-5', url: '/images/1/gallery/5.jpg', alt: '', type: 'image' },
          { id: 'gallery-6', url: '/images/1/gallery/6.jpg', alt: '', type: 'image' },
          { id: 'gallery-7', url: '/images/1/gallery/7.jpg', alt: '', type: 'image' },
          { id: 'gallery-8', url: '/images/1/gallery/8.jpg', alt: '', type: 'image' },
          { id: 'gallery-9', url: '/images/1/gallery/9.jpg', alt: '', type: 'image' },
        ] as GalleryImage[],
        colors: [
          { id: 'gray', name: 'Серый', hex: '#2A2E35', isAvailable: true },
          { id: 'white', name: 'Белый', hex: '#FFFFFF', isAvailable: true },
          { id: 'black', name: 'Черный', hex: '#000000', isAvailable: true },
        ] as ColorOption[],
        specifications: [
          { name: 'Материал', value: 'Пластик, Металл' },
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
