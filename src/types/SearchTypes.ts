export interface FilterType {
  id: string
  label: string
  icon: string
  active?: boolean
}

export interface OrderUpdate {
  id: string
  brand: string
  title: string
  status: string
  shipping: string
  image: string
  logo: string
}

export interface RecentlyViewedItem {
  id: string
  type: 'brand' | 'product'
  name: string
  image: string
  background?: string
}

export interface BrandItem {
  id: string
  name: string
  rating: number
  reviewCount: number
  description: string
  image: string
  logo?: string
} 