import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    darkMode: typeof window !== 'undefined' && (localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches))
  }),
  actions: {
    toggleTheme() {
      this.darkMode = !this.darkMode
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', this.darkMode ? 'dark' : 'light')
      }
      this.applyTheme()
    },
    initTheme() {
      this.applyTheme()
    },
    applyTheme() {
      if (typeof document !== 'undefined') {
        if (this.darkMode) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }
  }
}) 