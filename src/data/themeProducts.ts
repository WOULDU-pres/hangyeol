export type ThemeType = 'forest' | 'spring' | 'cool' | 'warm'

export interface ThemeProduct {
  name: string
  brand: string
  price: string
  rating: string
  reviewCount: string
  ingredients: string
  clickMessage: string
  description: string
  tags: string[]
}

// 테마별 제품 데이터
export const themeProducts: Record<ThemeType, ThemeProduct> = {
  forest: {
    name: '참나무 바디 밤',
    brand: '수풀',
    price: '₩49,000',
    rating: '4.6',
    reviewCount: '2,500+',
    ingredients: '히알루론산, 세라마이드, 레티놀',
    clickMessage: '청아한 지원님에게 숲의 향기를 가득담은 "참나무 바디 밤"이 잘 어울릴 것 같아요.',
    description: '자연에서 온 참나무 추출물과 히알루론산, 세라마이드가 만나 깊은 보습과 피부 장벽 강화 효과를 선사하는 바디 로션입니다. 건성 피부에 특히 효과적입니다.',
    tags: ['자연친화', '유기농', '보습']
  },
  spring: {
    name: '벚꽃 블라썸 크림',
    brand: '꽃내음',
    price: '₩42,000',
    rating: '4.7',
    reviewCount: '3,240+',
    ingredients: '벚꽃 추출물, 히알루론산, 비타민E',
    clickMessage: '우아한 지원님에게 봄꽃의 향기를 담은 "벚꽃 블라썸 크림"이 잘 어울릴 것 같아요.',
    description: '벚꽃 추출물과 히알루론산이 만나 촉촉하고 부드러운 피부를 선사합니다. 봄의 향기가 가득한 로맨틱한 크림으로 피부에 생기를 더해줍니다.',
    tags: ['꽃향기', '로맨틱', '촉촉함']
  },
  cool: {
    name: '아이스 쿨링 젤',
    brand: '청량',
    price: '₩35,000',
    rating: '4.8',
    reviewCount: '2,890+',
    ingredients: '민트 추출물, 알로에, 히알루론산',
    clickMessage: '활기찬 지원님에게 시원한 민트의 향기를 담은 "아이스 쿨링 젤"이 잘 어울릴 것 같아요.',
    description: '시원한 민트와 알로에가 만나 화끈거리는 피부를 진정시켜줍니다. 즉각적인 쿨링 효과로 피부 온도를 낮춰주어 상쾌함을 선사합니다.',
    tags: ['시원함', '쿨링', '진정']
  },
  warm: {
    name: '카카오 버터 밤',
    brand: '온화',
    price: '₩55,000',
    rating: '4.9',
    reviewCount: '1,420+',
    ingredients: '카카오 버터, 시어버터, 세라마이드',
    clickMessage: '포근한 지원님에게 따뜻한 카카오의 향기를 담은 "카카오 버터 밤"이 잘 어울릴 것 같아요.',
    description: '에콰도르 카카오 버터와 시어버터가 만나 따뜻한 보습감을 선사합니다. 깊은 영양 공급으로 거친 피부를 부드럽게 케어해줍니다.',
    tags: ['포근함', '영양', '따뜻함']
  }
}

// 테마별 이미지 (각 컴포넌트에서 import 필요)
export const themeImagePaths = {
  forest: '../assets/forest_style_cosmetics (3).jpg',
  spring: '../assets/spring_style_cosmetics (1).jpg', 
  cool: '../assets/cool_style_cosmetics.png',
  warm: '../assets/warm_style_cosmetics.png'
} 