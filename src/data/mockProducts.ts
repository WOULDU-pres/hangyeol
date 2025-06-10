import type { Product } from '../types/Product.ts'
import forestImage1 from '../assets/forest_style_cosmetics (1).jpg'
import forestImage2 from '../assets/forest_style_cosmetics (2).jpg'
import forestImage3 from '../assets/forest_style_cosmetics (3).jpg'
import pinkImage1 from '../assets/pink_style_cosmetics (1).jpg'
import pinkImage2 from '../assets/pink_style_cosmetics (2).jpg'

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '장미 수분 로션',
    category: '페이스 케어',
    price: 185.00,
    image: forestImage1,
    featured: false
  },
  {
    id: '2',
    name: '자스민 바디 미스트',
    category: '바디 케어',
    price: 245.00,
    image: pinkImage1,
    featured: false
  },
  {
    id: '3',
    name: '메이크업 픽싱 크림',
    category: '페이스 케어',
    price: 129.90,
    image: forestImage2,
    rating: 4.8,
    featured: true
  },
  {
    id: '4',
    name: '자연 향수',
    category: '바디 케어',
    price: 327.00,
    image: pinkImage2,
    rating: 4.9,
    featured: true
  },
  {
    id: '5',
    name: '수분 충전 세럼',
    category: '페이스 케어',
    price: 89.50,
    image: forestImage3,
    rating: 4.7,
    featured: false
  },
  {
    id: '6',
    name: '영양 헤어 마스크',
    category: '헤어 케어',
    price: 156.00,
    image: forestImage1,
    featured: false
  }
] 