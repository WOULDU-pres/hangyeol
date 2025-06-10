import type { FilterType, OrderUpdate, RecentlyViewedItem, BrandItem } from '../types/SearchTypes'
import forestImage1 from '../assets/forest_style_cosmetics (1).jpg'
import forestImage2 from '../assets/forest_style_cosmetics (2).jpg'
import forestImage3 from '../assets/forest_style_cosmetics (3).jpg'
import pinkImage1 from '../assets/pink_style_cosmetics (1).jpg'
import pinkImage2 from '../assets/pink_style_cosmetics (2).jpg'

export const filterButtons: FilterType[] = [
  { id: 'stores', label: '매장', active: false },
  { id: 'all', label: '전체', active: true },
  { id: 'brands', label: '브랜드', active: false },
  { id: 'price-low', label: '저가형', active: false },
  { id: 'popular', label: '인기상품', active: false },
  { id: 'new', label: '신제품', active: false },
  { id: 'sale', label: '할인상품', active: false },
  { id: 'vegan', label: '비건', active: false },
  { id: 'organic', label: '유기농', active: false }
]

export const orderUpdates: OrderUpdate[] = [
  {
    id: '1',
    brand: '수풀 자연 코스메틱',
    title: '주문 완료',
    status: '주문 완료',
    shipping: '일반 배송',
    image: forestImage1,
    logo: pinkImage1
  }
]

export const recentlyViewed: RecentlyViewedItem[] = [
  {
    id: '1',
    type: 'brand',
    name: '자연의 선물',
    image: forestImage2,
    background: '#f3f3f3'
  },
  {
    id: '2',
    type: 'product',
    name: '수분 케어 제품',
    image: pinkImage2
  },
  {
    id: '3',
    type: 'brand',
    name: '수풀',
    image: forestImage3,
    background: '#f3f2f3'
  }
]

export const discoverBrands: BrandItem[] = [
  {
    id: '1',
    name: '온화한 하루',
    rating: 4.4,
    reviewCount: 2942,
    description: '자연과 함께하는 뷰티',
    image: forestImage1
  },
  {
    id: '2',
    name: '수풀',
    rating: 4.6,
    reviewCount: 2584,
    description: '순수 자연 성분 스킨케어',
    image: pinkImage1
  }
] 