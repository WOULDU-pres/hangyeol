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
    price: '₩18,500',
    image: forestImage1,
    featured: false
  },
  {
    id: '2',
    name: '자스민 바디 미스트',
    category: '바디 케어',
    price: '₩24,500',
    image: pinkImage1,
    featured: false
  },
  {
    id: '3',
    name: '메이크업 픽싱 크림',
    category: '페이스 케어',
    price: '₩12,990',
    image: forestImage2,
    rating: 4.8,
    featured: true
  },
  {
    id: '4',
    name: '자연 향수',
    category: '바디 케어',
    price: '₩32,700',
    image: pinkImage2,
    rating: 4.9,
    featured: true
  },
  {
    id: '5',
    name: '수분 충전 세럼',
    category: '페이스 케어',
    price: '₩8,950',
    image: forestImage3,
    rating: 4.7,
    featured: false
  },
  {
    id: '6',
    name: '영양 헤어 마스크',
    category: '헤어 케어',
    price: '₩15,600',
    image: forestImage1,
    featured: false
  },
  {
    id: '7',
    name: '히알루론산 토너',
    category: '페이스 케어',
    price: '₩22,000',
    image: forestImage1,
    rating: 4.6,
    featured: true
  },
  {
    id: '8',
    name: '비타민 C 앰플',
    category: '페이스 케어',
    price: '₩35,000',
    image: pinkImage1,
    rating: 4.8,
    featured: true
  },
  {
    id: '9',
    name: '콜라겐 아이크림',
    category: '페이스 케어',
    price: '₩28,500',
    image: forestImage2,
    rating: 4.7,
    featured: true
  },
  {
    id: '10',
    name: '라벤더 바디오일',
    category: '바디 케어',
    price: '₩19,900',
    image: pinkImage2,
    rating: 4.9,
    featured: true
  },
  {
    id: '11',
    name: '아르간 헤어 에센스',
    category: '헤어 케어',
    price: '₩26,000',
    image: forestImage3,
    rating: 4.5,
    featured: true
  },
  {
    id: '12',
    name: '셀룰로오스 페이스팩',
    category: '페이스 케어',
    price: '₩16,800',
    image: forestImage1,
    rating: 4.8,
    featured: true
  }
] 