export interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  price: number
  currency: string
  images: ProductImage[]
  gallery: GalleryImage[]
  colors: ColorOption[]
  category: string
  specifications: ProductSpec[]
}

export interface ProductImage {
  id: string
  url: string
  alt: string
  colorId: string
}

export interface GalleryImage {
  id: string
  url: string
  alt: string
  type: 'image' | 'video';
}

export interface ColorOption {
  id: string
  name: string
  hex: string
  isAvailable: boolean
}

export interface ProductSpec {
  name: string
  value: string
}

export interface Seller {
  id: string
  name: string
  phone: string
  email: string
  address: string
  coordinates: {
    lat: number
    lng: number
  }
  workingHours: string
}

export interface Theme {
  mode: 'light' | 'dark'
  primary: string
  secondary: string
  background: string
  surface: string
  text: string
  textSecondary: string
}
