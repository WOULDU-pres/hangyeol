import type { FilterType, OrderUpdate, RecentlyViewedItem, BrandItem } from '../types/SearchTypes'

export const filterButtons: FilterType[] = [
  {
    id: 'favorites',
    label: 'Favorites',
    icon: ''
  },
  {
    id: 'following',
    label: 'Following',
    icon: ''
  },
  {
    id: 'on-sale',
    label: 'On sale',
    icon: ''
  }
]

export const orderUpdates: OrderUpdate[] = [
  {
    id: '1',
    brand: 'Arclight Wholesale',
    title: 'Order placed',
    status: 'Order placed',
    shipping: 'USPS Ground Advantage',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=240&h=240&fit=crop&crop=center',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=center'
  }
]

export const recentlyViewed: RecentlyViewedItem[] = [
  {
    id: '1',
    type: 'brand',
    name: 'Modern Brand',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=333&h=333&fit=crop&crop=center',
    background: '#f3f3f3'
  },
  {
    id: '2',
    type: 'product',
    name: 'Beauty Product',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=334&h=333&fit=crop&crop=center'
  },
  {
    id: '3',
    type: 'brand',
    name: 'ARCLIGHT',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=333&h=332&fit=crop&crop=center',
    background: '#f3f2f3'
  }
]

export const discoverBrands: BrandItem[] = [
  {
    id: '1',
    name: 'Laura Geller Beauty',
    rating: 4.4,
    reviewCount: 29042,
    description: 'Premium beauty products',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=513&h=453&fit=crop&crop=center'
  },
  {
    id: '2',
    name: 'DRMTLGY',
    rating: 4.6,
    reviewCount: 25284,
    description: 'Dermatologist approved skincare',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=511&h=453&fit=crop&crop=center'
  }
] 