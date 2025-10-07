import { defineStore } from 'pinia'
import type { Seller } from '../types'

export const useSellersStore = defineStore('sellers', {
  state: () => ({
    sellers: [
      {
        id: '1',
        name: 'Магазин аксессуаров для монтажников',
        phone: '+7 (917) 280-28-93',
        email: 'nnvvaa@rambler.ru',
        address: 'Республика Татарстан, Казань, улица Искра, 3',
        coordinates: {
          lat: 55.795843,
          lng: 49.175108
        },
        workingHours: 'Пн-Пт: 8:00-18:00, Сб-Вс: 9:00-16:00'
      }
    ] as Seller[]
  }),
  
  getters: {
    getSellerById: (state) => (id: string) => {
      return state.sellers.find((seller: Seller) => seller.id === id)
    }
  }
})
